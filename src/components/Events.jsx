import { motion } from 'framer-motion';
import { events } from '../data/events';
import { FaMapMarkerAlt, FaTags, FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '../config/contact';
import SafeImage from './SafeImage';

export default function Events() {
  const handleWhatsAppEnquiry = (event) => {
    const message = `Hello Shah Events,\nI am interested in the ${event.name} event.\nPlease share more details.`;
    openWhatsApp(message, { includeImage: false });
  };

  return (
    <section id="events" className="py-24 bg-stone-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-500 uppercase block mb-3">
            Featured Portfolios
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-green-950 dark:text-stone-100 tracking-tight">
            Dream Events Realized
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-5" />
          <p className="mt-6 text-stone-600 dark:text-stone-400 font-sans max-w-xl mx-auto text-sm sm:text-base">
            Explore our curated setups and signature designs. Select an event to inquire and let us bring it to life for you.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-2xl overflow-hidden glass-card transition-all duration-300 shadow-md"
            >
              {/* Event Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <SafeImage
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4 bg-brand-green-900/90 dark:bg-gold-500 text-white dark:text-zinc-950 px-3 py-1 rounded-full text-xs font-semibold tracking-wider font-sans uppercase shadow-md">
                  {event.category}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-green-950 dark:text-stone-100 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors duration-200 mb-3">
                    {event.name}
                  </h3>
                  
                  <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                    {event.description}
                  </p>
                  
                  {/* Detailed Specs */}
                  <div className="space-y-3 font-sans border-t border-stone-200/60 dark:border-zinc-800/60 pt-4 mb-6">
                    <div className="flex items-center gap-3 text-stone-500 dark:text-stone-400 text-xs sm:text-sm">
                      <FaMapMarkerAlt className="text-gold-500 flex-shrink-0 h-4 w-4" />
                      <span className="truncate">{event.location}</span>
                    </div>

                    <div className="flex items-center gap-3 text-stone-500 dark:text-stone-400 text-xs sm:text-sm">
                      <FaTags className="text-gold-500 flex-shrink-0 h-4 w-4" />
                      <span>Pricing: <strong className="font-semibold text-brand-green-900 dark:text-gold-300">{event.budgetRange}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Booking Call to Action */}
                <button
                  onClick={() => handleWhatsAppEnquiry(event)}
                  className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-brand-green-800 hover:bg-gold-600 hover:text-zinc-950 dark:bg-zinc-800 dark:hover:bg-gold-600/90 dark:hover:text-zinc-950 dark:border dark:border-zinc-700 dark:hover:border-gold-500/50 text-white font-semibold tracking-wider font-sans text-sm sm:text-base transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gold-500/20 shadow-md cursor-pointer"
                >
                  <FaWhatsapp className="h-5 w-5 text-[#25D366] animate-pulse" />
                  <span>Enquire via WhatsApp</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
