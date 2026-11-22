import { useState } from 'react'
import { Heart, ShoppingBag, Star, Sparkles } from 'lucide-react'
import { useCartStore, useWishlistStore } from '../../store/cartStore'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCartStore()
  const { toggle, has } = useWishlistStore()
  const { ref, isVisible } = useScrollReveal()
  const wished = has(product.id)
  const [imgError, setImgError] = useState(false)

  const imgSrc = product.images?.[0] || product.image

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-warm product-card-hover border border-saffron-100/60 transition-all duration-500 flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Top Image Container */}
      <div className="relative overflow-hidden aspect-square bg-ivory-warm">
        {!imgError && imgSrc ? (
          <img
            src={imgSrc}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-saffron-100 via-ivory-warm to-marigold-200 p-6 text-center">
            <span className="text-6xl mb-2 filter drop-shadow animate-pulse-soft">
              {product.fallbackEmoji || '🎁'}
            </span>
            <span className="font-display font-semibold text-xs text-saffron-700 tracking-wider uppercase">
              Artisan Indian Curation
            </span>
          </div>
        )}

        {/* Shading overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Quick Add CTA on hover */}
        <button
          onClick={() => addItem(product)}
          disabled={!product.inStock}
          className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-indigo-deep font-sans font-bold text-xs py-2.5 rounded-full flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-saffron-500 hover:text-white shadow-warm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShoppingBag size={14} />
          {product.inStock ? 'Add to Cutebox' : 'Out of Stock'}
        </button>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.tags.includes('bestseller') && (
            <span className="tag bg-saffron-500 text-white text-[10px] shadow-sm">
              ✨ Bestseller
            </span>
          )}
          {product.tags.includes('festive') && (
            <span className="tag bg-marigold-500 text-indigo-deep text-[10px] shadow-sm">
              🪔 Festive Special
            </span>
          )}
          {product.tags.includes('luxury') && (
            <span className="tag bg-indigo-deep text-marigold-300 text-[10px] shadow-sm">
              👑 Royal Curation
            </span>
          )}
          {discount && (
            <span className="tag bg-teal-600 text-white text-[10px] shadow-sm">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => toggle(product.id)}
          aria-label="Wishlist"
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-10 shadow-sm ${
            wished
              ? 'bg-rose-gulabi text-white scale-110'
              : 'bg-white/90 text-earth-light hover:bg-rose-pale hover:text-rose-gulabi'
          }`}
        >
          <Heart size={15} fill={wished ? 'currentColor' : 'none'} />
        </button>

        {!product.inStock && (
          <div className="absolute inset-0 bg-ivory/80 backdrop-blur-[2px] flex items-center justify-center z-20">
            <span className="font-semibold text-xs tracking-wider uppercase text-earth-light bg-white px-4 py-2 rounded-full shadow-warm-sm border border-saffron-100">
              Handcrafting in Progress
            </span>
          </div>
        )}
      </div>

      {/* Info Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <p className="text-[11px] font-semibold text-saffron-600 tracking-wide uppercase mb-1">
            {product.artisan}
          </p>
          <h3 className="font-display font-semibold text-base text-indigo-deep leading-snug line-clamp-2 mb-2 group-hover:text-saffron-600 transition-colors">
            {product.name}
          </h3>
        </div>

        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={
                    i < Math.floor(product.rating)
                      ? 'text-marigold-500 fill-marigold-500'
                      : 'text-ivory-dark fill-ivory-dark'
                  }
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-indigo-deep/70">
              {product.rating}
            </span>
            <span className="text-[11px] text-earth-pale">({product.reviewCount})</span>
          </div>

          {/* Price & Action */}
          <div className="flex items-center justify-between pt-2 border-t border-saffron-50">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-bold text-lg text-saffron-600">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-earth-pale line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <button
              onClick={() => addItem(product)}
              disabled={!product.inStock}
              aria-label="Add to cart"
              className="w-9 h-9 rounded-full bg-saffron-50 text-saffron-600 flex items-center justify-center hover:bg-saffron-500 hover:text-white transition-all shadow-sm active:scale-95 disabled:opacity-40"
            >
              <ShoppingBag size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
