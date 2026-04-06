import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import type { Collection } from '@/lib/products';
import { ScrollReveal } from '@/components/ScrollReveal';

interface CollectionCardProps {
  collection: Collection;
  image: string;
}

export function CollectionCard({ collection, image }: CollectionCardProps) {
  const { t } = useLanguage();

  return (
    <ScrollReveal>
      <Link to={`/collection/${collection.slug}`} className="group block">
        <div className="relative overflow-hidden aspect-[3/4] rounded-sm bg-secondary">
          <img
            src={image}
            alt={collection.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width={400}
            height={533}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <h3 className="font-heading text-xl md:text-2xl text-background mb-1">{collection.name}</h3>
            <p className="text-xs tracking-[0.15em] uppercase font-body text-background/70">
              {t.collections.viewCollection}
            </p>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}
