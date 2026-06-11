import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import { handleSectionClick } from '../utils/navigation';
import { handleWhatsAppClick } from '../config/contact';

const heroImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1920',
];

const particlesData = [
  { id: 0, width: 8, height: 8, left: '12%', top: '20%', xOffset: 12, duration: 6.2, delay: 0.5 },
  { id: 1, width: 14, height: 14, left: '45%', top: '65%', xOffset: -8, duration: 8.5, delay: 1.2 },
  { id: 2, width: 6, height: 6, left: '78%', top: '35%', xOffset: 15, duration: 5.1, delay: 0.1 },
  { id: 3, width: 12, height: 12, left: '25%', top: '80%', xOffset: -12, duration: 7.3, delay: 2.3 },
  { id: 4, width: 10, height: 10, left: '85%', top: '15%', xOffset: 10, duration: 9.1, delay: 1.8 },
  { id: 5, width: 7, height: 7, left: '60%', top: '40%', xOffset: -5, duration: 6.8, delay: 0.7 },
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentIdx]})` }}
          />
        </AnimatePresence>
        
        {/* Modern dark/gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-50 dark:to-zinc-950 transition-colors duration-300 z-1" />
      </div>

      {/* Floating Decorative Gold Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {particlesData.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-gold-400/35 rounded-full blur-[2px]"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, p.xOffset, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}

        <motion.div
          className="absolute text-gold-300/40 text-2xl"
          style={{ top: '25%', left: '15%' }}
          animate={{ rotate: 360, y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          ✦
        </motion.div>
        
        <motion.div
          className="absolute text-gold-400/40 text-xl"
          style={{ top: '65%', right: '18%' }}
          animate={{ rotate: -360, y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        >
          ✦
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl flex flex-col items-center">
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6"
        >
          <span className="animate-pulse">✨</span> Premium Event Designers
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white drop-shadow-xl"
        >
          Shah Events
          <span className="block text-2xl sm:text-4xl md:text-5xl font-serif font-light text-gold-200 tracking-[0.2em] mt-3 uppercase">
            Vadodara
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-stone-200 tracking-wide font-sans max-w-2xl font-light"
        >
          "Creating Unforgettable Memories"
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <a
            href="#events"
            onClick={(e) => handleSectionClick(e, '#events')}
            className="group relative flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 w-full sm:w-64 rounded-full bg-brand-green-800 hover:bg-gold-600 text-white hover:text-zinc-950 font-semibold tracking-wider transition-all duration-300 shadow-lg hover:shadow-gold-500/30 overflow-hidden border border-brand-green-700 hover:border-gold-500 whitespace-nowrap"
          >
            <span className="absolute inset-0 bg-gold-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <FaCalendarAlt className="h-4 w-4 relative z-10" />
            <span className="relative z-10">Explore Events</span>
          </a>

          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 w-full sm:w-64 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold tracking-wider transition-all duration-300 border border-white/20 shadow-md cursor-pointer whitespace-nowrap"
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Enquire on WhatsApp</span>
          </button>
        </motion.div>
      </div>

      {/* Down arrow indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-gold-300/80 cursor-pointer hidden sm:block"
      >
        <a
          href="#about"
          onClick={(e) => handleSectionClick(e, '#about')}
          aria-label="Scroll down to About section"
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
