import { Link } from 'react-router-dom'
import { Globe, MessageCircle, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 pt-16 pb-8">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-cream/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}logo.jpg`}
                alt="thecutebox"
                className="h-9 w-9 rounded-xl object-contain"
              />
              <span className="font-display font-bold text-xl text-cream leading-none">
                thecutebox<span className="text-cream/40 font-sans font-normal text-xs">.in</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-cream/60">
              Artisanal gift boxes hand-packed with love in Jaipur &amp; Bangalore. Every box tells a story.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: '#', label: 'Instagram' },
                { icon: MessageCircle, href: '#', label: 'Twitter' },
                { icon: Mail, href: 'mailto:hello@thecutebox.in', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta-500 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-display font-semibold text-cream text-base mb-4">Shop</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Build Your Box', '/build'],
                ['Ready Hampers', '/hampers'],
                ['Full Catalog', '/catalog'],
                ['Corporate Gifting', '/corporate'],
                ['Artisans & Studio', '/artisans'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-terracotta-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-display font-semibold text-cream text-base mb-4">Help</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Track Your Order', '#'],
                ['Shipping Policy', '#'],
                ['Returns & Exchanges', '#'],
                ['Gift Personalisation', '#'],
                ['FAQs', '#'],
              ].map(([label, to]) => (
                <li key={label}>
                  <a href={to} className="hover:text-terracotta-300 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-cream text-base mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 text-terracotta-300 shrink-0" />
                <span>hello@thecutebox.in</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 text-terracotta-300 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 text-terracotta-300 shrink-0" />
                <span>Studio: Jaipur &amp; Bangalore, India</span>
              </li>
            </ul>
            <div className="mt-5">
              <p className="text-xs text-cream/50 mb-2">Subscribe for exclusive drops</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-cream/10 border border-cream/20 rounded-full px-3 py-2 text-xs text-cream placeholder:text-cream/40 focus:outline-none focus:border-terracotta-400"
                />
                <button className="bg-terracotta-500 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-terracotta-600 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/40">
          <p>© 2024 thecutebox.in — Gift With Intent. Made with ❤️ in India.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cream/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cream/70 transition-colors">Terms</a>
            <a href="#" className="hover:text-cream/70 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
