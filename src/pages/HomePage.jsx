import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Gift, Package, Star, ChevronRight, Play } from 'lucide-react'
import ProductCard from '../components/product/ProductCard'
import { products, categories, occasions } from '../data/products'
import { testimonials, artisans } from '../data/testimonials'
import { useScrollReveal } from '../hooks/useScrollReveal'

// ─── Hero Section ───────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-terracotta-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-rose-pale/40 rounded-full blur-3xl" />

      <div className="container-site relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-terracotta-50 border border-terracotta-200 text-terracotta-600 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              <Sparkles size={12} />
              Artisan Gifting, Reimagined
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight mb-6">
              Gift With
              <span className="block text-terracotta-500 italic">Pure Intent</span>
            </h1>

            <p className="text-lg text-charcoal-light leading-relaxed mb-8 max-w-lg">
              Curated artisan gift boxes, handpacked with love in Jaipur &amp; Bangalore. 
              Every box tells a story — and yours is waiting to be written.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/build" className="btn-primary text-base px-8 py-4">
                Build Your Box <ArrowRight size={18} />
              </Link>
              <Link to="/catalog" className="btn-secondary text-base px-8 py-4">
                Explore Gifts
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-sm text-charcoal-muted">
              {[
                { icon: '🌿', text: '100% Natural Materials' },
                { icon: '🤝', text: '50+ Artisan Partners' },
                { icon: '📦', text: 'Next-Day Delivery' },
                { icon: '⭐', text: '4.9 / 5 from 1,200+ reviews' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-1.5">
                  <span>{icon}</span>
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
              {/* Main floating image */}
              <div className="w-full h-full rounded-4xl overflow-hidden shadow-warm-xl">
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85"
                  alt="Artisan gift boxes by thecutebox"
                  className="w-full h-full object-cover animate-float"
                />
              </div>

              {/* Floating product cards */}
              <div className="absolute -left-10 top-1/4 bg-white rounded-2xl shadow-warm-lg p-3 flex items-center gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-12 h-12 rounded-xl bg-terracotta-100 flex items-center justify-center text-xl">🕯️</div>
                <div>
                  <p className="font-semibold text-xs text-charcoal">Soy Candle</p>
                  <p className="text-terracotta-500 font-bold text-sm">₹1,299</p>
                </div>
              </div>

              <div className="absolute -right-6 bottom-1/4 bg-white rounded-2xl shadow-warm-lg p-3 flex items-center gap-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 rounded-xl bg-cream overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1512909006721-3d6018887383?w=100&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={8} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="font-semibold text-xs text-charcoal">Birthday Box</p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-terracotta-500 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-warm">
                <span className="font-bold text-lg leading-none">50+</span>
                <span className="text-[8px] leading-none tracking-wide">Artisans</span>
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
    <section ref={ref} className={`py-10 bg-cream border-y border-terracotta-100 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container-site">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {occasions.map(({ id, label, emoji }) => (
            <Link
              key={id}
              to={`/catalog?occasion=${id}`}
              className="flex-shrink-0 flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-warm-sm text-sm font-semibold text-charcoal hover:bg-terracotta-500 hover:text-white hover:shadow-warm transition-all duration-200"
            >
              <span className="text-base">{emoji}</span>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Category Bento ──────────────────────────────────────────────────────────
function CategoryBento() {
  const { ref, isVisible } = useScrollReveal()
  const bentoItems = [
    { label: 'Wellness Boxes', emoji: '🌿', desc: 'Calm & self-care', bg: 'bg-cream-warm', to: '/catalog?cat=wellness', img: 'https://images.unsplash.com/photo-1608181831688-c46e5e4a85e0?w=400&q=80' },
    { label: 'Artisan Candles', emoji: '🕯️', desc: 'Handpoured with love', bg: 'bg-terracotta-50', to: '/catalog?cat=candles', img: 'https://images.unsplash.com/photo-1602874801006-71ac8bbf7174?w=400&q=80' },
    { label: 'Premium Hampers', emoji: '🧺', desc: '8–12 curated gifts', bg: 'bg-blush/20', to: '/hampers', img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400&q=80', large: true },
    { label: 'Gourmet Delights', emoji: '☕', desc: 'Spices, chai & honey', bg: 'bg-amber-50', to: '/catalog?cat=gourmet', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },
    { label: 'Artisan Crafts', emoji: '🎨', desc: 'Resin, pottery & more', bg: 'bg-green-50', to: '/catalog?cat=artisan', img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80' },
  ]

  return (
    <section className="section-pad bg-cream-light">
      <div
        ref={ref}
        className={`container-site transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-charcoal mb-3">Discover by Category</h2>
          <p className="text-charcoal-muted max-w-lg mx-auto">From wellness rituals to artisan crafts — find the perfect gift for every personality.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {bentoItems.map(({ label, emoji, desc, bg, to, img, large }, i) => (
            <Link
              key={label}
              to={to}
              className={`${bg} ${large ? 'col-span-2 row-span-2' : ''} rounded-3xl overflow-hidden relative group shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <img src={img} alt={label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-2xl block mb-1">{emoji}</span>
                <p className="font-display font-bold text-base md:text-lg">{label}</p>
                <p className="text-xs text-cream/80">{desc}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={16} className="text-white" />
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
  const featured = products.filter(p => p.tags.includes('bestseller') || p.tags.includes('popular'))

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-display-md text-charcoal mb-2">Most Loved Gifts</h2>
            <p className="text-charcoal-muted">Bestsellers, picked by our community</p>
          </div>
          <Link to="/catalog" className="btn-ghost hidden md:flex">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/catalog" className="btn-secondary">View all gifts</Link>
        </div>
      </div>
    </section>
  )
}

// ─── Gift Finder Quiz ─────────────────────────────────────────────────────────
const QUIZ_STEPS = [
  {
    q: 'Who are you gifting?',
    options: ['Her', 'Him', 'Them', 'Couple', 'Family', 'Team'],
  },
  {
    q: "What's the occasion?",
    options: ['Birthday', 'Anniversary', 'Housewarming', 'Self Care', 'Thank You', 'Just Because'],
  },
  {
    q: "What's your budget?",
    options: ['Under ₹1,000', '₹1,000–2,000', '₹2,000–4,000', '₹4,000+'],
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

  const reset = () => { setStep(0); setAnswers([]); setDone(false) }

  return (
    <section
      ref={ref}
      className={`section-pad bg-gradient-to-br from-terracotta-500 to-terracotta-700 text-white transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
            <Sparkles size={14} />
            Gift Finder
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Not Sure What to Gift?</h2>
          <p className="text-cream/80 text-lg mb-10">Answer 3 quick questions and we'll find the perfect box.</p>

          <div className="bg-white/10 backdrop-blur-sm rounded-4xl p-8 md:p-12">
            {!done ? (
              <>
                {/* Progress */}
                <div className="flex gap-2 mb-8 justify-center">
                  {QUIZ_STEPS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i <= step ? 'bg-white w-10' : 'bg-white/30 w-6'}`}
                    />
                  ))}
                </div>

                <h3 className="font-display text-2xl font-semibold mb-6">{QUIZ_STEPS[step].q}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {QUIZ_STEPS[step].options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => pick(opt)}
                      className="px-5 py-2.5 rounded-full bg-white/20 hover:bg-white hover:text-terracotta-500 font-semibold text-sm transition-all duration-200"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div>
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="font-display text-2xl font-semibold mb-2">We found your perfect gifts!</h3>
                <p className="text-cream/80 mb-6">Based on your choices: <span className="font-semibold">{answers.join(', ')}</span></p>
                <div className="flex gap-3 justify-center">
                  <Link to="/catalog" className="bg-white text-terracotta-500 font-bold px-6 py-3 rounded-full hover:bg-cream transition-colors">
                    See My Results
                  </Link>
                  <button onClick={reset} className="bg-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/30 transition-colors">
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

// ─── Build Your Box CTA ───────────────────────────────────────────────────────
function BuildYourBoxCTA() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <section ref={ref} className={`section-pad bg-cream-light transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="container-site">
        <div className="bg-cream rounded-4xl overflow-hidden grid md:grid-cols-2 shadow-warm-lg">
          {/* Image */}
          <div className="relative min-h-72 md:min-h-auto">
            <img
              src="https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&q=80"
              alt="Build your custom gift box"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-terracotta-900/20" />
            {/* Floating step bubbles */}
            {['Choose Gifts', 'Personalise', 'We Pack & Send'].map((step, i) => (
              <div
                key={step}
                className="absolute bg-white rounded-2xl px-3 py-2 shadow-warm flex items-center gap-2"
                style={{ bottom: `${20 + i * 60}px`, left: `${16 + i * 20}px` }}
              >
                <span className="w-6 h-6 rounded-full bg-terracotta-500 text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                <span className="text-xs font-semibold text-charcoal">{step}</span>
              </div>
            ))}
          </div>

          {/* Copy */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-terracotta-500 text-xs font-bold tracking-widest uppercase mb-4">
              <Package size={14} />
              Customise Every Detail
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Build Your Own Box — Your Way
            </h2>
            <p className="text-charcoal-muted leading-relaxed mb-6">
              Pick from 100+ artisan products, add a personalised message, choose your wrapping, and we'll hand-pack it beautifully. Delivered to their door.
            </p>
            <ul className="space-y-2 mb-8">
              {['100+ hand-curated items', 'Custom message & name ribbon', 'Premium gift wrapping', 'Tracking & same-day dispatch'].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-charcoal-light">
                  <span className="w-5 h-5 rounded-full bg-terracotta-100 text-terracotta-500 flex items-center justify-center text-xs">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/build" className="btn-primary self-start text-base px-8 py-4">
              Start Building <ArrowRight size={18} />
            </Link>
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
    <section ref={ref} className={`section-pad bg-cream transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container-site">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-charcoal mb-3">Meet the Artisans</h2>
          <p className="text-charcoal-muted max-w-lg mx-auto">Every product has a maker and a story. We partner with independent artisans across India.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {artisans.map((a, i) => (
            <div
              key={a.id}
              className="bg-white rounded-3xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img src={a.avatar} alt={a.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6">
                <span className="tag bg-terracotta-50 text-terracotta-600 text-[10px] mb-3">{a.craft}</span>
                <h3 className="font-display font-bold text-lg text-charcoal mb-1">{a.name}</h3>
                <p className="text-xs text-charcoal-muted mb-3 flex items-center gap-1">
                  📍 {a.location}
                </p>
                <p className="text-sm text-charcoal-light leading-relaxed line-clamp-3">{a.story}</p>
                <p className="text-xs text-terracotta-500 font-semibold mt-3">{a.productCount} products on thecutebox</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/artisans" className="btn-secondary">Meet all artisans</Link>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <section ref={ref} className={`section-pad bg-terracotta-50 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container-site">
        <div className="text-center mb-12">
          <div className="flex justify-center gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-amber-400 fill-amber-400" />)}
          </div>
          <h2 className="font-display text-display-md text-charcoal mb-2">Loved by 1,200+ Gifters</h2>
          <p className="text-charcoal-muted">Real stories from real customers</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 shadow-warm"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm text-charcoal">{t.name}</p>
                  <p className="text-xs text-charcoal-muted">{t.location} · {t.occasion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Newsletter ───────────────────────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="py-20 bg-charcoal text-white">
      <div className="container-site text-center">
        <Gift size={40} className="mx-auto text-terracotta-300 mb-4" />
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
          Be First to Know
        </h2>
        <p className="text-cream/70 max-w-md mx-auto mb-8">
          New artisan drops, seasonal collections, and exclusive offers — delivered to your inbox.
        </p>
        {!submitted ? (
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true) }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-terracotta-400"
            />
            <button type="submit" className="bg-terracotta-500 text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-terracotta-400 transition-colors">
              Subscribe
            </button>
          </form>
        ) : (
          <div className="bg-white/10 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold">
            ✅ You're on the list! Expect something beautiful.
          </div>
        )}
        <p className="text-xs text-cream/40 mt-4">No spam. Unsubscribe anytime.</p>
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
      <Newsletter />
    </main>
  )
}
