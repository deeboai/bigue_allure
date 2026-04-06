import { useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import { searchProducts } from '@/lib/products';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { t } = useLanguage();
  const results = searchProducts(query);

  return (
    <div className="section-padding py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="heading-lg mb-4">
          {results.length > 0 ? `${results.length} result${results.length > 1 ? 's' : ''} for "${query}"` : `${t.common.noResults}`}
        </h1>
        {results.length === 0 && query && (
          <p className="body-lg mb-8">Try searching for something else, or browse our collections.</p>
        )}
      </div>
      {results.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {results.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <div className="text-center">
          <Link to="/shop" className="btn-primary">{t.collections.shopAll}</Link>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
