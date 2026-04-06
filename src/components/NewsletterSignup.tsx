import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface NewsletterSignupProps {
  variant?: 'default' | 'footer';
}

export function NewsletterSignup({ variant = 'default' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  if (submitted) {
    return <p className={`text-sm font-body ${variant === 'footer' ? 'text-background/60' : 'text-muted-foreground'}`}>Thank you for subscribing ✨</p>;
  }

  const isFooter = variant === 'footer';

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder={t.common.emailPlaceholder}
        required
        className={`w-full px-4 py-3 text-sm font-body border outline-none transition-colors ${
          isFooter
            ? 'bg-transparent border-background/20 text-background placeholder:text-background/40 focus:border-background/40'
            : 'bg-transparent border-border text-foreground placeholder:text-muted-foreground focus:border-primary'
        }`}
      />
      <button type="submit" className={`w-full py-3 text-xs font-body tracking-widest uppercase transition-all ${
        isFooter
          ? 'bg-background/10 text-background hover:bg-background/20'
          : 'btn-primary'
      }`}>
        {t.common.subscribe}
      </button>
    </form>
  );
}
