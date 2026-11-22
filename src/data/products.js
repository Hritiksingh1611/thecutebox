// 🎁 thecutebox.in — India's Premier Curated Gifting Destination
// Birthdays • Valentine's (14th Feb) • Festive Hampers • Milestones • Self-Care
// Curated by Preety Singh (Nagerbazar, Jessore Road, Kolkata - 700074 • +91 9831559109)

const BASE = import.meta.env.BASE_URL || '/thecutebox/'

export const products = [
  // 💖 14TH FEB / VALENTINE'S & ROMANCE
  {
    id: 'p-val',
    name: 'Amour & Velvet 14th Feb Valentine Hamper',
    slug: 'amour-velvet-valentine-hamper',
    category: 'valentine',
    festival: 'Valentine’s Day (14th Feb)',
    tags: ['bestseller', 'valentine', 'romance', 'couple'],
    price: 1999,
    originalPrice: 2499,
    rating: 5.0,
    reviewCount: 228,
    artisan: 'Curated by Preety Singh (Nagerbazar, Kolkata - 700074)',
    shortDescription: 'Damask rose soy candle, single-origin chocolates, wax seal love letter kit & velvet box.',
    description: 'The ultimate expression of heartfelt romance for 14th February, anniversaries, and romantic proposals. Features a hand-poured Kannauj Damask rose soy candle, artisanal single-origin dark chocolate bar, vintage brass heart wax-seal stamp with red wax sticks, cotton parchment love letter paper, and dried aromatic rose petals in a crimson velvet ribbon box.',
    contents: [
      'Kannauj Damask Rose Aromatic Soy Candle (160g)',
      'Artisanal Single-Origin 70% Dark Chocolate Bar (80g)',
      'Vintage Brass Heart Wax Seal Stamp with 2 Wax Sticks',
      'Gold-Edged Handmade Cotton Parchment Paper (Set of 3)',
      'Dried Fragrant Red Rose Petal Bed',
      'Luxury Keepsake Crimson Box with Heart Bow & Satin Ribbon'
    ],
    images: [`${BASE}images/hero-gift.jpg`],
    image: `${BASE}images/hero-gift.jpg`,
    color: '#E91E8C',
    fallbackEmoji: '💖',
    inStock: true,
    occasions: ['valentine', 'anniversary', 'wedding']
  },

  // 🎂 BIRTHDAYS & JOYOUS MILESTONES
  {
    id: 'p-bday',
    name: 'Grand Birthday Confetti & Gourmet Celebration Box',
    slug: 'grand-birthday-confetti-gourmet-box',
    category: 'birthday',
    festival: 'Birthdays & Celebrations',
    tags: ['bestseller', 'birthday', 'popular'],
    price: 1899,
    originalPrice: 2299,
    rating: 4.9,
    reviewCount: 310,
    artisan: 'Curated by Preety Singh (Nagerbazar, Kolkata - 700074)',
    shortDescription: 'Hand-thrown birthday mug, salted caramel cookies, sparkler candle & custom ribbon.',
    description: 'Make their birthday unforgettable from the moment they unwrap the box! Includes a hand-thrown ceramic mug inscribed with celebratory motifs, gourmet salted caramel butter cookies, celebration sparkler candles, party popper, and a customized calligraphy name/age satin ribbon.',
    contents: [
      'Hand-thrown Ceramic "Make a Wish" Birthday Mug',
      'Gourmet Salted Caramel Chocochip Butter Cookies (150g)',
      'Celebration Golden Sparkler Candle & Party Popper',
      'Artisanal Birthday Vanilla & Berry Soy Candle (100g)',
      'Custom Calligraphed Birthday Name Ribbon',
      'Festive Confetti-lined Sturdy Keepsake Box'
    ],
    images: [`${BASE}images/product-chai-kit.jpg`],
    image: `${BASE}images/product-chai-kit.jpg`,
    color: '#FF6B1A',
    fallbackEmoji: '🎂',
    inStock: true,
    occasions: ['birthday', 'celebration']
  },

  // 🧺 ROYAL CELEBRATION HAMPER (MILESTONES & WEDDINGS)
  {
    id: 'p-hamper',
    name: 'Maha Utsav Grand Milestone & Wedding Hamper',
    slug: 'maha-utsav-milestone-wedding-hamper',
    category: 'hampers',
    festival: 'Weddings & Anniversaries',
    tags: ['luxury', 'wedding', 'anniversary', 'bestseller'],
    price: 3999,
    originalPrice: 4999,
    rating: 5.0,
    reviewCount: 247,
    artisan: 'Curated by Preety Singh (Nagerbazar, Kolkata - 700074)',
    shortDescription: 'Rosewood trunk with brass Ganesha, dry fruits, saffron, ittar & silk potli.',
    description: 'An heirloom curation designed for milestone birthdays, weddings, 25th/50th anniversaries, and grand family celebrations. Presented in an ornate rosewood trunk with brass latches, containing a pure brass Ganesha, saffron, dry fruits, and hand-lettered gold parchment scroll.',
    contents: [
      'Pure Brass Miniature Ganesha Idol',
      'Hand-carved Rosewood Keepsake Trunk with Brass Latch',
      'Kashmiri Mamra Almonds & Walnuts (250g Tin)',
      'Organic Damask Rose Gulkand Jar (150g)',
      'Pure Kannauj Rose & Oudh Ittar (10ml Glass Vial)',
      'Mysore Sandalwood & Mogra Fragrance Sticks',
      'Gold-foil Calligraphy Parchment Blessing Scroll'
    ],
    images: [`${BASE}images/product-hamper-grand.jpg`],
    image: `${BASE}images/product-hamper-grand.jpg`,
    color: '#00897B',
    fallbackEmoji: '🧺',
    inStock: true,
    occasions: ['wedding', 'anniversary', 'birthday', 'housewarming']
  },

  // 🌙 EID MUBARAK & BAKRID
  {
    id: 'p2',
    name: 'Noor-e-Eid Royal Ittar & Medjool Hamper',
    slug: 'noor-e-eid-royal-hamper',
    category: 'festivals',
    festival: 'Eid Mubarak & Bakrid',
    tags: ['bestseller', 'eid', 'luxury'],
    price: 2499,
    originalPrice: 2999,
    rating: 5.0,
    reviewCount: 184,
    artisan: 'Curated by Preety Singh (Nagerbazar, Kolkata - 700074)',
    shortDescription: 'Jumbo Medjool dates, pure Kannauj Oud ittar, brass crescent tray & sheer khurma.',
    description: 'A regal curation celebrating Eid-ul-Fitr and Eid-ul-Adha. Hand-selected jumbo Medjool dates stuffed with roasted almonds, pure alcohol-free Kannauj Oud and Gulab ittar, traditional vermicelli sheer khurma kit, and an engraved brass crescent-star trinket tray.',
    contents: [
      'Royal Medjool Stuffed Dates (250g Box)',
      'Pure Kannauj Rose & White Oudh Ittar (12ml Glass Vial)',
      'Artisanal Sheer Khurma Dry-Blend Kit with Saffron & Pistachio',
      'Engraved Brass Crescent & Star Keepsake Dish',
      'Gold-foil Eid Mubarak Greeting Card by Preety Singh'
    ],
    images: [`${BASE}images/product-hamper-grand.jpg`],
    image: `${BASE}images/product-hamper-grand.jpg`,
    color: '#047857',
    fallbackEmoji: '🌙',
    inStock: true,
    occasions: ['eid', 'wedding', 'thank-you']
  },

  // 🪔 DIWALI & DHANTERAS
  {
    id: 'p1',
    name: 'Diwali Diya & Rangoli Celebration Set',
    slug: 'diwali-diya-celebration-set',
    category: 'festivals',
    festival: 'Diwali & Dhanteras',
    tags: ['bestseller', 'diwali', 'handcrafted'],
    price: 1299,
    originalPrice: 1699,
    rating: 4.9,
    reviewCount: 312,
    artisan: 'Curated by Preety Singh (Nagerbazar, Kolkata - 700074)',
    shortDescription: '8 hand-painted terracotta diyas with organic Gulal & brass bell.',
    description: 'Celebrate the divine festival of lights. Handcrafted on traditional potter wheels, each terracotta diya is hand-painted in vibrant saffron, deep blue, and shimmering gold. Includes pure cow-ghee wicks and organic floral rangoli colors.',
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
    occasions: ['diwali', 'pooja', 'housewarming']
  },

  // 🎄 CHRISTMAS & NEW YEAR
  {
    id: 'p3',
    name: 'Joyous Winter Plum Cake & Hot Cocoa Box',
    slug: 'joyous-winter-christmas-hamper',
    category: 'festivals',
    festival: 'Christmas & New Year',
    tags: ['christmas', 'bestseller', 'seasonal'],
    price: 2199,
    originalPrice: 2699,
    rating: 4.9,
    reviewCount: 167,
    artisan: 'Curated by Preety Singh (Nagerbazar, Kolkata - 700074)',
    shortDescription: 'Old-Kolkata spiced fruit plum cake, Belgian cinnamon cocoa & pine candle.',
    description: 'Inspired by Kolkata’s timeless winter festive traditions. Features a traditional dark spiced plum cake aged with macerated dry fruits, artisanal Belgian cinnamon hot cocoa blend, hand-poured pine & cinnamon soy candle, and holiday candy canes.',
    contents: [
      'Heritage Rich Spiced Plum Cake (400g Tin)',
      'Belgian Dark Chocolate & Cinnamon Cocoa Blend (150g)',
      'Winter Pine & Warm Vanilla Soy Wax Candle',
      'Handmade Ceramic Holiday Mug with Knit Sleeve',
      'Calligraphed Christmas & New Year Wishes Note'
    ],
    images: [`${BASE}images/hero-gift.jpg`],
    image: `${BASE}images/hero-gift.jpg`,
    color: '#be123c',
    fallbackEmoji: '🎄',
    inStock: true,
    occasions: ['christmas', 'new-year', 'birthday']
  },

  // 🌺 DURGA PUJA & NAVRATRI (BENGAL HERITAGE)
  {
    id: 'p4',
    name: 'Sharod Utsav Kantha & Darjeeling Tea Treasure',
    slug: 'sharod-utsav-durga-puja-box',
    category: 'festivals',
    festival: 'Durga Puja & Navratri',
    tags: ['durga-puja', 'kolkata-special', 'handcrafted'],
    price: 1899,
    originalPrice: 2299,
    rating: 4.9,
    reviewCount: 142,
    artisan: 'Curated by Preety Singh (Nagerbazar, Kolkata - 700074)',
    shortDescription: 'Shantiniketan Kantha stitch clutch, First-Flush Darjeeling tea & brass Dhunuchi.',
    description: 'The spirit of Pujo from the heart of Bengal. Hand-embroidered Kantha silk pouch by Shantiniketan artisans, aromatic First-Flush Makaibari Darjeeling tea leaves, a miniature brass Dhunuchi, and Nolen Gur sweets.',
    contents: [
      'Hand-embroidered Kantha Silk Zip Clutch',
      'First-Flush Organic Darjeeling Whole-Leaf Tea (100g Tin)',
      'Miniature Handcrafted Brass Dhunuchi (Incense Burner)',
      'Organic Bengal Nolen Gur Sandesh Pouch',
      'Subho Bijoya & Festive Greeting Card'
    ],
    images: [`${BASE}images/product-block-print.jpg`],
    image: `${BASE}images/product-block-print.jpg`,
    color: '#e11d48',
    fallbackEmoji: '🌺',
    inStock: true,
    occasions: ['durga-puja', 'navratri', 'pooja']
  },

  // ☕ CHAI & COZY GOURMET (PAN-INDIA)
  {
    id: 'p6',
    name: 'Royal Masala Chai & Brass Kulhad Kit',
    slug: 'royal-masala-chai-kit',
    category: 'gourmet',
    festival: 'Cozy Morning Ritual',
    tags: ['bestseller', 'popular', 'cozy'],
    price: 1099,
    originalPrice: 1399,
    rating: 4.8,
    reviewCount: 198,
    artisan: 'Curated by Preety Singh (Nagerbazar, Kolkata - 700074)',
    shortDescription: 'Hammered pure brass kulhad, 3 artisanal chai blends & brass strainer.',
    description: 'An ode to the timeless Indian afternoon chai ritual. Features 3 distinct, whole-spice micro-batch blends paired with a heavy-gauge handcrafted brass kulhad and traditional tea strainer.',
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

  // 🪆 HEIRLOOM BRASS POOJA & GRIHA PRAVESH
  {
    id: 'p7',
    name: 'Moradabad Royal Brass Pooja Thali Set',
    slug: 'moradabad-brass-pooja-thali',
    category: 'pooja',
    festival: 'Pooja & Griha Pravesh',
    tags: ['premium', 'heirloom'],
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviewCount: 134,
    artisan: 'Curated by Preety Singh (Nagerbazar, Kolkata - 700074)',
    shortDescription: '10" intricately engraved brass thali with 5 sacred pooja accompaniments.',
    description: 'Fashioned by master brass smiths of Moradabad. Every swirl and floral border on this 10-inch plate is carved by hand. Ideal for Griha Pravesh, Diwali, Durga Puja, and sacred temple altars.',
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

  // 🌸 AYURVEDA SPA & SELF-CARE
  {
    id: 'p8',
    name: 'Kashmiri Saffron & Turmeric Wellness Box',
    slug: 'kashmiri-saffron-turmeric-wellness-box',
    category: 'wellness',
    festival: 'Self-Care & Pampering',
    tags: ['ayurvedic', 'self-care', 'luxury'],
    price: 1799,
    originalPrice: 2199,
    rating: 4.8,
    reviewCount: 76,
    artisan: 'Botanica & Preety Singh (Kolkata - 700074)',
    shortDescription: 'Pure Kasturi Haldi soap, steam-distilled rose water & Kumkumadi serum.',
    description: 'An ancient Vedic beauty and wellness ritual. Wild Kasturi turmeric cold-process soap, pure steam-distilled Kannauj Gulab Jal (rose mist), and authentic Kumkumadi Tailam enriched with Kashmiri saffron.',
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
  }
]

export const categories = [
  { id: 'all',        label: 'All Curations',             icon: '✨' },
  { id: 'birthday',   label: 'Birthday Celebrations',     icon: '🎂' },
  { id: 'valentine',  label: '14th Feb & Love',           icon: '💖' },
  { id: 'hampers',    label: 'Ready Hampers',             icon: '🧺' },
  { id: 'festivals',  label: 'Festives (Eid • Diwali)',   icon: '🪔' },
  { id: 'gourmet',    label: 'Chai & Gourmet',            icon: '☕' },
  { id: 'wellness',   label: 'Self-Care & Spa',           icon: '🌸' }
]

export const occasions = [
  { id: 'birthday',     label: 'Birthdays',         emoji: '🎂' },
  { id: 'valentine',    label: '14th Feb Love',     emoji: '💖' },
  { id: 'anniversary',  label: 'Anniversaries',     emoji: '💍' },
  { id: 'wedding',      label: 'Weddings',          emoji: '👰' },
  { id: 'diwali',       label: 'Diwali',            emoji: '🪔' },
  { id: 'eid',          label: 'Eid Mubarak',       emoji: '🌙' },
  { id: 'christmas',    label: 'Christmas',         emoji: '🎄' },
  { id: 'durga-puja',   label: 'Durga Puja',        emoji: '🌺' },
  { id: 'housewarming', label: 'Griha Pravesh',     emoji: '🏡' },
  { id: 'self-care',    label: 'Self-Care',         emoji: '🧖‍♀️' },
  { id: 'thank-you',    label: 'Dhanyawad',         emoji: '💌' }
]

export const getProductById   = (id)   => products.find(p => p.id === id)
export const getProductBySlug = (slug) => products.find(p => p.slug === slug)
export const getByCategory    = (cat)  => cat === 'all' ? products : products.filter(p => p.category === cat)
export const getFeatured      = ()     => products.filter(p => p.tags.includes('bestseller') || p.tags.includes('popular') || p.tags.includes('valentine'))
