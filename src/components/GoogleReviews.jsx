import { motion } from 'framer-motion';
import { FaStar, FaGoogle } from 'react-icons/fa';
import { googleReviews } from '../data/reviews';
import { SOCIAL_LINKS } from '../config/contact';

export default function GoogleReviews() {
  return (
    <section id="reviews" className="py-24 bg-stone-100 dark:bg-zinc-900/60 transition-colors duration-300 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-500 uppercase block mb-3">
            Client Love
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-green-950 dark:text-stone-100 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-5" />
          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="h-5 w-5 text-gold-500" />
            ))}
            <span className="ml-2 text-sm text-stone-600 dark:text-stone-400 font-sans">5.0 on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {googleReviews.map((review, i) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glass-card shadow-md flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <FaStar key={j} className="h-3.5 w-3.5 text-gold-500" />
                ))}
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex-1 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-4 pt-4 border-t border-stone-200/50 dark:border-zinc-800">
                <p className="font-semibold text-stone-900 dark:text-stone-100 text-sm">{review.name}</p>
                <p className="text-xs text-gold-600 dark:text-gold-400">{review.event} · {review.date}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="text-center">
          <a
            href={SOCIAL_LINKS.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 text-[#4285F4] font-semibold text-sm hover:shadow-lg transition-shadow"
          >
            <FaGoogle className="h-4 w-4" />
            Read &amp; Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}
