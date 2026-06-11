import { FaCrown, FaChevronRight } from 'react-icons/fa';
import { PHONE_DISPLAY, OFFICE_ADDRESS, EMAIL_ADDRESS } from '../config/contact';
import { footerServiceLinks } from '../data/services';
import { handleSectionClick } from '../utils/navigation';
import SocialLinks from './SocialLinks';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services Offered', href: '#services' },
  { name: 'Featured Portfolios', href: '#events' },
  { name: 'Image Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-stone-400 border-t border-zinc-900 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => handleSectionClick(e, '#home')}
              className="flex items-center space-x-2"
            >
              <FaCrown className="h-6 w-6 text-gold-500" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-widest text-white">
                  SHAH EVENTS
                </span>
                <span className="text-[9px] tracking-[0.3em] font-sans text-gold-500/80 -mt-1 font-semibold">
                  VADODARA
                </span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-sans pt-2">
              Shah Events Vadodara designs, plans, and coordinates luxury events. From royal wedding decors to community celebrations, we bring your vision to life with elegance and precision.
            </p>
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block font-sans">
                Featured Listings
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://pinkbazaar.in/service/shah-events-decorations-vadodara-120865/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-300 hover:text-gold-400 transition-all duration-300 text-xs font-semibold font-sans bg-zinc-900/40 hover:bg-zinc-900 px-3 py-2 rounded-lg border border-zinc-800/60 shadow-sm"
                >
                  <img
                    src="https://www.google.com/s2/favicons?sz=32&domain=pinkbazaar.in"
                    alt=""
                    className="h-3.5 w-3.5 rounded-sm object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span>PinkBazaar</span>
                </a>

                <a
                  href="https://wap.justdial.com/el?source=2&user_type=&docid=0265PX265.X265.240127143912.G4L8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-300 hover:text-gold-400 transition-all duration-300 text-xs font-semibold font-sans bg-zinc-900/40 hover:bg-zinc-900 px-3 py-2 rounded-lg border border-zinc-800/60 shadow-sm"
                >
                  <img
                    src="https://www.google.com/s2/favicons?sz=32&domain=wap.justdial.com"
                    alt=""
                    className="h-3.5 w-3.5 rounded-sm object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span>Justdial</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSectionClick(e, link.href)}
                    className="flex items-center gap-1 hover:text-gold-400 transition-colors group"
                  >
                    <FaChevronRight className="h-2 w-2 text-stone-600 group-hover:text-gold-400 transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Categories */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-5 tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              {footerServiceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSectionClick(e, link.href)}
                    className="flex items-center gap-1 hover:text-gold-400 transition-colors group"
                  >
                    <FaChevronRight className="h-2 w-2 text-stone-600 group-hover:text-gold-400 transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Quick View */}
          <div className="min-w-0">
            <h4 className="font-serif text-lg font-bold text-white mb-5 tracking-wide">
              Enquiries
            </h4>
            <div className="space-y-3 text-xs sm:text-sm font-sans text-stone-500">
              <p>
                <strong className="text-white">Office Address:</strong><br />
                {OFFICE_ADDRESS.full}
              </p>
              <p>
                <strong className="text-white">Phone:</strong>{' '}
                <a
                  href={`tel:${PHONE_DISPLAY.replace(/\s+/g, '')}`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong>{' '}
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="hover:text-gold-400 transition-colors break-all"
                >
                  {EMAIL_ADDRESS}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Footer Middle Panel: Socials & Horizontal Line */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Socials */}
          <SocialLinks size="sm" />

          {/* Quick legal/links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone-600 font-sans font-medium">
            <a href="#privacy" onClick={(e) => handleSectionClick(e, '#privacy')} className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" onClick={(e) => handleSectionClick(e, '#terms')} className="hover:text-stone-400 transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="mt-8 border-t border-zinc-900/60 pt-6 text-center text-[11px] sm:text-xs text-stone-600 font-sans tracking-wide">
          <p>
            &copy; {currentYear} Shah Events Vadodara. All Rights Reserved.
          </p>
          <p className="mt-1 font-light">
            Designed for premium wedding decorations and event styles in Gujarat.
          </p>
        </div>

      </div>
    </footer>
  );
}
