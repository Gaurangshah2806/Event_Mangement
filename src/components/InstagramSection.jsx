import { motion } from 'framer-motion';
import { FaInstagram, FaExternalLinkAlt } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../config/contact';

const highlights = [
  'Royal wedding stages & mandaps',
  'Garba & Navratri setups',
  'Engagement & ring ceremonies',
  'Corporate branding events',
  'Birthday & baby shower decor',
  'Behind-the-scenes styling',
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-24 bg-stone-50 dark:bg-zinc-950 transition-colors duration-300 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-500 uppercase block mb-3">
              Follow Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-green-950 dark:text-stone-100 tracking-tight">
              @shah.events.vadodara
            </h2>
            <div className="w-16 h-[2px] bg-gold-500 mt-5" />
            <p className="mt-6 text-stone-600 dark:text-stone-400 font-sans text-sm sm:text-base leading-relaxed">
              See our latest weddings, Garba nights, and decor transformations on Instagram. DM us for quick enquiries or tag us in your event photos.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((item) => (
                <li key={item} className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 flex items-center gap-2">
                  <span className="text-gold-500">✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-semibold text-sm hover:scale-105 transition-transform shadow-lg"
            >
              <FaInstagram className="h-5 w-5" />
              Follow on Instagram
              <FaExternalLinkAlt className="h-3 w-3 opacity-80" />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-stone-200/50 dark:border-zinc-800"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4]/20 via-[#E1306C]/10 to-gold-500/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <FaInstagram className="h-16 w-16 text-[#E1306C] mb-4" />
              <p className="font-serif text-2xl font-bold text-brand-green-950 dark:text-stone-100">
                Shah Events Vadodara
              </p>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-2">
                Daily inspiration, reels &amp; real event photos
              </p>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm font-semibold text-[#E1306C] hover:underline"
              >
                Open Instagram Profile →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
