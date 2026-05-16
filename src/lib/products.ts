// src/lib/products.ts
// ============================================================
// ALL YOUR DEMO PRODUCTS ARE HERE
// To add a new product: copy one block below and change the data
// To edit a product: find it by name and change values
// ============================================================

import { Product } from "@/types";

export const products: Product[] = [
  // ==================== ANIME POSTERS ====================
  {
    id: 1,
    name: "Naruto – Nine-Tails Unleashed",
    price: 1299,
    originalPrice: 1799,
    description:
      "A dramatic high-contrast artwork of Naruto in Nine-Tails Chakra Mode. Vivid orange energy radiates around the character in a stunning dark backdrop. Perfect for any anime fan's wall.",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&q=80",
    rating: 4.9,
    reviews: 248,
    category: "Anime",
    badge: "Best Seller",
    featured: true,
  },
  {
    id: 2,
    name: "Attack on Titan – Survey Corps",
    price: 1199,
    description:
      "Detailed illustration of the Scout Regiment soaring over a ruined city. Dark atmospheric tones and epic scale make this a statement piece for any room.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80",
    rating: 4.8,
    reviews: 192,
    category: "Anime",
    badge: "Hot",
    featured: true,
  },
  {
    id: 3,
    name: "Dragon Ball – Ultra Instinct Goku",
    price: 1399,
    originalPrice: 1699,
    description:
      "Goku in Ultra Instinct form, silver hair blazing. Dynamic action pose surrounded by divine energy. A must-have for Dragon Ball fans.",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=600&q=80",
    rating: 4.7,
    reviews: 176,
    category: "Anime",
    badge: "Sale",
  },
  {
    id: 4,
    name: "One Piece – Straw Hat Crew",
    price: 1499,
    description:
      "The full Straw Hat Pirate crew illustrated in a sweeping oceanic panorama. Vibrant colors and detailed artwork for the ultimate One Piece fan.",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&q=80",
    rating: 4.9,
    reviews: 213,
    category: "Anime",
    featured: true,
  },

  // ==================== GAMING POSTERS ====================
  {
    id: 5,
    name: "Cyberpunk 2077 – Night City Skyline",
    price: 1599,
    originalPrice: 1999,
    description:
      "Neon-drenched Night City skyline at 2 AM. Towering megabuildings glow against a purple-orange sky. The ultimate cyberpunk aesthetic for your gaming setup.",
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&q=80",
    rating: 4.8,
    reviews: 301,
    category: "Gaming",
    badge: "New",
    featured: true,
  },
  {
    id: 6,
    name: "Dark Souls – You Died",
    price: 999,
    description:
      "The iconic crimson 'YOU DIED' on a pitch-black background with subtle ember glow. A legendary piece of gaming culture. Minimal. Powerful.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
    rating: 4.9,
    reviews: 428,
    category: "Gaming",
    badge: "Iconic",
    featured: true,
  },
  {
    id: 7,
    name: "The Witcher – Geralt of Rivia",
    price: 1399,
    description:
      "Geralt silhouetted against a blood moon, Roach by his side. Painted in the style of a dark fantasy oil painting. A true collector's item.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    rating: 4.7,
    reviews: 167,
    category: "Gaming",
  },
  {
    id: 8,
    name: "Valorant – Agent Collection",
    price: 1299,
    originalPrice: 1599,
    description:
      "All agents assembled in a cinematic lineup. Bold graphic style with team color accents. Show your Valorant loyalty.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
    rating: 4.6,
    reviews: 134,
    category: "Gaming",
    badge: "Sale",
  },

  // ==================== CAR POSTERS ====================
  {
    id: 9,
    name: "JDM Legends – Toyota Supra MK4",
    price: 1499,
    description:
      "The iconic 2JZ-powered Supra on a rain-soaked mountain pass at golden hour. Every automotive enthusiast's dream poster.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    rating: 4.9,
    reviews: 267,
    category: "Cars",
    badge: "Best Seller",
    featured: true,
  },
  {
    id: 10,
    name: "Lamborghini Aventador – Midnight Blue",
    price: 1799,
    originalPrice: 2199,
    description:
      "The Aventador SVJ captured in a long-exposure shot at dusk. Dramatic lighting, aggressive stance. Pure supercar art.",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=600&q=80",
    rating: 4.8,
    reviews: 189,
    category: "Cars",
    badge: "Sale",
  },
  {
    id: 11,
    name: "Porsche 911 – German Engineering",
    price: 1599,
    description:
      "The timeless 911 silhouette against a smoky garage backdrop. Black and white with selective orange highlights. Elegance in motion.",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&q=80",
    rating: 4.7,
    reviews: 143,
    category: "Cars",
  },

  // ==================== NATURE POSTERS ====================
  {
    id: 12,
    name: "Northern Lights – Iceland Vista",
    price: 1299,
    description:
      "A photographer-quality aurora borealis captured over a frozen Icelandic lake. Green and violet curtains of light reflected in still water.",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80",
    rating: 4.9,
    reviews: 312,
    category: "Nature",
    badge: "Popular",
    featured: true,
  },
  {
    id: 13,
    name: "Misty Mountain Sunrise",
    price: 999,
    description:
      "Golden sunrise light cutting through a misty mountain valley. Layers of fog and pine forest create incredible depth. Calming and majestic.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    rating: 4.7,
    reviews: 198,
    category: "Nature",
  },
  {
    id: 14,
    name: "Ocean Waves – Pacific Storm",
    price: 1199,
    originalPrice: 1499,
    description:
      "A 40-foot wave cresting in the Pacific Ocean, photographed from a cliff. Raw power of nature. Stunning blues and greens.",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80",
    rating: 4.6,
    reviews: 156,
    category: "Nature",
    badge: "Sale",
  },

  // ==================== ISLAMIC WALL ART ====================
  {
    id: 15,
    name: "Bismillah – Golden Calligraphy",
    price: 1999,
    originalPrice: 2499,
    description:
      "Bismillah ir-Rahman ir-Rahim rendered in stunning 24K gold-style calligraphy on a deep navy background. Handcrafted aesthetic for a blessed home.",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=600&q=80",
    rating: 5.0,
    reviews: 389,
    category: "Islamic",
    badge: "Premium",
    featured: true,
  },
  {
    id: 16,
    name: "Ayatul Kursi – Modern Frame Art",
    price: 1799,
    description:
      "The verse of the Throne in elegant Naskh calligraphy. Clean geometric borders with subtle geometric patterns. A centerpiece for your living room.",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&q=80",
    rating: 4.9,
    reviews: 274,
    category: "Islamic",
    badge: "Best Seller",
  },
  {
    id: 17,
    name: "99 Names of Allah – Mosaic",
    price: 2299,
    originalPrice: 2799,
    description:
      "All 99 divine names beautifully arranged in a circular mandala design. Intricate Arabic script in gold on a rich emerald green background.",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80",
    rating: 4.9,
    reviews: 201,
    category: "Islamic",
    badge: "Sale",
    featured: true,
  },

  // ==================== MINIMAL POSTERS ====================
  {
    id: 18,
    name: "Just Do It – Minimal Black",
    price: 799,
    description:
      "Ultra-minimal motivational poster. Bold sans-serif typography on pure matte black. Sometimes the simplest designs say the most.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    rating: 4.8,
    reviews: 445,
    category: "Motivational",
    badge: "Best Seller",
    featured: true,
  },
  {
    id: 19,
    name: "Stay Focused – Gradient Type",
    price: 899,
    description:
      "Bold typographic poster with a vibrant orange-to-pink gradient. The perfect desk companion. Reminds you what matters.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    rating: 4.6,
    reviews: 203,
    category: "Motivational",
  },
  {
    id: 20,
    name: "Dream Big – Constellation Map",
    price: 1099,
    originalPrice: 1399,
    description:
      "Motivational text woven into a star constellation map. Deep midnight blue background with silver star-dust typography. Poetic and inspiring.",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80",
    rating: 4.7,
    reviews: 178,
    category: "Motivational",
    badge: "Sale",
  },
];

// Categories with product counts
export const categories = [
  { id: "All", name: "All Posters", icon: "🖼️", count: products.length },
  { id: "Anime", name: "Anime", icon: "⛩️", count: products.filter((p) => p.category === "Anime").length },
  { id: "Gaming", name: "Gaming", icon: "🎮", count: products.filter((p) => p.category === "Gaming").length },
  { id: "Cars", name: "Cars", icon: "🚗", count: products.filter((p) => p.category === "Cars").length },
  { id: "Nature", name: "Nature", icon: "🌿", count: products.filter((p) => p.category === "Nature").length },
  { id: "Islamic", name: "Islamic Art", icon: "☪️", count: products.filter((p) => p.category === "Islamic").length },
  { id: "Motivational", name: "Motivational", icon: "💪", count: products.filter((p) => p.category === "Motivational").length },
];

// Helper function: get a product by its ID
export const getProductById = (id: number): Product | undefined => {
  return products.find((p) => p.id === id);
};

// Helper function: get featured products for homepage
export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

// Format price to Pakistani Rupees display
export const formatPrice = (price: number): string => {
  return `Rs. ${price.toLocaleString("en-PK")}`;
};
