import { useState } from 'react';
import { X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { t } = useLanguage();

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      onClose();
      setQuery('');
    }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm fade-in" onClick={onClose}>
      <div className="bg-background w-full p-6 md:p-10 slide-up" onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex items-center gap-4">
          <Search size={20} className="text-muted-foreground flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t.common.searchPlaceholder}
            className="flex-1 bg-transparent text-lg font-body font-light text-foreground placeholder:text-muted-foreground outline-none"
            autoFocus
          />
          <button type="button" onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
