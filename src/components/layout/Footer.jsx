import { Link } from 'react-router-dom'
import { Globe, MessageCircle, Mail, MapPin, Phone, Heart, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-indigo-deep text-ivory/80 pt-16 pb-8 border-t-4 border-saffron-500">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}logo.jpg`}
                alt="thecutebox logo"
                className="h-10 w-10 rounded-2xl object-contain ring-1 ring-saffron-400/40"
              />
              <div>
                <span className="font-display font-bold text-2xl text-ivory leading-none block">
                  thecutebox<span className="text-saffron-400 font-sans font-normal text-xs">.in</span>
                </span>
                <span className="text-[10px] tracking-widest text-marigold-300 uppercase font-semibold">
                  Artisan Indian Gifting
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-ivory/70">
              Celebrating India's rich craft heritage. Every box is curated with authentic artisan treasures, fresh flowers, and hand-lettered blessings in Jaipur &amp; Bangalore.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: '#', label: 'Instagram' },
                { icon: MessageCircle, href: '#', label: 'WhatsApp' },
                { icon: Mail, href: 'mailto:namaste@thecutebox.in', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-saffron-500 hover:text-white transition-all hover:scale-105"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-ivory text-base mb-4 flex items-center gap-2">
              <span className="text-saffron-400">🪔</span> Curations
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Build Your Custom Box', '/build'],
                ['Royal Festive Hampers', '/hampers'],
                ['All Artisan Catalog', '/catalog'],
                ['Corporate Diwali Gifting', '/corporate'],
                ['Meet Our Artisans', '/artisans'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-marigold-300 transition-colors flex items-center gap-1.5">
                    <span className="text-saffron-500 text-xs">✦</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Celebrations */}
          <div>
            <h3 className="font-display font-semibold text-ivory text-base mb-4 flex items-center gap-2">
              <span className="text-marigold-400">🌸</span> Festive Occasions
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Diwali & Dhanteras Gift Boxes', '/catalog?occasion=diwali'],
                ['Shaadi & Wedding Favours', '/catalog?occasion=wedding'],
                ['Griha Pravesh Housewarming', '/catalog?occasion=housewarming'],
                ['Navratri & Pooja Kits', '/catalog?occasion=pooja'],
                ['Corporate Milestones & Kits', '/corporate'],
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="hover:text-marigold-300 transition-colors flex items-center gap-1.5">
                    <span className="text-saffron-500 text-xs">✦</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Studio */}
          <div>
            <h3 className="font-display font-semibold text-ivory text-base mb-4 flex items-center gap-2">
              <span className="text-rose-light">📍</span> Indian Studios
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-1 text-saffron-400 shrink-0" />
                <span>
                  <strong>Jaipur Studio:</strong> C-Scheme, Ashok Nagar, Jaipur, Rajasthan 302001
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-1 text-teal-400 shrink-0" />
                <span>
                  <strong>Bangalore Studio:</strong> Indiranagar 100ft Rd, Bangalore 560038
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-1 text-saffron-400 shrink-0" />
                <span>namaste@thecutebox.in</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-1 text-marigold-400 shrink-0" />
                <span>+91 98290 12345 (Mon–Sat, 10 AM–7 PM)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <p>© 2024 thecutebox.in — Shubh Gifting. Made with <Heart size={12} className="inline text-rose-gulabi fill-rose-gulabi mx-0.5" /> in India.</p>
          <div className="flex gap-5">
            <span className="hover:text-ivory transition-colors cursor-pointer">Pan-India Express Logistics</span>
            <span className="hover:text-ivory transition-colors cursor-pointer">100% Artisan Authenticity</span>
            <span className="hover:text-ivory transition-colors cursor-pointer">Plastic-Free Packaging</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
