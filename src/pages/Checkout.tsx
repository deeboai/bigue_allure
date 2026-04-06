import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import {
  formatCurrency,
  getConfigurationSelectionIds,
  getProductConfigurationImage,
  getProductConfigurationPreviewImages,
  getProductConfigurationLabel,
  getProductLinePriceCents,
} from '@/lib/products';
import { ScrollReveal } from '@/components/ScrollReveal';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { t } = useLanguage();
  const [placed, setPlaced] = useState(false);

  if (placed || items.length === 0) {
    return (
      <div className="section-padding py-20 text-center max-w-lg mx-auto">
        <h1 className="heading-xl mb-4">{items.length === 0 && !placed ? t.common.emptyCart : t.common.orderConfirmed}</h1>
        {placed && <p className="body-lg mb-8">{t.common.thankYou}</p>}
        <Link to="/shop" className="btn-primary">{t.common.continueShopping}</Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setPlaced(true);
  };

  return (
    <div className="section-padding py-12 md:py-20 max-w-5xl mx-auto">
      <ScrollReveal>
        <h1 className="heading-xl mb-10 text-center">{t.common.checkout}</h1>
      </ScrollReveal>
      <div className="grid md:grid-cols-5 gap-10 md:gap-16">
        {/* Form */}
        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6">
          <div>
            <h2 className="heading-sm mb-4">Contact Information</h2>
            <input type="email" placeholder="Email" required className="w-full bg-transparent border border-border px-4 py-3 text-sm font-body text-foreground outline-none focus:border-primary transition-colors" />
          </div>
          <div>
            <h2 className="heading-sm mb-4">Shipping Address</h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="First name" required className="bg-transparent border border-border px-4 py-3 text-sm font-body text-foreground outline-none focus:border-primary transition-colors" />
                <input type="text" placeholder="Last name" required className="bg-transparent border border-border px-4 py-3 text-sm font-body text-foreground outline-none focus:border-primary transition-colors" />
              </div>
              <input type="text" placeholder="Address" required className="w-full bg-transparent border border-border px-4 py-3 text-sm font-body text-foreground outline-none focus:border-primary transition-colors" />
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="City" required className="bg-transparent border border-border px-4 py-3 text-sm font-body text-foreground outline-none focus:border-primary transition-colors" />
                <input type="text" placeholder="Zip code" required className="bg-transparent border border-border px-4 py-3 text-sm font-body text-foreground outline-none focus:border-primary transition-colors" />
              </div>
              <input type="text" placeholder="Country" required className="w-full bg-transparent border border-border px-4 py-3 text-sm font-body text-foreground outline-none focus:border-primary transition-colors" />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full text-center">Place Order — {formatCurrency(Math.round(totalPrice * 100))}</button>
        </form>

        {/* Summary */}
        <div className="md:col-span-2 bg-card p-6 rounded-sm border border-border h-fit">
          <h2 className="heading-sm mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            {items.map(item => {
              const variant = item.product.variants?.find(v => v.id === item.variantId);
              const configurationSelectionIds = getConfigurationSelectionIds(item.variantId);
              const isEditableWaistBeadPair = item.product.id === "bine-bine-waist-beads" && configurationSelectionIds.length > 1;
              const configurationPreviewImages = isEditableWaistBeadPair
                ? getProductConfigurationPreviewImages(item.product, configurationSelectionIds)
                : [];
              const itemImage = isEditableWaistBeadPair
                ? getProductConfigurationImage(item.product, configurationSelectionIds)
                : item.imageOverride ?? variant?.images[0] ?? item.product.images[0];
              const itemLabel = isEditableWaistBeadPair
                ? getProductConfigurationLabel(item.product, configurationSelectionIds)
                : item.variantLabel ?? variant?.name;

              return (
                <div key={`${item.product.id}-${item.variantId}`} className="flex gap-3">
                  {isEditableWaistBeadPair ? (
                    <div className="grid grid-cols-2 gap-1 w-14 shrink-0">
                      {configurationPreviewImages.map((previewImage, index) => (
                        <img
                          key={`${item.variantId}-${previewImage}-${index}`}
                          src={previewImage}
                          alt={`${item.product.name} color ${index + 1}`}
                          className="w-full h-[72px] object-cover rounded-sm"
                          width={28}
                          height={72}
                        />
                      ))}
                    </div>
                  ) : (
                    <img src={itemImage} alt={item.product.name} className="w-14 h-18 object-cover rounded-sm shrink-0" width={56} height={72} />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-body text-foreground truncate">{item.product.name}</p>
                    {itemLabel && <p className="text-xs text-muted-foreground truncate">{itemLabel}</p>}
                    <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-body">{formatCurrency(getProductLinePriceCents(item.product, item.quantity))}</p>
                </div>
              );
            })}
          </div>
          <div className="border-t border-border pt-4 flex justify-between items-center">
            <span className="label-text">{t.common.total}</span>
            <span className="font-heading text-xl">{formatCurrency(Math.round(totalPrice * 100))}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
