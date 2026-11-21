import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Users, Package, Award } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/product/ProductCard'

export default function HampersPage() {
  const hampers = products.filter(p => p.category === 'hampers')

  return (
    <main className="pt-28 pb-20 bg-cream-light">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream to-terracotta-50 py-16 md:py-24 mb-12">
        <div className="container-site text-center">
          <span className="tag bg-terracotta-100 text-terracotta-600 mb-4">🧺 Ready to Gift</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal mb-4">
            Ready Hampers
          </h1>
          <p className="text-charcoal-muted text-lg max-w-lg mx-auto mb-8">
            Beautifully curated gift hampers for every occasion — ready to ship, no fuss required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { icon: Package, text: '8–12 items per hamper' },
              { icon: Award, text: 'Premium packaging' },
              { icon: Users, text: '50+ artisan products' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-warm-sm text-sm font-semibold text-charcoal">
                <Icon size={16} className="text-terracotta-500" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-site">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hampers.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        {/* Corporate upsell */}
        <div className="mt-16 bg-charcoal rounded-4xl p-8 md:p-12 text-center text-white">
          <Building2 size={40} className="mx-auto text-terracotta-300 mb-4" />
          <h2 className="font-display text-3xl font-bold mb-3">Need 10+ Hampers?</h2>
          <p className="text-cream/70 max-w-lg mx-auto mb-6">
            Corporate gifting at scale — custom branding, bulk discounts, and white-glove logistics.
          </p>
          <Link to="/corporate" className="btn-primary text-base px-8 py-4 inline-flex">
            Enquire for Corporate <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  )
}
