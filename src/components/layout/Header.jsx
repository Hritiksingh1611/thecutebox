import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ShoppingBag, Heart, Search, Menu, X, Sparkles } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Build Your Box ✨', to: '/build' },
  { label: 'Royal Hampers', to: '/hampers' },
  { label: 'Catalog', to: '/catalog' },
  { label: 'Artisans of India', to: '/artisans' },
  { label: 'Corporate Gifting', to: '/corporate' },
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
        scrolled ? 'bg-ivory/95 backdrop-blur-md shadow-warm' : 'bg-ivory/90 backdrop-blur-sm'
      }`}
    >
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-saffron-600 via-saffron-500 to-rose-gulabi text-white py-2 px-4 text-center text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-sm">
        <span>🪔</span>
        <span>
          <strong className="font-bold">Shubh Gifting:</strong> Hand-packed with love &amp; fresh petals in Jaipur &amp; Bangalore • Free Express Delivery above ₹1,999
        </span>
        <span className="hidden sm:inline">✨</span>
      </div>

      {/* Main header row */}
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}logo.jpg`}
                alt="thecutebox logo"
                className="h-10 w-10 md:h-11 md:w-11 rounded-2xl object-contain shadow-warm-sm ring-2 ring-saffron-200 group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 text-xs">✨</span>
            </div>
            <div>
              <span className="font-display font-bold text-xl md:text-2xl text-saffron-600 leading-none tracking-tight block">
                thecutebox<span className="text-earth-light font-sans font-normal text-xs">.in</span>
              </span>
              <span className="text-[10px] tracking-widest text-earth-light uppercase font-semibold">
                Artisan Indian Gifting
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`font-sans text-sm font-semibold tracking-wide transition-all duration-200 relative py-1 ${
                  pathname === to
                    ? 'text-saffron-600 font-bold'
                    : 'text-indigo-deep/80 hover:text-saffron-600'
                }`}
              >
                {label}
                {pathname === to && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search gifts"
              className="p-2.5 rounded-full text-indigo-deep/80 hover:text-saffron-600 hover:bg-saffron-50 transition-all"
            >
              <Search size={19} />
            </button>

            {/* Wishlist */}
            <Link
              to="/catalog"
              aria-label="Wishlist"
              className="p-2.5 rounded-full text-indigo-deep/80 hover:text-rose-gulabi hover:bg-rose-pale/40 transition-all hidden sm:flex"
            >
              <Heart size={19} />
            </Link>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="flex items-center gap-2 bg-saffron-500 text-white px-4 md:px-5 py-2.5 rounded-full text-sm font-bold hover:bg-saffron-600 active:scale-95 transition-all shadow-warm hover:shadow-warm-lg"
            >
              <ShoppingBag size={17} />
              {count > 0 ? (
                <span>
                  {count} <span className="opacity-80">|</span> ₹{total.toLocaleString('en-IN')}
                </span>
              ) : (
                <span className="hidden sm:inline">Your Box</span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-full text-indigo-deep hover:bg-saffron-50 transition-all"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search bar expanded */}
        {searchOpen && (
          <div className="pb-4 animate-slide-up">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-saffron-500" />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search terracotta diyas, masala chai kits, brass thalis, royal hampers…"
                className="input-field pl-11 shadow-warm-sm"
                onKeyDown={e => e.key === 'Escape' && setSearchOpen(false)}
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
          </div>
        )}
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-ivory border-t border-saffron-100 shadow-warm-xl animate-fade-in">
          <nav className="container-site py-5 flex flex-col gap-1.5">
            {NAV.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`py-3 px-4 rounded-2xl font-semibold text-sm transition-all flex items-center justify-between ${
                  pathname === to
                    ? 'bg-saffron-500 text-white shadow-warm'
                    : 'text-indigo-deep hover:bg-saffron-50 hover:text-saffron-600'
                }`}
              >
                <span>{label}</span>
                <span className="text-xs opacity-60">→</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
