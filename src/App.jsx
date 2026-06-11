import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Events from './components/Events';
import Gallery from './components/Gallery';
import GoogleReviews from './components/GoogleReviews';
import InstagramSection from './components/InstagramSection';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LocalBusinessSchema from './components/LocalBusinessSchema';
import GoogleAnalytics from './components/GoogleAnalytics';
import { FaWhatsapp } from 'react-icons/fa';
import { handleWhatsAppClick } from './config/contact';

function AppContent() {
  return (
    <div className="relative min-h-screen transition-colors duration-300 bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-gold-500/30 selection:text-brand-green-950 dark:selection:text-gold-200">
      <LocalBusinessSchema />
      <GoogleAnalytics />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Events />
        <Gallery />
        <GoogleReviews />
        <InstagramSection />
        <FAQ />
        <Contact />
        <Legal />
      </main>

      <Footer />
      <BackToTop />

      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-40 p-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer group max-sm:bottom-5 max-sm:right-5 max-sm:p-3.5"
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute right-full mr-3 py-1.5 px-3 rounded-lg bg-zinc-900 text-white text-xs font-sans font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none max-sm:hidden">
          Enquire Now
        </span>
        <FaWhatsapp className="h-7 w-7 max-sm:h-6 max-sm:w-6" />
      </button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
