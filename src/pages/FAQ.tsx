import { useLanguage } from '@/context/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollReveal } from '@/components/ScrollReveal';

const faqs = [
  { q: 'What is Bigue Allure?', a: 'Bigue Allure is a beauty and self-care brand rooted in Senegalese traditions. We offer bath and body essentials, handmade waist beads, home fragrance products, and a curated shea butter collection — all designed to elevate your daily rituals.' },
  { q: 'Where are your products made?', a: 'Our products are sourced and handcrafted from trusted artisans and suppliers across West Africa, with a focus on quality, authenticity, and cultural respect.' },
  { q: 'How long does shipping take?', a: 'Standard shipping typically takes 5–7 business days. Express shipping is available for 2–3 business day delivery. International shipping times may vary.' },
  { q: 'What is your return policy?', a: 'We accept returns within 30 days of delivery. Items must be unused, unopened, and in their original packaging. Please contact us to initiate a return.' },
  { q: 'How do I use the exfoliating bath net?', a: 'Wet the net, apply your favourite soap or body wash, work into a rich lather, and gently massage over the body in circular motions. Rinse and hang to dry after each use.' },
  { q: 'How do I use the fragrance oils?', a: 'Add 3–5 drops of fragrance oil to the water dish of your aroma oil burner. Light a tealight candle underneath and enjoy the gentle diffusion of scent throughout your space.' },
  { q: 'Are fragrance oils safe for skin?', a: 'Our fragrance oils are formulated for use with aroma oil burners only and are not intended for direct skin application. Always follow the usage instructions provided.' },
  { q: 'How do I choose waist bead colours?', a: 'Choose colours that resonate with you personally — whether you\'re drawn to earth tones, warm golds, or soft pastels. Each colour can carry personal significance, and we encourage you to select what feels right for you.' },
  { q: 'How should I use the shea butter products?', a: 'Apply generously to clean skin after bathing for best absorption. Our glow cream is lightweight for daily use, the massage cream is richer for deeper nourishment, and the hair cream should be worked through from mid-length to ends.' },
  { q: 'Do you ship internationally?', a: 'Yes, we ship to select international destinations. Shipping rates and delivery times vary by location. Please check our shipping policy for details.' },
];

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <div className="section-padding py-12 md:py-20 max-w-3xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="heading-xl mb-4">{t.nav.faq}</h1>
          <p className="body-lg">Everything you need to know about Bigue Allure.</p>
        </div>
      </ScrollReveal>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} value={`faq-${i}`} className="border border-border px-5">
            <AccordionTrigger className="font-heading text-base text-left">{faq.q}</AccordionTrigger>
            <AccordionContent><p className="body-sm">{faq.a}</p></AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
