export type Language = 'en' | 'fr' | 'wo';

export interface TranslationKeys {
  nav: {
    home: string;
    shop: string;
    collections: string;
    about: string;
    faq: string;
    contact: string;
    search: string;
    cart: string;
    account: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    shopNow: string;
    exploreCollections: string;
  };
  collections: {
    bathBody: string;
    waistBeads: string;
    homeFragrance: string;
    sheaButter: string;
    featured: string;
    shopAll: string;
    viewCollection: string;
  };
  product: {
    addToCart: string;
    buyNow: string;
    description: string;
    howToUse: string;
    ingredients: string;
    shippingReturns: string;
    careInstructions: string;
    youMayAlsoLike: string;
    quantity: string;
    selectVariant: string;
  };
  common: {
    learnMore: string;
    viewAll: string;
    newsletter: string;
    newsletterCta: string;
    emailPlaceholder: string;
    subscribe: string;
    bestSellers: string;
    ourStory: string;
    whyCustomersLove: string;
    joinWorld: string;
    followUs: string;
    quickLinks: string;
    policies: string;
    shippingPolicy: string;
    returnsPolicy: string;
    privacyPolicy: string;
    termsOfService: string;
    allRightsReserved: string;
    sortBy: string;
    filterBy: string;
    featured: string;
    newest: string;
    priceLowHigh: string;
    priceHighLow: string;
    noResults: string;
    searchPlaceholder: string;
    close: string;
    backToShop: string;
    checkout: string;
    subtotal: string;
    total: string;
    emptyCart: string;
    continueShopping: string;
    removeItem: string;
    orderConfirmed: string;
    thankYou: string;
    wishlist: string;
  };
}

