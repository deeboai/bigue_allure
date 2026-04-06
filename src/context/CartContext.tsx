import React, { createContext, useContext, useState, useCallback } from "react";
import {
  type Product,
  getProductLinePrice,
  getProductMinimumQuantity,
} from "@/lib/products";

export interface CartItem {
  product: Product;
  variantId?: string;
  variantLabel?: string;
  imageOverride?: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, variantId?: string, quantity?: number, variantLabel?: string, imageOverride?: string) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, variantId: string | undefined, quantity: number) => void;
  updateItemConfiguration: (
    productId: string,
    currentVariantId: string | undefined,
    nextVariantId: string | undefined,
    variantLabel?: string,
    imageOverride?: string
  ) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const addItem = useCallback((
    product: Product,
    variantId?: string,
    quantity?: number,
    variantLabel?: string,
    imageOverride?: string
  ) => {
    // Each product can enforce its own merchandising rule, such as a pair-only purchase.
    const normalizedQuantity = Math.max(quantity ?? getProductMinimumQuantity(product), getProductMinimumQuantity(product));

    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id && i.variantId === variantId);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id && i.variantId === variantId
            ? { ...i, quantity: i.quantity + normalizedQuantity }
            : i
        );
      }
      return [...prev, { product, variantId, variantLabel, imageOverride, quantity: normalizedQuantity }];
    });
    setCartOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, variantId?: string) => {
    setItems(prev => prev.filter(i => !(i.product.id === productId && i.variantId === variantId)));
  }, []);

  const updateQuantity = useCallback((productId: string, variantId: string | undefined, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, variantId);
      return;
    }
    setItems(prev => prev.map(i =>
      i.product.id === productId && i.variantId === variantId
        ? { ...i, quantity }
        : i
    ));
  }, [removeItem]);

  const updateItemConfiguration = useCallback((
    productId: string,
    currentVariantId: string | undefined,
    nextVariantId: string | undefined,
    variantLabel?: string,
    imageOverride?: string
  ) => {
    setItems((previousItems) => {
      const currentItem = previousItems.find(
        (item) => item.product.id === productId && item.variantId === currentVariantId
      );

      if (!currentItem) {
        return previousItems;
      }

      const matchingConfiguredItem = previousItems.find(
        (item) =>
          item.product.id === productId &&
          item.variantId === nextVariantId &&
          item.variantId !== currentVariantId
      );

      // When the shopper edits one line into a combination that already exists,
      // merge the pair counts instead of leaving two duplicate lines behind.
      if (matchingConfiguredItem) {
        return previousItems
          .filter((item) => !(item.product.id === productId && item.variantId === currentVariantId))
          .map((item) =>
            item.product.id === productId && item.variantId === nextVariantId
              ? {
                  ...item,
                  quantity: item.quantity + currentItem.quantity,
                  variantLabel,
                  imageOverride,
                }
              : item
          );
      }

      return previousItems.map((item) =>
        item.product.id === productId && item.variantId === currentVariantId
          ? {
              ...item,
              variantId: nextVariantId,
              variantLabel,
              imageOverride,
            }
          : item
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + getProductLinePrice(item.product, item.quantity), 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, updateItemConfiguration, clearCart, totalItems, totalPrice, isCartOpen, setCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
