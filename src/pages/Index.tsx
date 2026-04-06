import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { TrustBadges } from '@/components/TrustBadges';
import { TestimonialCard } from '@/components/TestimonialCard';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { ScrollReveal } from '@/components/ScrollReveal';
import { collections, getBestSellers } from '@/lib/products';

import heroMain from '@/assets/hero-main.jpg';
import collectionBathBody from '@/assets/collection-bath-body.jpg';
import collectionWaistBeads from '@/assets/collection-waist-beads.jpg';
import collectionHomeFragrance from '@/assets/collection-home-fragrance.jpg';
import collectionSheaButter from '@/assets/collection-shea-butter.jpg';
import aboutHeritage from '@/assets/about-heritage.jpg';
import brandStory from '@/assets/brand-story.jpg';

const collectionImages: Record<string, string> = {
  'bath-body': collectionBathBody,
  'waist-beads': collectionWaistBeads,
  'home-fragrance': collectionHomeFragrance,
  'shea-butter': collectionSheaButter,
};

const Index = () => {
  const { t } = useLanguage();
  const bestSellers = getBestSellers();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center">
        <img src={heroMain} alt="Bigue Allure luxury self-care" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
        <ScrollReveal className="relative z-10 section-padding max-w-2xl py-20" distance={52}>
          <div>
            <p className="label-text text-background/70 mb-4">Bigue Allure</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background font-medium leading-tight mb-6">
              {t.hero.headline}
            </h1>
            <p className="text-base md:text-lg font-body font-light text-background/80 leading-relaxed mb-10 max-w-lg">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn-primary bg-background text-foreground hover:bg-background/90 text-center">
                {t.hero.shopNow}
              </Link>
              <Link to="/collections" className="btn-secondary border-background/50 text-background hover:bg-background hover:text-foreground text-center">
                {t.hero.exploreCollections}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal>
        <section className="section-padding py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="label-text text-primary mb-3">{t.collections.featured}</p>
          <h2 className="heading-lg">Elevated Rituals for Every Moment</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map(col => (
            <CollectionCard key={col.id} collection={col} image={collectionImages[col.slug]} />
          ))}
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding py-16 md:py-24 bg-card">
        <div className="text-center mb-12">
          <p className="label-text text-primary mb-3">{t.common.bestSellers}</p>
          <h2 className="heading-lg">Most Loved by Our Community</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-secondary">{t.collections.shopAll}</Link>
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="label-text text-primary mb-4">{t.common.ourStory}</p>
            <h2 className="heading-lg mb-6">Inspired by Traditions Carried Through Generations</h2>
            <p className="body-lg mb-6">
              Bigue Allure was born from a deep love for Senegalese beauty traditions — the rituals of care, the fragrance of home, the softness of shea, and the quiet elegance of adornment. Each product is a bridge between heritage and the modern self-care ritual.
            </p>
            <p className="body-lg mb-8">
              We believe beauty is not just seen — it is felt. In the texture of a cream, the warmth of a fragrance, the rhythm of beads worn close to the body. These are the everyday luxuries that ground us.
            </p>
            <Link to="/about" className="btn-secondary">{t.common.learnMore}</Link>
          </div>
          <div className="order-1 md:order-2">
            <img src={aboutHeritage} alt="Senegalese heritage beauty" className="w-full aspect-[4/5] object-cover rounded-sm" loading="lazy" width={800} height={1000} />
          </div>
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding py-16 md:py-24 bg-card">
        <div className="text-center mb-12">
          <p className="label-text text-primary mb-3">{t.common.whyCustomersLove}</p>
          <h2 className="heading-lg">A Quiet Ritual of Softness, Fragrance, and Care</h2>
        </div>
        <TrustBadges />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <img src={collectionSheaButter} alt="Shea Butter Collection" className="w-full aspect-[4/5] object-cover rounded-sm" loading="lazy" width={800} height={1000} />
          <div>
            <p className="label-text text-primary mb-4">The Shea Butter Collection</p>
            <h2 className="heading-lg mb-6">Pure Nourishment, Passed Down Through Generations</h2>
            <p className="body-lg mb-8">
              Sourced with care and blended with intention, our shea butter range brings the richness of West African skincare traditions to your daily ritual. From luminous body glow to deep hair nourishment — each cream is a gift of softness.
            </p>
            <Link to="/collection/shea-butter" className="btn-primary">{t.collections.viewCollection}</Link>
          </div>
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding py-16 md:py-24 bg-card">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="label-text text-primary mb-4">Home Fragrance</p>
            <h2 className="heading-lg mb-6">Transform Your Space Into a Sanctuary</h2>
            <p className="body-lg mb-8">
              Our aroma oil burner and fragrance oil collection are designed to fill your home with warmth, memory, and mood. Each scent is inspired by Senegalese evening rituals — moments of calm, connection, and quiet luxury.
            </p>
            <Link to="/collection/home-fragrance" className="btn-primary">{t.collections.viewCollection}</Link>
          </div>
          <div className="order-1 md:order-2">
            <img src={collectionHomeFragrance} alt="Home Fragrance" className="w-full aspect-[4/5] object-cover rounded-sm" loading="lazy" width={800} height={1000} />
          </div>
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <img src={collectionWaistBeads} alt="Waist Beads" className="w-full aspect-[4/5] object-cover rounded-sm" loading="lazy" width={800} height={1000} />
          <div>
            <p className="label-text text-primary mb-4">Bine Bine — Waist Beads</p>
            <h2 className="heading-lg mb-6">Adornment, Tradition, and Personal Expression</h2>
            <p className="body-lg mb-8">
              Our handcrafted African waist beads are worn as a celebration of femininity, culture, and self. Each strand is unique — a quiet, beautiful expression of who you are. Rooted in centuries of West African tradition, worn with modern confidence.
            </p>
            <Link to="/collection/waist-beads" className="btn-primary">{t.collections.viewCollection}</Link>
          </div>
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding py-16 md:py-24 bg-card">
        <div className="text-center mb-12">
          <p className="label-text text-primary mb-3">Testimonials</p>
          <h2 className="heading-lg">What Our Community Says</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <TestimonialCard quote="The shea butter glow cream has completely transformed my skin. It's luxurious and the scent is divine." author="Aminata D." location="Dakar, Senegal" />
          <TestimonialCard quote="I've never found waist beads this beautiful. They feel like wearing a piece of home." author="Fatou S." location="Paris, France" />
          <TestimonialCard quote="The fragrance oils are incredible. My entire apartment smells like warmth and comfort." author="Khadija M." location="New York, USA" />
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding py-16 md:py-24">
        <div className="max-w-md mx-auto text-center">
          <p className="label-text text-primary mb-3">{t.common.newsletter}</p>
          <h2 className="heading-lg mb-4">{t.common.joinWorld}</h2>
          <p className="body-sm mb-8">Be the first to discover new collections, exclusive offers, and stories from the world of Bigue Allure.</p>
          <NewsletterSignup />
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding py-16 md:py-24 bg-card">
        <div className="text-center mb-12">
          <p className="label-text text-primary mb-3">{t.common.followUs}</p>
          <h2 className="heading-lg">@bigueallure</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[collectionBathBody, collectionWaistBeads, collectionHomeFragrance, collectionSheaButter].map((img, i) => (
            <div key={i} className="aspect-square bg-secondary rounded-sm overflow-hidden">
              <img src={img} alt="Bigue Allure Instagram" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={400} />
            </div>
          ))}
        </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Index;
