import { slugify } from "@/lib/utils";

export type Review = {
  name: string;
  title: string;
  rating: number;
  quote: string;
};

export type Category = {
  name: string;
  slug: string;
  description: string;
  hero: string;
  image: string;
  highlights: string[];
};

export type Product = {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: string;
  collection: "Featured" | "Best Seller" | "Trending";
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  longDescription: string;
  features: string[];
  specs: { label: string; value: string }[];
  image: string;
  gallery: string[];
  badge?: string;
  stock: "In Stock" | "Low Stock" | "Preorder";
  colors: string[];
  tags: string[];
  featuredReview: Review;
};

export const company = {
  name: "ONIFI VENTURES LLC",
  shortName: "ONIFI",
  addressLine1: "1209 MOUNTAIN ROAD PL NE #11336",
  cityStateZip: "ALBUQUERQUE, NM 87110",
  country: "United States",
  registeredState: "New Mexico, USA",
  businessType: "Limited Liability Company (LLC)",
  registeredAgent: "Registered Agents Inc (4424925BA)",
  registeredAgentAddress: "1209 MOUNTAIN ROAD PL NE, STE R, ALBUQUERQUE, NM 87110, United States",
  purpose: "Any and all lawful activities",
  email: "support@onifiventures.com",
  phone: "+1 (505) 555-0149"
};

export const categories: Category[] = [
  {
    name: "Beauty & Personal Care",
    slug: "beauty-personal-care",
    description: "Clean formulas, polished presentation, and self-care essentials curated for a premium daily ritual.",
    hero: "High-performance beauty staples with elegant textures, trusted ingredients, and giftable presentation.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Derm-inspired formulas", "Everyday luxury gifting", "Routine-friendly bundles"]
  },
  {
    name: "Baby Products",
    slug: "baby-products",
    description: "Trusted infant-care basics designed for comfort, safety, and convenience for modern families.",
    hero: "Gentle essentials for feeding, hydration, and daily care with a soft premium retail feel.",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Parent-approved comfort", "Travel-ready essentials", "Soft-touch packaging"]
  },
  {
    name: "Toys",
    slug: "toys",
    description: "Play-driven products that blend color, durability, and developmental value in premium layouts.",
    hero: "Colorful toys with strong shelf appeal, durable materials, and smart gifting potential.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Gift-friendly picks", "Creative learning play", "Premium playroom presentation"]
  },
  {
    name: "Health & Household",
    slug: "health-household",
    description: "Functional home and wellness essentials built around cleaner routines, storage, and peace of mind.",
    hero: "Practical household and wellness products merchandised like a modern American essentials brand.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Home wellness staples", "Everyday replenishment", "Organized-living solutions"]
  }
];

