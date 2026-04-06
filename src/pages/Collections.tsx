import { useLanguage } from '@/context/LanguageContext';
import { CollectionCard } from '@/components/CollectionCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { collections } from '@/lib/products';

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

const Collections = () => {
  const { t } = useLanguage();

  return (
    <div className="section-padding py-12 md:py-20">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="heading-xl mb-4">{t.nav.collections}</h1>
          <p className="body-lg max-w-xl mx-auto">Explore curated collections inspired by tradition, softness, and everyday luxury.</p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {collections.map(col => (
          <CollectionCard key={col.id} collection={col} image={collectionImages[col.slug]} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
