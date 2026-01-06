import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { certifications } from "../constants";
import { GlowingCards, GlowingCard } from "./GlowingCards";

const Benefits = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
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

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = 260;
      const gap = 16;
      carouselRef.current.scrollTo({ 
        left: index * (cardWidth + gap), 
        behavior: 'smooth' 
      });
      setActiveIndex(index);
    }
  };

  // Calculate number of visible dots (group certifications into pages of 4)
  const dotsCount = Math.ceil(certifications.length / 4);

  return (
    <section id="certifications" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(172, 106, 255, 0.1) 40px, rgba(172, 106, 255, 0.1) 41px)`
      }} />
      <motion.div 
        animate={{ y: [0, -30, 0], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-0 w-[600px] h-[300px] bg-color-1 rounded-full blur-[200px]" 
      />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-color-1">// Certifications</span>
              <div className="h-px w-16 bg-gradient-to-r from-color-1 to-transparent" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-n-1"
            >
              Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Expertise</span>
            </motion.h2>
          </div>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {/* Dot Indicators */}
            <div className="hidden sm:flex items-center gap-2 mr-4">
              {[...Array(dotsCount)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index * 4)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(activeIndex / 4) === index 
                      ? 'w-6 bg-gradient-to-r from-color-1 to-color-5' 
                      : 'bg-n-6 hover:bg-n-5'
                  }`}
                />
              ))}
            </div>
            
            {/* Arrow Buttons */}
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
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
              disabled={!canScrollRight}
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

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Gradient Fade */}
          <div className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-n-8 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Right Gradient Fade */}
          <div className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-n-8 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Scrollable Carousel */}
          <GlowingCards
            enableGlow={true}
            glowRadius={15}
            glowOpacity={0.8}
            gap="1rem"
          >
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mb-4 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={() => {
                if (carouselRef.current) {
                  const scrollPos = carouselRef.current.scrollLeft;
                  const cardWidth = 260 + 16;
                  setActiveIndex(Math.round(scrollPos / cardWidth));
                }
              }}
            >
              {certifications.map((cert, index) => (
                <GlowingCard
                  key={cert.id}
                  glowColor="#AC6AFF"
                  className="flex-shrink-0 w-[240px] sm:w-[260px]"
                >
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group block h-full"
                  >
                    <div className="relative h-full bg-n-8/70 border border-n-6/40 rounded-2xl overflow-hidden hover:border-color-1/40 transition-all duration-300">
                  {/* Gradient Accent Top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color-1 to-color-5 opacity-60" />
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-color-1/10 to-color-5/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative p-5">
                    {/* Header with Icon and Number */}
                    <div className="flex items-start justify-between mb-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-n-7 border border-n-6/50 flex items-center justify-center group-hover:border-color-1/50 transition-colors">
                        <img src={cert.iconUrl} alt={cert.title} className="w-6 h-6 object-contain" />
                      </div>
                      
                      {/* Number */}
                      <div className="text-2xl font-bold text-white/10 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-base font-semibold text-n-1 mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-color-1 group-hover:to-color-5 transition-all duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-n-4 line-clamp-2 mb-4">{cert.text}</p>
                    
                    {/* Link Indicator */}
                    <div className="flex items-center gap-2 text-xs text-n-4 group-hover:text-color-1 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="group-hover:underline">View Certificate</span>
                      <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            </GlowingCard>
          ))}
        </div>
      </GlowingCards>
        </div>

        {/* Certification Stats - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div className="inline-flex items-center gap-6 px-5 py-3 bg-n-8/60 border border-n-6/50 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-color-4 animate-pulse" />
              <span className="text-sm text-n-3">{certifications.length} Certifications</span>
            </div>
            <div className="w-px h-4 bg-n-6" />
            <span className="text-xs text-n-4 font-mono">Verified & Industry Recognized</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
