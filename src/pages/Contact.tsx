import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-padding py-12 md:py-20">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="heading-xl mb-4">{t.nav.contact}</h1>
          <p className="body-lg max-w-xl mx-auto">We'd love to hear from you. Reach out with questions, feedback, or wholesale inquiries.</p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
        {/* Info */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-heading text-lg mb-1">Email</h3>
              <a href="mailto:hello@bigueallure.com" className="body-sm hover:text-foreground transition-colors">hello@bigueallure.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-heading text-lg mb-1">Phone</h3>
              <p className="body-sm">+1 (000) 000-0000</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-heading text-lg mb-1">Social</h3>
              <p className="body-sm">@bigueallure</p>
            </div>
          </div>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="flex items-center justify-center bg-card p-8 rounded-sm border border-border">
            <div className="text-center">
              <h3 className="heading-sm mb-3">Message Sent</h3>
              <p className="body-sm">Thank you for reaching out. We'll get back to you soon.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="label-text block mb-2">Name</label>
              <input type="text" required className="w-full bg-transparent border border-border px-4 py-3 text-sm font-body text-foreground outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="label-text block mb-2">Email</label>
              <input type="email" required className="w-full bg-transparent border border-border px-4 py-3 text-sm font-body text-foreground outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="label-text block mb-2">Subject</label>
              <input type="text" required className="w-full bg-transparent border border-border px-4 py-3 text-sm font-body text-foreground outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="label-text block mb-2">Message</label>
              <textarea required rows={5} className="w-full bg-transparent border border-border px-4 py-3 text-sm font-body text-foreground outline-none focus:border-primary transition-colors resize-none" />
            </div>
            <button type="submit" className="btn-primary w-full text-center">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
