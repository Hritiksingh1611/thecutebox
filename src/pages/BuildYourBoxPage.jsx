import { useState } from 'react'
import { Check, ArrowRight, ArrowLeft, Package, Sparkles, Gift } from 'lucide-react'
import { products } from '../data/products'
import { useCartStore } from '../store/cartStore'

const BASE = import.meta.env.BASE_URL || '/thecutebox/'

const STEP_LABELS = ['Choose Craft Items', 'Festive Packaging', 'Review & Bless']

const WRAP_OPTIONS = [
  {
    id: 'kraft-marigold',
    label: 'Terracotta Kraft with Fresh Marigold',
    emoji: '🌼',
    desc: 'Eco-friendly recycled kraft box wrapped in natural jute ribbon with a real dried marigold blossom',
    extra: 0,
  },
  {
    id: 'banarasi-silk',
    label: 'Royal Banarasi Silk Potli & Box',
    emoji: '👑',
    desc: 'Lined in saffron raw silk with golden zari border ribbon and brass peacock seal',
    extra: 249,
  },
  {
    id: 'bagru-blockprint',
    label: 'Dabu Hand-Block Cotton Fabric Wrap',
    emoji: '🎨',
    desc: 'Japanese Furoshiki style wrap made from authentic Indigo block-print cotton from Bagru',
    extra: 199,
  },
]

