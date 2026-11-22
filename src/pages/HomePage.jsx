import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Gift, Package, Star, ChevronRight } from 'lucide-react'
import ProductCard from '../components/product/ProductCard'
import { products, occasions } from '../data/products'
import { testimonials, artisans } from '../data/testimonials'
import { useScrollReveal } from '../hooks/useScrollReveal'

const BASE = import.meta.env.BASE_URL || '/thecutebox/'

// ─── Hero Section ───────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-hero pt-24 pb-16">
      {/* Decorative Indian motifs & ambient glow */}
      <div className="absolute top-12 right-0 w-[500px] h-[500px] bg-gradient-to-br from-saffron-300/30 to-marigold-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-rose-pale/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-saffron-50 border border-saffron-200/80 text-saffron-700 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
              <Sparkles size={14} className="text-saffron-500 animate-spin-slow" />
              Boutique Indian Gifting • Hand-packed in Jaipur &amp; Bangalore
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-indigo-deep leading-[1.12] mb-6">
              Gift With
              <span className="block gradient-text-saffron italic">Sacred Intent &amp; Joy</span>
            </h1>

            <p className="text-base sm:text-lg text-indigo-deep/80 leading-relaxed mb-8 max-w-xl font-normal">
              Curated artisanal gift boxes infused with India's living crafts. From hand-painted terracotta diyas and pure brass pooja thalis to estate chai and royal sweets — hand-packed with fresh marigolds and handwritten blessings.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/build" className="btn-primary text-base px-8 py-4 shadow-warm-lg">
                Build Your Own Box <ArrowRight size={18} />
              </Link>
              <Link to="/hampers" className="btn-secondary text-base px-8 py-4">
                Explore Royal Hampers
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-saffron-200/60 text-xs text-indigo-deep/80 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-xl">🪔</span>
                <span>Authentic Living Crafts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🤝</span>
                <span>50+ Master Artisans</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🌸</span>
                <span>Natural &amp; Plastic-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <span>Express Pan-India Delivery</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px]">
              {/* Main Photo */}
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-warm-xl border-4 border-white/80 bg-ivory-warm relative group">
                <img
                  src={`${BASE}images/hero-gift.jpg`}
                  alt="thecutebox Indian artisan gift boxes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block bg-saffron-500 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    Festive Curation 2024
                  </span>
                  <p className="font-display font-bold text-xl md:text-2xl leading-tight text-white drop-shadow">
                    Maha Utsav Box with Fresh Marigolds &amp; Diyas
                  </p>
                </div>
              </div>

              {/* Floating Pill: Chai Kit */}
              <div className="absolute -left-6 top-1/4 bg-white/95 backdrop-blur-md rounded-2xl shadow-warm-lg p-3 flex items-center gap-3 border border-saffron-100 hidden sm:flex">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-marigold-100 flex-shrink-0">
                  <img
                    src={`${BASE}images/product-chai-kit.jpg`}
                    alt="Chai kit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-display font-bold text-xs text-indigo-deep">Royal Chai Kit</p>
                  <p className="text-saffron-600 font-bold text-xs">₹1,099</p>
                </div>
              </div>

              {/* Floating Pill: Ratings */}
              <div className="absolute -right-6 bottom-16 bg-white/95 backdrop-blur-md rounded-2xl shadow-warm-lg p-3.5 flex items-center gap-3 border border-saffron-100 hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-marigold-50 flex items-center justify-center text-xl">
                  🪔
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="text-marigold-500 fill-marigold-500" />
                    ))}
                  </div>
                  <p className="font-sans font-bold text-[11px] text-indigo-deep mt-0.5">
                    4.9 / 5 • 1,200+ Gifters
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

