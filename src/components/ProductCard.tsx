import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import {
  type Product,
  getProductDisplayPrice,
  getProductMinimumQuantity,
} from '@/lib/products';
import { ScrollReveal } from '@/components/ScrollReveal';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { t } = useLanguage();
  const defaultVariantId = product.variants?.[0]?.id;
  const startingQuantity = getProductMinimumQuantity(product);
  const needsConfiguration = product.requiresConfiguration;

  return (
    <ScrollReveal className="group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-secondary rounded-sm">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width={400}
            height={533}
          />
          {product.isBestSeller && (
            <span className="absolute top-3 left-3 label-text bg-background/90 px-3 py-1.5 rounded-sm">
              Best Seller
            </span>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-body tracking-wider uppercase">{product.collection}</p>
          <h3 className="font-heading text-base md:text-lg text-foreground leading-snug">{product.name}</h3>
          <p className="body-sm line-clamp-2">{product.shortDescription}</p>
        </div>
      </Link>
      <div className="flex items-center justify-between mt-3">
        <span className="font-heading text-lg text-foreground">{getProductDisplayPrice(product)}</span>
        {needsConfiguration ? (
          // Products with required selections should route through the detail page first.
          <Link
            to={`/product/${product.slug}`}
            className="text-xs font-body tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Choose Options
          </Link>
        ) : (
          <button
            onClick={() => addItem(product, defaultVariantId, startingQuantity)}
            className="text-xs font-body tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            + {t.product.addToCart}
          </button>
        )}
      </div>
    </ScrollReveal>
  );
}
