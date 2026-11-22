const BASE = import.meta.env.BASE_URL || '/thecutebox/'

export const testimonials = [
  {
    id: 't1',
    name: 'Sayantani Banerjee',
    location: 'Ballygunge, Kolkata',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
    rating: 5,
    text: "Preety Singh curated our entire Durga Puja family gifting! The Kantha silk pouch with First-Flush Darjeeling tea brought the authentic essence of Kolkata to all our relatives abroad. Absolute perfection!",
    product: 'Sharod Utsav Kantha & Darjeeling Tea Treasure',
    occasion: 'Durga Puja'
  },
  {
    id: 't2',
    name: 'Dr. Zeeshan & Farzana Qureshi',
    location: 'Park Circus, Kolkata & Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    text: "The Noor-e-Eid hamper was pure royal luxury. The Medjool stuffed dates and pure Kannauj Oud ittar smelled heavenly. Preety personally coordinated the delivery with our handwritten Eid Mubarak note.",
    product: 'Noor-e-Eid Royal Ittar & Medjool Hamper',
    occasion: 'Eid Mubarak'
  },
  {
    id: 't3',
    name: 'Jessica D’Souza',
    location: 'Park Street, Kolkata',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    rating: 5,
    text: "Ordering Christmas hampers has never been this delightful! The rich spiced plum cake had the exact authentic Old-Kolkata Park Street bakery flavour, and the pine candle made our whole home festive.",
    product: 'Joyous Winter Plum Cake & Hot Cocoa Box',
    occasion: 'Christmas & New Year'
  },
  {
    id: 't4',
    name: 'Rohit & Shweta Agrawal',
    location: 'Alipore, Kolkata',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    rating: 5,
    text: "For our housewarming, the Moradabad brass thali and terracotta diyas left our elders speechless. Preety Singh and team at thecutebox are redefining modern Indian thoughtful gifting.",
    product: 'Moradabad Royal Brass Pooja Thali Set',
    occasion: 'Griha Pravesh & Diwali'
  }
]

export const artisans = [
  {
    id: 'a0',
    name: 'Preety Singh',
    craft: 'Founder & Master Curation Director',
    location: 'Kolkata Studio, West Bengal',
    contact: '+91 9831559109',
    story: 'Born from a deep love for Bengal’s artistic soul and India’s multifaceted festival calendar. Preety works directly with traditional craftspeople across Kolkata, Shantiniketan, Jaipur, and Kashmir to curate memorable celebration boxes.',
    avatar: `${BASE}images/artisan-rajasthan.jpg`,
    productCount: 'All 8 Curations'
  },
  {
    id: 'a1',
    name: 'Ramesh Kumawat',
    craft: 'Master Terracotta Potter',
    location: 'Kumhar Gram, Jaipur',
    contact: '+91 9831559109 (via Studio)',
    story: 'Seven generations of earthen diya shaping. रमेश जी creates eco-conscious clay diyas hand-painted in vibrant vegetable pigments for Diwali & sacred pujas.',
    avatar: `${BASE}images/product-diwali-diya.jpg`,
    productCount: 3
  },
  {
    id: 'a2',
    name: 'Debjani & Shantiniketan Women Guild',
    craft: 'Kantha Silk & Nakshi Artisans',
    location: 'Birbhum & Kolkata, Bengal',
    contact: '+91 9831559109 (via Studio)',
    story: 'Transforming tussar silk into intricate living poetry with running Kantha embroidery stitches, celebrated during Durga Puja and winter festivals.',
    avatar: `${BASE}images/product-block-print.jpg`,
    productCount: 4
  }
]
