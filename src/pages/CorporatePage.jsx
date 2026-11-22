import { Building2, Users, Package, Award, CheckCircle2, ArrowRight } from 'lucide-react'

const TIERS = [
  {
    name: 'Utsav Starter',
    qty: '25–50 boxes',
    price: '₹1,299',
    per: 'per box',
    features: [
      'Set of handpainted diyas + artisanal chai or candle',
      'Festive kraft gift box with natural jute wrap',
      'Personalized brand card with company logo',
      'Doorstep Pan-India individual dispatch',
      'Live SMS & WhatsApp recipient tracking',
    ],
    cta: 'Request Quote',
    highlight: false,
  },
  {
    name: 'Shahi Executive',
    qty: '51–250 boxes',
    price: '₹2,199',
    per: 'per box',
    features: [
      'Brass pooja accents, royal chai & dry fruit selection',
      'Custom gold-foil branded gift sleeve & ribbon',
      'Handwritten message on seed-paper per employee/client',
      'Dedicated festive account concierge',
      'Batched or scheduled multi-city delivery',
      'Transit insurance & delivery proof report',
    ],
    cta: 'Book Festive Slots',
    highlight: true,
  },
  {
    name: 'Maharaja Bespoke',
    qty: '250+ boxes',
    price: 'Custom',
    per: 'curation',
    features: [
      'Heirloom rosewood chest with custom brass plaque',
      'Fully tailored product assortment (sweets, silver, idols)',
      'Custom dyed Banarasi silk fabric wrap',
      'Executive white-glove direct delivery',
      'Custom co-branded landing page for recipient address collection',
    ],
    cta: 'Connect with Leadership',
    highlight: false,
  },
]

export default function CorporatePage() {
  return (
    <main className="pt-28 pb-20 bg-ivory min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-deep via-indigo-rich to-indigo-deep text-white py-16 md:py-24 mb-16 border-b-4 border-saffron-500">
        <div className="container-site text-center max-w-3xl mx-auto">
          <Building2 size={44} className="mx-auto text-saffron-400 mb-4" />
          <span className="tag bg-saffron-500/20 text-saffron-300 border border-saffron-400/40 mb-4">
            Corporate &amp; Festive Gifting
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-ivory">
            Artisan Gifting at Scale
          </h1>
          <p className="text-ivory/70 text-base sm:text-lg max-w-xl mx-auto mb-10">
            Leave behind uninspired branded mugs. Delight your valued clients, partners, and high-performing teams with handcrafted living craft treasures.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-semibold">
            {[
              { icon: Users, text: 'Trusted by 100+ Leading Indian Brands' },
              { icon: Package, text: 'Custom Logo Branding Included' },
              { icon: Award, text: 'Delivered to 19,000+ Pin Codes' },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15"
              >
                <Icon size={16} className="text-saffron-300" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-site">
        {/* Tier Cards */}
        <div className="text-center mb-12 max-w-xl mx-auto">
          <span className="tag bg-saffron-100 text-saffron-700 mb-2">Festive Volume Tiers</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-indigo-deep mb-2">
            Transparent Volume Pricing
          </h2>
          <p className="text-earth-light text-sm">
            Everything included — artisan curations, custom branding, and individual pan-India logistics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 items-stretch">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`rounded-3xl p-8 shadow-warm flex flex-col justify-between transition-all duration-300 border ${
                t.highlight
                  ? 'bg-gradient-to-br from-indigo-deep to-indigo-rich text-white border-saffron-400 md:-translate-y-2 shadow-warm-xl'
                  : 'bg-white text-indigo-deep border-saffron-100'
              }`}
            >
              <div>
                {t.highlight && (
                  <span className="inline-block bg-saffron-500 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                    ★ Most Preferred for Diwali
                  </span>
                )}
                <p className={`font-semibold text-xs uppercase tracking-wider mb-1 ${t.highlight ? 'text-saffron-300' : 'text-saffron-600'}`}>
                  {t.qty}
                </p>
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="font-display font-bold text-4xl">{t.price}</span>
                  <span className={`text-xs ${t.highlight ? 'text-ivory/70' : 'text-earth-light'}`}>{t.per}</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-6">{t.name}</h3>

                <ul className="space-y-3 mb-8">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2
                        size={16}
                        className={`shrink-0 mt-0.5 ${
                          t.highlight ? 'text-saffron-400' : 'text-saffron-600'
                        }`}
                      />
                      <span className={t.highlight ? 'text-ivory/85' : 'text-indigo-deep/80'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#enquiry"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all shadow-md active:scale-95 ${
                  t.highlight
                    ? 'bg-saffron-500 text-white hover:bg-saffron-600'
                    : 'bg-saffron-50 text-saffron-700 hover:bg-saffron-100 border border-saffron-200'
                }`}
              >
                {t.cta} <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Corporate Enquiry Form */}
        <div id="enquiry" className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-warm border border-saffron-100">
          <div className="text-center mb-8">
            <span className="text-3xl mb-2 block">🪔</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-indigo-deep mb-2">
              Request Corporate Gifting Catalog &amp; Samples
            </h2>
            <p className="text-earth-light text-xs sm:text-sm">
              Our corporate gifting team will respond within 4 hours with digital mockups &amp; volume proposals.
            </p>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for reaching out! Our corporate gifting team will connect within 4 hours.')
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-indigo-deep mb-1">Your Full Name</label>
                <input required type="text" className="input-field" placeholder="Vikram Malhotra" />
              </div>
              <div>
                <label className="block text-xs font-bold text-indigo-deep mb-1">Company / Organization</label>
                <input required type="text" className="input-field" placeholder="Tata Consultancy Services" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-indigo-deep mb-1">Official Work Email</label>
                <input required type="email" className="input-field" placeholder="vikram@tcs.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-indigo-deep mb-1">Mobile / WhatsApp Number</label>
                <input required type="tel" className="input-field" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-indigo-deep mb-1">Approximate Quantity</label>
                <input required type="number" min="20" className="input-field" placeholder="e.g., 100" />
              </div>
              <div>
                <label className="block text-xs font-bold text-indigo-deep mb-1">Target Budget Per Box (₹)</label>
                <input type="number" className="input-field" placeholder="e.g., ₹2,000" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-indigo-deep mb-1">Occasion / Specific Requirements</label>
              <textarea
                rows={3}
                className="input-field resize-none"
                placeholder="Diwali festive gifting for clients across Delhi, Mumbai & Bangalore. Need custom logo engraving on brass plate…"
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center text-base py-3.5 shadow-warm">
              Submit Corporate Enquiry 🪔
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
