import { useState } from 'react'
import { Check, ArrowRight, ArrowLeft, Package, Sparkles, Gift } from 'lucide-react'
import { products } from '../data/products'
import { useCartStore } from '../store/cartStore'

const STEP_LABELS = ['Choose Items', 'Personalise', 'Review & Add']

const WRAP_OPTIONS = [
  { id: 'classic', label: 'Classic Kraft', emoji: '📦', desc: 'Natural kraft paper with raffia ribbon', extra: 0 },
  { id: 'luxury', label: 'Luxury Velvet', emoji: '💎', desc: 'Premium velvet box with satin ribbon', extra: 199 },
  { id: 'seasonal', label: 'Seasonal Theme', emoji: '🌸', desc: 'Hand-decorated seasonal wrapping', extra: 149 },
]

export default function BuildYourBoxPage() {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState([])
  const [wrap, setWrap] = useState('classic')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const { addItem } = useCartStore()
  const [added, setAdded] = useState(false)

  const toggleProduct = (p) => {
    setSelected(sel =>
      sel.find(s => s.id === p.id)
        ? sel.filter(s => s.id !== p.id)
        : sel.length < 6 ? [...sel, p] : sel
    )
  }

  const selectedWrap = WRAP_OPTIONS.find(w => w.id === wrap)
  const subtotal = selected.reduce((s, p) => s + p.price, 0) + (selectedWrap?.extra || 0)

  const handleAddToCart = () => {
    // Create a custom bundle product
    const bundle = {
      id: `custom-${Date.now()}`,
      name: `Custom Gift Box (${selected.length} items)`,
      artisan: 'Built by you, packed by us',
      price: subtotal,
      images: selected[0]?.images || ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80'],
      inStock: true,
    }
    addItem(bundle)
    setAdded(true)
  }

  return (
    <main className="pt-28 pb-20 min-h-screen bg-cream-light">
      <div className="container-site max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-terracotta-500 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={14} />
            Custom Gift Builder
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-3">Build Your Box</h1>
          <p className="text-charcoal-muted">Pick up to 6 artisan items, personalise, and we'll hand-pack it beautifully.</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-0 mb-12">
          {STEP_LABELS.map((label, i) => (
            <div key={label} className="flex items-center">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                i === step ? 'bg-terracotta-500 text-white shadow-warm' :
                i < step ? 'bg-terracotta-100 text-terracotta-500' :
                'bg-cream text-charcoal-muted'
              }`}>
                {i < step ? <Check size={14} /> : <span className="w-4 text-center">{i + 1}</span>}
                <span className="hidden sm:inline">{label}</span>
              </div>
              {i < STEP_LABELS.length - 1 && (
                <div className={`h-0.5 w-8 mx-1 transition-all ${i < step ? 'bg-terracotta-400' : 'bg-cream-warm'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 0: Choose items */}
        {step === 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-charcoal">
                Choose Your Items
                <span className="text-base text-charcoal-muted font-sans font-normal ml-3">({selected.length}/6 selected)</span>
              </h2>
            </div>

            {/* Selected bar */}
            {selected.length > 0 && (
              <div className="bg-terracotta-50 border border-terracotta-200 rounded-2xl p-4 mb-6 flex items-center gap-3 overflow-x-auto">
                {selected.map(p => (
                  <div key={p.id} className="relative flex-shrink-0">
                    <img src={p.images[0]} alt={p.name} className="w-14 h-14 rounded-xl object-cover border-2 border-terracotta-300" />
                    <button
                      onClick={() => toggleProduct(p)}
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-terracotta-500 text-white flex items-center justify-center text-xs"
                    >×</button>
                  </div>
                ))}
                <div className="flex-shrink-0 text-sm text-charcoal-muted">
                  Subtotal: <span className="font-bold text-terracotta-500">₹{selected.reduce((s, p) => s + p.price, 0).toLocaleString('en-IN')}</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products.filter(p => p.inStock).map(p => {
                const isSelected = selected.find(s => s.id === p.id)
                return (
                  <button
                    key={p.id}
                    onClick={() => toggleProduct(p)}
                    className={`text-left rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
                      isSelected
                        ? 'border-terracotta-500 shadow-warm bg-terracotta-50'
                        : 'border-transparent bg-white shadow-warm-sm hover:border-terracotta-300'
                    }`}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-terracotta-500 rounded-full flex items-center justify-center">
                          <Check size={14} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-sm text-charcoal line-clamp-1">{p.name}</p>
                      <p className="text-terracotta-500 font-bold text-sm">₹{p.price.toLocaleString('en-IN')}</p>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={() => setStep(1)}
                disabled={selected.length === 0}
                className="btn-primary text-base px-8 py-4 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next: Personalise <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Personalise */}
        {step === 1 && (
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-8">Personalise Your Box</h2>

            <div className="space-y-6">
              {/* Gift message */}
              <div>
                <label className="block font-semibold text-sm text-charcoal mb-2">Personal Message</label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  maxLength={200}
                  rows={3}
                  placeholder="Write a heartfelt message (up to 200 characters)…"
                  className="input-field resize-none"
                />
                <p className="text-xs text-charcoal-muted mt-1 text-right">{message.length}/200</p>
              </div>

              {/* Recipient name */}
              <div>
                <label className="block font-semibold text-sm text-charcoal mb-2">Recipient's Name (for custom ribbon)</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Priya, Rahul, Dr. Mehta…"
                  className="input-field"
                />
              </div>

              {/* Wrapping */}
              <div>
                <label className="block font-semibold text-sm text-charcoal mb-3">Choose Your Wrapping</label>
                <div className="space-y-3">
                  {WRAP_OPTIONS.map(opt => (
                    <label
                      key={opt.id}
                      className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        wrap === opt.id
                          ? 'border-terracotta-500 bg-terracotta-50'
                          : 'border-terracotta-100 bg-white hover:border-terracotta-300'
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
                      <span className="text-2xl">{opt.emoji}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-charcoal">{opt.label}</p>
                        <p className="text-xs text-charcoal-muted">{opt.desc}</p>
                      </div>
                      <span className="text-sm font-bold text-terracotta-500">
                        {opt.extra > 0 ? `+₹${opt.extra}` : 'Free'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-between mt-10">
              <button onClick={() => setStep(0)} className="btn-secondary flex items-center gap-2">
                <ArrowLeft size={16} /> Back
              </button>
              <button onClick={() => setStep(2)} className="btn-primary text-base px-8 py-4">
                Review Box <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Review */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-8">Your Custom Box</h2>

            {!added ? (
              <>
                {/* Items */}
                <div className="bg-white rounded-3xl p-6 shadow-warm mb-4">
                  <h3 className="font-semibold text-sm text-charcoal-muted uppercase tracking-wider mb-4">Your Items ({selected.length})</h3>
                  <div className="space-y-3">
                    {selected.map(p => (
                      <div key={p.id} className="flex items-center gap-3">
                        <img src={p.images[0]} alt={p.name} className="w-12 h-12 rounded-xl object-cover" />
                        <span className="flex-1 text-sm font-medium text-charcoal">{p.name}</span>
                        <span className="text-sm font-bold text-terracotta-500">₹{p.price.toLocaleString('en-IN')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personalisation */}
                <div className="bg-white rounded-3xl p-6 shadow-warm mb-4">
                  <h3 className="font-semibold text-sm text-charcoal-muted uppercase tracking-wider mb-4">Personalisation</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-charcoal-muted">Wrapping:</span> <span className="font-semibold">{selectedWrap?.label}</span></p>
                    {name && <p><span className="text-charcoal-muted">Ribbon name:</span> <span className="font-semibold">{name}</span></p>}
                    {message && <p><span className="text-charcoal-muted">Message:</span> <span className="italic">"{message}"</span></p>}
                  </div>
                </div>

                {/* Total */}
                <div className="bg-terracotta-50 rounded-3xl p-6 border border-terracotta-200 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-display font-bold text-lg text-charcoal">Total</span>
                    <span className="font-bold text-2xl text-terracotta-500">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {subtotal >= 1999 && (
                    <p className="text-xs text-green-600 font-semibold mt-2">🎉 Free express delivery included!</p>
                  )}
                </div>

                <div className="flex gap-3 justify-between">
                  <button onClick={() => setStep(1)} className="btn-secondary flex items-center gap-2">
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button onClick={handleAddToCart} className="btn-primary text-base px-8 py-4">
                    Add Box to Cart <Gift size={18} />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Your box is ready!</h3>
                <p className="text-charcoal-muted mb-6">Added to your cart. We'll hand-pack it with love.</p>
                <div className="flex gap-3 justify-center">
                  <a href="/" className="btn-primary">Continue Shopping</a>
                  <button onClick={handleAddToCart} className="btn-secondary">View Cart</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