export default function BuildYourBoxPage() {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState([])
  const [wrap, setWrap] = useState('kraft-marigold')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const { addItem } = useCartStore()
  const [added, setAdded] = useState(false)

  const toggleProduct = (p) => {
    setSelected((sel) =>
      sel.find((s) => s.id === p.id)
        ? sel.filter((s) => s.id !== p.id)
        : sel.length < 6
        ? [...sel, p]
        : sel
    )
  }

  const selectedWrap = WRAP_OPTIONS.find((w) => w.id === wrap)
  const subtotal = selected.reduce((s, p) => s + p.price, 0) + (selectedWrap?.extra || 0)

  const handleAddToCart = () => {
    const bundle = {
      id: `custom-indian-box-${Date.now()}`,
      name: `Custom Indian Artisan Box (${selected.length} items)`,
      artisan: 'Curated by You • Hand-packed in Jaipur',
      price: subtotal,
      images: [selected[0]?.images?.[0] || selected[0]?.image || `${BASE}images/hero-gift.jpg`],
      image: selected[0]?.images?.[0] || selected[0]?.image || `${BASE}images/hero-gift.jpg`,
      inStock: true,
      customDetails: {
        wrap: selectedWrap?.label,
        recipient: name,
        message: message,
      },
    }
    addItem(bundle)
    setAdded(true)
  }

  return (
    <main className="pt-28 pb-20 min-h-screen bg-ivory">
      <div className="container-site max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-saffron-600 text-xs font-bold tracking-widest uppercase mb-3 bg-saffron-100 px-4 py-1.5 rounded-full">
            <Sparkles size={14} />
            Shubh Custom Box Builder
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-indigo-deep mb-3">
            Build Your Own Gift Box
          </h1>
          <p className="text-indigo-deep/70 text-sm sm:text-base">
            Hand-select up to 6 artisan treasures. We hand-pack each box with fragrant petals and your handwritten note.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-12">
          {STEP_LABELS.map((label, i) => (
            <div key={label} className="flex items-center">
              <div
                className={`flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  i === step
                    ? 'bg-saffron-500 text-white shadow-warm'
                    : i < step
                    ? 'bg-saffron-100 text-saffron-700'
                    : 'bg-white text-earth-light border border-saffron-100'
                }`}
              >
                {i < step ? <Check size={14} /> : <span>{i + 1}</span>}
                <span className="hidden sm:inline">{label}</span>
              </div>
              {i < STEP_LABELS.length - 1 && (
                <div
                  className={`h-0.5 w-6 sm:w-10 mx-1 ${
                    i < step ? 'bg-saffron-400' : 'bg-saffron-100'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 0: Choose Items */}
        {step === 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-indigo-deep">
                Select Up to 6 Treasures
                <span className="text-sm font-sans font-normal text-earth-light ml-3">
                  ({selected.length}/6 selected)
                </span>
              </h2>
            </div>

            {/* Selected items strip */}
            {selected.length > 0 && (
              <div className="bg-white border-2 border-saffron-300 rounded-3xl p-4 mb-8 flex items-center justify-between gap-4 overflow-x-auto shadow-warm-sm">
                <div className="flex items-center gap-3">
                  {selected.map((p) => {
                    const imgSrc = p.images?.[0] || p.image
                    return (
                      <div key={p.id} className="relative flex-shrink-0 group">
                        <img
                          src={imgSrc}
                          alt={p.name}
                          className="w-14 h-14 rounded-2xl object-cover border-2 border-saffron-400"
                        />
                        <button
                          onClick={() => toggleProduct(p)}
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-saffron-600 text-white flex items-center justify-center text-xs font-bold shadow"
                        >
                          ×
                        </button>
                      </div>
                    )
                  })}
                </div>
                <div className="flex-shrink-0 text-sm font-bold text-indigo-deep pr-2">
                  Subtotal: <span className="text-saffron-600 text-base">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((p) => {
                const isSelected = selected.find((s) => s.id === p.id)
                const imgSrc = p.images?.[0] || p.image
                return (
                  <button
                    key={p.id}
                    onClick={() => toggleProduct(p)}
                    className={`text-left rounded-3xl overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? 'border-saffron-500 shadow-warm-lg bg-saffron-50/50 scale-[1.02]'
                        : 'border-saffron-100 bg-white hover:border-saffron-300 shadow-sm'
                    }`}
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-ivory-warm">
                      <img src={imgSrc} alt={p.name} className="w-full h-full object-cover" />
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-7 h-7 bg-saffron-500 rounded-full flex items-center justify-center shadow-md">
                          <Check size={16} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-saffron-600 mb-1">
                          {p.artisan}
                        </p>
                        <p className="font-display font-semibold text-sm text-indigo-deep line-clamp-1">
                          {p.name}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-saffron-50 flex items-center justify-between">
                        <span className="font-bold text-saffron-600 text-base">
                          ₹{p.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs font-semibold text-indigo-deep/70">
                          {isSelected ? '✓ Added' : '+ Add Item'}
                        </span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="flex justify-end mt-10">
              <button
                onClick={() => setStep(1)}
                disabled={selected.length === 0}
                className="btn-primary text-base px-8 py-4 disabled:opacity-40 disabled:cursor-not-allowed shadow-warm"
              >
                Next: Festive Packaging <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Personalise */}
        {step === 1 && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-warm border border-saffron-100">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-indigo-deep mb-6">
              Personalise Your Gift Experience
            </h2>

            <div className="space-y-6">
              {/* Packaging Options */}
              <div>
                <label className="block font-bold text-sm text-indigo-deep mb-3">
                  Choose Your Heritage Packaging Style
                </label>
                <div className="space-y-3">
                  {WRAP_OPTIONS.map((opt) => (
                    <label
                      key={opt.id}
                      className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        wrap === opt.id
                          ? 'border-saffron-500 bg-saffron-50/60 shadow-sm'
                          : 'border-saffron-100 bg-ivory/40 hover:border-saffron-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="wrap"
                        value={opt.id}
                        checked={wrap === opt.id}
                        onChange={() => setWrap(opt.id)}
                        className="sr-only"
                      />
                      <span className="text-3xl mt-0.5">{opt.emoji}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-display font-bold text-sm text-indigo-deep">
                            {opt.label}
                          </p>
                          <span className="text-xs font-bold text-saffron-600">
                            {opt.extra > 0 ? `+₹${opt.extra}` : 'Included'}
                          </span>
                        </div>
                        <p className="text-xs text-earth-light mt-1">{opt.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Recipient's Name */}
              <div>
                <label className="block font-bold text-sm text-indigo-deep mb-1.5">
                  Recipient Name (Hand-lettered on Gift Sleeve)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Priya & Rohan, Dadi Ma, Sharma Family…"
                  className="input-field"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-bold text-sm text-indigo-deep mb-1.5">
                  Blessing / Handwritten Card Note
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={250}
                  rows={3}
                  placeholder="May this festive season bring immense prosperity, health, and joy to your abode…"
                  className="input-field resize-none"
                />
                <p className="text-xs text-earth-light mt-1 text-right">{message.length}/250 characters</p>
              </div>
            </div>

            <div className="flex gap-4 justify-between mt-10 pt-6 border-t border-saffron-100">
              <button
                onClick={() => setStep(0)}
                className="btn-secondary flex items-center gap-2"
              >
                <ArrowLeft size={16} /> Back to Items
              </button>
              <button
                onClick={() => setStep(2)}
                className="btn-primary text-base px-8 py-3.5 shadow-warm"
              >
                Review Box <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Review */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            {!added ? (
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-warm border border-saffron-100">
                  <h3 className="font-display font-bold text-xl text-indigo-deep mb-4 flex items-center justify-between">
                    <span>Your Custom Curation ({selected.length} items)</span>
                    <button
                      onClick={() => setStep(0)}
                      className="text-xs text-saffron-600 font-bold hover:underline"
                    >
                      Edit Items
                    </button>
                  </h3>
                  <div className="space-y-3.5">
                    {selected.map((p) => {
                      const imgSrc = p.images?.[0] || p.image
                      return (
                        <div key={p.id} className="flex items-center gap-3.5 py-2 border-b border-saffron-50 last:border-none">
                          <img
                            src={imgSrc}
                            alt={p.name}
                            className="w-14 h-14 rounded-2xl object-cover border border-saffron-100"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-display font-semibold text-sm text-indigo-deep truncate">
                              {p.name}
                            </p>
                            <p className="text-[11px] text-earth-light">{p.artisan}</p>
                          </div>
                          <span className="font-bold text-saffron-600 text-sm">
                            ₹{p.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Personalisation details */}
                <div className="bg-white rounded-3xl p-6 shadow-warm border border-saffron-100">
                  <h3 className="font-display font-bold text-lg text-indigo-deep mb-3 flex items-center justify-between">
                    <span>Festive Details</span>
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs text-saffron-600 font-bold hover:underline"
                    >
                      Edit Details
                    </button>
                  </h3>
                  <div className="space-y-2 text-sm text-indigo-deep">
                    <p>
                      <strong className="text-earth-light">Packaging:</strong> {selectedWrap?.label}
                    </p>
                    {name && (
                      <p>
                        <strong className="text-earth-light">Recipient:</strong> {name}
                      </p>
                    )}
                    {message && (
                      <p className="italic bg-ivory p-3 rounded-2xl border border-saffron-100 text-xs">
                        "{message}"
                      </p>
                    )}
                  </div>
                </div>

                {/* Total card */}
                <div className="bg-gradient-to-br from-saffron-500 to-rose-gulabi text-white rounded-3xl p-6 shadow-warm-lg flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider opacity-85 block">
                      Total Box Value
                    </span>
                    <span className="font-display font-bold text-3xl">
                      ₹{subtotal.toLocaleString('en-IN')}
                    </span>
                    {subtotal >= 1999 && (
                      <p className="text-xs mt-1 text-ivory">🎉 Includes Free Express Pan-India Delivery</p>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="bg-white/20 hover:bg-white/30 text-white font-bold px-5 py-3 rounded-full text-sm"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleAddToCart}
                      className="bg-white text-saffron-600 hover:bg-ivory font-bold px-7 py-3 rounded-full text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
                    >
                      <Gift size={16} /> Add Box to Cart
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl shadow-warm border border-saffron-100 p-8">
                <div className="text-6xl mb-4">🪔</div>
                <h3 className="font-display text-3xl font-bold text-indigo-deep mb-3">
                  Your Box is Hand-packed &amp; Added!
                </h3>
                <p className="text-earth-light text-base max-w-md mx-auto mb-8">
                  Your customized curation has been added to your bag. Our studio artisans in Jaipur will hand-pack it with fresh petals upon checkout.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="/" className="btn-primary">
                    Continue Exploring
                  </a>
                  <button
                    onClick={() => {
                      setAdded(false)
                      setSelected([])
                      setStep(0)
                    }}
                    className="btn-secondary"
                  >
                    Build Another Box
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
