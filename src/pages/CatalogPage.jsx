import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '../components/product/ProductCard'
import { products, categories } from '../data/products'

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('popular')
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = [...products]

    if (activeCategory !== 'all') {
      list = list.filter(p => p.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      )
    }

    list = list.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    if (sortBy === 'popular') list.sort((a, b) => b.reviewCount - a.reviewCount)
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating)

    return list
  }, [activeCategory, searchQuery, sortBy, priceRange])

  return (
    <main className="pt-28 pb-20 min-h-screen bg-cream-light">
      <div className="container-site">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-2">Gift Catalog</h1>
          <p className="text-charcoal-muted">Handcrafted with love · {products.length} artisan gifts</p>
        </div>

        {/* Search + Sort bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search gifts, artisans, occasions…"
              className="input-field pl-10"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-muted hover:text-charcoal">
                <X size={15} />
              </button>
            )}
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="input-field sm:w-48"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Top Rated</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8">
          {categories.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === id
                  ? 'bg-terracotta-500 text-white shadow-warm'
                  : 'bg-white text-charcoal hover:bg-terracotta-50 hover:text-terracotta-500 shadow-warm-sm'
              }`}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <>
            <p className="text-sm text-charcoal-muted mb-5">{filtered.length} gifts found</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-display text-xl font-semibold text-charcoal mb-2">No gifts found</h3>
            <p className="text-charcoal-muted mb-6">Try a different search or category</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all') }}
              className="btn-primary"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
