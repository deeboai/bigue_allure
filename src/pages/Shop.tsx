import { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { products, collections } from '@/lib/products';

const Shop = () => {
  const { t } = useLanguage();
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const filtered = useMemo(() => {
    const result = selectedCollection === 'all' ? [...products] : products.filter(p => p.collectionSlug === selectedCollection);

    switch (sortBy) {
      case 'newest': result.reverse(); break;
      case 'price-low': result.sort((a, b) => a.priceCents - b.priceCents); break;
      case 'price-high': result.sort((a, b) => b.priceCents - a.priceCents); break;
    }
    return result;
  }, [selectedCollection, sortBy]);

  return (
    <div className="section-padding py-12 md:py-20">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="heading-xl mb-4">{t.collections.shopAll}</h1>
          <p className="body-lg max-w-xl mx-auto">From bath to body to home, each piece is chosen to elevate daily rituals.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 pb-6 border-b border-border">
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setSelectedCollection('all')} className={`px-4 py-2 text-xs font-body tracking-widest uppercase transition-colors ${selectedCollection === 'all' ? 'bg-foreground text-background' : 'bg-secondary text-foreground hover:bg-foreground/10'}`}>
            All
          </button>
          {collections.map(col => (
            <button key={col.id} onClick={() => setSelectedCollection(col.slug)} className={`px-4 py-2 text-xs font-body tracking-widest uppercase transition-colors ${selectedCollection === col.slug ? 'bg-foreground text-background' : 'bg-secondary text-foreground hover:bg-foreground/10'}`}>
              {col.name}
            </button>
          ))}
        </div>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="bg-transparent text-sm font-body text-muted-foreground border border-border px-3 py-2 outline-none">
          <option value="featured">{t.common.featured}</option>
          <option value="newest">{t.common.newest}</option>
          <option value="price-low">{t.common.priceLowHigh}</option>
          <option value="price-high">{t.common.priceHighLow}</option>
        </select>
        </div>
      </ScrollReveal>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center body-lg py-20">{t.common.noResults}</p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
