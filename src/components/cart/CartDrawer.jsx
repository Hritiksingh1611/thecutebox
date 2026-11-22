import { useState, useEffect } from 'react'
import { X, Trash2, Minus, Plus, Tag, ArrowRight } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'

const WHATSAPP_BUSINESS_NUMBER = '919831559109'
const FREE_DELIVERY_THRESHOLD = 1999
const STANDARD_DELIVERY_FEE = 99

// Official WhatsApp icon SVG
function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-5.805 1.524zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty } = useCartStore()

  // Coupon state
  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState(null)
  const [couponError, setCouponError] = useState('')
  const [showCouponInput, setShowCouponInput] = useState(false)

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const count = items.reduce((sum, item) => sum + item.qty, 0)
  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD
  const deliveryCharge = items.length === 0 || isFreeDelivery ? 0 : STANDARD_DELIVERY_FEE
  const discount = appliedCoupon ? Math.round((subtotal * appliedCoupon.percent) / 100) : 0
  const finalAmount = Math.max(0, subtotal - discount + deliveryCharge)

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle coupon apply
  const handleApplyCoupon = (e) => {
    e.preventDefault()
    const trimmed = couponCode.trim().toUpperCase()
    if (trimmed === 'FESTIVE10' || trimmed === 'CUTEBOX10') {
      setAppliedCoupon({ code: trimmed, percent: 10 })
      setCouponError('')
    } else if (trimmed === 'PREETY5') {
      setAppliedCoupon({ code: trimmed, percent: 5 })
      setCouponError('')
    } else {
      setCouponError('Invalid coupon code. Try FESTIVE10')
    }
  }

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null)
    setCouponCode('')
    setCouponError('')
  }

  // Generate WhatsApp message and redirect
  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return

    const orderLines = items
      .map((item, idx) => {
        const itemTotal = item.price * item.qty
        return `${idx + 1}. ${item.name}\n   Price: ₹${item.price.toLocaleString('en-IN')} × ${item.qty} = ₹${itemTotal.toLocaleString('en-IN')}`
      })
      .join('\n\n')

    const deliveryText = isFreeDelivery ? 'FREE' : `₹${deliveryCharge.toLocaleString('en-IN')}`

    const message = `Hello! I'd like to place an order from The Cutebox.

🛍️ NEW ORDER REQUEST

Order Summary:

${orderLines}

Payment Summary:
- Subtotal: ₹${subtotal.toLocaleString('en-IN')}
- Discount: ₹${discount.toLocaleString('en-IN')}
- Delivery: ${deliveryText}
- Total Amount: ₹${finalAmount.toLocaleString('en-IN')}

📦 Delivery Details:
Name: 
Phone: 
Full Address: 
Pincode: 

Please confirm the order and share the next steps. Thank you!`

    const encoded = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encoded}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

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

        {/* Items list */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3.5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
              <div className="w-20 h-20 rounded-full bg-saffron-50 flex items-center justify-center text-4xl shadow-warm-sm">
                🪔
              </div>
              <div>
                <p className="font-display font-bold text-xl text-indigo-deep">Your Box is Empty</p>
                <p className="text-sm text-earth-light mt-1.5 max-w-xs mx-auto">
                  Add handcrafted Valentine keepsakes, birthday hampers, or festive treasures to begin your gifting journey.
                </p>
              </div>
              <button onClick={closeCart} className="btn-primary mt-2">
                Explore Curations ✨
              </button>
            </div>
          ) : (
            items.map((item) => {
              const itemImg = item.images?.[0] || item.image
              return (
                <div
                  key={item.id}
                  className="flex gap-3.5 bg-white rounded-2xl p-3.5 shadow-warm-sm border border-saffron-100/60"
                >
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

        {/* Footer & Checkout Area */}
        {items.length > 0 && (
          <div className="border-t border-saffron-100 px-6 py-4 space-y-3 bg-white">
            {/* Free shipping progress */}
            {subtotal < FREE_DELIVERY_THRESHOLD ? (
              <div className="bg-saffron-50 rounded-xl p-2.5 border border-saffron-200/50">
                <div className="flex items-center justify-between text-xs text-indigo-deep font-semibold mb-1">
                  <span>
                    Add{' '}
                    <strong className="text-saffron-600">
                      ₹{(FREE_DELIVERY_THRESHOLD - subtotal).toLocaleString('en-IN')}
                    </strong>{' '}
                    for Free Delivery
                  </span>
                  <span>{Math.round((subtotal / FREE_DELIVERY_THRESHOLD) * 100)}%</span>
                </div>
                <div className="h-1.5 bg-saffron-200/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-saffron-500 to-rose-gulabi rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((subtotal / FREE_DELIVERY_THRESHOLD) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="bg-emerald-50 text-emerald-800 rounded-xl p-2 text-xs font-bold flex items-center gap-1.5 border border-emerald-200">
                <span>🎉</span>
                <span>Congratulations! Free Delivery unlocked!</span>
              </div>
            )}

            {/* Optional Coupon Code */}
            <div>
              {!appliedCoupon && !showCouponInput && (
                <button
                  onClick={() => setShowCouponInput(true)}
                  className="text-xs font-semibold text-saffron-700 hover:text-saffron-800 flex items-center gap-1"
                >
                  <Tag size={13} />
                  <span>Have a promo code? (e.g. FESTIVE10)</span>
                </button>
              )}

              {showCouponInput && !appliedCoupon && (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon (FESTIVE10)"
                    className="flex-1 text-xs border border-saffron-200 rounded-lg px-2.5 py-1.5 uppercase font-mono tracking-wider focus:outline-none focus:ring-1 focus:ring-saffron-400"
                  />
                  <button
                    type="submit"
                    className="bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}

              {couponError && <p className="text-[11px] text-red-500 mt-1">{couponError}</p>}

              {appliedCoupon && (
                <div className="flex items-center justify-between bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1.5 rounded-lg border border-emerald-200">
                  <span className="font-semibold">
                    Code <strong>{appliedCoupon.code}</strong> applied ({appliedCoupon.percent}% off)
                  </span>
                  <button
                    onClick={handleRemoveCoupon}
                    className="text-red-500 hover:text-red-700 font-bold ml-2"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* Pricing Summary Breakdown */}
            <div className="space-y-1.5 pt-1 text-xs text-indigo-deep/80 border-t border-saffron-50">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-indigo-deep">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="font-semibold text-indigo-deep">
                  {isFreeDelivery ? (
                    <span className="text-emerald-600 font-bold">FREE</span>
                  ) : (
                    `₹${deliveryCharge}`
                  )}
                </span>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-saffron-100">
                <div>
                  <span className="font-display font-bold text-base text-indigo-deep block">
                    Total Amount
                  </span>
                  <span className="text-[10px] text-earth-light">Taxes &amp; packaging included</span>
                </div>
                <span className="font-display font-bold text-xl text-saffron-600">
                  ₹{finalAmount.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* WhatsApp Checkout Button */}
            <div className="pt-1">
              <button
                onClick={handleWhatsAppCheckout}
                disabled={items.length === 0}
                className="w-full justify-center text-sm sm:text-base py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white flex items-center gap-2 rounded-full font-bold shadow-emerald transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Order via WhatsApp</span>
              </button>
              <p className="text-center text-[11px] text-earth-light mt-1.5">
                Your order summary will be shared with us on WhatsApp.
              </p>
            </div>

            <button
              onClick={closeCart}
              className="btn-secondary w-full justify-center text-xs py-2"
            >
              Add More Artisan Treasures
            </button>
          </div>
        )}
      </div>
    </>
  )
}
