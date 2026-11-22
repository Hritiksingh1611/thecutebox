// 🇮🇳 thecutebox.in — Indian Boutique Gifting Catalog
const BASE = import.meta.env.BASE_URL || '/thecutebox/'

export const products = [
  {
    id: 'p1',
    name: 'Diwali Diya & Rangoli Celebration Set',
    slug: 'diwali-diya-celebration-set',
    category: 'festive',
    tags: ['bestseller', 'festive', 'handcrafted'],
    price: 1299,
    originalPrice: 1699,
    rating: 4.9,
    reviewCount: 312,
    artisan: 'Ramesh Kumawat • Jaipur, Rajasthan',
    shortDescription: '8 hand-painted terracotta diyas with organic Gulal & brass bell.',
    description: 'Bring the divine glow of festival lights to any home. Handcrafted on traditional potter wheels in Jaipur, each terracotta diya is hand-painted in vibrant saffron, deep blue, and shimmering gold. Includes pure cow-ghee wicks and organic floral rangoli colors.',
    contents: [
      '8 Hand-painted Terracotta Diyas',
      'Organic Floral Rangoli Pack (3 Colors)',
      'Pure Cow Ghee Batti (20 pcs)',
      'Hand-cast Brass Pooja Bell',
      'Handmade Seed-paper Greeting Card',
      'Reusable Sturdy Keepsake Box'
    ],
    images: [`${BASE}images/product-diwali-diya.jpg`],
    image: `${BASE}images/product-diwali-diya.jpg`,
    color: '#FF6B1A',
    fallbackEmoji: '🪔',
    inStock: true,
    occasions: ['diwali', 'navratri', 'housewarming', 'pooja']
  },
  {
    id: 'p2',
    name: 'Royal Masala Chai & Brass Kulhad Kit',
    slug: 'royal-masala-chai-kit',
    category: 'gourmet',
    tags: ['bestseller', 'popular'],
    price: 1099,
    originalPrice: 1399,
    rating: 4.8,
    reviewCount: 198,
    artisan: 'Rajan Spice Estate • Old Jaipur',
    shortDescription: 'Hammered pure brass kulhad, 3 artisanal chai blends & brass strainer.',
    description: 'An ode to the timeless Indian afternoon chai ritual. Features 3 distinct, whole-spice micro-batch blends (Royal Cardamom-Rose, Kashmiri Kahwa with Kesar, and Kadak Masala) paired with a heavy-gauge handcrafted brass kulhad and traditional tea strainer.',
    contents: [
      'Royal Rose & Green Cardamom Chai (60g)',
      'Saffron Infused Kashmiri Kahwa (60g)',
      'Ginger & Clove Kadak Masala Chai (60g)',
      'Hand-hammered Pure Brass Kulhad',
      'Artisan Brass Wire Mesh Strainer',
      'Artisan Chai Brewing Recipe Scroll'
    ],
    images: [`${BASE}images/product-chai-kit.jpg`],
    image: `${BASE}images/product-chai-kit.jpg`,
    color: '#FFB347',
    fallbackEmoji: '☕',
    inStock: true,
    occasions: ['birthday', 'thank-you', 'housewarming', 'just-because']
  },
  {
    id: 'p3',
    name: 'Maha Utsav Grand Heritage Hamper',
    slug: 'maha-utsav-heritage-hamper',
    category: 'hampers',
    tags: ['bestseller', 'premium', 'luxury'],
    price: 3999,
    originalPrice: 4999,
    rating: 5.0,
    reviewCount: 247,
    artisan: 'The Cutebox Master Studio • Bangalore & Jaipur',
    shortDescription: 'The pinnacle of Indian gifting — 10 curated heirlooms & gourmet delights.',
    description: 'Our flagship curation designed for weddings, milestone anniversaries, and grand Diwali celebrations. Presented in an ornate velvet-lined wooden trunk with brass latches, containing an authentic brass Ganesha idol, hand-poured soy candles, Kashmiri dry fruits, and heritage sweets.',
    contents: [
      'Pure Brass Miniature Ganesha Idol',
      'Hand-carved Rosewood Keepsake Trunk',
      'Hand-painted Floral Diya Duo',
      'Kashmiri Mamra Almonds & Walnuts (250g)',
      'Organic Damask Rose Gulkand Jar (150g)',
      'Mysore Sandalwood & Mogra Fragrance Sticks',
      'Handmade Block-print Silk Potli Pouch',
      'Artisan Saffron Threads (1g Glass Vial)',
      'Gold-foil Calligraphy Parchment Note'
    ],
    images: [`${BASE}images/product-hamper-grand.jpg`],
    image: `${BASE}images/product-hamper-grand.jpg`,
    color: '#E91E8C',
    fallbackEmoji: '🎁',
    inStock: true,
    occasions: ['wedding', 'diwali', 'anniversary', 'birthday']
  },
  {
    id: 'p4',
    name: 'Bagru Hand-Block Print Fabric & Desk Set',
    slug: 'bagru-block-print-desk-set',
    category: 'artisan',
    tags: ['handmade', 'sustainable', 'unique'],
    price: 1699,
    originalPrice: 1999,
    rating: 4.7,
    reviewCount: 89,
    artisan: 'Sunita Devi • Bagru Crafts Collective',
    shortDescription: 'Natural indigo block-print journal, pouch, brass bookmark & incense.',
    description: 'Preserving a 400-year-old heritage craft from Rajasthan. Sunita stamps hand-carved teak wood blocks using vegetable indigo and mud-resist Dabu techniques. Accompanied by cotton rag paper notebooks and a delicate engraved brass peacock bookmark.',
    contents: [
      'Hand-bound Cotton Rag Paper Diary (160 pages)',
      'Natural Indigo Dabu Pouch with Brass Zipper',
      'Engraved Brass Peacock Bookmark',
      'Organic Sandalwood Herbal Bath Bar',
      'Set of 4 Plantable Seed-Paper Gift Tags'
    ],
    images: [`${BASE}images/product-block-print.jpg`],
    image: `${BASE}images/product-block-print.jpg`,
    color: '#00897B',
    fallbackEmoji: '🎨',
    inStock: true,
    occasions: ['birthday', 'thank-you', 'self-care', 'anniversary']
  },
  {
    id: 'p5',
    name: 'Moradabad Royal Brass Pooja Thali Set',
    slug: 'moradabad-brass-pooja-thali',
    category: 'wellness',
    tags: ['premium', 'heirloom'],
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviewCount: 134,
    artisan: 'Moradabad Metal Guild • Uttar Pradesh',
    shortDescription: '10" intricately engraved brass thali with 5 sacred pooja accompaniments.',
    description: 'Fashioned by master brass smiths of Moradabad, India’s famed "Peetal Nagri". Every swirl and floral border on this 10-inch plate is carved by hand. Ideal for Griha Pravesh (housewarmings), weddings, and festive prayer sanctums.',
    contents: [
      '10" Hand-engraved Pure Brass Thali Plate',
      'Twin Brass Akhand Diya Lamps',
      'Roli & Chawal Twin Katori with Miniature Spoon',
      'Carved Brass Dhoop & Agarbatti Stand',
      'Hand-hammered Brass Aarti Bell (Ghanti)',
      'Satin-lined Gold Brocade Gift Box'
    ],
    images: [`${BASE}images/product-pooja-thali.jpg`],
    image: `${BASE}images/product-pooja-thali.jpg`,
    color: '#D4AF37',
    fallbackEmoji: '🪆',
    inStock: true,
    occasions: ['housewarming', 'wedding', 'navratri', 'diwali', 'pooja']
  },
  {
    id: 'p6',
    name: 'Kashmiri Saffron & Turmeric Wellness Box',
    slug: 'kashmiri-saffron-turmeric-wellness-box',
    category: 'wellness',
    tags: ['ayurvedic', 'self-care', 'new'],
    price: 1799,
    originalPrice: 2199,
    rating: 4.8,
    reviewCount: 76,
    artisan: 'Botanica Ayurveda • Kannauj & Pune',
    shortDescription: 'Pure Kasturi Haldi soap, steam-distilled rose water & Kumkumadi serum.',
    description: 'An ancient Vedic beauty and wellness ritual packaged for the modern soul. Features wild Kasturi turmeric cold-process soap, pure steam-distilled Kannauj Gulab Jal (rose mist), and authentic Kumkumadi Tailam enriched with authentic Kashmiri saffron.',
    contents: [
      'Wild Turmeric & Shea Butter Artisan Soap Bar',
      'Kannauj Pure Steam-Distilled Rose Water (100ml)',
      'Ayurvedic Kumkumadi Radiance Facial Oil (15ml)',
      'Handcrafted Kansa (Bronze) Mini Facial Roller',
      'Sandalwood Aromatic Bath Salt Jar (100g)'
    ],
    images: [`${BASE}images/product-haldi-box.jpg`],
    image: `${BASE}images/product-haldi-box.jpg`,
    color: '#FF6B1A',
    fallbackEmoji: '🌹',
    inStock: true,
    occasions: ['self-care', 'birthday', 'wedding', 'anniversary']
  },
  {
    id: 'p7',
    name: 'Mysore Sandalwood & Temple Incense Box',
    slug: 'mysore-sandalwood-temple-incense',
    category: 'festive',
    tags: ['trending', 'aromatherapy'],
    price: 999,
    originalPrice: 1299,
    rating: 4.8,
    reviewCount: 203,
    artisan: 'Mysore Natural Aromatics • Karnataka',
    shortDescription: 'Charcoal-free hand-rolled agarbatti, brass burner & carved Sheesham box.',
    description: 'Immerse your space in the tranquil serenity of South Indian temple courtyards. Hand-rolled using only natural tree gums, botanical resins, and authentic Mysore sandalwood oil — completely free of toxic charcoal or chemical binders.',
    contents: [
      'Mysore Pure Chandan Agarbatti (25 Sticks)',
      'Madurai Mogra Jasmine Agarbatti (25 Sticks)',
      'Kannauj Damask Rose Agarbatti (25 Sticks)',
      'Lacquered Brass Inverted Incense Stand',
      'Hand-carved Jali Wood Incense Storage Box'
    ],
    images: [`${BASE}images/product-incense.jpg`],
    image: `${BASE}images/product-incense.jpg`,
    color: '#00897B',
    fallbackEmoji: '🌸',
    inStock: true,
    occasions: ['diwali', 'housewarming', 'pooja', 'just-because']
  },
  {
    id: 'p8',
    name: 'Shahi Kashmiri Kahwa & Dry Fruit Treasure',
    slug: 'shahi-kashmiri-kahwa-treasure',
    category: 'gourmet',
    tags: ['gourmet', 'limited-edition'],
    price: 2299,
    originalPrice: 2799,
    rating: 4.9,
    reviewCount: 115,
    artisan: 'Valley Harvest Collective • Srinagar, Kashmir',
    shortDescription: 'Rare Grade-1 Kesar, green tea leaves, roasted Mamra almonds & dates.',
    description: 'Directly sourced from the saffron orchards of Pampore, Kashmir. This exquisite box holds authentic Kangra green tea blended with cinnamon, crushed green cardamom, dried rose petals, and whole strands of Mongra saffron.',
    contents: [
      'Pampore Grade-1 Saffron (Mongra Kesar 1g)',
      'Traditional Spiced Kahwa Tea Blend (100g)',
      'Kashmiri Girdhari Walnut Kernels (150g)',
      'Royal Medjool Stuffed Dates (6 pcs)',
      'Artisanal Kashmiri Papier-Mâché Keepsake Box'
    ],
    images: [`${BASE}images/product-chai-kit.jpg`],
    image: `${BASE}images/product-chai-kit.jpg`,
    color: '#FFB347',
    fallbackEmoji: '🍃',
    inStock: true,
    occasions: ['diwali', 'wedding', 'anniversary', 'thank-you']
  }
]

