const PRODUCT_ASSET_ROOT = "/images/products";

export interface ProductVariant {
  id: string;
  name: string;
  swatch?: string;
  inStock: boolean;
  images: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  collection: string;
  collectionSlug: string;
  shortDescription: string;
  longDescription: string;
  priceCents: number;
  priceLabel?: string;
  bundleSize?: number;
  minimumQuantity?: number;
  quantityStep?: number;
  requiresConfiguration?: boolean;
  images: string[];
  variants?: ProductVariant[];
  ingredients?: string;
  howToUse?: string;
  careInstructions?: string;
  safetyNotes?: string[];
  isFeatured: boolean;
  isBestSeller: boolean;
  tags: string[];
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

const bathNetAsset = (fileName: string) => `${PRODUCT_ASSET_ROOT}/bath-net/${fileName}`;
const waistBeadAsset = (fileName: string) => `${PRODUCT_ASSET_ROOT}/waist-beads/${fileName}`;
const oilBurnerAsset = (fileName: string) => `${PRODUCT_ASSET_ROOT}/oil-burner/${fileName}`;
const oilAsset = (fileName: string) => `${PRODUCT_ASSET_ROOT}/oils/${fileName}`;
const sheaAsset = (fileName: string) => `${PRODUCT_ASSET_ROOT}/shea/${fileName}`;
const setAsset = (fileName: string) => `${PRODUCT_ASSET_ROOT}/set/${fileName}`;

// These collection records drive collection cards and collection routes.
export const collections: Collection[] = [
  {
    id: "bath-body",
    slug: "bath-body",
    name: "Bath & Body",
    description: "Elevated essentials for your daily bathing ritual. Gentle on the skin, rich in tradition.",
    image: "",
    productCount: 1,
  },
  {
    id: "waist-beads",
    slug: "waist-beads",
    name: "Waist Beads",
    description: "Handcrafted African waist beads — symbols of femininity, adornment, and personal expression.",
    image: "",
    productCount: 1,
  },
  {
    id: "home-fragrance",
    slug: "home-fragrance",
    name: "Home Fragrance",
    description: "Transform your space into a sanctuary. Aroma oils and burners crafted for warmth and ambiance.",
    image: "",
    productCount: 6,
  },
  {
    id: "shea-butter",
    slug: "shea-butter",
    name: "Shea Butter Collection",
    description: "Pure, nourishing shea butter blends for glowing skin, healthy hair, and soothing care.",
    image: "",
    productCount: 3,
  },
];

export const products: Product[] = [
  {
    id: "exfoliating-bath-net",
    slug: "exfoliating-bath-net",
    name: "Exfoliating Bath Net",
    collection: "Bath & Body",
    collectionSlug: "bath-body",
    shortDescription: "A quick-drying African bath net that deeply cleanses, lifts dull skin, and elevates the everyday shower.",
    longDescription:
      "Inspired by West African bathing rituals, this exfoliating bath net turns daily cleansing into a richer, more intentional moment of care. The open-weave texture creates a generous lather, helps buff away buildup, and dries quickly between uses so it stays fresher longer.\n\nChoose from a curated palette of vibrant colors that still feel at home within the soft, elevated tone of the Bigue Allure collection.",
    priceCents: 999,
    images: [
      bathNetAsset("collection-story.png"),
    ],
    variants: [
      {
        id: "crimson-red",
        name: "Crimson Red",
        swatch: "#D0171A",
        inStock: true,
        images: [
          bathNetAsset("crimson-red.png"),
          bathNetAsset("collection-story.png"),
        ],
      },
      {
        id: "royal-purple",
        name: "Royal Purple",
        swatch: "#5F2D91",
        inStock: true,
        images: [
          bathNetAsset("royal-purple.png"),
          bathNetAsset("collection-story.png"),
        ],
      },
      {
        id: "lagoon-turquoise",
        name: "Lagoon Turquoise",
        swatch: "#31C8D7",
        inStock: true,
        images: [
          bathNetAsset("lagoon-turquoise.png"),
          bathNetAsset("collection-story.png"),
        ],
      },
      {
        id: "ocean-deep-blue",
        name: "Ocean Deep Blue",
        swatch: "#0A52A3",
        inStock: true,
        images: [
          bathNetAsset("ocean-deep-blue.png"),
          bathNetAsset("collection-story.png"),
        ],
      },
      {
        id: "sunlit-yellow",
        name: "Sunlit Yellow",
        swatch: "#EBCB24",
        inStock: true,
        images: [
          bathNetAsset("sunlit-yellow.png"),
          bathNetAsset("collection-story.png"),
        ],
      },
      {
        id: "fresh-leaf-green",
        name: "Fresh Leaf Green",
        swatch: "#7CC43F",
        inStock: true,
        images: [
          bathNetAsset("fresh-leaf-green.png"),
          bathNetAsset("collection-story.png"),
        ],
      },
      {
        id: "dusty-blush-pink",
        name: "Dusty Blush Pink",
        swatch: "#D93A8C",
        inStock: true,
        images: [
          bathNetAsset("dusty-blush-pink.png"),
          bathNetAsset("collection-story.png"),
        ],
      },
      {
        id: "sunset-orange",
        name: "Sunset Orange",
        swatch: "#F28722",
        inStock: true,
        images: [
          bathNetAsset("sunset-orange.png"),
          bathNetAsset("collection-story.png"),
        ],
      },
    ],
    howToUse:
      "Soak in hot water for 10 minutes before first use.\n\nApply soap or body wash and scrub gently in circular motions.\n\nRinse thoroughly and hang to dry after each use.",
    careInstructions:
      "Rinse after every use and hang in an airy spot so the net dries fully.\n\nReplace every few months once the weave begins to lose its texture.",
    isFeatured: true,
    isBestSeller: true,
    tags: ["bath", "exfoliant", "body", "bath net"],
  },
  {
    id: "bine-bine-waist-beads",
    slug: "bine-bine-waist-beads",
    name: "Bine Bine African Handmade Waist Beads",
    collection: "Waist Beads",
    collectionSlug: "waist-beads",
    shortDescription: "Handmade African waist beads sold in pairs and designed to celebrate color, culture, and personal expression.",
    longDescription:
      "These handmade waist beads are rooted in West African adornment traditions and designed to sit close to the body as a quiet expression of beauty, confidence, and self-connection. Each strand adds color, rhythm, and intention to the way you dress.\n\nThis style is sold as a pair so you can wear them layered, mix tones, or keep a second strand ready for a different mood.",
    priceCents: 499,
    priceLabel: "2 for $4.99",
    requiresConfiguration: true,
    minimumQuantity: 1,
    quantityStep: 1,
    images: [
      waistBeadAsset("lifestyle-example.png"),
    ],
    variants: [
      {
        id: "classic-red",
        name: "Classic Red",
        swatch: "#B61919",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("classic-red.png")],
      },
      {
        id: "hot-pink",
        name: "Hot Pink",
        swatch: "#E547A9",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("hot-pink.png")],
      },
      {
        id: "sunset-orange",
        name: "Sunset Orange",
        swatch: "#F08C22",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("sunset-orange.png")],
      },
      {
        id: "sunlit-gold",
        name: "Sunlit Gold",
        swatch: "#E5C33A",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("sunlit-gold.png")],
      },
      {
        id: "lagoon-light-blue",
        name: "Lagoon Light Blue",
        swatch: "#7FC4E8",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("lagoon-light-blue.png")],
      },
      {
        id: "midnight-blue",
        name: "Midnight Blue",
        swatch: "#315AB8",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("midnight-blue.png")],
      },
      {
        id: "royal-purple",
        name: "Royal Purple",
        swatch: "#6B39B5",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("royal-purple.png")],
      },
      {
        id: "obsidian-black",
        name: "Obsidian Black",
        swatch: "#292529",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("obsidian-black.png")],
      },
      {
        id: "verdant-green",
        name: "Verdant Green",
        swatch: "#4E8C58",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("verdant-green.png")],
      },
      {
        id: "soft-lavender",
        name: "Soft Lavender",
        swatch: "#C39ADE",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("soft-lavender.png")],
      },
      {
        id: "pearl-white",
        name: "Pearl White",
        swatch: "#F1ECE6",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("pearl-white.png")],
      },
      {
        id: "clear-white",
        name: "Clear White",
        swatch: "linear-gradient(135deg, #f8f6f3 0%, #e8e6e3 40%, #ffffff 100%)",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("clear-white.png")],
      },
      {
        id: "champagne-glow",
        name: "Champagne Glow",
        swatch: "#D6B26C",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("champagne-glow.png")],
      },
      {
        id: "stone-grey",
        name: "Stone Grey",
        swatch: "#7A7A82",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("stone-grey.png")],
      },
      {
        id: "burgundy-wine",
        name: "Burgundy Wine",
        swatch: "#7B2333",
        inStock: true,
        images: [waistBeadAsset("lifestyle-example.png"), waistBeadAsset("burgundy-wine.png")],
      },
    ],
    howToUse:
      "Choose two colors to create your pair, then tie each strand at your preferred position around the waist.\n\nWear them layered together, styled separately, or alternate them depending on your mood.\n\nTrim any excess thread after securing the fit.",
    careInstructions:
      "Avoid prolonged exposure to water, perfume, and oils so the finish stays bright.\n\nStore flat or loosely coiled when not in use.",
    isFeatured: true,
    isBestSeller: true,
    tags: ["beads", "jewelry", "tradition", "waist beads"],
  },
  {
    id: "love-aroma-oil-burner",
    slug: "love-aroma-oil-burner",
    name: "Love Aroma Oil Burner",
    collection: "Home Fragrance",
    collectionSlug: "home-fragrance",
    shortDescription: "A glowing ceramic burner that fills the room with fragrance, warmth, and a soft romantic light.",
    longDescription:
      "Create a warm and elegant atmosphere with the Bigue Allure Love Oil Burner. This beautiful ceramic burner softly glows when lit, casting a delicate light through the heart-shaped design and the word LOVE to create a relaxing, romantic ambiance in any room.\n\nPerfect for essential oils, fragrance oils, or wax melts, it gently releases your favorite scents while adding a polished decorative touch to your space. Whether placed in the living room, bedroom, or self-care corner, it transforms ordinary moments into a calming sensory experience.\n\n• Elegant ceramic design\n• Soft glowing heart cutouts\n• Perfect for essential oils or wax melts\n• Creates a relaxing and romantic atmosphere\n• Ideal for home décor or gifting",
    priceCents: 999,
    images: [
      oilBurnerAsset("white-hero.png"),
    ],
    variants: [
      {
        id: "porcelain-white",
        name: "Porcelain White",
        swatch: "#F4F1ED",
        inStock: true,
        images: [
          oilBurnerAsset("white-hero.png"),
        ],
      },
      {
        id: "white-and-gold",
        name: "White & Gold",
        swatch: "linear-gradient(135deg, #F5F1EC 0%, #F5F1EC 52%, #D8B25A 52%, #B98B28 100%)",
        inStock: true,
        images: [
          oilBurnerAsset("gold-hero.png"),
        ],
      },
    ],
    howToUse:
      "Place a tealight candle in the base.\n\nAdd water with a few drops of fragrance oil, or place a small wax melt in the top dish.\n\nLight the candle and allow the scent to warm the room gradually.",
    careInstructions:
      "Allow the burner to cool fully before cleaning.\n\nWipe gently with a soft cloth and avoid overfilling the dish.",
    safetyNotes: [
      "Use on a heat-safe surface.",
      "Never leave a lit burner unattended.",
    ],
    isFeatured: true,
    isBestSeller: false,
    tags: ["fragrance", "home", "burner", "wax melts"],
  },
  {
    id: "bigus-love-and-relax-set",
    slug: "bigus-love-and-relax-set",
    name: "The Bigus Allure Love & Relax Set",
    collection: "Home Fragrance",
    collectionSlug: "home-fragrance",
    shortDescription: "A romantic self-care set that pairs home fragrance, body care, and candlelight in one warm ritual.",
    longDescription:
      "Relax, unwind, and create a warm, romantic atmosphere with the Bigus Allure Love & Relax Set. This curated combination of home fragrance and body care is designed for self-care nights, romantic evenings, thoughtful gifting, and anyone who loves a softer home ritual.\n\nThis set includes:\n• 1 Love Aroma Burner\n• 1 Velvet Sabar Fragrance Oil (15 ml)\n• 1 Abdou Shea Butter Massage Cream\n• 4 Tealight Candles\n\nPerfect for:\n• Self-care nights\n• Romantic evenings\n• Gifts\n• Relaxation\n• Home fragrance lovers",
    priceCents: 3999,
    requiresConfiguration: true,
    images: [
      setAsset("set-hero.png"),
      setAsset("candles.png"),
    ],
    variants: [
      {
        id: "porcelain-white-burner",
        name: "Porcelain White Burner",
        swatch: "#F4F1ED",
        inStock: true,
        images: [
          oilBurnerAsset("white-hero.png"),
          setAsset("set-hero.png"),
          setAsset("candles.png"),
        ],
      },
      {
        id: "white-and-gold-burner",
        name: "White & Gold Burner",
        swatch: "linear-gradient(135deg, #F5F1EC 0%, #F5F1EC 52%, #D8B25A 52%, #B98B28 100%)",
        inStock: true,
        images: [
          oilBurnerAsset("gold-hero.png"),
          setAsset("set-hero.png"),
          setAsset("candles.png"),
        ],
      },
    ],
    howToUse:
      "Light the tealight candle and place it inside the burner.\n\nAdd water and a few drops of fragrance oil to the top dish.\n\nUse a small amount of Abdou massage cream and massage into the skin.\n\nRelax and enjoy the atmosphere.",
    safetyNotes: [
      "Burner gets hot when in use. Do not touch while candle is lit.",
    ],
    isFeatured: true,
    isBestSeller: false,
    tags: ["gift set", "self-care", "burner", "fragrance", "candles", "massage cream"],
  },
  {
    id: "velvet-sabar-bakhour",
    slug: "velvet-sabar-bakhour",
    name: "Velvet Sabar Bakhour Fragrance Oil",
    collection: "Home Fragrance",
    collectionSlug: "home-fragrance",
    shortDescription: "A warm, sensual bakhour blend inspired by the deep rhythm and velvety glow of a Senegalese sabar night.",
    longDescription:
      "Velvet Sabar is a sensual rhythm of warmth and smoke, inspired by the deep heartbeat of the Senegalese sabar drum. Rich bakhour notes unfold into soft woods and golden resins, filling the space with an intimate, velvety glow.\n\nBold yet smooth, this fragrance creates an atmosphere of quiet confidence and irresistible allure — ideal for evenings when you want the room to feel warm, elegant, and softly magnetic.",
    priceCents: 599,
    images: [
      oilAsset("velvet-sabar-bottle.png"),
    ],
    ingredients: "Luxury bakhour fragrance oil blend.",
    howToUse:
      "Add 3–5 drops to the water dish of your aroma burner.\n\nAdjust the number of drops to suit the size of the room and the mood you want to create.",
    safetyNotes: [
      "For aroma burners only.",
      "Do not apply to skin.",
      "Keep away from children and pets.",
    ],
    isFeatured: false,
    isBestSeller: true,
    tags: ["fragrance", "oil", "bakhour", "velvet sabar"],
  },
  {
    id: "nubian-nights-bakhour",
    slug: "nubian-nights-bakhour",
    name: "Nubian Nights Bakhour Fragrance Oil",
    collection: "Home Fragrance",
    collectionSlug: "home-fragrance",
    shortDescription: "A dark, elegant bakhour oil with smoky amber depth and a lingering moonlit finish.",
    longDescription:
      "Dark, mysterious, and captivating, Nubian Nights evokes warm evenings under a moonlit sky. Deep smoky bakhour blends with rich amber undertones to create a scent that lingers long after the flame fades.\n\nLuxurious and seductive, it transforms any room into a space of elegance, stillness, and night-time indulgence.",
    priceCents: 599,
    images: [
      oilAsset("nubian-nights-bottle.png"),
    ],
    ingredients: "Luxury bakhour fragrance oil blend.",
    howToUse:
      "Add 3–5 drops to the water dish of your aroma burner.\n\nUse fewer drops for a softer veil of scent or more for a richer evening atmosphere.",
    safetyNotes: [
      "For aroma burners only.",
      "Do not apply to skin.",
      "Keep away from children and pets.",
    ],
    isFeatured: false,
    isBestSeller: false,
    tags: ["fragrance", "oil", "bakhour", "nubian nights"],
  },
  {
    id: "ember-kiss-bakhour",
    slug: "ember-kiss-bakhour",
    name: "Ember Kiss Bakhour Fragrance Oil",
    collection: "Home Fragrance",
    collectionSlug: "home-fragrance",
    shortDescription: "A glowing bakhour oil that wraps the room in comfort, warmth, and a softly sensual finish.",
    longDescription:
      "Ember Kiss is warm, glowing, and undeniably sensual. Smoldering bakhour notes meet soft resinous warmth, like embers gently kissed by the night air.\n\nThis fragrance wraps your space in comfort and passion, creating a cozy yet seductive ambiance that feels especially beautiful for quiet evenings and intimate moments.",
    priceCents: 599,
    images: [
      oilAsset("ember-kiss-bottle.png"),
    ],
    ingredients: "Luxury bakhour fragrance oil blend.",
    howToUse:
      "Add 3–5 drops to the water dish of your aroma burner.\n\nLet the warmth build slowly so the fragrance opens with a softer, glowing finish.",
    safetyNotes: [
      "For aroma burners only.",
      "Do not apply to skin.",
      "Keep away from children and pets.",
    ],
    isFeatured: false,
    isBestSeller: false,
    tags: ["fragrance", "oil", "bakhour", "ember kiss"],
  },
  {
    id: "silk-teranga-bakhour",
    slug: "silk-teranga-bakhour",
    name: "Silk Teranga Bakhour Fragrance Oil",
    collection: "Home Fragrance",
    collectionSlug: "home-fragrance",
    shortDescription: "A smooth, welcoming bakhour fragrance inspired by Senegal’s spirit of grace, warmth, and hospitality.",
    longDescription:
      "Silk Teranga is a soft expression of warmth and welcome. Inspired by Senegal’s spirit of teranga — hospitality and grace — this fragrance blends gentle bakhour with smooth, comforting notes.\n\nElegant and inviting, it leaves the air feeling serene, luxurious, and beautifully balanced.",
    priceCents: 599,
    images: [
      oilAsset("silk-teranga-bottle.png"),
    ],
    ingredients: "Luxury bakhour fragrance oil blend.",
    howToUse:
      "Add 3–5 drops to the water dish of your aroma burner.\n\nRefresh with a few extra drops whenever you want the scent to feel softer or more welcoming.",
    safetyNotes: [
      "For aroma burners only.",
      "Do not apply to skin.",
      "Keep away from children and pets.",
    ],
    isFeatured: false,
    isBestSeller: false,
    tags: ["fragrance", "oil", "bakhour", "silk teranga"],
  },
  {
    id: "amy-shea-butter-glow",
    slug: "amy-shea-butter-glow",
    name: "Amy Shea Butter Glow Cream",
    collection: "Shea Butter Collection",
    collectionSlug: "shea-butter",
    shortDescription: "A rich glow cream inspired by the care traditions of Senegalese mothers and grandmothers.",
    longDescription:
      "Amy Shea Butter Glow Cream is a rich, nourishing blend made with shea butter and natural oils to deeply moisturize, soften, and give the skin a healthy, radiant glow. Inspired by the beauty traditions passed down from our mothers and grandmothers in Senegal, this cream is made to care for the skin with simple, natural ingredients loved for generations.\n\nPerfect for daily use on the body, hands, and feet, it helps:\n• Moisturize dry skin\n• Leave skin smooth and radiant\n• Turn ordinary skincare into a softer daily ritual",
    priceCents: 1999,
    images: [
      sheaAsset("amy-current.png"),
    ],
    ingredients: "Shea butter, natural oils, and skin-softening emollients.",
    howToUse:
      "Massage into clean skin daily, especially after bathing.\n\nFocus on dry areas such as elbows, hands, feet, and knees for the most lasting glow.",
    isFeatured: true,
    isBestSeller: true,
    tags: ["shea", "cream", "body", "glow"],
  },
  {
    id: "abdou-shea-butter-massage",
    slug: "abdou-shea-butter-massage",
    name: "Abdou Shea Butter Massage Cream",
    collection: "Shea Butter Collection",
    collectionSlug: "shea-butter",
    shortDescription: "A deeply nourishing massage cream created for tired bodies, evening unwinding, and restorative touch.",
    longDescription:
      "Abdou Shea Butter Massage was inspired by my husband after his long, hard days of work. I wanted to create something that could help him relax, unwind, and care for his skin at the end of the day.\n\nMade with shea butter and nourishing oils, this rich massage butter melts into the skin, leaving it soft, moisturized, and comfortable while creating a deeply relaxing massage experience. Inspired by the care traditions passed down from our mothers and grandmothers in Senegal, it is made for rest, massage, and self-care.\n\nPerfect for:\n• After work massage\n• Tired body care\n• Dry skin relief\n• Night routine rituals\n• Intentional self-care moments",
    priceCents: 1999,
    images: [
      sheaAsset("abdou-canonical.png"),
    ],
    ingredients: "Shea butter and nourishing botanical oils.",
    howToUse:
      "Warm a small amount between the palms and massage into skin using slow, even strokes.\n\nUse after a shower, before rest, or any time the body feels tired and in need of comfort.",
    isFeatured: false,
    isBestSeller: false,
    tags: ["shea", "cream", "massage", "body"],
  },
  {
    id: "awa-shea-butter-hair",
    slug: "awa-shea-butter-hair",
    name: "Awa Shea Butter Hair Cream",
    collection: "Shea Butter Collection",
    collectionSlug: "shea-butter",
    shortDescription: "A whipped shea and oil blend made to nourish dry hair, seal in moisture, and support protective styles.",
    longDescription:
      "Awa Shea Butter Hair Cream is a rich whipped blend made with shea butter, moringa oil, baobab oil, and citron to deeply moisturize, strengthen, and add shine to the hair. Inspired by the hair care traditions passed down from our mothers in Senegal, this nourishing cream helps seal in moisture, soften dry hair, and keep hair manageable and healthy-looking.\n\nPerfect for natural hair, braids, twists, and protective styles. A little goes a long way.",
    priceCents: 1999,
    images: [
      sheaAsset("awa-canonical.png"),
    ],
    ingredients: "Shea butter, moringa oil, baobab oil, and citron.",
    howToUse:
      "Apply a small amount to damp or dry hair and work it through the mid-lengths and ends.\n\nUse more sparingly on finer hair and build slowly as needed for braids, twists, or protective styling.",
    isFeatured: false,
    isBestSeller: false,
    tags: ["shea", "cream", "hair", "protective styles"],
  },
];