const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: { home: 'Home', shop: 'Shop', collections: 'Collections', about: 'About', faq: 'FAQ', contact: 'Contact', search: 'Search', cart: 'Cart', account: 'Account' },
    hero: {
      headline: 'Rooted in Senegalese Beauty Traditions. Crafted for Modern Self-Care.',
      subheadline: 'Bigue Allure brings together bath, body, fragrance, and shea butter essentials inspired by rituals passed down through generations.',
      shopNow: 'Shop Now',
      exploreCollections: 'Explore Collections',
    },
    collections: { bathBody: 'Bath & Body', waistBeads: 'Waist Beads', homeFragrance: 'Home Fragrance', sheaButter: 'Shea Butter Collection', featured: 'Featured Collections', shopAll: 'Shop All', viewCollection: 'View Collection' },
    product: { addToCart: 'Add to Cart', buyNow: 'Buy Now', description: 'Description', howToUse: 'How to Use', ingredients: 'Ingredients & Materials', shippingReturns: 'Shipping & Returns', careInstructions: 'Care Instructions', youMayAlsoLike: 'You May Also Like', quantity: 'Quantity', selectVariant: 'Select' },
    common: {
      learnMore: 'Learn More', viewAll: 'View All', newsletter: 'Newsletter', newsletterCta: 'Join the world of Bigue Allure', emailPlaceholder: 'Enter your email', subscribe: 'Subscribe',
      bestSellers: 'Best Sellers', ourStory: 'Our Story', whyCustomersLove: 'Why Customers Love Bigue Allure', joinWorld: 'Join the World of Bigue Allure',
      followUs: 'Follow Us', quickLinks: 'Quick Links', policies: 'Policies', shippingPolicy: 'Shipping Policy', returnsPolicy: 'Returns Policy', privacyPolicy: 'Privacy Policy', termsOfService: 'Terms of Service',
      allRightsReserved: 'All rights reserved', sortBy: 'Sort by', filterBy: 'Filter by', featured: 'Featured', newest: 'Newest', priceLowHigh: 'Price: Low to High', priceHighLow: 'Price: High to Low',
      noResults: 'No products found', searchPlaceholder: 'Search products...', close: 'Close', backToShop: 'Back to Shop', checkout: 'Checkout',
      subtotal: 'Subtotal', total: 'Total', emptyCart: 'Your cart is empty', continueShopping: 'Continue Shopping', removeItem: 'Remove',
      orderConfirmed: 'Order Confirmed', thankYou: 'Thank you for your order!', wishlist: 'Wishlist',
    },
  },
  fr: {
    nav: { home: 'Accueil', shop: 'Boutique', collections: 'Collections', about: 'À propos', faq: 'FAQ', contact: 'Contact', search: 'Rechercher', cart: 'Panier', account: 'Compte' },
    hero: {
      headline: 'Enraciné dans les traditions de beauté sénégalaises. Conçu pour le bien-être moderne.',
      subheadline: 'Bigue Allure réunit bain, corps, parfum et essentiels au beurre de karité inspirés de rituels transmis de génération en génération.',
      shopNow: 'Acheter',
      exploreCollections: 'Explorer les collections',
    },
    collections: { bathBody: 'Bain & Corps', waistBeads: 'Bine Bine', homeFragrance: 'Parfum d\'intérieur', sheaButter: 'Collection Karité', featured: 'Collections vedettes', shopAll: 'Tout voir', viewCollection: 'Voir la collection' },
    product: { addToCart: 'Ajouter au panier', buyNow: 'Acheter maintenant', description: 'Description', howToUse: 'Mode d\'emploi', ingredients: 'Ingrédients & Matériaux', shippingReturns: 'Livraison & Retours', careInstructions: 'Entretien', youMayAlsoLike: 'Vous aimerez aussi', quantity: 'Quantité', selectVariant: 'Choisir' },
    common: {
      learnMore: 'En savoir plus', viewAll: 'Tout voir', newsletter: 'Newsletter', newsletterCta: 'Rejoignez l\'univers Bigue Allure', emailPlaceholder: 'Votre adresse email', subscribe: 'S\'inscrire',
      bestSellers: 'Meilleures ventes', ourStory: 'Notre histoire', whyCustomersLove: 'Pourquoi nos clientes adorent Bigue Allure', joinWorld: 'Rejoignez l\'univers Bigue Allure',
      followUs: 'Suivez-nous', quickLinks: 'Liens rapides', policies: 'Politiques', shippingPolicy: 'Politique de livraison', returnsPolicy: 'Politique de retours', privacyPolicy: 'Politique de confidentialité', termsOfService: 'Conditions générales',
      allRightsReserved: 'Tous droits réservés', sortBy: 'Trier par', filterBy: 'Filtrer par', featured: 'En vedette', newest: 'Nouveautés', priceLowHigh: 'Prix croissant', priceHighLow: 'Prix décroissant',
      noResults: 'Aucun produit trouvé', searchPlaceholder: 'Rechercher...', close: 'Fermer', backToShop: 'Retour à la boutique', checkout: 'Paiement',
      subtotal: 'Sous-total', total: 'Total', emptyCart: 'Votre panier est vide', continueShopping: 'Continuer vos achats', removeItem: 'Supprimer',
      orderConfirmed: 'Commande confirmée', thankYou: 'Merci pour votre commande !', wishlist: 'Liste de souhaits',
    },
  },
  wo: {
    nav: { home: 'Kër', shop: 'Jënd', collections: 'Mbooleem', about: 'Ci sunu biir', faq: 'Laaj', contact: 'Jokkoo', search: 'Wut', cart: 'Saaret', account: 'Sàmm' },
    hero: {
      headline: 'Dallu ci njàng rafet Senegaal. Defar ngir moy suuf tey.',
      subheadline: 'Bigue Allure daje na ngelaw, yaram, sàng ak beurre de karité yu inspiré ci aada yu jiitu ñu.',
      shopNow: 'Jënd léegi',
      exploreCollections: 'Xool mbooleem yi',
    },
    collections: { bathBody: 'Sangu & Yaram', waistBeads: 'Bine Bine', homeFragrance: 'Sàng kër', sheaButter: 'Mbooleem Karité', featured: 'Mbooleem yu tànk', shopAll: 'Xool lépp', viewCollection: 'Xool mbooleem bi' },
    product: { addToCart: 'Yokk ci saaret bi', buyNow: 'Jënd léegi', description: 'Ndefu', howToUse: 'Naka lañu koy jëfandikoo', ingredients: 'Ay jëfandikukaay', shippingReturns: 'Yóbbu & Dellu', careInstructions: 'Naka lay atte', youMayAlsoLike: 'Dinga bëgg itam', quantity: 'Lim', selectVariant: 'Tànn' },
    common: {
      learnMore: 'Xam lu ëpp', viewAll: 'Xool lépp', newsletter: 'Xibaar', newsletterCta: 'Dugg ci àdduna Bigue Allure', emailPlaceholder: 'Sa email', subscribe: 'Bindu',
      bestSellers: 'Yu gëna jënd', ourStory: 'Sunu taariix', whyCustomersLove: 'Loolu tax jëndkat yi bëgg Bigue Allure', joinWorld: 'Dugg ci àdduna Bigue Allure',
      followUs: 'Topp nu', quickLinks: 'Lëkkalekaay gaaw', policies: 'Politig', shippingPolicy: 'Politig yóbbu', returnsPolicy: 'Politig dellu', privacyPolicy: 'Politig sutura', termsOfService: 'Cër',
      allRightsReserved: 'Sañ-sañ yépp ñu ko moom', sortBy: 'Tëral ci', filterBy: 'Tànn ci', featured: 'Yu tànk', newest: 'Yu bees', priceLowHigh: 'Njëg: suuf-kaw', priceHighLow: 'Njëg: kaw-suuf',
      noResults: 'Amul dara', searchPlaceholder: 'Wut...', close: 'Tëj', backToShop: 'Dellu ci bitik bi', checkout: 'Fay',
      subtotal: 'Tollu', total: 'Tollu', emptyCart: 'Sa saaret bi amul dara', continueShopping: 'Kontine jënd', removeItem: 'Jéel',
      orderConfirmed: 'Commande bi dëgg na', thankYou: 'Jërëjëf ci sa commande!', wishlist: 'Limu soow',
    },
  },
};

export function getTranslations(lang: Language): TranslationKeys {
  return translations[lang];
}

export const languageNames: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  wo: 'Wolof',
};
