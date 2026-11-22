import { Link } from 'react-router-dom'
import { Globe, MessageCircle, Mail, MapPin, Phone, Heart, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-indigo-deep text-ivory/80 pt-16 pb-8 border-t-4 border-saffron-500 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-saffron-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emeraldFestive-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
          {/* Brand & Preety Singh Founder Profile */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}logo.jpg`}
                alt="thecutebox logo"
                className="h-11 w-11 rounded-2xl object-contain ring-2 ring-saffron-400/40"
              />
              <div>
                <span className="font-display font-bold text-2xl text-ivory leading-none block">
                  thecutebox<span className="text-saffron-400 font-sans font-normal text-xs">.in</span>
                </span>
                <span className="text-[10px] tracking-widest text-marigold-300 uppercase font-bold">
                  All Indian Festivals Gifting
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-ivory/75">
              Founded &amp; curated by <strong>Preety Singh</strong> in Kolkata. Celebrating the rich harmony of India with handcrafted gift boxes for Eid, Diwali, Christmas, Durga Puja, and life’s special milestones.
            </p>
            <div className="bg-white/5 p-3 rounded-2xl border border-white/10 mb-5 text-xs text-ivory/85">
              <p className="font-bold text-saffron-300">Direct Founder Helpline:</p>
              <p className="mt-0.5">Preety Singh: <a href="tel:9831559109" className="text-white underline font-semibold">+91 9831559109</a></p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919831559109?text=Hello%20Preety%20Singh,%20I%20want%20to%20order%20thecutebox%20gift%20hampers!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Preety Singh"
                className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center hover:bg-emerald-700 text-white transition-all hover:scale-105"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="tel:9831559109"
                aria-label="Call Preety Singh"
                className="w-10 h-10 rounded-full bg-saffron-500 flex items-center justify-center hover:bg-saffron-600 text-white transition-all hover:scale-105"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:namaste@thecutebox.in"
                aria-label="Email thecutebox"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-white/20 text-white transition-all hover:scale-105"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* All Festivals Curations */}
          <div>
            <h3 className="font-display font-semibold text-ivory text-base mb-4 flex items-center gap-2">
              <span className="text-saffron-400">✨</span> All Festival Curations
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Diwali & Dhanteras Lights Box', '/catalog?occasion=diwali'],
                ['Noor-e-Eid Royal Ittar & Dates', '/catalog?occasion=eid'],
                ['Christmas Plum Cake & Cocoa Box', '/catalog?occasion=christmas'],
                ['Durga Puja Kantha & Tea Box', '/catalog?occasion=durga-puja'],
                ['Holi Herbal Gulal & Thandai Kit', '/catalog?occasion=holi'],
                ['Shaadi & Wedding Hampers', '/catalog?occasion=wedding'],
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

          {/* Custom & Corporate */}
          <div>
            <h3 className="font-display font-semibold text-ivory text-base mb-4 flex items-center gap-2">
              <span className="text-marigold-400">🎁</span> Gifting Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Build Your Custom Box (3 Steps)', '/build'],
                ['Royal Pre-curated Hampers', '/hampers'],
                ['Corporate & Bulk Orders', '/corporate'],
                ['Artisans & Guilds', '/artisans'],
                ['Custom Inquiries (Nagerbazar)', '#contact'],
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

          {/* Contact */}
          <div id="contact">
            <h3 className="font-display font-semibold text-ivory text-base mb-4 flex items-center gap-2">
              <span className="text-rose-light">📍</span> Kolkata Address
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-1 text-saffron-400 shrink-0" />
                <span>
                  <strong>Address:</strong><br />
                  Nagerbazar, Jessore Road, Kolkata, West Bengal - 700074
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-1 text-emerald-400 shrink-0" />
                <span>
                  <strong>Preety Singh:</strong>{' '}
                  <a href="tel:9831559109" className="text-white font-bold underline">
                    +91 9831559109
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle size={16} className="mt-1 text-emerald-400 shrink-0" />
                <span>
                  <strong>WhatsApp:</strong>{' '}
                  <a
                    href="https://wa.me/919831559109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 underline font-semibold"
                  >
                    +91 9831559109
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-1 text-saffron-400 shrink-0" />
                <span>namaste@thecutebox.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <p>© 2024 thecutebox.in • Handcrafted with <Heart size={12} className="inline text-rose-gulabi fill-rose-gulabi mx-0.5" /> by Preety Singh (Nagerbazar, Kolkata - 700074).</p>
          <div className="flex gap-4">
            <span className="hover:text-ivory transition-colors">Pan-India Express Dispatch</span>
            <span>•</span>
            <span className="hover:text-ivory transition-colors">100% Artisan Authenticity</span>
            <span>•</span>
            <span className="hover:text-ivory transition-colors">All Festivals Celebrated</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