export const products: Product[] = [
  {
    id: "bp-01",
    sku: "ONI-BEA-101",
    name: "Aurelia Peptide Renewal Face Serum",
    slug: "aurelia-peptide-renewal-face-serum",
    category: "Beauty & Personal Care",
    collection: "Featured",
    price: 38,
    originalPrice: 46,
    rating: 4.8,
    reviews: 312,
    description: "A fast-absorbing peptide serum that helps smooth texture and boost visible radiance.",
    longDescription: "Aurelia Peptide Renewal Face Serum is designed for daily use in morning and evening routines. The lightweight formula layers well under moisturizer, supports a smoother-looking complexion, and gives premium skincare shoppers a polished starter serum with clear value.",
    features: ["Peptide and niacinamide blend", "Lightweight glass-dropper formula", "Fragrance-light finish", "Suitable for AM and PM use"],
    specs: [
      { label: "Size", value: "30 ml" },
      { label: "Skin Type", value: "Normal, dry, combination" },
      { label: "Texture", value: "Silky water-gel serum" },
      { label: "Free From", value: "Parabens and mineral oil" }
    ],
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "17% Off",
    stock: "In Stock",
    colors: ["Amber Glass", "Rose Gold Cap"],
    tags: ["Serum", "Radiance", "Skincare"],
    featuredReview: {
      name: "Mia T.",
      title: "Verified Buyer",
      rating: 5,
      quote: "It feels expensive, absorbs quickly, and my skin looks smoother under makeup."
    }
  },
  {
    id: "bp-02",
    sku: "ONI-BEA-102",
    name: "Citrabelle Vitamin C Day Cream",
    slug: "citrabelle-vitamin-c-day-cream",
    category: "Beauty & Personal Care",
    collection: "Best Seller",
    price: 29,
    rating: 4.7,
    reviews: 228,
    description: "A brightening daily cream with vitamin C and hydration support for a healthy glow.",
    longDescription: "Citrabelle Vitamin C Day Cream gives the storefront a highly recognizable hero product in the beauty category. It is positioned as a gentle daily cream with a bright, fresh finish that works well under sunscreen and makeup for customers building a simple morning regimen.",
    features: ["Vitamin C complex", "Soft satin finish", "Works under makeup", "Daily moisture barrier support"],
    specs: [
      { label: "Size", value: "50 ml" },
      { label: "Use", value: "Morning moisturizer" },
      { label: "Finish", value: "Soft satin" },
      { label: "Packaging", value: "Airless pump jar" }
    ],
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Best Seller",
    stock: "In Stock",
    colors: ["Pearl White"],
    tags: ["Vitamin C", "Day Cream", "Glow"],
    featuredReview: {
      name: "Jenna R.",
      title: "Verified Buyer",
      rating: 5,
      quote: "It gives me hydration without heaviness and leaves a nice healthy finish."
    }
  },
  {
    id: "bp-03",
    sku: "ONI-BEA-103",
    name: "Veloura Herbal Repair Hair Oil",
    slug: "veloura-herbal-repair-hair-oil",
    category: "Beauty & Personal Care",
    collection: "Trending",
    price: 24,
    originalPrice: 31,
    rating: 4.6,
    reviews: 174,
    description: "A nourishing scalp and hair oil with a glossy finish and lightweight feel.",
    longDescription: "Veloura Herbal Repair Hair Oil is merchandised as a versatile treatment for dry ends and scalp-care rituals. The bottle shape, amber tone, and ingredient story help the product feel premium while keeping the price point accessible for impulse add-ons.",
    features: ["Botanical oil blend", "Lightweight shine", "Scalp massage friendly", "Non-greasy finish"],
    specs: [
      { label: "Size", value: "100 ml" },
      { label: "Hair Type", value: "Dry, dull, textured" },
      { label: "Scent", value: "Soft botanical" },
      { label: "Use", value: "Pre-wash or finishing oil" }
    ],
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Trending",
    stock: "In Stock",
    colors: ["Honey Amber"],
    tags: ["Hair Oil", "Repair", "Shine"],
    featuredReview: {
      name: "Alina P.",
      title: "Verified Buyer",
      rating: 5,
      quote: "A little goes a long way and it makes my ends look polished instead of oily."
    }
  },
  {
    id: "bp-04",
    sku: "ONI-BEA-104",
    name: "Silkroot Balance Daily Shampoo",
    slug: "silkroot-balance-daily-shampoo",
    category: "Beauty & Personal Care",
    collection: "Featured",
    price: 22,
    rating: 4.5,
    reviews: 143,
    description: "A sulfate-free shampoo created for a gentle, everyday cleanse and soft finish.",
    longDescription: "Silkroot Balance Daily Shampoo supports a premium hair-care story with a clean bottle silhouette and easy repeat-purchase appeal. It is positioned for regular use and pairs naturally with the hair oil for cross-selling and bundle messaging.",
    features: ["Sulfate-free cleansing", "Soft lather", "Color-safe formula", "Daily-use positioning"],
    specs: [
      { label: "Size", value: "300 ml" },
      { label: "Formula", value: "Sulfate-free" },
      { label: "Hair Type", value: "All hair types" },
      { label: "Bottle", value: "Matte recycled PET" }
    ],
    image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80"
    ],
    stock: "In Stock",
    colors: ["Sand Beige"],
    tags: ["Shampoo", "Daily Care", "Hair"],
    featuredReview: {
      name: "Christina D.",
      title: "Verified Buyer",
      rating: 4,
      quote: "It cleans well without stripping and the bottle looks great in the shower."
    }
  },
  {
    id: "bp-05",
    sku: "ONI-BEA-105",
    name: "Lunelle Barrier Skin Moisturizer",
    slug: "lunelle-barrier-skin-moisturizer",
    category: "Beauty & Personal Care",
    collection: "Best Seller",
    price: 34,
    originalPrice: 40,
    rating: 4.9,
    reviews: 401,
    description: "A rich but breathable cream moisturizer focused on softness, comfort, and barrier care.",
    longDescription: "Lunelle Barrier Skin Moisturizer is one of the anchor products for the storefront. The positioning emphasizes comfort for dry or sensitive-feeling skin, while the packaging and copy support a high-trust, premium skincare merchandising approach.",
    features: ["Ceramide support", "Comfort cream texture", "Works day or night", "Fragrance-light routine staple"],
    specs: [
      { label: "Size", value: "50 ml" },
      { label: "Key Ingredient", value: "Ceramide complex" },
      { label: "Texture", value: "Cloud cream" },
      { label: "Best For", value: "Dry and sensitive-feeling skin" }
    ],
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Top Rated",
    stock: "Low Stock",
    colors: ["Soft Ivory"],
    tags: ["Moisturizer", "Barrier Care", "Sensitive Skin"],
    featuredReview: {
      name: "Tara S.",
      title: "Verified Buyer",
      rating: 5,
      quote: "This is the most dependable moisturizer I have used for dry patches and redness."
    }
  },
  {
    id: "bp-06",
    sku: "ONI-BEA-106",
    name: "Maison Velour Signature Perfume",
    slug: "maison-velour-signature-perfume",
    category: "Beauty & Personal Care",
    collection: "Trending",
    price: 62,
    rating: 4.7,
    reviews: 196,
    description: "A warm floral perfume with soft amber notes and a polished everyday luxury profile.",
    longDescription: "Maison Velour Signature Perfume brings a giftable, higher-ticket item into the beauty assortment. It is described as a wearable warm floral with enough sophistication for premium brand positioning without feeling inaccessible.",
    features: ["Warm floral profile", "Giftable presentation box", "Long-wear everyday scent", "Elegant vanity-ready bottle"],
    specs: [
      { label: "Size", value: "50 ml" },
      { label: "Fragrance Notes", value: "Amber, rose, white musk" },
      { label: "Format", value: "Eau de parfum" },
      { label: "Wear", value: "Day to evening" }
    ],
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Gift Pick",
    stock: "In Stock",
    colors: ["Blush Glass", "Gold Accent"],
    tags: ["Perfume", "Fragrance", "Giftable"],
    featuredReview: {
      name: "Nicole A.",
      title: "Verified Buyer",
      rating: 5,
      quote: "The bottle looks beautiful and the scent is elegant without being overpowering."
    }
  },
  {
    id: "bab-01",
    sku: "ONI-BAB-201",
    name: "CloudNest UltraSoft Baby Diapers",
    slug: "cloudnest-ultrasoft-baby-diapers",
    category: "Baby Products",
    collection: "Best Seller",
    price: 44,
    rating: 4.8,
    reviews: 287,
    description: "A value pack of soft, absorbent diapers with leak protection and flexible comfort.",
    longDescription: "CloudNest UltraSoft Baby Diapers are positioned as a dependable essential for repeat household purchasing. The listing emphasizes comfort, overnight absorbency, and a clean pack design that fits the premium storefront direction while staying practical.",
    features: ["12-hour absorbency", "Soft stretch waistband", "Wetness indicator", "Hypoallergenic lining"],
    specs: [
      { label: "Pack Count", value: "120 diapers" },
      { label: "Size", value: "Size 3" },
      { label: "Use", value: "Day and overnight" },
      { label: "Skin Focus", value: "Fragrance free" }
    ],
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Best Seller",
    stock: "In Stock",
    colors: ["Soft White", "Sky Blue"],
    tags: ["Diapers", "Baby Care", "Absorbency"],
    featuredReview: {
      name: "Kelsey M.",
      title: "Parent Review",
      rating: 5,
      quote: "They hold up overnight and feel softer than many store-brand options."
    }
  },
  {
    id: "bab-02",
    sku: "ONI-BAB-202",
    name: "TenderBloom Calming Baby Lotion",
    slug: "tenderbloom-calming-baby-lotion",
    category: "Baby Products",
    collection: "Featured",
    price: 16,
    originalPrice: 20,
    rating: 4.7,
    reviews: 149,
    description: "A gentle lotion with a soft, comforting finish for post-bath baby care routines.",
    longDescription: "TenderBloom Calming Baby Lotion rounds out the baby assortment with a lower-ticket care item that feels soft, safe, and giftable. The copy leans into comfort, hydration, and calming bedtime routines for modern parents.",
    features: ["Pediatrician-friendly positioning", "Light calming scent", "Fast-absorbing lotion", "Daily moisture support"],
    specs: [
      { label: "Size", value: "250 ml" },
      { label: "Texture", value: "Light cream lotion" },
      { label: "Use", value: "After bath and bedtime" },
      { label: "Free From", value: "Parabens and dyes" }
    ],
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "20% Off",
    stock: "In Stock",
    colors: ["Cream White"],
    tags: ["Baby Lotion", "Hydration", "Bedtime"],
    featuredReview: {
      name: "Rina G.",
      title: "Parent Review",
      rating: 5,
      quote: "The texture is gentle and it leaves my baby’s skin feeling soft after baths."
    }
  },
  {
    id: "bab-03",
    sku: "ONI-BAB-203",
    name: "PureSip Anti-Colic Baby Feeding Bottle",
    slug: "puresip-anti-colic-baby-feeding-bottle",
    category: "Baby Products",
    collection: "Trending",
    price: 18,
    rating: 4.6,
    reviews: 118,
    description: "A BPA-free feeding bottle with anti-colic venting and an easy-grip shape for parents.",
    longDescription: "PureSip Anti-Colic Baby Feeding Bottle introduces a practical feeding item that still feels premium in the merchandising system. The listing highlights ergonomic handling, venting support, and easy cleaning to align with typical parent buying behavior.",
    features: ["Anti-colic vent system", "Wide-neck easy clean design", "BPA-free bottle", "Slow-flow silicone nipple"],
    specs: [
      { label: "Capacity", value: "9 oz / 270 ml" },
      { label: "Material", value: "BPA-free polypropylene" },
      { label: "Included", value: "Bottle, cap, level 1 nipple" },
      { label: "Cleaning", value: "Top-rack dishwasher safe" }
    ],
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80"
    ],
    stock: "Low Stock",
    colors: ["Clear", "Powder Blue"],
    tags: ["Bottle", "Feeding", "Anti-Colic"],
    featuredReview: {
      name: "Emily W.",
      title: "Parent Review",
      rating: 4,
      quote: "Easy to clean and the venting system helped with fewer upset feedings."
    }
  },
  {
    id: "toy-01",
    sku: "ONI-TOY-301",
    name: "TurboTrail 4WD RC Car",
    slug: "turbotrail-4wd-rc-car",
    category: "Toys",
    collection: "Best Seller",
    price: 58,
    originalPrice: 69,
    rating: 4.8,
    reviews: 236,
    description: "A fast 4WD remote-control car with rechargeable battery power and rugged wheels.",
    longDescription: "TurboTrail 4WD RC Car gives the toys collection an energetic hero item with strong gifting value. The positioning focuses on speed, durability, and rechargeable convenience, making it a visually compelling feature on category and home merchandising sections.",
    features: ["2.4 GHz remote control", "Rechargeable battery", "Shock-absorbing tires", "Indoor and outdoor play"],
    specs: [
      { label: "Runtime", value: "Up to 25 minutes" },
      { label: "Charging", value: "USB rechargeable" },
      { label: "Recommended Age", value: "6+ years" },
      { label: "Range", value: "Up to 100 feet" }
    ],
    image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Hot Pick",
    stock: "In Stock",
    colors: ["Racing Red", "Jet Black"],
    tags: ["RC Car", "Gift", "Outdoor Play"],
    featuredReview: {
      name: "Jordan B.",
      title: "Verified Buyer",
      rating: 5,
      quote: "The speed surprised us and the battery life is strong for the price."
    }
  },
  {
    id: "toy-02",
    sku: "ONI-TOY-302",
    name: "BrightStack Creative Building Blocks",
    slug: "brightstack-creative-building-blocks",
    category: "Toys",
    collection: "Featured",
    price: 34,
    rating: 4.9,
    reviews: 321,
    description: "A colorful block set designed for open-ended building, stacking, and creative play.",
    longDescription: "BrightStack Creative Building Blocks bring color and developmental value to the toys category. The product is positioned as a durable open-play set that appeals to parents shopping for imagination, quiet play, and giftable educational toys.",
    features: ["120-piece set", "Rounded child-friendly edges", "Storage tub included", "Open-ended creative play"],
    specs: [
      { label: "Piece Count", value: "120 pieces" },
      { label: "Material", value: "Child-safe ABS plastic" },
      { label: "Recommended Age", value: "3+ years" },
      { label: "Storage", value: "Carry tub with lid" }
    ],
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Top Rated",
    stock: "In Stock",
    colors: ["Rainbow Mix"],
    tags: ["Building Blocks", "STEM", "Creative Play"],
    featuredReview: {
      name: "Leah V.",
      title: "Verified Buyer",
      rating: 5,
      quote: "The colors are great, the pieces feel sturdy, and it keeps kids busy for a long time."
    }
  },
  {
    id: "toy-03",
    sku: "ONI-TOY-303",
    name: "SnuggleMoss Classic Teddy Bear",
    slug: "snugglemoss-classic-teddy-bear",
    category: "Toys",
    collection: "Trending",
    price: 27,
    rating: 4.7,
    reviews: 167,
    description: "A soft premium teddy bear with a classic silhouette and gift-ready appeal.",
    longDescription: "SnuggleMoss Classic Teddy Bear rounds out the assortment with an emotionally resonant gift item. The product page emphasizes plush softness, display quality, and an approachable price point for birthdays, baby gifts, and comfort purchases.",
    features: ["Ultra-soft plush exterior", "Classic stitched details", "Gift-ready ribbon wrap", "Shelf and nursery friendly design"],
    specs: [
      { label: "Height", value: "16 inches" },
      { label: "Material", value: "Polyester plush" },
      { label: "Recommended Age", value: "18 months+" },
      { label: "Care", value: "Surface washable" }
    ],
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Giftable",
    stock: "In Stock",
    colors: ["Honey Brown"],
    tags: ["Teddy Bear", "Gift", "Plush"],
    featuredReview: {
      name: "Rachel C.",
      title: "Verified Buyer",
      rating: 5,
      quote: "It looks adorable in person and feels much softer than expected."
    }
  },
  {
    id: "toy-04",
    sku: "ONI-TOY-304",
    name: "LearnLoop Interactive Educational Toy",
    slug: "learnloop-interactive-educational-toy",
    category: "Toys",
    collection: "Featured",
    price: 42,
    rating: 4.6,
    reviews: 132,
    description: "A sound and light learning toy built around letters, counting, and guided play prompts.",
    longDescription: "LearnLoop Interactive Educational Toy is positioned for families who want engaging screen-light play. The product copy highlights beginner learning, repeat play value, and durable construction, helping the toys category feel both premium and practical.",
    features: ["Letters and counting modes", "Interactive lights and sounds", "Volume control", "Portable carry handle"],
    specs: [
      { label: "Power", value: "3 AA batteries" },
      { label: "Learning Modes", value: "4" },
      { label: "Recommended Age", value: "2+ years" },
      { label: "Material", value: "Durable BPA-free plastic" }
    ],
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
    ],
    stock: "Low Stock",
    colors: ["Sunrise Yellow", "Ocean Blue"],
    tags: ["Educational Toy", "Learning", "Toddler"],
    featuredReview: {
      name: "Marissa N.",
      title: "Verified Buyer",
      rating: 4,
      quote: "The audio is clear, the activities are simple, and it holds toddler attention well."
    }
  },
  {
    id: "toy-05",
    sku: "ONI-TOY-305",
    name: "MindTrail Kids Puzzle Set",
    slug: "mindtrail-kids-puzzle-set",
    category: "Toys",
    collection: "Best Seller",
    price: 25,
    originalPrice: 30,
    rating: 4.8,
    reviews: 204,
    description: "A premium boxed puzzle set with bright illustrations and multiple difficulty levels.",
    longDescription: "MindTrail Kids Puzzle Set adds a calmer, table-friendly product to the toys mix. It supports gift shopping, educational positioning, and parent interest in hands-on problem solving while keeping the visual language bright and upscale.",
    features: ["4 progressive puzzles", "Thick durable pieces", "Colorful premium artwork", "Reusable magnetic storage box"],
    specs: [
      { label: "Included", value: "24, 36, 48, and 60-piece puzzles" },
      { label: "Recommended Age", value: "4+ years" },
      { label: "Finish", value: "Matte easy-grip pieces" },
      { label: "Box", value: "Magnetic rigid gift box" }
    ],
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "17% Off",
    stock: "In Stock",
    colors: ["Multi Color"],
    tags: ["Puzzle", "Learning", "Gift"],
    featuredReview: {
      name: "Sonia K.",
      title: "Verified Buyer",
      rating: 5,
      quote: "The box feels premium and the puzzles are sturdy enough for repeat use."
    }
  },
  {
    id: "hh-01",
    sku: "ONI-HOM-401",
    name: "PureHalo HEPA Air Purifier",
    slug: "purehalo-hepa-air-purifier",
    category: "Health & Household",
    collection: "Featured",
    price: 129,
    originalPrice: 149,
    rating: 4.8,
    reviews: 258,
    description: "A compact HEPA purifier with quiet sleep mode and a clean, modern home silhouette.",
    longDescription: "PureHalo HEPA Air Purifier is a strong anchor for the health and household category. It combines wellness positioning with practical home use, and its form factor gives the storefront a premium home-essentials feel that converts well in hero placements.",
    features: ["True HEPA filtration", "Sleep-quiet mode", "Air quality indicator", "Compact room-ready footprint"],
    specs: [
      { label: "Coverage", value: "Up to 320 sq ft" },
      { label: "Filter Type", value: "HEPA H13" },
      { label: "Noise", value: "24 dB sleep mode" },
      { label: "Power", value: "120V plug-in" }
    ],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "13% Off",
    stock: "In Stock",
    colors: ["Matte White"],
    tags: ["Air Purifier", "HEPA", "Wellness"],
    featuredReview: {
      name: "Michael J.",
      title: "Verified Buyer",
      rating: 5,
      quote: "It runs quietly at night and looks far better than most appliances in this price range."
    }
  },
  {
    id: "hh-02",
    sku: "ONI-HOM-402",
    name: "SafeMist Moisturizing Hand Sanitizer",
    slug: "safemist-moisturizing-hand-sanitizer",
    category: "Health & Household",
    collection: "Trending",
    price: 12,
    rating: 4.5,
    reviews: 111,
    description: "A travel-friendly sanitizer with 70% alcohol and a softer, less drying finish.",
    longDescription: "SafeMist Moisturizing Hand Sanitizer is positioned as a polished daily essential rather than a commodity item. The packaging and copy support checkout add-ons, household replenishment, and office or on-the-go use cases.",
    features: ["70% alcohol formula", "Added moisturizers", "Pocket-size bottle", "Clean quick-dry finish"],
    specs: [
      { label: "Size", value: "8 oz" },
      { label: "Formula", value: "Gel sanitizer" },
      { label: "Use", value: "Home, travel, office" },
      { label: "Scent", value: "Light fresh linen" }
    ],
    image: "https://images.unsplash.com/photo-1584483720412-ce931f4aefa8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584483720412-ce931f4aefa8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80"
    ],
    stock: "In Stock",
    colors: ["Clear", "Silver Cap"],
    tags: ["Sanitizer", "Travel", "Household"],
    featuredReview: {
      name: "Olivia F.",
      title: "Verified Buyer",
      rating: 4,
      quote: "It dries quickly and doesn’t leave my hands feeling as stripped as cheaper options."
    }
  },
  {
    id: "hh-03",
    sku: "ONI-HOM-403",
    name: "BrightHome Multi-Surface Cleaning Spray",
    slug: "brighthome-multi-surface-cleaning-spray",
    category: "Health & Household",
    collection: "Best Seller",
    price: 15,
    rating: 4.7,
    reviews: 173,
    description: "A fresh multi-surface cleaner for kitchen, bath, and everyday wipe-down routines.",
    longDescription: "BrightHome Multi-Surface Cleaning Spray gives the household assortment a recognizable replenishment product. The positioning emphasizes simple surfaces, a clean scent profile, and a premium bottle presentation that still feels practical.",
    features: ["Cuts through daily residue", "Kitchen and bath friendly", "Fresh citrus scent", "Plant-forward cleaning story"],
    specs: [
      { label: "Size", value: "24 oz" },
      { label: "Surface Use", value: "Counters, sinks, sealed surfaces" },
      { label: "Scent", value: "Fresh citrus" },
      { label: "Bottle", value: "Trigger spray bottle" }
    ],
    image: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Best Seller",
    stock: "In Stock",
    colors: ["Clear Bottle", "Citrus Label"],
    tags: ["Cleaning Spray", "Kitchen", "Home Care"],
    featuredReview: {
      name: "David L.",
      title: "Verified Buyer",
      rating: 5,
      quote: "It smells clean without being overpowering and works well on counters and sinks."
    }
  },
  {
    id: "hh-04",
    sku: "ONI-HOM-404",
    name: "VitaCore Daily Wellness Vitamins",
    slug: "vitacore-daily-wellness-vitamins",
    category: "Health & Household",
    collection: "Featured",
    price: 26,
    rating: 4.6,
    reviews: 189,
    description: "A once-daily multivitamin formulated for everyday energy and general wellness support.",
    longDescription: "VitaCore Daily Wellness Vitamins help the category feel broader than pure cleaning or storage. The product page frames them as a practical household wellness staple with clean packaging and straightforward benefit language.",
    features: ["Once-daily serving", "90-tablet bottle", "General wellness positioning", "Easy restock product"],
    specs: [
      { label: "Supply", value: "90 tablets" },
      { label: "Serving", value: "1 tablet daily" },
      { label: "Focus", value: "Immune and energy support" },
      { label: "Packaging", value: "Amber supplement bottle" }
    ],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80"
    ],
    stock: "In Stock",
    colors: ["Amber Bottle"],
    tags: ["Vitamins", "Wellness", "Daily Routine"],
    featuredReview: {
      name: "Sarah N.",
      title: "Verified Buyer",
      rating: 4,
      quote: "The bottle is easy to store and it’s a simple daily supplement for our household."
    }
  },
  {
    id: "hh-05",
    sku: "ONI-HOM-405",
    name: "SoftCloud Family Tissue Pack",
    slug: "softcloud-family-tissue-pack",
    category: "Health & Household",
    collection: "Trending",
    price: 18,
    rating: 4.7,
    reviews: 144,
    description: "A soft 12-pack tissue set for bedrooms, desks, and family living spaces.",
    longDescription: "SoftCloud Family Tissue Pack supports the household category with a simple replenishment item styled for an elevated online essentials brand. The emphasis is on softness, value, and tidy packaging that works well in bundles.",
    features: ["12-box family pack", "Soft 2-ply tissues", "Home and office friendly", "Clean printed packaging"],
    specs: [
      { label: "Count", value: "12 boxes" },
      { label: "Sheets", value: "160 sheets per box" },
      { label: "Ply", value: "2-ply" },
      { label: "Use", value: "Home, office, bedside" }
    ],
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80"
    ],
    stock: "In Stock",
    colors: ["White", "Sky Pattern"],
    tags: ["Tissue", "Bulk Pack", "Home"],
    featuredReview: {
      name: "Karen E.",
      title: "Verified Buyer",
      rating: 5,
      quote: "A good balance of softness and value, and the box design looks neat around the house."
    }
  },
  {
    id: "hh-06",
    sku: "ONI-HOM-406",
    name: "NeatNest Stackable Storage Organizer",
    slug: "neatnest-stackable-storage-organizer",
    category: "Health & Household",
    collection: "Best Seller",
    price: 39,
    originalPrice: 48,
    rating: 4.8,
    reviews: 209,
    description: "A stackable clear organizer for pantry, bath, and linen closet storage systems.",
    longDescription: "NeatNest Stackable Storage Organizer brings strong visual merchandising potential to the household section. It is positioned around home organization, pantry styling, and practical space-saving with a crisp premium look.",
    features: ["Stackable modular design", "Clear durable bins", "Integrated carry handles", "Pantry and bath friendly"],
    specs: [
      { label: "Included", value: "Set of 4 bins" },
      { label: "Material", value: "Clear BPA-free plastic" },
      { label: "Dimensions", value: "12 x 8 x 6 in each" },
      { label: "Use", value: "Pantry, bath, closet" }
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "19% Off",
    stock: "Low Stock",
    colors: ["Clear"],
    tags: ["Organizer", "Storage", "Home"],
    featuredReview: {
      name: "Amanda H.",
      title: "Verified Buyer",
      rating: 5,
      quote: "These made our pantry look organized immediately and feel sturdier than expected."
    }
  },
  {
    id: "hh-07",
    sku: "ONI-HOM-407",
    name: "FreshFold Concentrated Laundry Detergent",
    slug: "freshfold-concentrated-laundry-detergent",
    category: "Health & Household",
    collection: "Trending",
    price: 21,
    rating: 4.6,
    reviews: 156,
    description: "A concentrated laundry detergent with fresh-linen scent and high-efficiency compatibility.",
    longDescription: "FreshFold Concentrated Laundry Detergent closes the health and household assortment with a strong replenishment item. The product is merchandised as practical, premium-looking, and household friendly, making it well suited to subscribe-and-save style future growth.",
    features: ["64-load concentrated formula", "HE machine compatible", "Fresh linen scent", "Easy-pour bottle"],
    specs: [
      { label: "Loads", value: "64 loads" },
      { label: "Machine Type", value: "Standard and HE washers" },
      { label: "Scent", value: "Fresh linen" },
      { label: "Bottle", value: "96 oz easy-pour jug" }
    ],
    image: "https://images.unsplash.com/photo-1610552050890-fe99536c2613?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610552050890-fe99536c2613?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80"
    ],
    stock: "In Stock",
    colors: ["Ocean Blue"],
    tags: ["Laundry", "Detergent", "Household"],
    featuredReview: {
      name: "Brian S.",
      title: "Verified Buyer",
      rating: 4,
      quote: "It cleans well, the scent is pleasant, and the bottle size is great for family use."
    }
  }
];

