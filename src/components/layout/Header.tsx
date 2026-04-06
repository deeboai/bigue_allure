import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { SearchModal } from '@/components/SearchModal';
import { CartDrawer } from '@/components/CartDrawer';

export function Header() {
  const { t } = useLanguage();
  const { totalItems, isCartOpen, setCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/shop', label: t.nav.shop },
    { to: '/collections', label: t.nav.collections },
    { to: '/about', label: t.nav.about },
    { to: '/faq', label: t.nav.faq },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-foreground text-background text-center py-2 px-4">
        <p className="text-xs tracking-[0.15em] uppercase font-body">
          Tradition, softness, and everyday luxury
        </p>
      </div>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link to="/" className="font-heading text-xl md:text-2xl tracking-wide text-foreground">
            Bigue Allure
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`label-text transition-colors hover:text-foreground ${
                  location.pathname === link.to ? 'text-foreground' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <LanguageSwitcher />
            <button onClick={() => setSearchOpen(true)} aria-label={t.nav.search} className="text-foreground/70 hover:text-foreground transition-colors">
              <Search size={18} />
            </button>
            <Link to="/wishlist" aria-label={t.common.wishlist} className="hidden md:block text-foreground/70 hover:text-foreground transition-colors">
              <User size={18} />
            </Link>
            <button onClick={() => setCartOpen(true)} aria-label={t.nav.cart} className="relative text-foreground/70 hover:text-foreground transition-colors">
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-body">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-border bg-background fade-in">
            <div className="py-4 px-5 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 label-text hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/wishlist" onClick={() => setMobileOpen(false)} className="block py-3 label-text hover:text-foreground transition-colors">
                {t.common.wishlist}
              </Link>
            </div>
          </nav>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer open={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