export function formatCurrency(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export function getConfigurationSelectionIds(variantId?: string): string[] {
  if (!variantId) {
    return [];
  }

  return variantId.split("__").filter(Boolean);
}

export function buildConfigurationId(selectionIds: string[]): string | undefined {
  const normalizedSelectionIds = selectionIds.filter(Boolean);

  if (normalizedSelectionIds.length === 0) {
    return undefined;
  }

  if (normalizedSelectionIds.length === 1) {
    return normalizedSelectionIds[0];
  }

  return normalizedSelectionIds.join("__");
}

export function getProductVariant(product: Product, variantId?: string): ProductVariant | undefined {
  if (!variantId) {
    return undefined;
  }

  return product.variants?.find((variant) => variant.id === variantId);
}

export function getProductVariantPreviewImage(product: Product, variantId?: string): string {
  const matchingVariant = getProductVariant(product, variantId);

  if (!matchingVariant) {
    return product.images[0];
  }

  // Waist beads keep the lifestyle image first in the gallery, so the color-specific image is the second frame.
  if (product.id === "bine-bine-waist-beads") {
    return matchingVariant.images[1] ?? matchingVariant.images[0] ?? product.images[0];
  }

  return matchingVariant.images[0] ?? product.images[0];
}

export function getProductDisplayPrice(product: Product): string {
  return product.priceLabel ?? formatCurrency(product.priceCents);
}

export function getProductMinimumQuantity(product: Product): number {
  return product.minimumQuantity ?? product.bundleSize ?? 1;
}

export function getProductQuantityStep(product: Product): number {
  return product.quantityStep ?? product.bundleSize ?? 1;
}

// The catalog stores priceCents as the cost of one sale unit.
// Most products sell per piece, while bundle products can opt into bundleSize.
export function getProductLinePriceCents(product: Product, quantity: number): number {
  const saleUnitQuantity = product.bundleSize ?? 1;
  const saleUnits = quantity / saleUnitQuantity;

  return Math.round(saleUnits * product.priceCents);
}

export function getProductLinePrice(product: Product, quantity: number): number {
  return getProductLinePriceCents(product, quantity) / 100;
}

export function getProductConfigurationLabel(product: Product, selectionIds: string[]): string | undefined {
  const normalizedSelectionIds = selectionIds.filter(Boolean);

  if (normalizedSelectionIds.length === 0) {
    return undefined;
  }

  if (product.id === "bine-bine-waist-beads") {
    const configuredVariants = normalizedSelectionIds
      .map((selectionId) => getProductVariant(product, selectionId))
      .filter((variant): variant is ProductVariant => Boolean(variant));

    if (configuredVariants.length === 0) {
      return undefined;
    }

    return configuredVariants.map((variant) => variant.name).join(" + ");
  }

  return getProductVariant(product, normalizedSelectionIds[0])?.name;
}

export function getProductConfigurationPreviewImages(product: Product, selectionIds: string[]): string[] {
  const normalizedSelectionIds = selectionIds.filter(Boolean);

  if (normalizedSelectionIds.length === 0) {
    return [product.images[0]];
  }

  return normalizedSelectionIds.map((selectionId) => getProductVariantPreviewImage(product, selectionId));
}

export function getProductConfigurationImage(product: Product, selectionIds: string[]): string {
  return getProductConfigurationPreviewImages(product, selectionIds)[0] ?? product.images[0];
}

export function getProductImages(product: Product, variantId?: string): string[] {
  const matchingVariant = product.variants?.find((variant) => variant.id === variantId);

  return matchingVariant?.images ?? product.images;
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((product) => product.collectionSlug === collectionSlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured);
}

export function getBestSellers(): Product[] {
  return products.filter((product) => product.isBestSeller);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}

export function searchProducts(query: string): Product[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return products.filter((product) =>
    product.name.toLowerCase().includes(normalizedQuery) ||
    product.shortDescription.toLowerCase().includes(normalizedQuery) ||
    product.longDescription.toLowerCase().includes(normalizedQuery) ||
    product.collection.toLowerCase().includes(normalizedQuery) ||
    product.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)) ||
    product.variants?.some((variant) => variant.name.toLowerCase().includes(normalizedQuery))
  );
}
