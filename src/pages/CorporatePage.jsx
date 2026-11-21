import { Building2, Users, Package, Award, CheckCircle2, ArrowRight } from 'lucide-react'

const TIERS = [
  {
    name: 'Starter',
    qty: '10–25',
    price: '₹1,499',
    per: 'per box',
    features: ['Curated selection of 5 items', 'Standard gift wrapping', 'Company card insert', 'Pan-India delivery', 'Basic tracking'],
    cta: 'Enquire',
    highlight: false,
  },
  {
    name: 'Business',
    qty: '26–100',
    price: '₹1,199',
    per: 'per box',
    features: ['Premium curated items', 'Custom branding & ribbon', 'Personalized note per box', 'Priority dispatch', 'Dedicated account manager', 'Live tracking dashboard'],
    cta: 'Get a Quote',
    highlight: true,
  },
  {
    name: 'Enterprise',
    qty: '100+',
    price: 'Custom',
    per: 'pricing',
    features: ['Fully bespoke boxes', 'Co-branded packaging', 'Custom product inclusion', 'White-glove logistics', 'Dedicated team', 'Post-delivery analytics'],
    cta: 'Contact Us',
    highlight: false,
  },
]

export default function CorporatePage() {
  return (
    <main className="pt-28 pb-20 bg-cream-light">
      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-light text-white py-16 md:py-24 mb-16">
        <div className="container-site text-center">
          <Building2 size={40} className="mx-auto text-terracotta-300 mb-4" />
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Corporate Gifting</h1>
          <p className="text-cream/70 text-lg max-w-lg mx-auto mb-10">
            Delight your clients, employees, and partners with artisan gift boxes — custom-branded and delivered at scale.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Users, text: '500+ corporate clients' },
              { icon: Package, text: 'Min. order: 10 boxes' },
              { icon: Award, text: 'Custom branding included' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/10 px-5 py-3 rounded-full text-sm font-semibold">
                <Icon size={16} className="text-terracotta-300" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-site">
        {/* Pricing tiers */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-2">Bulk Pricing</h2>
          <p className="text-charcoal-muted">The more you gift, the more you save</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {TIERS.map(t => (
            <div
              key={t.name}
              className={`rounded-3xl p-8 shadow-warm transition-all duration-200 ${
                t.highlight
                  ? 'bg-terracotta-500 text-white scale-105 shadow-warm-xl'
                  : 'bg-white text-charcoal'
              }`}
            >
              {t.highlight && (
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Most Popular</span>
              )}
              <p className={`font-semibold text-sm mb-1 ${t.highlight ? 'text-cream/80' : 'text-charcoal-muted'}`}>
                {t.qty} boxes
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display font-bold text-4xl">{t.price}</span>
                <span className={`text-sm ${t.highlight ? 'text-cream/70' : 'text-charcoal-muted'}`}>{t.per}</span>
              </div>
              <p className={`font-display font-bold text-xl mb-6 ${t.highlight ? 'text-white' : 'text-charcoal'}`}>{t.name}</p>
              <ul className="space-y-3 mb-8">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${t.highlight ? 'text-cream/80' : 'text-terracotta-500'}`} />
                    <span className={t.highlight ? 'text-cream/90' : 'text-charcoal-light'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:corporate@thecutebox.in"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm transition-all ${
                  t.highlight
                    ? 'bg-white text-terracotta-500 hover:bg-cream'
                    : 'bg-terracotta-500 text-white hover:bg-terracotta-600'
                }`}
              >
                {t.cta} <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto bg-white rounded-4xl p-8 md:p-12 shadow-warm">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-2">Get a Custom Quote</h2>
          <p className="text-charcoal-muted text-sm mb-6">Fill in the details and we'll respond within 24 hours.</p>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-1.5">Your Name</label>
                <input type="text" className="input-field" placeholder="Rahul Mehta" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-1.5">Company</label>
                <input type="text" className="input-field" placeholder="Acme Corp" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-1.5">Email</label>
                <input type="email" className="input-field" placeholder="rahul@acme.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-1.5">Phone</label>
                <input type="tel" className="input-field" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-1.5">Quantity Needed</label>
                <input type="number" className="input-field" placeholder="e.g. 50" min="10" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-1.5">Budget per Box (₹)</label>
                <input type="number" className="input-field" placeholder="e.g. 1500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-1.5">Occasion / Notes</label>
              <textarea rows={3} className="input-field resize-none" placeholder="Diwali hampers, employee gifts, client appreciation…" />
            </div>
            <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
              Send Enquiry →
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
