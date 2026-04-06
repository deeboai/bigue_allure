import { useLanguage } from '@/context/LanguageContext';
import { languageNames, type Language } from '@/lib/i18n';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className="bg-transparent text-foreground/70 text-xs font-body tracking-wider uppercase cursor-pointer border-none outline-none appearance-none pr-1"
      aria-label="Language"
    >
      {(Object.keys(languageNames) as Language[]).map(lang => (
        <option key={lang} value={lang} className="text-foreground bg-background">
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
