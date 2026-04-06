import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, Shield, Leaf, Truck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import {
  buildConfigurationId,
  getProductBySlug,
  getProductConfigurationPreviewImages,
  getProductConfigurationLabel,
  getProductDisplayPrice,
  getProductImages,
  getProductMinimumQuantity,
  getProductQuantityStep,
  getProductsByCollection,
} from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const { addItem } = useCart();
  const product = getProductBySlug(slug || "");
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(undefined);
  const [pairAccentVariant, setPairAccentVariant] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!product) {
      return;
    }

    // Reset the detail view any time the user lands on another product.
    setSelectedVariant(product.variants?.[0]?.id);
    setPairAccentVariant(product.variants?.[1]?.id ?? product.variants?.[0]?.id);
    setQuantity(getProductMinimumQuantity(product));
  }, [product]);

  if (!product) {
    return (
      <div className="section-padding py-20 text-center">
        <h1 className="heading-lg mb-4">Product not found</h1>
        <Link to="/shop" className="btn-secondary">{t.common.backToShop}</Link>
      </div>
    );
  }

  const quantityStep = getProductQuantityStep(product);
  const minimumQuantity = getProductMinimumQuantity(product);
  const isWaistBeadPairBuilder = product.id === "bine-bine-waist-beads";
  const beadPreviewImages = isWaistBeadPairBuilder
    ? getProductConfigurationPreviewImages(product, [selectedVariant ?? "", pairAccentVariant ?? ""])
    : [];
  const productImages = isWaistBeadPairBuilder ? [] : getProductImages(product, selectedVariant);
  const relatedProducts = getProductsByCollection(product.collectionSlug)
    .filter((candidate) => candidate.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    // Waist bead pairs are configured from two color choices and stored as one cart line per pair.
    if (isWaistBeadPairBuilder) {
      const primaryVariant = product.variants?.find((variant) => variant.id === selectedVariant);
      const accentVariant = product.variants?.find((variant) => variant.id === pairAccentVariant);

      if (!primaryVariant || !accentVariant) {
        return;
      }

      const configuredSelectionIds = [primaryVariant.id, accentVariant.id];
      const pairConfigurationId = buildConfigurationId(configuredSelectionIds);
      const pairConfigurationLabel = getProductConfigurationLabel(product, configuredSelectionIds);
      const pairPreviewImage = getProductConfigurationPreviewImages(product, configuredSelectionIds)[0];

      addItem(product, pairConfigurationId, quantity, pairConfigurationLabel, pairPreviewImage);
      return;
    }

    addItem(product, selectedVariant, quantity);
  };

  const handleQuantityChange = (direction: "decrease" | "increase") => {
    if (direction === "decrease") {
      setQuantity((currentQuantity) => Math.max(minimumQuantity, currentQuantity - quantityStep));
      return;
    }

    setQuantity((currentQuantity) => currentQuantity + quantityStep);
  };

  const selectedVariantRecord = product.variants?.find((variant) => variant.id === selectedVariant);
  const accentVariantRecord = product.variants?.find((variant) => variant.id === pairAccentVariant);

  return (
    <div>
      <div className="section-padding py-8 md:py-16">
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-body text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-foreground transition-colors">{t.nav.shop}</Link></li>
            <li>/</li>
            <li><Link to={`/collection/${product.collectionSlug}`} className="hover:text-foreground transition-colors">{product.collection}</Link></li>
            <li>/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-4">
            {isWaistBeadPairBuilder ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden">
                    <img
                      src={beadPreviewImages[0]}
                      alt={selectedVariantRecord ? `${product.name} in ${selectedVariantRecord.name}` : product.name}
                      className="w-full h-full object-cover"
                      width={800}
                      height={1066}
                    />
                  </div>
                  <div className="text-center">
                    <p className="label-text text-muted-foreground mb-1">First Color</p>
                    <p className="text-sm font-body text-foreground">{selectedVariantRecord?.name}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden">
                    <img
                      src={beadPreviewImages[1] ?? beadPreviewImages[0]}
                      alt={accentVariantRecord ? `${product.name} in ${accentVariantRecord.name}` : product.name}
                      className="w-full h-full object-cover"
                      width={800}
                      height={1066}
                    />
                  </div>
                  <div className="text-center">
                    <p className="label-text text-muted-foreground mb-1">Second Color</p>
                    <p className="text-sm font-body text-foreground">{accentVariantRecord?.name}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden">
                <img
                  src={productImages[0]}
                  alt={selectedVariantRecord ? `${product.name} in ${selectedVariantRecord.name}` : product.name}
                  className="w-full h-full object-cover"
                  width={800}
                  height={1066}
                />
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <p className="label-text text-primary mb-2">{product.collection}</p>
              <h1 className="heading-lg mb-3">{product.name}</h1>
              <p className="font-heading text-2xl text-foreground mb-4">{getProductDisplayPrice(product)}</p>
              <p className="body-lg">{product.shortDescription}</p>
            </div>

            {product.minimumQuantity && product.minimumQuantity > 1 && (
              <div className="bg-card border border-border rounded-sm p-4">
                <p className="text-sm font-body text-foreground">
                  This item is sold in sets of {product.bundleSize}. Your cart will start at {product.minimumQuantity}.
                </p>
              </div>
            )}

            {isWaistBeadPairBuilder && (
              <div className="bg-card border border-border rounded-sm p-4 space-y-2">
                <p className="text-sm font-body text-foreground">
                  Each order includes one pair for {getProductDisplayPrice(product)}.
                </p>
                <p className="text-sm font-body text-muted-foreground">
                  Choose any two colors for the pair. They can match or be mixed.
                </p>
              </div>
            )}

            {product.variants && product.variants.length > 0 && !isWaistBeadPairBuilder && (
              <div>
                <p className="label-text mb-3">{t.product.selectVariant}</p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => {
                        setSelectedVariant(variant.id);
                      }}
                      className={`flex items-center gap-2 px-4 py-2 border text-sm font-body transition-colors ${
                        selectedVariant === variant.id
                          ? "border-foreground text-foreground"
                          : "border-border text-muted-foreground hover:border-foreground/50"
                      }`}
                    >
                      {variant.swatch && (
                        <span
                          className="w-4 h-4 rounded-full border border-border"
                          style={{ background: variant.swatch }}
                        />
                      )}
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.variants && product.variants.length > 0 && isWaistBeadPairBuilder && (
              <div className="space-y-6">
                <div>
                  <p className="label-text mb-3">First Color</p>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={`primary-${variant.id}`}
                        type="button"
                        onClick={() => {
                          setSelectedVariant(variant.id);
                        }}
                        className={`flex items-center gap-2 px-4 py-2 border text-sm font-body transition-colors ${
                          selectedVariant === variant.id
                            ? "border-foreground text-foreground"
                            : "border-border text-muted-foreground hover:border-foreground/50"
                        }`}
                      >
                        {variant.swatch && (
                          <span
                            className="w-4 h-4 rounded-full border border-border"
                            style={{ background: variant.swatch }}
                          />
                        )}
                        {variant.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="label-text mb-3">Second Color</p>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={`accent-${variant.id}`}
                        type="button"
                        onClick={() => {
                          setPairAccentVariant(variant.id);
                        }}
                        className={`flex items-center gap-2 px-4 py-2 border text-sm font-body transition-colors ${
                          pairAccentVariant === variant.id
                            ? "border-foreground text-foreground"
                            : "border-border text-muted-foreground hover:border-foreground/50"
                        }`}
                      >
                        {variant.swatch && (
                          <span
                            className="w-4 h-4 rounded-full border border-border"
                            style={{ background: variant.swatch }}
                          />
                        )}
                        {variant.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-sm border border-border bg-card p-4">
                  <p className="text-sm font-body text-foreground">
                    Pair selected: {selectedVariantRecord?.name} + {accentVariantRecord?.name}
                  </p>
                </div>
              </div>
            )}

            <div>
              <p className="label-text mb-3">{isWaistBeadPairBuilder ? "Pairs" : t.product.quantity}</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  type="button"
                  onClick={() => handleQuantityChange("decrease")}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-6 py-3 text-sm font-body min-w-[3rem] text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => handleQuantityChange("increase")}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
              {(quantityStep > 1 || minimumQuantity > 1) && (
                <p className="body-sm mt-3">
                  Quantity adjusts in increments of {quantityStep}. Minimum order: {minimumQuantity}.
                </p>
              )}
              {isWaistBeadPairBuilder && (
                <p className="body-sm mt-3">
                  Quantity reflects the number of bead pairs in this color combination.
                </p>
              )}
            </div>

            <div className="space-y-3 pt-2">
              <button onClick={handleAddToCart} className="btn-primary w-full text-center">{t.product.addToCart}</button>
              <Link to="/checkout" onClick={handleAddToCart} className="btn-secondary w-full text-center block">{t.product.buyNow}</Link>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-body"><Shield size={14} /> Secure checkout</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-body"><Leaf size={14} /> Quality ingredients</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-body"><Truck size={14} /> Fast shipping</div>
            </div>

            <Accordion type="single" collapsible className="pt-4">
              <AccordionItem value="description">
                <AccordionTrigger className="font-heading text-base">{t.product.description}</AccordionTrigger>
                <AccordionContent><p className="body-sm whitespace-pre-line">{product.longDescription}</p></AccordionContent>
              </AccordionItem>
              {product.howToUse && (
                <AccordionItem value="how-to-use">
                  <AccordionTrigger className="font-heading text-base">{t.product.howToUse}</AccordionTrigger>
                  <AccordionContent><p className="body-sm whitespace-pre-line">{product.howToUse}</p></AccordionContent>
                </AccordionItem>
              )}
              {product.ingredients && (
                <AccordionItem value="ingredients">
                  <AccordionTrigger className="font-heading text-base">{t.product.ingredients}</AccordionTrigger>
                  <AccordionContent><p className="body-sm whitespace-pre-line">{product.ingredients}</p></AccordionContent>
                </AccordionItem>
              )}
              {product.careInstructions && (
                <AccordionItem value="care">
                  <AccordionTrigger className="font-heading text-base">{t.product.careInstructions}</AccordionTrigger>
                  <AccordionContent><p className="body-sm whitespace-pre-line">{product.careInstructions}</p></AccordionContent>
                </AccordionItem>
              )}
              <AccordionItem value="shipping">
                <AccordionTrigger className="font-heading text-base">{t.product.shippingReturns}</AccordionTrigger>
                <AccordionContent>
                  <div className="body-sm space-y-2">
                    <p>Standard shipping: 5–7 business days.</p>
                    <p>Express shipping: 2–3 business days.</p>
                    <p>Returns accepted within 30 days of delivery. Items must be unused and in original packaging.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              {product.safetyNotes && product.safetyNotes.length > 0 && (
                <AccordionItem value="safety">
                  <AccordionTrigger className="font-heading text-base">Safety Notes</AccordionTrigger>
                  <AccordionContent>
                    <ul className="body-sm space-y-2">
                      {product.safetyNotes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="section-padding py-16 md:py-24 bg-card">
          <h2 className="heading-md text-center mb-10">{t.product.youMayAlsoLike}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 md:hidden z-40">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm font-body font-medium text-foreground truncate">{product.name}</p>
            <p className="font-heading text-lg">{getProductDisplayPrice(product)}</p>
          </div>
          <button onClick={handleAddToCart} className="btn-primary py-3 px-6">{t.product.addToCart}</button>
        </div>
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default ProductDetail;
