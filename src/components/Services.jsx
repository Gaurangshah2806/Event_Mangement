import { motion } from 'framer-motion';
import { servicesData, serviceAnchorId } from '../data/services';
import { handleSectionClick } from '../utils/navigation';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-100 dark:bg-zinc-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-500 uppercase block mb-3">
            Our Offerings
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-green-950 dark:text-stone-100 tracking-tight">
            Exquisite Design & Planning Services
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-5" />
          <p className="mt-6 text-stone-600 dark:text-stone-400 font-sans max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We provide a complete suite of event design, coordination, and styling services, executed to perfection in Vadodara and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            const indexStr = service.id < 10 ? `0${service.id}` : service.id;
            return (
              <motion.div
                key={service.id}
                id={serviceAnchorId(service.title)}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl transition-all duration-500 glass-card flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(197,168,128,0.15)] scroll-mt-24"
              >
                {/* Glowing Top Gold Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                {/* Background Large Index Number */}
                <span className="absolute right-6 top-6 font-serif text-5xl sm:text-6xl font-extrabold text-stone-300/40 dark:text-zinc-800/30 select-none group-hover:text-gold-500/15 transition-colors duration-500">
                  {indexStr}
                </span>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500/10 to-gold-500/20 text-gold-700 dark:from-gold-500/5 dark:to-gold-500/10 dark:text-gold-300 flex items-center justify-center mb-6 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-zinc-950 transition-all duration-500 shadow-inner border border-stone-200/20 dark:border-zinc-800/30">
                    <IconComponent className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-green-950 dark:text-stone-100 mb-4 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-500 dark:text-stone-400 font-sans text-xs sm:text-sm leading-relaxed pr-4">
                    {service.description}
                  </p>
                </div>

                {/* Call To Action button pointing to Contact */}
                <a
                  href="#contact"
                  onClick={(e) => handleSectionClick(e, '#contact')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400 mt-8 group-hover:text-gold-700 dark:group-hover:text-gold-300 transition-colors duration-300"
                >
                  <span>Inquire Service</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                    &rarr;
                  </span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
