import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    id: 'faq-1',
    question: 'How do I book an event with Shah Events Vadodara?',
    answer: 'Booking is simple! You can explore our featured portfolios and click "Enquire via WhatsApp" to message us directly with pre-filled details. Alternatively, you can fill out the contact form below or call us directly. We will schedule an initial consultation to discuss your requirements, themes, and budgets.',
  },
  {
    id: 'faq-2',
    question: 'What locations do you serve?',
    answer: 'We are based in Vadodara, Gujarat. We serve all areas in and around Vadodara (including Sevasi, Vasna, Alkapuri, Gotri, Bhayli, and Manjalpur). We are also fully equipped to plan and execute destination weddings and large-scale corporate events across Gujarat, including Ahmedabad, Surat, Anand, and Rajkot.',
  },
  {
    id: 'faq-3',
    question: 'Can the stage and theme decorations be customized?',
    answer: 'Absolutely! Customization is our signature strength. We do not do cookie-cutter designs. During our consultations, we discuss your color preferences, floral tastes, lighting desires, and cultural styles. Our team then creates custom layouts, furniture configurations, and mood boards tailored specifically to you.',
  },
  {
    id: 'faq-4',
    question: 'What is your pricing model?',
    answer: 'Our pricing is based on the scale of decoration, size of the venue, materials used (e.g., local vs. imported flowers, custom acrylic panels), and fabrications. After our initial consultation, we provide an itemized, transparent quotation. This ensures you know exactly where your investment goes, with no hidden fees.',
  },
  {
    id: 'faq-5',
    question: 'How far in advance should we book our event?',
    answer: 'For premium wedding setups and traditional Garba nights, we highly recommend booking at least 3 to 6 months in advance, especially if your event falls during the peak wedding season in India (November to February). For birthdays, baby showers, or anniversaries, booking 2 to 4 weeks in advance is usually sufficient.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-stone-100 dark:bg-zinc-900/60 transition-colors duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-500 uppercase block mb-3">
            Got Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-green-950 dark:text-stone-100 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-5" />
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'glass-card border-gold-500/40 shadow-md'
                    : 'bg-white/80 border-stone-200 hover:border-gold-500/30 dark:bg-zinc-800/50 dark:border-zinc-700 hover:dark:border-gold-500/20'
                }`}
              >
                {/* FAQ Header/Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex items-center justify-between w-full p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg md:text-xl font-bold text-brand-green-950 dark:text-stone-100 pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon with rotation */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 p-1.5 rounded-full ${
                      isOpen
                        ? 'bg-brand-green-900 text-white dark:bg-gold-500 dark:text-zinc-950'
                        : 'bg-stone-100 text-stone-500 dark:bg-zinc-800 dark:text-zinc-400'
                    }`}
                  >
                    <FaChevronDown className="h-3 w-3" />
                  </motion.div>
                </button>

                {/* FAQ Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8 text-xs sm:text-sm md:text-base text-stone-600 dark:text-stone-400 font-sans leading-relaxed border-t border-stone-200/40 dark:border-zinc-800/40 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
