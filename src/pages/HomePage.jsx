import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Gift, Package, Star, ChevronRight, Phone, MessageCircle } from 'lucide-react'
import ProductCard from '../components/product/ProductCard'
import { products, occasions } from '../data/products'
import { testimonials, artisans } from '../data/testimonials'
import { useScrollReveal } from '../hooks/useScrollReveal'

const BASE = import.meta.env.BASE_URL || '/thecutebox/'

// ─── Compact Floating WhatsApp Button ─────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919831559109?text=Namaste%20Preety%20Singh%20ji,%20I%20want%20to%20curate%20a%20thecutebox%20gift%20box!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Preety Singh"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-full shadow-emerald font-bold text-xs hover:scale-105 transition-all group border-2 border-white"
    >
      <MessageCircle size={18} className="fill-white/20" />
      <span className="hidden sm:inline">WhatsApp Preety Singh</span>
      <span className="bg-white/20 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">9831559109</span>
    </a>
  )
}

// ─── Hero Section with Festival Switcher ──────────────────────────────────────
function HeroSection() {
  const [activeTab, setActiveTab] = useState('all')

  const FESTIVAL_HEROES = {
    all: {
      badge: 'All Indian Festivals Gifting',
      title1: 'Every Sacred Festival,',
      title2: 'Thoughtfully Gifted.',
      desc: 'Founded by Preety Singh in Nagerbazar, Kolkata, thecutebox brings together living craft traditions from across India for Eid, Diwali, Christmas, Durga Puja, and joyous milestones.',
      img: `${BASE}images/hero-gift.jpg`,
    },
    diwali: {
      badge: '🪔 Shubh Diwali & Dhanteras',
      title1: 'Illuminate Hearts With',
      title2: 'Earthen Light & Brass.',
      desc: 'Hand-painted terracotta diyas, pure brass pooja bells, organic floral rangoli, and artisanal sweets hand-packed with fresh marigolds.',
      img: `${BASE}images/product-diwali-diya.jpg`,
    },
    eid: {
      badge: '🌙 Eid Mubarak Celebrations',
      title1: 'Noor, Fragrance &',
      title2: 'Royal Eid Blessings.',
      desc: 'Jumbo Medjool dates stuffed with almonds, pure Kannauj Oud & Gulab ittar, sheer khurma kit, and engraved brass crescent trays.',
      img: `${BASE}images/product-hamper-grand.jpg`,
    },
    christmas: {
      badge: '🎄 Christmas & New Year',
      title1: 'Festive Cheer &',
      title2: 'Spiced Plum Cakes.',
      desc: 'Traditional spiced fruit plum cakes, Belgian cinnamon hot cocoa, pine-scented soy candles, and cozy holiday warmth.',
      img: `${BASE}images/hero-gift.jpg`,
    },
    durgapuja: {
      badge: '🌺 Sharod Utsav & Durga Puja',
      title1: 'The Living Heart of',
      title2: 'Bengal Pujo Warmth.',
      desc: 'Hand-embroidered Kantha silk pouches from Shantiniketan, organic Makaibari Darjeeling tea, brass dhunuchi, and Nolen Gur sweets.',
      img: `${BASE}images/product-block-print.jpg`,
    },
  }

  const current = FESTIVAL_HEROES[activeTab] || FESTIVAL_HEROES.all

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-gradient-hero pt-32 sm:pt-36 lg:pt-40 pb-16">
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-16 right-0 w-[500px] h-[500px] bg-gradient-to-br from-saffron-300/25 via-rose-light/20 to-emeraldFestive-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-gradient-to-tr from-teal-200/20 to-marigold-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Interactive Festival Mood Selector */}
        <div className="mb-10 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-saffron-200/80 shadow-warm-sm">
            {[
              { id: 'all', label: 'All Festivals ✨' },
              { id: 'diwali', label: 'Diwali 🪔' },
              { id: 'eid', label: 'Eid Mubarak 🌙' },
              { id: 'christmas', label: 'Christmas 🎄' },
              { id: 'durgapuja', label: 'Durga Puja 🌺' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-saffron-500 to-rose-gulabi text-white shadow-sm'
                    : 'text-indigo-deep/75 hover:text-saffron-600 hover:bg-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-7">
            {/* Founder Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-saffron-200 text-saffron-800 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 shadow-sm">
              <Sparkles size={13} className="text-saffron-500 animate-spin-slow" />
              <span>{current.badge}</span>
              <span className="text-earth-pale">•</span>
              <span className="text-earth-light">Nagerbazar, Kolkata</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-deep leading-[1.12] mb-5">
              {current.title1}
              <span className="block gradient-text-saffron italic">
                {current.title2}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-indigo-deep/80 leading-relaxed mb-7 max-w-xl font-normal">
              {current.desc}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <Link to="/build" className="btn-primary text-base px-7 py-3.5 shadow-warm">
                Build Your Custom Box <ArrowRight size={17} />
              </Link>
              <Link to="/hampers" className="btn-secondary text-base px-6 py-3.5">
                Explore All Hampers
              </Link>
            </div>

            {/* Founder Contact Row */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 border border-saffron-100 flex flex-wrap items-center justify-between gap-3 shadow-sm max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-700 font-bold text-xs flex-shrink-0">
                  PS
                </div>
                <div>
                  <p className="font-bold text-xs text-indigo-deep">Curated by Preety Singh</p>
                  <p className="text-[11px] text-earth-light">Nagerbazar, Jessore Road, Kolkata - 700074</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:9831559109"
                  className="inline-flex items-center gap-1 bg-saffron-50 text-saffron-700 hover:bg-saffron-100 px-3 py-1.5 rounded-full text-xs font-bold transition-colors"
                >
                  <Phone size={11} /> 9831559109
                </a>
                <a
                  href="https://wa.me/919831559109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-emerald-600 text-white hover:bg-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold transition-colors"
                >
                  <MessageCircle size={11} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Hero Visual Card (Clean, framed, no overlapping pills) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[420px]">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-warm-xl border-4 border-white bg-ivory-warm relative group">
                <img
                  src={current.img}
                  alt={current.title2}
                  key={activeTab}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/85 via-indigo-deep/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block bg-saffron-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2 shadow-sm">
                    {current.badge}
                  </span>
                  <p className="font-display font-bold text-lg md:text-xl leading-snug text-white drop-shadow">
                    Hand-packed by Preety Singh • Kolkata - 700074
                  </p>
                  <p className="text-xs text-ivory/80 mt-1 flex items-center gap-1">
                    <span>✨ Pan-India Express Delivery</span>
                    <span>•</span>
                    <span>📞 9831559109</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Occasions & Festivals Strip ─────────────────────────────────────────────
function OccasionsStrip() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <section
      ref={ref}
      className={`py-5 bg-white border-y border-saffron-100 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-1 scrollbar-hide">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-saffron-700 flex-shrink-0 flex items-center gap-1.5">
            <span>✨</span> Gift by Festival:
          </span>
          <div className="flex gap-2">
            {occasions.map(({ id, label, emoji }) => (
              <Link
                key={id}
                to={`/catalog?occasion=${id}`}
                className="flex-shrink-0 flex items-center gap-1.5 bg-ivory px-3.5 py-1.5 rounded-full text-xs font-bold text-indigo-deep hover:bg-saffron-500 hover:text-white transition-all duration-200 border border-saffron-100 shadow-sm"
              >
                <span>{emoji}</span>
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Multi-Festival Bento ────────────────────────────────────────────────────
function CategoryBento() {
  const { ref, isVisible } = useScrollReveal()
  const bentoItems = [
    {
      label: 'Diwali & Dhanteras Lights',
      emoji: '🪔',
      desc: 'Terracotta diyas, pooja brass bells & rangoli colors',
      to: '/catalog?occasion=diwali',
      img: `${BASE}images/product-diwali-diya.jpg`,
      large: true,
      tag: 'Festive Lights',
    },
    {
      label: 'Noor-e-Eid Mubarak',
      emoji: '🌙',
      desc: 'Stuffed Medjool dates, Oud ittar & brass crescent tray',
      to: '/catalog?occasion=eid',
      img: `${BASE}images/product-hamper-grand.jpg`,
      tag: 'Royal Eid',
    },
    {
      label: 'Old-Kolkata Christmas Joy',
      emoji: '🎄',
      desc: 'Rich spiced fruit plum cake, cocoa & pine candle',
      to: '/catalog?occasion=christmas',
      img: `${BASE}images/hero-gift.jpg`,
      tag: 'Winter Cheer',
    },
    {
      label: 'Sharod Utsav & Durga Puja',
      emoji: '🌺',
      desc: 'Kantha silk clutch, Darjeeling Makaibari tea & dhunuchi',
      to: '/catalog?occasion=durga-puja',
      img: `${BASE}images/product-block-print.jpg`,
      tag: 'Bengal Heritage',
    },
    {
      label: 'Rang Barse Herbal Holi',
      emoji: '🎨',
      desc: 'Skin-safe organic floral gulal, thandai & chandan',
      to: '/catalog?occasion=holi',
      img: `${BASE}images/product-haldi-box.jpg`,
      tag: 'Spring Colors',
    },
  ]

  return (
    <section className="section-pad bg-ivory relative">
      <div
        ref={ref}
        className={`container-site transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="tag bg-saffron-100 text-saffron-700 mb-3">All Indian Festivals • Handcrafted</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-deep mb-3">
            Flavours of Every Celebration
          </h2>
          <p className="text-sm sm:text-base text-indigo-deep/75 leading-relaxed">
            From the lights of Diwali and the crescent of Eid to Christmas carols and the rhythm of Pujo dhaks — we weave India’s grand festivities into each artisanal box.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[250px]">
          {bentoItems.map(({ label, emoji, desc, to, img, large, tag }) => (
            <Link
              key={label}
              to={to}
              className={`${
                large ? 'md:col-span-2 md:row-span-2' : ''
              } rounded-3xl overflow-hidden relative group shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1.5 border border-saffron-100 bg-ivory-warm flex flex-col justify-end p-6`}
            >
              <img
                src={img}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/85 via-indigo-deep/30 to-transparent" />

              <div className="relative z-10 text-white">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                  {tag}
                </span>
                <span className="text-3xl block mb-1">{emoji}</span>
                <p className="font-display font-bold text-xl md:text-2xl mb-1 text-white">
                  {label}
                </p>
                <p className="text-xs sm:text-sm text-ivory/80 line-clamp-2">{desc}</p>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={18} className="text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Featured Products ────────────────────────────────────────────────────────
function FeaturedProducts() {
  const featured = products.slice(0, 4)

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="tag bg-saffron-100 text-saffron-700 mb-2">Curated With Intent</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-indigo-deep">
              Featured Festival Curations
            </h2>
            <p className="text-sm text-earth-light mt-1">
              Hand-packed by Preety Singh (Nagerbazar, Kolkata - 700074)
            </p>
          </div>
          <Link to="/catalog" className="btn-secondary self-start sm:self-auto">
            View All Curations <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Gift Recommendation Quiz ─────────────────────────────────────────────────
const QUIZ_STEPS = [
  {
    q: 'Which festival or celebration are you gifting for?',
    options: ['Diwali & Dhanteras', 'Eid-ul-Fitr / Eid Mubarak', 'Christmas & New Year', 'Durga Puja & Navratri', 'Holi Celebrations', 'Wedding / Griha Pravesh'],
  },
  {
    q: 'Who is the recipient?',
    options: ['Parents & Family Elders', 'Clients & Business Partners', 'Close Friends & Siblings', 'Newly Married Couple', 'Self-Care / Personal Treat'],
  },
  {
    q: 'What is your comfortable budget?',
    options: ['Under ₹1,500', '₹1,500 – ₹2,500', '₹2,500 – ₹4,000', 'Royal Luxury (₹4,000+)'],
  },
]

function GiftFinder() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [done, setDone] = useState(false)
  const { ref, isVisible } = useScrollReveal()

  const pick = (opt) => {
    const next = [...answers, opt]
    setAnswers(next)
    if (step < QUIZ_STEPS.length - 1) {
      setStep(step + 1)
    } else {
      setDone(true)
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers([])
    setDone(false)
  }

  return (
    <section
      ref={ref}
      className={`section-pad bg-gradient-to-br from-indigo-deep via-indigo-rich to-indigo-deep text-white transition-all duration-700 relative overflow-hidden ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-site relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-saffron-500/20 border border-saffron-400/40 text-saffron-300 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-wider">
            <Sparkles size={14} />
            Festival Gift Matcher
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Find the Perfect Festival Hamper
          </h2>
          <p className="text-ivory/70 text-base mb-10 max-w-md mx-auto">
            3 simple questions to hand-match the ideal Indian celebration box.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/15 shadow-warm-xl">
            {!done ? (
              <>
                <div className="flex gap-2 mb-8 justify-center">
                  {QUIZ_STEPS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i <= step ? 'bg-saffron-400 w-12' : 'bg-white/20 w-6'
                      }`}
                    />
                  ))}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-6 text-ivory">
                  {QUIZ_STEPS[step].q}
                </h3>

                <div className="flex flex-wrap gap-3 justify-center">
                  {QUIZ_STEPS[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => pick(opt)}
                      className="px-5 py-3 rounded-full bg-white/15 hover:bg-saffron-500 hover:text-white font-semibold text-sm transition-all duration-200 border border-white/20 active:scale-95"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div>
                <div className="text-5xl mb-4">✨</div>
                <h3 className="font-display text-2xl font-bold mb-2 text-ivory">
                  Ideal Curation Discovered!
                </h3>
                <p className="text-ivory/70 text-sm mb-6">
                  Selected: <span className="font-semibold text-saffron-300">{answers.join(' • ')}</span>
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/catalog" className="btn-primary">
                    View Matches <ArrowRight size={16} />
                  </Link>
                  <button
                    onClick={reset}
                    className="px-6 py-3 rounded-full bg-white/20 text-white font-semibold text-sm hover:bg-white/30 transition-colors"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Build Your Box Banner ───────────────────────────────────────────────────
function BuildYourBoxCTA() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <section
      ref={ref}
      className={`section-pad bg-ivory transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container-site">
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden grid md:grid-cols-12 shadow-warm-lg border border-saffron-100">
          {/* Image */}
          <div className="md:col-span-5 relative min-h-[300px] md:min-h-full bg-ivory-warm">
            <img
              src={`${BASE}images/hero-gift.jpg`}
              alt="Custom Indian gift box by Preety Singh"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs uppercase font-bold tracking-wider text-marigold-300 block mb-1">
                Nagerbazar, Kolkata - 700074
              </span>
              <p className="font-display font-bold text-lg text-white">
                Hand-tied with Banarasi silk ribbon &amp; handwritten blessing
              </p>
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-7 p-8 md:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-saffron-600 text-xs font-bold tracking-widest uppercase mb-3">
              <Package size={14} />
              Interactive Custom Box Builder
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-indigo-deep mb-4 leading-tight">
              Create Your Personalized Festival Box
            </h2>
            <p className="text-indigo-deep/70 text-sm sm:text-base leading-relaxed mb-6">
              Pick up to 6 treasures across any festival flavor — diyas, plum cakes, ittar, Darjeeling tea, or chai kulhads. Preety Singh personally ensures each box is hand-packed with fresh petals and your custom blessing.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8 text-sm">
              {[
                'Mix & match items across any festival',
                'Banarasi Silk, Dabu wrap, or Kraft packaging',
                'Handwritten calligraphy note included',
                'Direct-to-recipient Pan-India delivery',
              ].map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-indigo-deep">
                  <span className="w-5 h-5 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/build" className="btn-primary text-base px-8 py-3.5 shadow-warm">
                Start Building Your Box <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Preety Singh & Artisans Spotlight ────────────────────────────────────────
function ArtisanSpotlight() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <section
      ref={ref}
      className={`section-pad bg-ivory-warm border-y border-saffron-100 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="tag bg-saffron-100 text-saffron-700 mb-3">The People Behind the Craft</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-indigo-deep mb-3">
            Preety Singh &amp; Living Craft Families
          </h2>
          <p className="text-indigo-deep/70 text-sm sm:text-base">
            From Nagerbazar, Kolkata, we connect generational craft communities across West Bengal, Rajasthan, Uttar Pradesh, and Kashmir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {artisans.map((a) => (
            <div
              key={a.id}
              className="bg-white rounded-3xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 border border-saffron-100/60 flex flex-col"
            >
              <div className="h-56 overflow-hidden bg-ivory relative">
                <img
                  src={a.avatar}
                  alt={a.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-saffron-700 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {a.craft}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-indigo-deep mb-1">
                    {a.name}
                  </h3>
                  <p className="text-xs text-saffron-600 font-semibold mb-3">
                    📍 {a.location}
                  </p>
                  <p className="text-sm text-indigo-deep/75 leading-relaxed">
                    {a.story}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-saffron-50 text-xs font-bold text-indigo-deep/60 flex justify-between items-center">
                  <span>Contact: {a.contact}</span>
                  <Link to="/artisans" className="text-saffron-600 hover:underline">
                    View profile →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <section
      ref={ref}
      className={`section-pad bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-site">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-marigold-500 fill-marigold-500" />
            ))}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-indigo-deep mb-2">
            Stories From Our Patrons
          </h2>
          <p className="text-earth-light text-sm">
            Celebrating Eid, Christmas, Durga Puja, and Diwali with thecutebox
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="bg-ivory rounded-3xl p-6 shadow-warm-sm border border-saffron-100/70 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={13} className="text-marigold-500 fill-marigold-500" />
                  ))}
                </div>
                <p className="text-sm text-indigo-deep/85 leading-relaxed mb-6 italic font-sans">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-saffron-200/50">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-saffron-200"
                />
                <div>
                  <p className="font-display font-bold text-sm text-indigo-deep">{t.name}</p>
                  <p className="text-xs text-earth-light">
                    {t.location} • <span className="text-saffron-600 font-semibold">{t.occasion}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── HomePage ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <OccasionsStrip />
      <CategoryBento />
      <FeaturedProducts />
      <GiftFinder />
      <BuildYourBoxCTA />
      <ArtisanSpotlight />
      <Testimonials />
      <FloatingWhatsApp />
    </main>
  )
}
