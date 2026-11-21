import { useEffect } from 'react'
import { X, Trash2, ShoppingBag, ArrowRight, Minus, Plus } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty } = useCartStore()
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)
  const count = items.reduce((s, i) => s + i.qty, 0)

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer panel */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-cream-light flex flex-col shadow-warm-xl animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-terracotta-100">
          <div>
            <h2 className="font-display font-bold text-xl text-charcoal">Your Box</h2>
            <p className="text-sm text-charcoal-muted">{count} {count === 1 ? 'item' : 'items'}</p>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-terracotta-50 text-charcoal-muted hover:text-terracotta-500 transition-all"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={48} className="text-terracotta-200" />
              <div>
                <p className="font-display font-semibold text-lg text-charcoal">Your box is empty</p>
                <p className="text-sm text-charcoal-muted mt-1">Add some beautiful gifts to get started.</p>
              </div>
              <button
                onClick={closeCart}
                className="btn-primary mt-2"
              >
                Explore Gifts
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 bg-white rounded-2xl p-3 shadow-warm-sm">
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-charcoal leading-tight line-clamp-2">{item.name}</p>
                  <p className="text-xs text-charcoal-muted mt-0.5">{item.artisan}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="font-bold text-terracotta-500 text-sm">₹{(item.price * item.qty).toLocaleString('en-IN')}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-6 h-6 rounded-full bg-terracotta-50 flex items-center justify-center hover:bg-terracotta-100 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-semibold w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 rounded-full bg-terracotta-50 flex items-center justify-center hover:bg-terracotta-100 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1.5 self-start text-charcoal-muted hover:text-red-500 transition-colors"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-terracotta-100 px-6 py-5 space-y-3 bg-cream">
            {/* Free shipping progress */}
            {total < 1999 && (
              <div>
                <p className="text-xs text-charcoal-muted mb-1.5">
                  Add <span className="font-semibold text-terracotta-500">₹{(1999 - total).toLocaleString('en-IN')}</span> more for free express delivery
                </p>
                <div className="h-1.5 bg-terracotta-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-terracotta-500 rounded-full transition-all"
                    style={{ width: `${Math.min((total / 1999) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}
            {total >= 1999 && (
              <p className="text-xs text-green-600 font-semibold">🎉 You've unlocked free express delivery!</p>
            )}

            <div className="flex justify-between items-center">
              <span className="font-display font-semibold text-charcoal">Total</span>
              <span className="font-bold text-xl text-terracotta-500">₹{total.toLocaleString('en-IN')}</span>
            </div>
            <button className="btn-primary w-full justify-center text-base py-3.5">
              Proceed to Checkout <ArrowRight size={18} />
            </button>
            <button onClick={closeCart} className="btn-secondary w-full justify-center text-sm">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