export const testimonials: Review[] = [
  {
    name: "Emma Collins",
    title: "Lifestyle Buyer, Austin",
    rating: 5,
    quote: "The catalog feels like a polished American retail brand. The product pages are clean, informative, and easy to trust."
  },
  {
    name: "Daniel Brooks",
    title: "Repeat Customer, Seattle",
    rating: 5,
    quote: "Shopping on mobile was smooth, the filters made sense, and the checkout experience looked premium from start to finish."
  },
  {
    name: "Sophia Reed",
    title: "Creative Director, New York",
    rating: 5,
    quote: "This feels closer to a modern Shopify flagship store than a basic demo storefront."
  }
];

export const faqItems = [
  {
    question: "How long does shipping take within the United States?",
    answer: "Most in-stock orders ship within 1 business day and arrive in 2 to 5 business days, depending on the final destination and selected delivery service."
  },
  {
    question: "Do you offer free returns?",
    answer: "Eligible U.S. orders can be returned within 30 days of delivery for a refund, subject to the product condition and return policy terms."
  },
  {
    question: "Can I track my order after purchase?",
    answer: "Yes. Tracking details are sent by email once your order ships, and the site includes a dedicated order tracking page."
  },
  {
    question: "Can I connect a custom domain later?",
    answer: "Yes. The project is prepared for a future custom domain connection through Netlify DNS or an external DNS provider."
  }
];

export const navigation = [
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const featuredProducts = products.filter((product) => product.collection === "Featured");
export const bestSellers = products.filter((product) => product.collection === "Best Seller");
export const trendingProducts = products.filter((product) => product.collection === "Trending");

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function findCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function productsByCategory(slug: string) {
  return products.filter((product) => slugify(product.category) === slug);
}

export function relatedProducts(category: string, excludeSlug: string) {
  return products.filter((product) => product.category === category && product.slug !== excludeSlug).slice(0, 4);
}

export function categoryStats() {
  return categories.map((category) => ({
    ...category,
    productCount: productsByCategory(category.slug).length
  }));
}

export function productStructuredData(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.gallery,
    description: product.description,
    sku: product.sku,
    brand: { "@type": "Brand", name: company.shortName },
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability: `https://schema.org/${product.stock === "In Stock" ? "InStock" : product.stock === "Low Stock" ? "LimitedAvailability" : "PreOrder"}`
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews
    },
    review: {
      "@type": "Review",
      author: product.featuredReview.name,
      reviewRating: {
        "@type": "Rating",
        ratingValue: product.featuredReview.rating
      },
      reviewBody: product.featuredReview.quote
    }
  };
}
