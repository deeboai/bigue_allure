import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Heart } from 'lucide-react';

const Wishlist = () => {
  const { t } = useLanguage();

  return (
    <div className="section-padding py-20 text-center max-w-lg mx-auto">
      <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center mb-6">
        <Heart size={28} className="text-primary" />
      </div>
      <h1 className="heading-xl mb-4">{t.common.wishlist}</h1>
      <p className="body-lg mb-8">Your wishlist is empty. Browse our collections and save your favourite pieces for later.</p>
      <Link to="/shop" className="btn-primary">{t.hero.shopNow}</Link>
    </div>
  );
};

export default Wishlist;
