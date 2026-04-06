import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { getCollectionBySlug, getProductsByCollection } from '@/lib/products';

import collectionBathBody from '@/assets/collection-bath-body.jpg';
import collectionWaistBeads from '@/assets/collection-waist-beads.jpg';
import collectionHomeFragrance from '@/assets/collection-home-fragrance.jpg';
import collectionSheaButter from '@/assets/collection-shea-butter.jpg';

const collectionImages: Record<string, string> = {
  'bath-body': collectionBathBody,
  'waist-beads': collectionWaistBeads,
  'home-fragrance': collectionHomeFragrance,
  'shea-butter': collectionSheaButter,
};

const CollectionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const collection = getCollectionBySlug(slug || '');
  const products = getProductsByCollection(slug || '');

  if (!collection) {
    return (
      <div className="section-padding py-20 text-center">
        <h1 className="heading-lg mb-4">Collection not found</h1>
        <Link to="/collections" className="btn-secondary">{t.nav.collections}</Link>
      </div>
    );
  }

  return (
    <div>
      <ScrollReveal>
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
        <img src={collectionImages[collection.slug]} alt={collection.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={800} height={1000} />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-5">
          <h1 className="font-heading text-4xl md:text-5xl text-background mb-3">{collection.name}</h1>
          <p className="text-base font-body font-light text-background/80 max-w-lg mx-auto">{collection.description}</p>
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding py-12 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {products.length === 0 && (
          <p className="text-center body-lg py-20">{t.common.noResults}</p>
        )}
        </section>
      </ScrollReveal>
    </div>
  );
};

export default CollectionDetail;
