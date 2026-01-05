import { useState, useRef, useEffect } from "react";
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

// Duplicate photos for infinite scroll
const infinitePhotos = [...photos, ...photos, ...photos];

const BeyondWork = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 50);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 50);
    }
  };

  useEffect(() => {
    checkScrollability();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollability);
      return () => carousel.removeEventListener('scroll', checkScrollability);
    }
  }, []);

  // Handle infinite scroll reset
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleInfiniteScroll = () => {
      const cardWidth = 208 + 12; // w-52 + gap
      const totalWidth = infinitePhotos.length * cardWidth;
      const sectionWidth = photos.length * cardWidth;

      if (carousel.scrollLeft > sectionWidth * 1.5) {
        carousel.scrollLeft = carousel.scrollLeft - sectionWidth;
      } else if (carousel.scrollLeft < sectionWidth * 0.5) {
        carousel.scrollLeft = carousel.scrollLeft + sectionWidth;
      }
    };

    const scrollListener = () => {
      handleInfiniteScroll();
      checkScrollability();
    };

    carousel.addEventListener('scroll', scrollListener);
    return () => carousel.removeEventListener('scroll', scrollListener);
  }, []);

  const openLightbox = (index) => {
    const actualIndex = index % photos.length;
    setCurrentIndex(actualIndex);
    setSelectedPhoto(photos[actualIndex]);
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
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;
      if (e.key === 'ArrowRight') nextPhoto(e);
      if (e.key === 'ArrowLeft') prevPhoto(e);
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, currentIndex]);

  return (
    <section id="beyond-work" className="py-12 lg:py-16 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(172, 106, 255, 0.5) 0%, transparent 70%)`
      }} />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header - Matching Other Sections */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
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

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="text-xs text-n-4 font-mono mr-3 hidden sm:block">{photos.length} photos</span>
            <button
              onClick={() => scroll('left')}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${
                canScrollLeft
                  ? 'bg-n-8/60 border-n-6/50 hover:border-color-1/40 text-n-3 hover:text-color-1'
                  : 'bg-n-8/30 border-n-7 text-n-6 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${
                canScrollRight
                  ? 'bg-n-8/60 border-n-6/50 hover:border-color-1/40 text-n-3 hover:text-color-1'
                  : 'bg-n-8/30 border-n-7 text-n-6 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Photo Strip */}
        <div className="relative">
          {/* Edge Fades */}
          <div className={`absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-n-8 via-n-8/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
          <div className={`absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-n-8 via-n-8/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Scrollable Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            ref={carouselRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide py-2 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infinitePhotos.map((photo, index) => (
              <motion.button
                key={`${photo.id}-${index}`}
                onClick={() => openLightbox(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % photos.length) * 0.05, duration: 0.3 }}
                className="group relative flex-shrink-0"
              >
                <motion.div 
                  animate={{ 
                    scale: hoveredIndex === index ? 1.02 : 1,
                    y: hoveredIndex === index ? -4 : 0
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="relative w-36 sm:w-44 md:w-52 aspect-[4/5] rounded-xl overflow-hidden bg-n-7"
                >
                  {/* Image */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-n-8/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Border Glow on Hover */}
                  <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-color-1/40 transition-all duration-300" />
                  
                  {/* Photo Number - Subtle */}
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <span className="text-[10px] font-mono text-white/70 bg-n-8/60 backdrop-blur-sm px-1.5 py-0.5 rounded">
                      {String((index % photos.length) + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Expand Hint */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <div className="w-6 h-6 rounded-full bg-n-8/60 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-3 h-3 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Minimal Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-4"
        >
          <div className="flex items-center gap-1">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (carouselRef.current) {
                    const cardWidth = 208 + 12; // w-52 + gap
                    const photoWidth = photos.length * cardWidth;
                    carouselRef.current.scrollTo({ left: photoWidth + (index * cardWidth), behavior: 'smooth' });
                  }
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'w-6 bg-color-1' 
                    : 'w-1.5 bg-n-6 hover:bg-n-5'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox - Smooth & Elegant */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-n-8/98 backdrop-blur-2xl flex items-center justify-center"
          >
            {/* Close */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Navigation */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              onClick={prevPhoto}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              onClick={nextPhoto}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Image */}
            <motion.div
              key={selectedPhoto.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[90vw] max-h-[85vh] mx-12"
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[85vh] w-auto object-contain rounded-lg"
              />
            </motion.div>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2"
            >
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="text-sm font-mono text-white/50">{String(currentIndex + 1).padStart(2, '0')}</span>
                <div className="w-8 h-px bg-white/20" />
                <span className="text-sm font-mono text-white/30">{String(photos.length).padStart(2, '0')}</span>
              </div>
            </motion.div>

            {/* Thumbnail Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 hidden md:flex gap-2"
            >
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                    setSelectedPhoto(photos[index]);
                  }}
                  className={`w-12 h-12 rounded-lg overflow-hidden transition-all duration-200 ${
                    currentIndex === index 
                      ? 'ring-2 ring-color-1 ring-offset-2 ring-offset-n-8 scale-110' 
                      : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <img src={photo.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BeyondWork;
