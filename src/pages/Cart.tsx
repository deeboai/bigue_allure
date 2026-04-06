import { Link } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import {
  buildConfigurationId,
  formatCurrency,
  getConfigurationSelectionIds,
  getProductConfigurationImage,
  getProductConfigurationPreviewImages,
  getProductConfigurationLabel,
  getProductDisplayPrice,
  getProductLinePriceCents,
  getProductQuantityStep,
} from '@/lib/products';
import { ScrollReveal } from '@/components/ScrollReveal';

const Cart = () => {
  const { items, removeItem, updateItemConfiguration, updateQuantity, totalPrice } = useCart();
  const { t } = useLanguage();

  return (
    <div className="section-padding py-12 md:py-20 max-w-4xl mx-auto">
      <ScrollReveal>
        <h1 className="heading-xl mb-10 text-center">{t.nav.cart}</h1>
      </ScrollReveal>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="body-lg mb-8">{t.common.emptyCart}</p>
          <Link to="/shop" className="btn-primary">{t.common.continueShopping}</Link>
        </div>
      ) : (
        <div>
          {/* Items */}
          <div className="space-y-6 mb-10">
            {items.map(item => {
              const variant = item.product.variants?.find(v => v.id === item.variantId);
              const quantityStep = getProductQuantityStep(item.product);
              const configurationSelectionIds = getConfigurationSelectionIds(item.variantId);
              const isEditableWaistBeadPair = item.product.id === "bine-bine-waist-beads" && Boolean(item.product.variants?.length);
              const primarySelectionId = configurationSelectionIds[0] ?? item.product.variants?.[0]?.id ?? "";
              const secondarySelectionId = configurationSelectionIds[1] ?? item.product.variants?.[1]?.id ?? item.product.variants?.[0]?.id ?? "";
              const configurationPreviewImages = isEditableWaistBeadPair
                ? getProductConfigurationPreviewImages(item.product, [primarySelectionId, secondarySelectionId])
                : [];
              const itemImage = isEditableWaistBeadPair
                ? getProductConfigurationImage(item.product, [primarySelectionId, secondarySelectionId])
                : item.imageOverride ?? variant?.images[0] ?? item.product.images[0];
              const itemLabel = isEditableWaistBeadPair
                ? getProductConfigurationLabel(item.product, [primarySelectionId, secondarySelectionId])
                : item.variantLabel ?? variant?.name;

              const handleConfigurationChange = (nextSelectionIds: string[]) => {
                const nextVariantId = buildConfigurationId(nextSelectionIds);
                const nextLabel = getProductConfigurationLabel(item.product, nextSelectionIds);
                const nextImage = getProductConfigurationImage(item.product, nextSelectionIds);

                updateItemConfiguration(item.product.id, item.variantId, nextVariantId, nextLabel, nextImage);
              };

              return (
                <div key={`${item.product.id}-${item.variantId}`} className="flex gap-4 md:gap-6 pb-6 border-b border-border">
                  {isEditableWaistBeadPair ? (
                    <div className="grid grid-cols-2 gap-2 w-24 md:w-32 shrink-0">
                      {configurationPreviewImages.map((previewImage, index) => (
                        <img
                          key={`${item.variantId}-${previewImage}-${index}`}
                          src={previewImage}
                          alt={`${item.product.name} color ${index + 1}`}
                          className="w-full h-32 md:h-40 object-cover rounded-sm"
                          loading="lazy"
                          width={64}
                          height={160}
                        />
                      ))}
                    </div>
                  ) : (
                    <img src={itemImage} alt={item.product.name} className="w-24 h-32 md:w-32 md:h-40 object-cover rounded-sm shrink-0" loading="lazy" width={128} height={160} />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-heading text-base md:text-lg text-foreground">{item.product.name}</h3>
                        {itemLabel && <p className="text-xs text-muted-foreground mt-0.5">{itemLabel}</p>}
                        <p className="font-heading text-lg mt-2">{getProductDisplayPrice(item.product)}</p>
                      </div>
                      <button onClick={() => removeItem(item.product.id, item.variantId)} className="text-muted-foreground hover:text-foreground transition-colors">
                        <X size={18} />
                      </button>
                    </div>
                    <div className="flex items-center border border-border w-fit mt-4">
                      <button onClick={() => updateQuantity(item.product.id, item.variantId, item.quantity - quantityStep)} className="px-3 py-2"><Minus size={14} /></button>
                      <span className="px-4 py-2 text-sm font-body">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.variantId, item.quantity + quantityStep)} className="px-3 py-2"><Plus size={14} /></button>
                    </div>
                    {isEditableWaistBeadPair && item.product.variants && (
                      <div className="grid gap-3 mt-4 max-w-xl sm:grid-cols-2">
                        <label className="flex flex-col gap-1">
                          <span className="text-xs font-body uppercase tracking-[0.18em] text-muted-foreground">First Color</span>
                          <select
                            value={primarySelectionId}
                            onChange={(event) => handleConfigurationChange([event.target.value, secondarySelectionId])}
                            className="bg-transparent border border-border px-3 py-2 text-sm font-body text-foreground outline-none focus:border-primary transition-colors"
                          >
                            {item.product.variants.map((productVariant) => (
                              <option key={`${item.variantId}-${productVariant.id}-primary`} value={productVariant.id}>
                                {productVariant.name}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className="flex flex-col gap-1">
                          <span className="text-xs font-body uppercase tracking-[0.18em] text-muted-foreground">Second Color</span>
                          <select
                            value={secondarySelectionId}
                            onChange={(event) => handleConfigurationChange([primarySelectionId, event.target.value])}
                            className="bg-transparent border border-border px-3 py-2 text-sm font-body text-foreground outline-none focus:border-primary transition-colors"
                          >
                            {item.product.variants.map((productVariant) => (
                              <option key={`${item.variantId}-${productVariant.id}-secondary`} value={productVariant.id}>
                                {productVariant.name}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                    )}
                    {isEditableWaistBeadPair && (
                      <p className="body-sm mt-3">Each quantity represents one configured pair. Edit the colors above to update this pair in your cart.</p>
                    )}
                    <p className="body-sm mt-3">Line total: {formatCurrency(getProductLinePriceCents(item.product, item.quantity))}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="border-t border-border pt-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="label-text">{t.common.subtotal}</span>
              <span className="font-heading text-2xl">{formatCurrency(Math.round(totalPrice * 100))}</span>
            </div>
            <p className="body-sm">Shipping and taxes calculated at checkout.</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link to="/shop" className="btn-secondary flex-1 text-center">{t.common.continueShopping}</Link>
              <Link to="/checkout" className="btn-primary flex-1 text-center">{t.common.checkout}</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
