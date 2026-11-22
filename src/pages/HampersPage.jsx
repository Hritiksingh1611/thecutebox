import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Package, Award, Sparkles } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/product/ProductCard'

export default function HampersPage() {
  const hampers = products.filter(
    (p) =>
      p.tags.includes('premium') ||
      p.tags.includes('bestseller') ||
      ['eid', 'christmas', 'durgapuja', 'diwali', 'hampers'].includes(p.category)
  )

  return (
    <main className="pt-28 pb-20 bg-ivory min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ivory via-ivory-warm to-saffron-50 py-16 md:py-24 mb-12 border-b border-saffron-100">
        <div className="container-site text-center max-w-3xl mx-auto">
          <span className="tag bg-saffron-100 text-saffron-700 mb-4">
            👑 Curated in Kolkata by Preety Singh (+91 9831559109)
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-deep mb-5">
            Royal Festival Hampers
          </h1>
          <p className="text-indigo-deep/75 text-base sm:text-lg leading-relaxed mb-8">
            Grand curations for Eid Mubarak, Christmas, Durga Puja, and Diwali. Packed with authentic artisanal treasures, royal sweets, and handwritten blessings.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { icon: '🎁', text: '8–12 Handpicked Treasures' },
              { icon: '🪔', text: 'Includes Pure Brass Diya' },
              { icon: '🌸', text: 'Fresh Marigold Petal Bed' },
              { icon: '📜', text: 'Calligraphy Name Ribbon' },
            ].map(({ icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-warm-sm text-xs sm:text-sm font-bold text-indigo-deep border border-saffron-100"
              >
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hampers.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {/* Corporate Festive Banner */}
        <div className="mt-20 bg-gradient-to-br from-indigo-deep to-indigo-rich rounded-3xl sm:rounded-[2.5rem] p-8 md:p-14 text-center text-white shadow-warm-xl border border-saffron-500/30">
          <Building2 size={44} className="mx-auto text-saffron-400 mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3 text-ivory">
            Planning Corporate Festive Gifting?
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto text-sm sm:text-base mb-8">
            We handle orders from 25 to 5,000+ luxury hampers across India. Custom engraved wooden boxes, co-branded ribbons, and white-glove direct-to-recipient logistics.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/corporate" className="btn-primary text-base px-8 py-4">
              Get Corporate Festive Pricing <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