// ─── Occasions Strip ─────────────────────────────────────────────────────────
function OccasionsStrip() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <section
      ref={ref}
      className={`py-6 bg-white border-y border-saffron-100 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 scrollbar-hide">
          <span className="font-display font-semibold text-xs uppercase tracking-widest text-saffron-600 flex-shrink-0">
            Gift by Occasion:
          </span>
          <div className="flex gap-2.5">
            {occasions.map(({ id, label, emoji }) => (
              <Link
                key={id}
                to={`/catalog?occasion=${id}`}
                className="flex-shrink-0 flex items-center gap-2 bg-ivory px-4 py-2 rounded-full text-xs font-bold text-indigo-deep hover:bg-saffron-500 hover:text-white transition-all duration-200 border border-saffron-100 shadow-sm"
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

// ─── Category Bento ──────────────────────────────────────────────────────────
function CategoryBento() {
  const { ref, isVisible } = useScrollReveal()
  const bentoItems = [
    {
      label: 'Diwali & Festive Light',
      emoji: '🪔',
      desc: 'Terracotta diyas, pooja brass & rangoli sets',
      to: '/catalog?cat=festive',
      img: `${BASE}images/product-diwali-diya.jpg`,
      large: true,
    },
    {
      label: 'Royal Utsav Hampers',
      emoji: '🧺',
      desc: 'Heirloom rosewood trunks & brass idols',
      to: '/hampers',
      img: `${BASE}images/product-hamper-grand.jpg`,
    },
    {
      label: 'Royal Chai & Kahwa',
      emoji: '☕',
      desc: 'Hammered brass kulhad & whole spice blends',
      to: '/catalog?cat=gourmet',
      img: `${BASE}images/product-chai-kit.jpg`,
    },
    {
      label: 'Ayurveda & Haldi Wellness',
      emoji: '🌿',
      desc: 'Pure saffron serum, rose mist & kansa wands',
      to: '/catalog?cat=wellness',
      img: `${BASE}images/product-haldi-box.jpg`,
    },
    {
      label: 'Bagru Block-Print Crafts',
      emoji: '🎨',
      desc: 'Natural indigo diaries, pouches & cotton wraps',
      to: '/catalog?cat=artisan',
      img: `${BASE}images/product-block-print.jpg`,
    },
  ]

  return (
    <section className="section-pad bg-ivory">
      <div
        ref={ref}
        className={`container-site transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="tag bg-saffron-100 text-saffron-700 mb-3">Living Heritage</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-deep mb-4">
            Curations Rooted in Indian Craft
          </h2>
          <p className="text-sm sm:text-base text-indigo-deep/75 leading-relaxed">
            Every curation honors generational craft families — from clay turners of Jaipur to brass casters of Moradabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[240px]">
          {bentoItems.map(({ label, emoji, desc, to, img, large }) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/80 via-indigo-deep/30 to-transparent" />

              <div className="relative z-10 text-white">
                <span className="text-3xl block mb-2">{emoji}</span>
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="tag bg-saffron-100 text-saffron-700 mb-2">Most Cherished</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-indigo-deep">
              Bestselling Festive Gifts
            </h2>
            <p className="text-sm text-earth-light mt-1">
              Hand-picked curations flying off our studio shelves this season
            </p>
          </div>
          <Link to="/catalog" className="btn-secondary self-start sm:self-auto">
            View Complete Collection <ArrowRight size={16} />
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

// ─── Gift Finder Quiz ─────────────────────────────────────────────────────────
const QUIZ_STEPS = [
  {
    q: 'Who are you blessing with this gift?',
    options: ['Parents & Elders', 'New Couple / Newlyweds', 'Colleagues & Clients', 'Friends & Siblings', 'Myself (Self-Care)'],
  },
  {
    q: "What is the auspicious occasion?",
    options: ['Diwali & Festive Utsav', 'Griha Pravesh (Housewarming)', 'Wedding & Shaadi', 'Birthday (Janamdin)', 'Gratitude / Dhanyawad'],
  },
  {
    q: 'What is your gifting budget?',
    options: ['Under ₹1,500', '₹1,500 – ₹3,000', '₹3,000 – ₹5,000', 'Luxury Heritage (₹5,000+)'],
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
            Gift Recommendation Engine
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Find the Auspicious Gift
          </h2>
          <p className="text-ivory/70 text-base mb-10 max-w-md mx-auto">
            Answer 3 quick questions. We will hand-match the ideal Indian craft box for your loved one.
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
                <div className="text-5xl mb-4">🪔</div>
                <h3 className="font-display text-2xl font-bold mb-2 text-ivory">
                  Ideal Curation Discovered!
                </h3>
                <p className="text-ivory/70 text-sm mb-6">
                  Based on: <span className="font-semibold text-saffron-300">{answers.join(' • ')}</span>
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/catalog" className="btn-primary">
                    View Recommended Boxes <ArrowRight size={16} />
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
              src={`${BASE}images/product-hamper-grand.jpg`}
              alt="Custom Indian gift box"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs uppercase font-bold tracking-wider text-marigold-300 block mb-1">
                Custom Hand-Packing
              </span>
              <p className="font-display font-bold text-lg text-white">
                Finished with fresh marigolds &amp; brass charm
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
              Craft Your Personalized Gift Box in 3 Steps
            </h2>
            <p className="text-indigo-deep/70 text-sm sm:text-base leading-relaxed mb-6">
              Hand-pick your favorite artisan treasures, write your personal message on seed-paper, and select your signature festive ribbon. We package each item with hand-pressed petals and brass accents.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8 text-sm">
              {[
                'Choose from 8+ living craft items',
                'Banarasi silk or Kraft paper wrapping',
                'Handwritten calligraphy message note',
                'Real-time photo proof before dispatch',
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
                Start Building Now <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Artisan Spotlight ────────────────────────────────────────────────────────
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
          <span className="tag bg-saffron-100 text-saffron-700 mb-3">Custodians of Heritage</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-indigo-deep mb-3">
            Meet the Master Artisans
          </h2>
          <p className="text-indigo-deep/70 text-sm sm:text-base">
            Every product in your box supports generational craft families with fair, dignity-first livelihoods across rural India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {artisans.map((a, i) => (
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
                  <span>{a.productCount} creations on thecutebox</span>
                  <Link to="/artisans" className="text-saffron-600 hover:underline">
                    Read story →
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
            Loved Across India
          </h2>
          <p className="text-earth-light text-sm">
            Stories from people who celebrated moments with thecutebox
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
    </main>
  )
}
