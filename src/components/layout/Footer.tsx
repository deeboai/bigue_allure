import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { NewsletterSignup } from '@/components/NewsletterSignup';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background/80">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl text-background mb-4">Bigue Allure</h3>
            <p className="text-sm font-body font-light leading-relaxed text-background/60">
              Rooted in Senegalese beauty traditions. Crafted for modern self-care. Elevated rituals for body, home, and spirit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-background/50 mb-5 font-body">{t.common.quickLinks}</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: t.nav.home },
                { to: '/shop', label: t.nav.shop },
                { to: '/collections', label: t.nav.collections },
                { to: '/about', label: t.nav.about },
                { to: '/faq', label: t.nav.faq },
                { to: '/contact', label: t.nav.contact },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm font-body font-light text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-background/50 mb-5 font-body">{t.common.policies}</h4>
            <ul className="space-y-3">
              {[
                { to: '/policies/shipping', label: t.common.shippingPolicy },
                { to: '/policies/returns', label: t.common.returnsPolicy },
                { to: '/policies/privacy', label: t.common.privacyPolicy },
                { to: '/policies/terms', label: t.common.termsOfService },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm font-body font-light text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-background/50 mb-5 font-body">{t.common.newsletter}</h4>
            <NewsletterSignup variant="footer" />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body text-background/40">
            © {new Date().getFullYear()} Bigue Allure. {t.common.allRightsReserved}.
          </p>
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs font-body text-background/40 hover:text-background transition-colors">Instagram</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-xs font-body text-background/40 hover:text-background transition-colors">TikTok</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xs font-body text-background/40 hover:text-background transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
