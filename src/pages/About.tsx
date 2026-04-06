import { Link } from 'react-router-dom';
import aboutHeritage from '@/assets/about-heritage.jpg';
import brandStory from '@/assets/brand-story.jpg';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';

const About = () => {
  const { t } = useLanguage();

  return (
    <div>
      <ScrollReveal>
        <section className="relative h-[50vh] flex items-center justify-center">
        <img src={aboutHeritage} alt="Bigue Allure heritage" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={800} height={1000} />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-5">
          <h1 className="font-heading text-4xl md:text-5xl text-background mb-3">{t.common.ourStory}</h1>
          <p className="text-base font-body font-light text-background/80 max-w-lg mx-auto">Tradition, softness, and everyday luxury</p>
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding py-16 md:py-24 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <p className="label-text text-primary mb-4">Our Heritage</p>
            <h2 className="heading-lg mb-6">Born from Senegalese Beauty Traditions</h2>
            <p className="body-lg mb-4">
              Bigue Allure was founded on a simple belief: that the beauty rituals carried through generations of Senegalese women hold a wisdom that the modern world deeply needs. The fragrance of bakhour filling a room. The richness of raw shea butter on skin. The quiet confidence of waist beads worn close to the body.
            </p>
            <p className="body-lg">
              These are not trends — they are traditions. And at Bigue Allure, we honour them by presenting each one with the care, quality, and elegance it deserves.
            </p>
          </div>

          <img src={brandStory} alt="Natural ingredients" className="w-full aspect-[16/9] object-cover rounded-sm" loading="lazy" width={800} height={600} />

          <div>
            <p className="label-text text-primary mb-4">Our Philosophy</p>
            <h2 className="heading-lg mb-6">Beauty Is Felt, Not Just Seen</h2>
            <p className="body-lg mb-4">
              We believe beauty lives in the texture of a cream warming between your palms. In the soft glow of a fragrance burner at dusk. In the gentle weight of beads that remind you of your own grace. Beauty, for us, is a daily ritual of softness and self-care.
            </p>
            <p className="body-lg">
              Every product we offer is selected and crafted to bring this feeling into your life — whether you're preparing for the day ahead or unwinding at its close.
            </p>
          </div>

          <div>
            <p className="label-text text-primary mb-4">Our Promise</p>
            <h2 className="heading-lg mb-6">Elevated, Thoughtful, and Always Authentic</h2>
            <p className="body-lg mb-4">
              We source with integrity. We present with care. And we never compromise on the quality or cultural authenticity of what we bring to you. Our shea butter is pure. Our fragrances are rich. Our beads are handmade with intention.
            </p>
            <p className="body-lg">
              Bigue Allure is more than a brand — it is an invitation to slow down, care for yourself, and honour the traditions that shaped us.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/shop" className="btn-primary">{t.hero.shopNow}</Link>
        </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default About;
