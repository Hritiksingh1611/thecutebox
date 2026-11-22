import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ShoppingBag, Heart, Search, Menu, X, Phone, MessageCircle } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Build Your Box ✨', to: '/build' },
  { label: 'Festival Hampers', to: '/hampers' },
  { label: 'All Curations', to: '/catalog' },
  { label: 'Preety Singh & Artisans', to: '/artisans' },
  { label: 'Corporate & Bulk', to: '/corporate' },
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
      <div className="bg-gradient-to-r from-crimson-600 via-saffron-500 to-emeraldFestive-700 text-white py-2 px-3 text-center text-xs font-semibold tracking-wider flex items-center justify-center gap-2 sm:gap-4 shadow-sm">
        <span className="hidden sm:inline">🪔 🌙 🎄 🌺</span>
        <span>
          <strong>All Indian Festivals Gifting:</strong> Hand-packed in Kolkata by <strong>Preety Singh</strong> • Free Express Delivery above ₹1,999
        </span>
        <a
          href="tel:9831559109"
          className="hidden md:inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-2.5 py-0.5 rounded-full text-[11px] font-bold"
        >
          <Phone size={11} /> Call: 9831559109
        </a>
      </div>

      {/* Main header row */}
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & City Stamp */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}logo.jpg`}
                alt="thecutebox logo"
                className="h-10 w-10 md:h-12 md:w-12 rounded-2xl object-contain shadow-warm-sm ring-2 ring-saffron-300 group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 text-xs">✨</span>
            </div>
            <div>
              <span className="font-display font-bold text-xl md:text-2xl text-indigo-deep leading-none tracking-tight block">
                thecutebox<span className="text-saffron-600 font-sans font-normal text-xs">.in</span>
              </span>
              <span className="text-[10px] tracking-widest text-saffron-700 uppercase font-bold flex items-center gap-1">
                <span>Kolkata Studio</span>
                <span className="text-earth-pale">•</span>
                <span className="text-earth-light">By Preety Singh</span>
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

          {/* Actions & WhatsApp Contact */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick WhatsApp with Preety Singh */}
            <a
              href="https://wa.me/919831559109?text=Namaste%20Preety%20ji,%20I%20am%20interested%20in%20thecutebox%20festive%20gifting%20boxes!"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-600 text-white px-3.5 py-1.5 rounded-full text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Preety</span>
            </a>

            {/* Search button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search gifts"
              className="p-2 sm:p-2.5 rounded-full text-indigo-deep/80 hover:text-saffron-600 hover:bg-saffron-50 transition-all"
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
              className="flex items-center gap-2 bg-saffron-500 text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold hover:bg-saffron-600 active:scale-95 transition-all shadow-warm hover:shadow-warm-lg"
            >
              <ShoppingBag size={16} />
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
                placeholder="Search Eid ittar & dates, Christmas plum cake, Pujo Kantha silk, Diwali diyas, chai kits…"
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
          <nav className="container-site py-5 flex flex-col gap-2">
            <div className="p-3 bg-saffron-50 rounded-2xl flex items-center justify-between mb-2">
              <div>
                <p className="font-bold text-xs text-indigo-deep">Preety Singh (Founder)</p>
                <p className="text-[11px] text-earth-light">Kolkata Studio: 9831559109</p>
              </div>
              <a
                href="https://wa.me/919831559109"
                className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1"
              >
                <MessageCircle size={13} /> Chat
              </a>
            </div>

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
