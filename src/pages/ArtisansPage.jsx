import { Link } from 'react-router-dom'
import { artisans } from '../data/testimonials'
import { products } from '../data/products'
import ProductCard from '../components/product/ProductCard'
import { Sparkles, Heart } from 'lucide-react'

export default function ArtisansPage() {
  return (
    <main className="pt-28 pb-20 bg-ivory min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ivory via-ivory-warm to-marigold-50 py-16 md:py-24 mb-14 border-b border-saffron-100">
        <div className="container-site text-center max-w-3xl mx-auto">
          <span className="tag bg-saffron-100 text-saffron-700 mb-4">
            🤝 50+ Generational Craft Families
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-deep mb-4">
            Artisans of India &amp; Studio
          </h1>
          <p className="text-indigo-deep/75 text-base sm:text-lg leading-relaxed">
            We partner directly with master craftspersons in Rajasthan, Kashmir, Uttar Pradesh, and Karnataka — eliminating middlemen so every rupee brings dignity, pride, and generational craft preservation.
          </p>
        </div>
      </section>

      <div className="container-site">
        {/* Artisan Profiles */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {artisans.map((a) => (
            <div
              key={a.id}
              className="bg-white rounded-3xl overflow-hidden shadow-warm border border-saffron-100/70 flex flex-col justify-between"
            >
              <div>
                <div className="h-64 overflow-hidden bg-ivory relative">
                  <img
                    src={a.avatar}
                    alt={a.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-saffron-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {a.craft}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display font-bold text-2xl text-indigo-deep mb-1">
                    {a.name}
                  </h2>
                  <p className="text-xs text-saffron-600 font-semibold mb-4">
                    📍 {a.location}
                  </p>
                  <p className="text-sm text-indigo-deep/75 leading-relaxed">
                    {a.story}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <span className="text-xs font-bold text-saffron-700 bg-saffron-50 px-3 py-1.5 rounded-full inline-block">
                  {a.productCount} creations featured on thecutebox
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Living Craft Creations */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="tag bg-saffron-100 text-saffron-700 mb-2">Handmade Treasures</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-indigo-deep">
                Creations Directly From the Guilds
              </h2>
            </div>
            <Link to="/catalog" className="btn-secondary hidden sm:flex">
              Explore All Curations →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.tags.includes('handcrafted') || p.tags.includes('handmade') || p.tags.includes('heirloom'))
              .slice(0, 4)
              .map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
          </div>
        </div>

        {/* Guild Partnership Callout */}
        <div className="bg-gradient-to-br from-saffron-500 to-rose-gulabi text-white rounded-3xl sm:rounded-[2.5rem] p-8 md:p-14 text-center shadow-warm-xl">
          <Sparkles size={40} className="mx-auto text-marigold-300 mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3 text-ivory">
            Are You an Indian Artisan or Craft Cooperative?
          </h2>
          <p className="text-ivory/80 max-w-xl mx-auto text-sm sm:text-base mb-8">
            We are always seeking to partner with authentic craftspersons across terracotta, brass, handloom textiles, and natural fragrances. We guarantee fair trade pricing, prompt payouts, and national visibility.
          </p>
          <a
            href="mailto:namaste@thecutebox.in"
            className="bg-white text-saffron-700 font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md hover:bg-ivory transition-colors"
          >
            Join the Artisan Guild →
          </a>
        </div>
      </div>
    </main>
  )
}
