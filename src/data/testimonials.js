const BASE = import.meta.env.BASE_URL || '/thecutebox/'

export const testimonials = [
  {
    id: 't1',
    name: 'Dr. Radhika Sen',
    location: 'South Delhi',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
    rating: 5,
    text: "Sent the Maha Utsav Hamper to my in-laws for Griha Pravesh. The brass Ganesha, the marigold fragrance, the hand-calligraphed card — they were completely overwhelmed. Pure royal elegance!",
    product: 'Maha Utsav Grand Heritage Hamper',
    occasion: 'Griha Pravesh'
  },
  {
    id: 't2',
    name: 'Vikram & Shreya Singhania',
    location: 'Indiranagar, Bangalore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    text: "We ordered 80 custom boxes for our sister’s wedding return gifts. Each guest called us personally to praise the hand-painted diyas and royal chai kit. Customer service was remarkable.",
    product: 'Custom Build Box',
    occasion: 'Wedding Gifting'
  },
  {
    id: 't3',
    name: 'Ananya Deshmukh',
    location: 'Koregaon Park, Pune',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    rating: 5,
    text: "The brass pooja thali set has such weight and heirloom craftsmanship! In a world of plastic and cheap imports, thecutebox feels like a breath of authentic Indian pride.",
    product: 'Moradabad Royal Brass Pooja Thali',
    occasion: 'Diwali & Pooja'
  },
  {
    id: 't4',
    name: 'Aditya Birla Capital Team',
    location: 'BKC, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    rating: 5,
    text: "Seamless corporate festive gifting! 250 hampers delivered across 14 cities in India on the exact requested date. The custom branded sleeve and handwritten touch made our clients feel deeply valued.",
    product: 'Corporate Festival Hampers',
    occasion: 'Diwali Corporate'
  }
]

export const artisans = [
  {
    id: 'a1',
    name: 'Ramesh Kumawat',
    craft: 'Master Terracotta Artisan',
    location: 'Kumhar Gram, Jaipur',
    story: 'Carrying forward seven generations of earthen pottery. Rameshji sculpts clay from the riverbeds of Rajasthan and uses organic mineral pigments for festive rangoli diyas.',
    avatar: `${BASE}images/artisan-rajasthan.jpg`,
    productCount: 4
  },
  {
    id: 'a2',
    name: 'Sunita & Mohan Devi',
    craft: 'Dabu & Indigo Block Printers',
    location: 'Bagru Village, Rajasthan',
    story: 'Championing sustainable block printing powered by sun and river water. Their studio employs 22 women weavers and artisans across rural Bagru.',
    avatar: `${BASE}images/product-block-print.jpg`,
    productCount: 3
  },
  {
    id: 'a3',
    name: 'Nazeer Ahmed Khan',
    craft: 'Heritage Saffron & Spice Cultivator',
    location: 'Pampore, Kashmir Valley',
    story: 'Harvesting purple saffron blossoms by hand on the cold plateaus of Kashmir at dawn. Pure Mongra grade kesar preserved with ancestral reverence.',
    avatar: `${BASE}images/product-chai-kit.jpg`,
    productCount: 3
  }
]
