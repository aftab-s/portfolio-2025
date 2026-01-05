import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { roadmap } from "../constants";

const Roadmap = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
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
      const scrollAmount = direction === 'left' ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = 350;
      const gap = 16;
      carouselRef.current.scrollTo({ 
        left: index * (cardWidth + gap), 
        behavior: 'smooth' 
      });
      setActiveIndex(index);
    }
  };

  return (
    <section id="projects" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, rgba(172, 106, 255, 0.4) 0%, transparent 50%),
                          radial-gradient(circle at 70% 50%, rgba(133, 141, 255, 0.3) 0%, transparent 50%)`
      }} />
      
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
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-color-1">// Projects</span>
              <div className="h-px w-16 bg-gradient-to-r from-color-1 to-transparent" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-n-1"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Work</span>
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
              {roadmap.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
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
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={() => {
              if (carouselRef.current) {
                const scrollPos = carouselRef.current.scrollLeft;
                const cardWidth = 350 + 16;
                setActiveIndex(Math.round(scrollPos / cardWidth));
              }
            }}
          >
            {roadmap.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex-shrink-0 w-[320px] sm:w-[350px]"
              >
                <div className="relative h-full bg-n-8/70 border border-n-6/40 rounded-2xl overflow-hidden hover:border-color-1/40 transition-all duration-300">
                  {/* Gradient Accent Top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color-1 to-color-5 opacity-60" />
                  
                  {/* Image Section */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-n-8/60 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-sm text-[10px] font-mono ${
                        project.status === 'done' 
                          ? 'bg-color-4/20 border border-color-4/30 text-color-4' 
                          : 'bg-color-1/20 border border-color-1/30 text-color-1'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          project.status === 'done' ? 'bg-color-4' : 'bg-color-1 animate-pulse'
                        }`} />
                        {project.status === 'done' ? 'Completed' : 'In Progress'}
                      </div>
                    </div>

                    {/* Project Number */}
                    <div className="absolute top-3 right-3 text-2xl font-bold text-white/10 font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5">
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-3 bg-gradient-to-b from-color-1 to-color-5 rounded-full" />
                      <span className="text-[10px] font-mono text-color-1 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-n-1 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-color-1 group-hover:to-color-5 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-n-4 mb-3">{project.subtitle}</p>

                    {/* Description */}
                    <p className="text-xs text-n-4 leading-relaxed line-clamp-2 mb-4">
                      {project.text}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech?.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-[10px] bg-n-7/80 border border-n-6/50 rounded-md text-n-3"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* GitHub Link */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-n-4 hover:text-color-1 transition-colors group/link"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="group-hover/link:underline">View on GitHub</span>
                      <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <a
            href="https://github.com/aftab-s"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-5 py-3 bg-n-8/60 border border-n-6/50 rounded-xl hover:border-color-1/40 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-n-3 group-hover:text-color-1 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-sm text-n-1 font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-color-1 group-hover:to-color-5 transition-all">
              Explore More Projects
            </span>
            <svg 
              className="w-4 h-4 text-n-4 group-hover:text-color-1 group-hover:translate-x-1 transition-all" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Roadmap;
