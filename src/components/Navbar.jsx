import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes, FaCrown } from 'react-icons/fa';
import { scrollToSection } from '../utils/navigation';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine background blur state
      setIsScrolled(currentScrollPos > 20);
      
      // Hide on scroll down only on desktop; always visible on mobile/tablet
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
      setVisible(
        !isDesktop || prevScrollPos > currentScrollPos || currentScrollPos < 80
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    requestAnimationFrame(() => scrollToSection(href));
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-light dark:glass-dark shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group"
          >
            <FaCrown className="h-7 w-7 text-gold-500 transition-transform duration-300 group-hover:rotate-12" />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-brand-green-900 dark:text-gold-200">
                SHAH EVENTS
              </span>
              <span className="text-[10px] tracking-[0.3em] font-sans text-stone-500 dark:text-gold-500/80 -mt-1 font-semibold">
                VADODARA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (large screens only) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-sm font-medium tracking-wide text-stone-700 dark:text-stone-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-stone-200/50 dark:hover:bg-zinc-800/50 text-gold-600 dark:text-gold-400 transition-colors duration-200 focus:outline-none cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile / tablet controls */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-stone-200/50 dark:hover:bg-zinc-800/50 text-gold-600 dark:text-gold-400 transition-colors duration-200 focus:outline-none cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-stone-700 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-zinc-800/50 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden relative z-[60] border-t border-stone-200 dark:border-zinc-800/80 glass-light dark:glass-dark shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-stone-800 dark:text-stone-200 hover:bg-gold-500/10 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
