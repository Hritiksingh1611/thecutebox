import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ShoppingBag, Heart, Search, Menu, X, ChevronDown } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Build Your Box ✨', to: '/build' },
  { label: 'Catalog', to: '/catalog' },
  { label: 'Ready Hampers', to: '/hampers' },
  { label: 'Artisans', to: '/artisans' },
  { label: 'Corporate', to: '/corporate' },
]

export default function Header() {
  const { items, openCart } = useCartStore()
  const count = items.reduce((s, i) => s + i.qty, 0)
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream-light/95 backdrop-blur-md shadow-warm-sm' : 'bg-cream-light/80 backdrop-blur-sm'
      }`}
    >
      {/* Top announcement bar */}
      <div className="bg-terracotta-500 text-white py-2 px-4 text-center text-xs font-semibold tracking-wider">
        ✨ Free Express Delivery on orders over ₹1,999 • Hand-packed with love in Jaipur &amp; Bangalore
      </div>

      {/* Main header row */}
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}logo.jpg`}
              alt="thecutebox logo"
              className="h-9 w-9 rounded-xl object-contain shadow-warm-sm"
            />
            <span className="font-display font-bold text-xl text-terracotta-500 leading-none">
              thecutebox
              <span className="text-charcoal-muted font-sans font-normal text-xs">.in</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`font-sans text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  pathname === to
                    ? 'text-terracotta-500'
                    : 'text-charcoal-light hover:text-terracotta-500'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full text-charcoal-light hover:text-terracotta-500 hover:bg-terracotta-50 transition-all"
            >
              <Search size={20} />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="p-2 rounded-full text-charcoal-light hover:text-terracotta-500 hover:bg-terracotta-50 transition-all hidden sm:flex"
            >
              <Heart size={20} />
            </Link>

            {/* Cart */}
            <button
              onClick={openCart}
              className="flex items-center gap-2 bg-terracotta-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-terracotta-600 transition-all shadow-warm"
            >
              <ShoppingBag size={16} />
              {count > 0 ? (
                <span>
                  {count} · ₹{total.toLocaleString('en-IN')}
                </span>
              ) : (
                <span className="hidden sm:inline">Cart</span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full text-charcoal-light hover:bg-terracotta-50 transition-all"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Search bar (expanded) */}
        {searchOpen && (
          <div className="pb-3">
            <input
              autoFocus
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search soy candles, resin trays, birthday hampers…"
              className="input-field"
              onKeyDown={e => e.key === 'Escape' && setSearchOpen(false)}
            />
          </div>
        )}
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream-light border-t border-terracotta-100 shadow-warm-lg">
          <nav className="container-site py-4 flex flex-col gap-1">
            {NAV.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${
                  pathname === to
                    ? 'bg-terracotta-50 text-terracotta-500'
                    : 'text-charcoal hover:bg-cream hover:text-terracotta-500'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
