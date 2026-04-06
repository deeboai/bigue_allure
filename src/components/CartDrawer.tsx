import { X, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import {
  getConfigurationSelectionIds,
  getProductConfigurationImage,
  getProductConfigurationPreviewImages,
  getProductConfigurationLabel,
  formatCurrency,
  getProductDisplayPrice,
  getProductQuantityStep,
} from '@/lib/products';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const { t } = useLanguage();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" />
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl flex flex-col slide-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="font-heading text-lg">{t.nav.cart}</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="body-sm mb-6">{t.common.emptyCart}</p>
              <button onClick={onClose} className="btn-secondary text-xs">
                {t.common.continueShopping}
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => {
                const variant = item.product.variants?.find(v => v.id === item.variantId);
                const quantityStep = getProductQuantityStep(item.product);
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
                  <div key={`${item.product.id}-${item.variantId}`} className="flex gap-4">
                    {isEditableWaistBeadPair ? (
                      <div className="grid grid-cols-2 gap-1 w-20 shrink-0">
                        {configurationPreviewImages.map((previewImage, index) => (
                          <img
                            key={`${item.variantId}-${previewImage}-${index}`}
                            src={previewImage}
                            alt={`${item.product.name} color ${index + 1}`}
                            className="w-full h-24 object-cover rounded-sm"
                            loading="lazy"
                            width={40}
                            height={96}
                          />
                        ))}
                      </div>
                    ) : (
                      <img
                        src={itemImage}
                        alt={item.product.name}
                        className="w-20 h-24 object-cover rounded-sm shrink-0"
                        loading="lazy"
                        width={80}
                        height={96}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-body font-medium text-foreground truncate">{item.product.name}</h3>
                      {itemLabel && <p className="text-xs text-muted-foreground mt-0.5">{itemLabel}</p>}
                      {isEditableWaistBeadPair && (
                        <Link to="/cart" onClick={onClose} className="inline-block mt-1 text-[11px] font-body uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors">
                          Edit colors in cart
                        </Link>
                      )}
                      <p className="text-sm font-body mt-1 text-foreground">{getProductDisplayPrice(item.product)}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => updateQuantity(item.product.id, item.variantId, item.quantity - quantityStep)} className="text-muted-foreground hover:text-foreground">
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-body w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.variantId, item.quantity + quantityStep)} className="text-muted-foreground hover:text-foreground">
                          <Plus size={14} />
                        </button>
                        <button onClick={() => removeItem(item.product.id, item.variantId)} className="ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors">
                          {t.common.removeItem}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="label-text">{t.common.subtotal}</span>
              <span className="text-lg font-heading">{formatCurrency(Math.round(totalPrice * 100))}</span>
            </div>
            <Link to="/cart" onClick={onClose} className="btn-secondary block text-center w-full">
              {t.nav.cart}
            </Link>
            <Link to="/checkout" onClick={onClose} className="btn-primary block text-center w-full">
              {t.common.checkout}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
