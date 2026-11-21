import { Heart, ShoppingBag, Star } from 'lucide-react'
import { useCartStore, useWishlistStore } from '../../store/cartStore'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCartStore()
  const { toggle, has } = useWishlistStore()
  const { ref, isVisible } = useScrollReveal()
  const wished = has(product.id)

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-warm product-card-hover transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Overlay actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

        {/* Quick add */}
        <button
          onClick={() => addItem(product)}
          disabled={!product.inStock}
          className="absolute bottom-3 left-3 right-3 bg-cream-light/95 backdrop-blur-sm text-charcoal font-semibold text-xs py-2.5 rounded-full flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-terracotta-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShoppingBag size={14} />
          {product.inStock ? 'Quick Add to Box' : 'Out of Stock'}
        </button>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="tag bg-terracotta-500 text-white text-[10px]">Bestseller</span>
          )}
          {product.tags.includes('new') && (
            <span className="tag bg-charcoal text-white text-[10px]">New</span>
          )}
          {discount && (
            <span className="tag bg-green-500 text-white text-[10px]">{discount}% off</span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => toggle(product.id)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            wished
              ? 'bg-terracotta-500 text-white'
              : 'bg-cream-light/90 text-charcoal-muted hover:bg-terracotta-50 hover:text-terracotta-500'
          }`}
        >
          <Heart size={15} fill={wished ? 'currentColor' : 'none'} />
        </button>

        {!product.inStock && (
          <div className="absolute inset-0 bg-cream-light/60 backdrop-blur-[1px] flex items-center justify-center">
            <span className="font-semibold text-sm text-charcoal-muted bg-white/80 px-4 py-2 rounded-full">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-charcoal-muted mb-1 font-medium">{product.artisan}</p>
        <h3 className="font-display font-semibold text-sm text-charcoal leading-tight line-clamp-2 mb-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.round(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-cream-warm fill-cream-warm'}
              />
            ))}
          </div>
          <span className="text-xs text-charcoal-muted">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-terracotta-500 text-base">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-charcoal-muted line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <button
            onClick={() => addItem(product)}
            disabled={!product.inStock}
            className="w-8 h-8 rounded-full bg-terracotta-50 text-terracotta-500 flex items-center justify-center hover:bg-terracotta-500 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ShoppingBag size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
