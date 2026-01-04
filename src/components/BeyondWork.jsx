import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  beyondWork1,
  beyondWork2,
  beyondWork3,
  beyondWork4,
  beyondWork5,
  beyondWork6,
  beyondWork7,
} from "../assets";

const photos = [
  { id: 1, src: beyondWork1, alt: "Beyond Work 1" },
  { id: 2, src: beyondWork2, alt: "Beyond Work 2" },
  { id: 3, src: beyondWork3, alt: "Beyond Work 3" },
  { id: 4, src: beyondWork4, alt: "Beyond Work 4" },
  { id: 5, src: beyondWork5, alt: "Beyond Work 5" },
  { id: 6, src: beyondWork6, alt: "Beyond Work 6" },
  { id: 7, src: beyondWork7, alt: "Beyond Work 7" },
];

const BeyondWork = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedPhoto(photos[index]);
  };

  const closeLightbox = () => setSelectedPhoto(null);

  const nextPhoto = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 288; // w-72 = 18rem = 288px
      const gap = 16; // gap-4 = 1rem = 16px
      const scrollAmount = cardWidth + gap;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="beyond-work" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(172, 106, 255, 0.4) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      <motion.div 
        animate={{ y: [0, 20, 0], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-color-5 rounded-full blur-[200px]" 
      />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-color-1">// Beyond Work</span>
              <div className="h-px w-16 bg-gradient-to-r from-color-1 to-transparent" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-n-1"
            >
              Through My <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Lens</span>
            </motion.h2>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-xl bg-n-8/60 border border-n-6/50 text-n-3 hover:text-n-1 hover:border-color-1/40 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-xl bg-n-8/60 border border-n-6/50 text-n-3 hover:text-n-1 hover:border-color-1/40 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-n-8 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-n-8 to-transparent z-10 pointer-events-none" />
          
          {/* Scrollable container */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 snap-x snap-mandatory scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            {photos.map((photo, index) => (
              <motion.button
                key={photo.id}
                onClick={() => openLightbox(index)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex-shrink-0 snap-start"
              >
                <div className="relative w-64 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden bg-n-8 border border-n-6/40 hover:border-color-1/40 transition-all duration-500">
                  {/* Image */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-n-8/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-n-8/80 border border-n-6/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-n-7/90 group-hover:border-color-1/30">
                    <span className="text-xs font-mono text-n-3 group-hover:text-color-1 transition-colors duration-300">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  
                  {/* Expand icon */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-n-8/80 border border-n-6/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-color-1/50 group-hover:scale-110">
                    <svg className="w-4 h-4 text-color-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence mode="wait">
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-n-8/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-n-7/50 border border-n-6/50 text-n-3 hover:text-n-1 hover:border-color-1/50 hover:scale-110 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              onClick={prevPhoto}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-n-7/50 border border-n-6/50 text-n-3 hover:text-n-1 hover:border-color-1/50 hover:scale-110 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              onClick={nextPhoto}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-n-7/50 border border-n-6/50 text-n-3 hover:text-n-1 hover:border-color-1/50 hover:scale-110 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            <motion.div
              key={selectedPhoto.id}
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: -20 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                opacity: { duration: 0.3 }
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh]"
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3"
              >
                <span className="text-sm font-mono text-n-4">{currentIndex + 1} / {photos.length}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BeyondWork;
