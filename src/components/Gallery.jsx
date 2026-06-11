import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../data/gallery';
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus, FaPlay } from 'react-icons/fa';
import SafeImage from './SafeImage';

function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?autoplay=1`;
  }
  return null;
}

const categories = ['All', 'Birthday', 'Baby Shower', 'Weddings', 'Corporate', 'Haldi', 'Other/Decoration'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);

  // Derive filtered items during render to satisfy React 19 rules and optimize hook dependencies
  const filteredItems = useMemo(() => {
    return filter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;
  const ytEmbedUrl = currentItem ? getYouTubeEmbedUrl(currentItem.video) : null;
  const isVideo = currentItem && !!currentItem.video;

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  // Handle keypresses for lightbox navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-24 bg-stone-100 dark:bg-zinc-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-500 uppercase block mb-3">
            Our Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-green-950 dark:text-stone-100 tracking-tight">
            Moments of Perfection
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-5" />
          <p className="mt-6 text-stone-600 dark:text-stone-400 font-sans max-w-xl mx-auto text-sm sm:text-base">
            Browse through our portfolio of custom designs, stages, and execution styles. Toggle categories to filter.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setLightboxIndex(null); // Reset lightbox when filter changes
                setVisibleCount(12); // Reset visible count on filter click
              }}
              className={`px-4 sm:px-6 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-gold-600 text-zinc-950 shadow-md scale-105'
                  : 'bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Staggered Masonry-style Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => {
              const fullIndex = filteredItems.findIndex((fi) => fi.id === item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxIndex(fullIndex)}
                  className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-md bg-stone-200 dark:bg-zinc-800 break-inside-avoid border border-stone-200/50 dark:border-zinc-800/85"
                >
                {/* Photo */}
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto max-h-[420px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Play icon overlay for videos */}
                {item.video && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-all duration-300">
                    <div className="p-3.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transform transition-all duration-500 group-hover:scale-110 shadow-lg flex items-center justify-center">
                      <FaPlay className="h-4 w-4 ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Caption: visible on touch / no-hover devices; hover reveal on mouse desktops */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 bg-gradient-to-t from-zinc-950/95 via-zinc-900/60 to-transparent opacity-100 transition-all duration-300 pointer-events-none [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:via-zinc-900/45 [@media(hover:hover)]:to-transparent [@media(hover:hover)]:group-hover:opacity-100">
                  <div className="translate-y-0 transition-transform duration-300 [@media(hover:hover)]:translate-y-4 [@media(hover:hover)]:group-hover:translate-y-0">
                    <div className="flex items-center gap-2 text-gold-400 text-[10px] tracking-widest font-semibold uppercase mb-1">
                      <span>{item.category}</span>
                      <span className="hidden [@media(hover:hover)]:inline">•</span>
                      <FaSearchPlus className="h-2.5 w-2.5 hidden [@media(hover:hover)]:block" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-[11px] sm:text-xs font-sans leading-snug line-clamp-3">
                      {item.description}
                    </p>
                    <p className="mt-2 text-[10px] text-gold-400/90 font-sans [@media(hover:hover)]:hidden">
                      Tap to view full size
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {filteredItems.length > visibleCount && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-8 py-3.5 rounded-xl border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-zinc-950 dark:hover:text-zinc-950 font-semibold tracking-wider font-sans text-sm sm:text-base transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg hover:shadow-gold-500/20"
            >
              Show More
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md select-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 z-55 p-3 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <FaTimes className="h-6 w-6" />
              </button>

              {/* Navigation — larger touch targets on mobile */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 bottom-24 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-55 p-4 sm:p-3 rounded-full text-white/90 hover:text-white bg-white/10 hover:bg-white/20 transition-colors duration-200 cursor-pointer"
                aria-label="Previous Image"
              >
                <FaChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 bottom-24 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-55 p-4 sm:p-3 rounded-full text-white/90 hover:text-white bg-white/10 hover:bg-white/20 transition-colors duration-200 cursor-pointer"
                aria-label="Next Image"
              >
                <FaChevronRight className="h-6 w-6" />
              </button>

              {/* Image and Meta Panel */}
              <div className="max-w-5xl w-full px-4 flex flex-col items-center">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-h-[70vh] flex justify-center"
                >
                  {isVideo ? (
                    ytEmbedUrl ? (
                      <div className="w-[85vw] sm:w-[70vw] md:w-[60vw] max-w-[800px] aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black">
                        <iframe
                          src={ytEmbedUrl}
                          title={currentItem.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <video
                        src={currentItem.video}
                        controls
                        autoPlay
                        playsInline
                        className="max-h-[70vh] max-w-full rounded-lg object-contain shadow-2xl border border-white/10 bg-black"
                      />
                    )
                  ) : (
                    <SafeImage
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="max-h-[70vh] max-w-full rounded-lg object-contain shadow-2xl border border-white/10"
                    />
                  )}
                </motion.div>

                {/* Meta Description Panel */}
                <motion.div
                  key={`meta-${lightboxIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-6 text-center max-w-xl"
                >
                  <span className="text-[10px] tracking-[0.25em] font-semibold text-gold-400 uppercase font-sans">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm font-sans mt-2 leading-relaxed">
                    {filteredItems[lightboxIndex].description}
                  </p>
                  
                  {/* Current Position Tag */}
                  <span className="inline-block mt-4 px-3 py-0.5 text-[10px] rounded-full bg-white/10 text-white/60 font-mono font-medium">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
