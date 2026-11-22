import { useState, useMemo } from 'react'
import { Search, X, Sparkles } from 'lucide-react'
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
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="tag bg-saffron-100 text-saffron-700 mb-2">Authentic Living Crafts</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-indigo-deep mb-3">
            Artisanal Gift Catalog
          </h1>
          <p className="text-sm sm:text-base text-indigo-deep/75">
            Discover {products.length} hand-curated Indian treasures, lovingly crafted across Jaipur, Mysore, Bagru &amp; Moradabad.
          </p>
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 bg-white p-3 rounded-2xl shadow-warm-sm border border-saffron-100">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-saffron-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search terracotta diyas, masala chai, brass thali, block print…"
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
        <div className="flex gap-2.5 overflow-x-auto pb-3 mb-4 scrollbar-hide">
          {categories.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                activeCategory === id
                  ? 'bg-saffron-500 text-white border-saffron-500 shadow-warm'
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
          <span className="text-earth-light font-semibold pl-1 flex-shrink-0">Filter by Occasion:</span>
          <button
            onClick={() => setActiveOccasion('all')}
            className={`px-3 py-1.5 rounded-full font-semibold transition-all flex-shrink-0 ${
              activeOccasion === 'all'
                ? 'bg-indigo-deep text-ivory'
                : 'bg-white text-earth-light border border-saffron-100 hover:text-indigo-deep'
            }`}
          >
            All
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
              <span>Showing {filtered.length} authentic curations</span>
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
              No Curations Match Your Filter
            </h3>
            <p className="text-earth-light mb-6 text-sm max-w-sm mx-auto">
              Try adjusting your search terms or selecting another category/occasion.
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
