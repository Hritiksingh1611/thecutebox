import { artisans } from '../data/testimonials'
import { products } from '../data/products'
import ProductCard from '../components/product/ProductCard'
import { Link } from 'react-router-dom'

export default function ArtisansPage() {
  return (
    <main className="pt-28 pb-20 bg-cream-light">
      <section className="bg-gradient-to-br from-cream to-green-50 py-16 md:py-24 mb-12">
        <div className="container-site text-center">
          <span className="tag bg-green-100 text-green-700 mb-4">🤝 50+ Partners</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal mb-4">Artisans &amp; Studio</h1>
          <p className="text-charcoal-muted text-lg max-w-lg mx-auto">
            We partner with India's finest independent makers — people who pour passion into every product they create.
          </p>
        </div>
      </section>

      <div className="container-site">
        {/* Artisan profiles */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {artisans.map(a => (
            <div key={a.id} className="bg-white rounded-3xl overflow-hidden shadow-warm">
              <div className="h-56 overflow-hidden">
                <img src={a.avatar} alt={a.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6">
                <span className="tag bg-terracotta-50 text-terracotta-600 text-[10px] mb-3">{a.craft}</span>
                <h2 className="font-display font-bold text-xl text-charcoal mb-1">{a.name}</h2>
                <p className="text-xs text-charcoal-muted mb-4">📍 {a.location}</p>
                <p className="text-sm text-charcoal-light leading-relaxed mb-4">{a.story}</p>
                <p className="text-xs text-terracotta-500 font-semibold">{a.productCount} products on thecutebox</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured artisan products */}
        <div>
          <h2 className="font-display text-3xl font-bold text-charcoal mb-2">From Our Artisans</h2>
          <p className="text-charcoal-muted mb-8">Every product — a story of craft and passion</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.filter(p => p.tags.includes('handmade') || p.tags.includes('unique')).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/catalog" className="btn-primary">Explore All Artisan Gifts</Link>
          </div>
        </div>

        {/* Partner CTA */}
        <div className="mt-20 bg-terracotta-50 border border-terracotta-200 rounded-4xl p-8 md:p-12 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal mb-3">Are You an Artisan?</h2>
          <p className="text-charcoal-muted max-w-lg mx-auto mb-6">
            We'd love to feature your work. Apply to become a thecutebox artisan partner and reach thousands of gift-givers across India.
          </p>
          <a href="mailto:artisans@thecutebox.in" className="btn-primary inline-flex">
            Apply to Partner →
          </a>
        </div>
      </div>
    </main>
  )
}
