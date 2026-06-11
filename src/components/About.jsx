import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaAward } from 'react-icons/fa';
import SafeImage from './SafeImage';

// Custom Count-Up component using Intersection Observer
const Counter = ({ endValue, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;
          const duration = 2000; // 2 seconds

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * endValue));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(endValue);
            }
          };

          window.requestAnimationFrame(step);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [endValue]);

  return (
    <span ref={elementRef} className="font-serif font-bold text-4xl sm:text-5xl text-gold-500 tracking-tight">
      {count}
      {suffix}
    </span>
  );
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-500 uppercase block mb-3"
          >
            Behind The Scenes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-brand-green-950 dark:text-stone-100 tracking-tight"
          >
            Crafting Luxury Experiences
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-[2px] bg-gold-500 mx-auto mt-5"
          />
        </div>

        {/* Narrative & Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Overlapping Editorial Images */}
          <div className="relative flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[75%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 border border-gold-500/10"
            >
              <SafeImage
                src="/images/events/birthday.jpeg"
                alt="Birthday celebration setup"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute right-0 bottom-[-40px] w-[50%] aspect-square rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-stone-50 dark:border-zinc-950 bg-stone-100 dark:bg-zinc-900"
            >
              <SafeImage
                src="/images/events/baby_shower.jpeg"
                alt="Baby shower celebration setup"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            {/* Background luxury ornament accent */}
            <div className="absolute -top-10 -left-10 text-[10rem] text-gold-500/5 dark:text-gold-500/5 font-serif select-none pointer-events-none">
              S
            </div>
          </div>

          {/* Right Column: Company Story & Stats */}
          <div className="flex flex-col space-y-8 mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-brand-green-900 dark:text-gold-200">
                Shah Events Vadodara
              </h3>
              <p className="text-stone-600 dark:text-stone-400 font-sans leading-relaxed text-sm sm:text-base">
                Based in the cultural capital of Gujarat, Vadodara, Shah Events is a premium full-service event planning and design company. For over a decade, we have been turning wedding dreams, anniversary milestones, and corporate galas into spectacular visual realities.
              </p>
              <p className="text-stone-600 dark:text-stone-400 font-sans leading-relaxed text-sm sm:text-base">
                Our design signature blends rich Indian traditions with contemporary elegance. From bespoke setups at heritage palace grounds to magical floral installations, our team meticulously handles every detail to ensure you can celebrate stress-free.
              </p>
            </motion.div>

            {/* Vision and Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-5 rounded-xl border border-stone-200/60 dark:border-zinc-800 bg-white/50 dark:bg-white/5 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FaAward className="text-gold-500 text-lg" />
                  <h4 className="font-serif text-lg font-bold text-brand-green-950 dark:text-stone-200">Our Mission</h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                  To craft personalized environments that capture our clients’ personalities and orchestrate flawless execution.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-5 rounded-xl border border-stone-200/60 dark:border-zinc-800 bg-white/50 dark:bg-white/5 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FaCrown className="text-gold-500 text-lg" />
                  <h4 className="font-serif text-lg font-bold text-brand-green-950 dark:text-stone-200">Our Vision</h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                  To be recognized as Gujarat’s most trusted luxury event planning boutique, setting standards in design innovation.
                </p>
              </motion.div>
            </div>

            {/* Stats Section with animated counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-stone-200 dark:border-zinc-800">
              <div className="text-center sm:text-left flex flex-col">
                <Counter endValue={500} suffix="+" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-stone-500 dark:text-stone-400 mt-2">
                  Events Managed
                </span>
              </div>
              <div className="text-center sm:text-left flex flex-col">
                <Counter endValue={450} suffix="+" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-stone-500 dark:text-stone-400 mt-2">
                  Happy Clients
                </span>
              </div>
              <div className="text-center sm:text-left flex flex-col">
                <Counter endValue={800} suffix="+" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-stone-500 dark:text-stone-400 mt-2">
                  Decorations
                </span>
              </div>
              <div className="text-center sm:text-left flex flex-col">
                <Counter endValue={5} suffix="+" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-stone-500 dark:text-stone-400 mt-2">
                  Years Exp.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