export const categories = [
  { id: 'all',      label: 'All Curations',  icon: '🎁' },
  { id: 'festive',  label: 'Diwali & Utsav', icon: '🪔' },
  { id: 'hampers',  label: 'Royal Hampers',  icon: '🧺' },
  { id: 'gourmet',  label: 'Chai & Sweets',  icon: '☕' },
  { id: 'wellness', label: 'Ayurveda Care',  icon: '🌿' },
  { id: 'artisan',  label: 'Handicrafts',    icon: '🎨' }
]

export const occasions = [
  { id: 'diwali',       label: 'Diwali & Utsav',  emoji: '🪔' },
  { id: 'wedding',      label: 'Shaadi & Vivah',  emoji: '💍' },
  { id: 'housewarming', label: 'Griha Pravesh',   emoji: '🏡' },
  { id: 'birthday',     label: 'Janamdin',        emoji: '🎂' },
  { id: 'anniversary',  label: 'Anniversary',     emoji: '❤️' },
  { id: 'pooja',        label: 'Pooja & Shubh',   emoji: '✨' },
  { id: 'self-care',    label: 'Self-Care Ritual',emoji: '🌸' },
  { id: 'thank-you',    label: 'Dhanyawad',       emoji: '💌' }
]

export const getProductById   = (id)   => products.find(p => p.id === id)
export const getProductBySlug = (slug) => products.find(p => p.slug === slug)
export const getByCategory    = (cat)  => cat === 'all' ? products : products.filter(p => p.category === cat)
export const getFeatured      = ()     => products.filter(p => p.tags.includes('bestseller') || p.tags.includes('premium'))
