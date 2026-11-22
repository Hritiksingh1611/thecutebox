import { useState, useMemo } from 'react'
import { Search, X, Sparkles, Phone, MessageCircle } from 'lucide-react'
import ProductCard from '../components/product/ProductCard'
import { products, categories, occasions } from '../data/products'

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeOccasion, setActiveOccasion] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('popular')

  const filtered = useMemo(() => {
    let list = [...products]

    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory)
    }

    if (activeOccasion !== 'all') {
      list = list.filter((p) => p.occasions && p.occasions.includes(activeOccasion))
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.festival?.toLowerCase().includes(q) ||
          p.artisan.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      )
    }

    if (sortBy === 'popular') list.sort((a, b) => b.reviewCount - a.reviewCount)
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating)

    return list
  }, [activeCategory, activeOccasion, searchQuery, sortBy])

  return (
    <main className="pt-28 pb-20 min-h-screen bg-ivory">
      <div className="container-site">
        {/* Header with Kolkata Studio Tag */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-saffron-100 text-saffron-800 text-xs font-bold px-4 py-1.5 rounded-full mb-3">
            <span>Kolkata Studio</span>
            <span>•</span>
            <span>Preety Singh: 9831559109</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-indigo-deep mb-3">
            All-Festivals Gift Catalog
          </h1>
          <p className="text-sm sm:text-base text-indigo-deep/75">
            Diwali diyas, Eid ittar &amp; dates, Old-Kolkata Christmas plum cakes, Durga Puja Kantha silk, and gourmet chai kits.
          </p>
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 bg-white p-3.5 rounded-2xl shadow-warm-sm border border-saffron-100">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-saffron-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Eid ittar, plum cake, terracotta diyas, Kantha silk, chai kit…"
              className="input-field pl-11 !bg-ivory/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-earth-light hover:text-indigo-deep"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="input-field sm:w-48 !bg-ivory/50"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Top Rated</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>

        {/* Categories Pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-3 scrollbar-hide">
          {categories.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => {
                setActiveCategory(id)
                setActiveOccasion('all')
              }}
              className={`flex-shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                activeCategory === id
                  ? 'bg-gradient-to-r from-saffron-500 to-rose-gulabi text-white border-transparent shadow-warm'
                  : 'bg-white text-indigo-deep border-saffron-100 hover:bg-saffron-50 hover:text-saffron-600'
              }`}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Occasions Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide items-center text-xs">
          <span className="text-earth-light font-semibold pl-1 flex-shrink-0">Festive Flavour:</span>
          <button
            onClick={() => setActiveOccasion('all')}
            className={`px-3 py-1.5 rounded-full font-semibold transition-all flex-shrink-0 ${
              activeOccasion === 'all'
                ? 'bg-indigo-deep text-ivory'
                : 'bg-white text-earth-light border border-saffron-100 hover:text-indigo-deep'
            }`}
          >
            All Occasions
          </button>
          {occasions.map(({ id, label, emoji }) => (
            <button
              key={id}
              onClick={() => setActiveOccasion(id)}
              className={`px-3 py-1.5 rounded-full font-semibold transition-all flex-shrink-0 flex items-center gap-1.5 ${
                activeOccasion === id
                  ? 'bg-indigo-deep text-ivory'
                  : 'bg-white text-earth-light border border-saffron-100 hover:text-indigo-deep'
              }`}
            >
              <span>{emoji}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-6 text-xs text-earth-light font-semibold">
              <span>Showing {filtered.length} festive &amp; craft curations</span>
              <a
                href="https://wa.me/919831559109?text=Hi%20Preety,%20I%20need%20help%20choosing%20a%20gift%20box"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold hover:underline flex items-center gap-1"
              >
                <MessageCircle size={14} /> Need recommendation? WhatsApp Preety
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-saffron-100">
            <div className="text-6xl mb-4">🪔</div>
            <h3 className="font-display text-2xl font-bold text-indigo-deep mb-2">
              No Curations Match This Filter
            </h3>
            <p className="text-earth-light mb-6 text-sm max-w-sm mx-auto">
              Looking for a custom combination? Contact Preety Singh directly at +91 9831559109.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('all')
                setActiveOccasion('all')
              }}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
