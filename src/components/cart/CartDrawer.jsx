import { useEffect } from 'react'
import { X, Trash2, ShoppingBag, ArrowRight, Minus, Plus, Sparkles } from 'lucide-react'
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
        className="fixed inset-0 z-50 bg-indigo-deep/50 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer panel */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-ivory flex flex-col shadow-warm-xl animate-slide-in-right border-l-2 border-saffron-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-saffron-100 bg-white">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🎁</span>
            <div>
              <h2 className="font-display font-bold text-xl text-indigo-deep">Your Gift Box</h2>
              <p className="text-xs text-earth-light">
                {count} {count === 1 ? 'artisan treasure' : 'artisan treasures'} selected
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 rounded-full hover:bg-saffron-50 text-earth-light hover:text-saffron-600 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3.5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
              <div className="w-20 h-20 rounded-full bg-saffron-50 flex items-center justify-center text-4xl shadow-warm-sm">
                🪔
              </div>
              <div>
                <p className="font-display font-bold text-xl text-indigo-deep">Your Box is Empty</p>
                <p className="text-sm text-earth-light mt-1.5 max-w-xs mx-auto">
                  Add handcrafted terracotta diyas, masala chai kits, or royal hampers to begin your gifting journey.
                </p>
              </div>
              <button
                onClick={closeCart}
                className="btn-primary mt-2"
              >
                Explore Curations ✨
              </button>
            </div>
          ) : (
            items.map(item => {
              const itemImg = item.images?.[0] || item.image
              return (
                <div key={item.id} className="flex gap-3.5 bg-white rounded-2xl p-3.5 shadow-warm-sm border border-saffron-100/60">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-ivory-warm flex-shrink-0 flex items-center justify-center">
                    {itemImg ? (
                      <img
                        src={itemImg}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl">{item.fallbackEmoji || '🎁'}</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-sm text-indigo-deep leading-snug line-clamp-2">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-saffron-600 font-semibold mt-0.5">
                      {item.artisan}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="font-display font-bold text-saffron-600 text-sm">
                        ₹{(item.price * item.qty).toLocaleString('en-IN')}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-6 h-6 rounded-full bg-saffron-50 text-saffron-600 flex items-center justify-center hover:bg-saffron-100 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-6 h-6 rounded-full bg-saffron-50 text-saffron-600 flex items-center justify-center hover:bg-saffron-100 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove item"
                    className="p-1 self-start text-earth-pale hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              )
            })
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-saffron-100 px-6 py-5 space-y-3.5 bg-white">
            {/* Free shipping progress */}
            {total < 1999 ? (
              <div className="bg-saffron-50 rounded-xl p-3 border border-saffron-200/50">
                <div className="flex items-center justify-between text-xs text-indigo-deep font-semibold mb-1.5">
                  <span>Add <strong className="text-saffron-600">₹{(1999 - total).toLocaleString('en-IN')}</strong> for Free Express Delivery</span>
                  <span>{Math.round((total / 1999) * 100)}%</span>
                </div>
                <div className="h-2 bg-saffron-200/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-saffron-500 to-rose-gulabi rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((total / 1999) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="bg-teal-50 text-teal-800 rounded-xl p-2.5 text-xs font-bold flex items-center gap-2 border border-teal-200">
                <span>🎉</span>
                <span>Congratulations! Free Express Delivery unlocked!</span>
              </div>
            )}

            <div className="flex justify-between items-center pt-1">
              <div>
                <span className="font-display font-bold text-lg text-indigo-deep block">Subtotal</span>
                <span className="text-[11px] text-earth-light">Taxes and festive packaging included</span>
              </div>
              <span className="font-display font-bold text-2xl text-saffron-600">
                ₹{total.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={() => {
                alert(`Order confirmed! Thank you for gifting with thecutebox. Total: ₹${total.toLocaleString('en-IN')}`)
              }}
              className="btn-primary w-full justify-center text-base py-3.5"
            >
              Proceed to Checkout <ArrowRight size={18} />
            </button>
            <button
              onClick={closeCart}
              className="btn-secondary w-full justify-center text-sm"
            >
              Add More Artisan Treasures
            </button>
          </div>
        )}
      </div>
    </>
  )
}
