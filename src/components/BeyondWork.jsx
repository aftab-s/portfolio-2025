import { useState } from "react";
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
import TeamCarousel from "./TeamCarousel";

const photos = [
  { id: "1", name: "", role: "", image: beyondWork1 },
  { id: "2", name: "", role: "", image: beyondWork2 },
  { id: "3", name: "", role: "", image: beyondWork3 },
  { id: "4", name: "", role: "", image: beyondWork4 },
  { id: "5", name: "", role: "", image: beyondWork5 },
  { id: "6", name: "", role: "", image: beyondWork6 },
  { id: "7", name: "", role: "", image: beyondWork7 },
];

const BeyondWork = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (member, index) => {
    setCurrentIndex(index);
    setSelectedPhoto(member);
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

  return (
    <section id="beyond-work" className="py-12 lg:py-16 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(172, 106, 255, 0.5) 0%, transparent 70%)`
      }} />
      
      <div className="relative z-10">
        {/* Header - Positioned above carousel */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-8">
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

        {/* Team Carousel */}
        <TeamCarousel
          members={photos}
          title=""
          titleColor="#AC6AFF"
          cardWidth={320}
          cardHeight={420}
          cardRadius={16}
          showArrows={true}
          showDots={true}
          keyboardNavigation={true}
          touchNavigation={true}
          animationDuration={600}
          autoPlay={0}
          pauseOnHover={true}
          visibleCards={2}
          sideCardScale={0.85}
          sideCardOpacity={0.6}
          grayscaleEffect={true}
          infoPosition="none"
          infoTextColor="#AC6AFF"
          onCardClick={openLightbox}
          className="py-8"
        />
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
                src={selectedPhoto.image}
                alt={`Photo ${selectedPhoto.id}`}
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
                  <img src={photo.image} alt="" className="w-full h-full object-cover" />
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
