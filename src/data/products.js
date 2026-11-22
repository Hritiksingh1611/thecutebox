// 🇮🇳 thecutebox.in — Pan-Indian Multi-Festival Gifting Catalog
// Founded & Handcrafted by Preety Singh • Kolkata Studio (+91 9831559109)
const BASE = import.meta.env.BASE_URL || '/thecutebox/'

export const products = [
  // 🪔 DIWALI & DHANTERAS
  {
    id: 'p1',
    name: 'Diwali Diya & Rangoli Celebration Set',
    slug: 'diwali-diya-celebration-set',
    category: 'diwali',
    festival: 'Diwali & Dhanteras',
    tags: ['bestseller', 'diwali', 'handcrafted'],
    price: 1299,
    originalPrice: 1699,
    rating: 4.9,
    reviewCount: 312,
    artisan: 'Preety Singh Curation • Jaipur & Kolkata Studios',
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

  // 🌙 EID MUBARAK & BAKRID
  {
    id: 'p2',
    name: 'Noor-e-Eid Royal Ittar & Medjool Hamper',
    slug: 'noor-e-eid-royal-hamper',
    category: 'eid',
    festival: 'Eid Mubarak',
    tags: ['bestseller', 'eid', 'luxury'],
    price: 2499,
    originalPrice: 2999,
    rating: 5.0,
    reviewCount: 184,
    artisan: 'Curated by Preety Singh • Kolkata & Lucknow',
    shortDescription: 'Jumbo Medjool dates, pure Kannauj Oud ittar, brass crescent tray & sheer khurma.',
    description: 'A regal celebration for Eid-ul-Fitr and Eid-ul-Adha. Hand-selected jumbo Medjool dates stuffed with roasted almonds, pure alcohol-free Kannauj Oud and Gulab ittar, traditional vermicelli sheer khurma kit, and an engraved brass crescent-star trinket tray.',
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

  // 🎄 CHRISTMAS & NEW YEAR
  {
    id: 'p3',
    name: 'Joyous Winter Plum Cake & Hot Cocoa Box',
    slug: 'joyous-winter-christmas-hamper',
    category: 'christmas',
    festival: 'Christmas & New Year',
    tags: ['christmas', 'bestseller', 'seasonal'],
    price: 2199,
    originalPrice: 2699,
    rating: 4.9,
    reviewCount: 167,
    artisan: 'Park Street Kolkata Heritage Kitchen & Studio',
    shortDescription: 'Old-Kolkata rum-soaked fruit plum cake, spiced cinnamon cocoa & pine candle.',
    description: 'Inspired by Kolkata’s legendary Park Street Christmas heritage. Features a traditional dark spiced plum cake aged with macerated dry fruits, artisanal Madagascar spiced hot cocoa blend, hand-poured pine & cinnamon soy candle, and candy canes.',
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

  // 🌺 DURGA PUJA & NAVRATRI (Kolkata Special)
  {
    id: 'p4',
    name: 'Sharod Utsav Kantha & Darjeeling Tea Treasure',
    slug: 'sharod-utsav-durga-puja-box',
    category: 'durgapuja',
    festival: 'Durga Puja & Navratri',
    tags: ['durga-puja', 'kolkata-special', 'handcrafted'],
    price: 1899,
    originalPrice: 2299,
    rating: 4.9,
    reviewCount: 142,
    artisan: 'Preety Singh • Shantiniketan & Kolkata Guild',
    shortDescription: 'Shantiniketan Kantha stitch clutch, First-Flush Darjeeling tea & brass Dhunuchi.',
    description: 'The spirit of Pujo from the heart of Kolkata. Hand-embroidered Kantha silk pouch by Shantiniketan rural women, aromatic First-Flush Makaibari Darjeeling tea leaves, a miniature brass Dhunuchi, and Nolen Gur flavoured sweets.',
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

  // 🎨 HOLI CELEBRATION
  {
    id: 'p5',
    name: 'Rang Barse Organic Herbal Gulal & Thandai Hamper',
    slug: 'rang-barse-holi-hamper',
    category: 'holi',
    festival: 'Holi Celebrations',
    tags: ['holi', 'seasonal', 'herbal'],
    price: 1499,
    originalPrice: 1899,
    rating: 4.8,
    reviewCount: 96,
    artisan: 'Botanica & Preety Singh Studio',
    shortDescription: '4 floral herbal gulal tins, Shahi Thandai syrup & organic Chandan.',
    description: 'Safe, joyful, and skin-loving Holi gifting. 4 tins of 100% natural herbal gulal made from dried marigolds, beetroot, and turmeric; paired with rich Kesar Thandai instant blend and pure Mysore sandalwood paste.',
    contents: [
      '4 Herbal Floral Gulal Tins (Marigold, Rose, Indigo, Turmeric)',
      'Shahi Kesar & Pistachio Thandai Mix (150g)',
      'Pure Sandalwood Tilak Paste with Brass Applicator',
      'Traditional Mawa Gujiya Sweet Box (4 pcs)',
      'Waterproof Festive Greetings Envelope'
    ],
    images: [`${BASE}images/product-haldi-box.jpg`],
    image: `${BASE}images/product-haldi-box.jpg`,
    color: '#E91E8C',
    fallbackEmoji: '🎨',
    inStock: true,
    occasions: ['holi', 'just-because']
  },

  // ☕ CHAI & GOURMET (PAN-INDIA)
  {
    id: 'p6',
    name: 'Royal Masala Chai & Brass Kulhad Kit',
    slug: 'royal-masala-chai-kit',
    category: 'gourmet',
    festival: 'All Celebrations',
    tags: ['bestseller', 'popular', 'cozy'],
    price: 1099,
    originalPrice: 1399,
    rating: 4.8,
    reviewCount: 198,
    artisan: 'Rajan Spice Estate & Preety Singh',
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

  // 🪆 HEIRLOOM POOJA & GRIHA PRAVESH
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
    artisan: 'Moradabad Metal Guild & Preety Singh',
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

  // 🌸 AYURVEDA WELLNESS & SELF CARE
  {
    id: 'p8',
    name: 'Kashmiri Saffron & Turmeric Wellness Box',
    slug: 'kashmiri-saffron-turmeric-wellness-box',
    category: 'wellness',
    festival: 'Self-Care & Wedding',
    tags: ['ayurvedic', 'self-care', 'luxury'],
    price: 1799,
    originalPrice: 2199,
    rating: 4.8,
    reviewCount: 76,
    artisan: 'Botanica Ayurveda • Curated by Preety Singh',
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
  { id: 'all',        label: 'All Festivals',       icon: '✨' },
  { id: 'diwali',     label: 'Diwali & Utsav',      icon: '🪔' },
  { id: 'eid',        label: 'Eid Mubarak',         icon: '🌙' },
  { id: 'christmas',  label: 'Christmas & Winter',  icon: '🎄' },
  { id: 'durgapuja',  label: 'Durga Puja & Pujo',   icon: '🌺' },
  { id: 'holi',       label: 'Holi Celebrations',   icon: '🎨' },
  { id: 'gourmet',    label: 'Chai & Sweets',       icon: '☕' },
  { id: 'pooja',      label: 'Pooja & Brassware',   icon: '🪆' },
  { id: 'wellness',   label: 'Ayurveda & Spa',      icon: '🌿' }
]

export const occasions = [
  { id: 'diwali',       label: 'Diwali',         emoji: '🪔' },
  { id: 'eid',          label: 'Eid Mubarak',    emoji: '🌙' },
  { id: 'christmas',    label: 'Christmas',      emoji: '🎄' },
  { id: 'durga-puja',   label: 'Durga Puja',     emoji: '🌺' },
  { id: 'holi',         label: 'Holi',           emoji: '🎨' },
  { id: 'wedding',      label: 'Weddings',       emoji: '💍' },
  { id: 'housewarming', label: 'Griha Pravesh',  emoji: '🏡' },
  { id: 'birthday',     label: 'Birthdays',      emoji: '🎂' },
  { id: 'pooja',        label: 'Sacred Pooja',   emoji: '✨' },
  { id: 'self-care',    label: 'Self-Care',      emoji: '🌸' }
]

export const getProductById   = (id)   => products.find(p => p.id === id)
export const getProductBySlug = (slug) => products.find(p => p.slug === slug)
export const getByCategory    = (cat)  => cat === 'all' ? products : products.filter(p => p.category === cat)
export const getFeatured      = ()     => products.filter(p => p.tags.includes('bestseller') || p.tags.includes('premium'))
