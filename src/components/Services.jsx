import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import beyondWork from "../assets/services/beyondWork/beyond-work.png";
import gcLogo from "../assets/services/beyondWork/gc-logo.webp";
import grafanaImg from "../assets/services/beyondWork/grafana-community.svg";
import fossImg from "../assets/services/beyondWork/FOSS.png";
import cncfImg from "../assets/services/beyondWork/cncf.png";
import awsImg from "../assets/services/beyondWork/awsugkochi.png";
import devopsImg from "../assets/services/beyondWork/devopsmalayalam.png";
import { GlowingCards, GlowingCard } from "./GlowingCards";
import TeamCarousel from "./TeamCarousel";
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
  { id: "1", name: "", role: "", image: beyondWork1 },
  { id: "2", name: "", role: "", image: beyondWork2 },
  { id: "3", name: "", role: "", image: beyondWork3 },
  { id: "4", name: "", role: "", image: beyondWork4 },
  { id: "5", name: "", role: "", image: beyondWork5 },
  { id: "6", name: "", role: "", image: beyondWork6 },
  { id: "7", name: "", role: "", image: beyondWork7 },
];

const Services = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Featured achievement
  const featured = {
    title: "Grafana Champion",
    description: "Recognized for contributions to the Grafana ecosystem and community building",
    color: "from-color-2 to-color-3",
  };

  // Communities with images
  const communities = [
    { name: "Grafana and Friends Kochi", role: "Core Organizer", image: grafanaImg, bg: '#F46800' }, // Light Orange
    { name: "FOSS United", role: "Contributor", image: fossImg, bg: '#FFFFFF' }, // White
    { name: "CNCF & CNCG Kochi", role: "Community Member", image: cncfImg, bg: '#FFFFFF' }, // White
    { name: "AWS UG Kochi", role: "Community Member", image: awsImg, bg: '#071133' }, // Very dark blue
    { name: "DevOps Malayalam", role: "Speaker", image: devopsImg, bg: '#FFFFFF' }, // White
  ];

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
    <section id="beyond-work" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(172, 106, 255, 0.3) 60deg, transparent 120deg)`,
      }} />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[600px] lg:w-[800px] h-[500px] md:h-[600px] lg:h-[800px] bg-gradient-conic from-color-1/10 via-transparent to-color-5/10 rounded-full blur-[40px] opacity-50" 
      />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="mb-8 lg:mb-10">
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
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-n-1 mb-4"
          >
            Community & <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Life</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base text-n-3 max-w-2xl"
          >
            Active participant and organizer in tech communities, sharing knowledge and capturing moments through my lens.
          </motion.p>
        </div>

        {/* Communities Section - New Engaging Layout */}
        <div className="mb-16 lg:mb-20">
          {/* Featured Badge - Grafana Champion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-flex items-center gap-4 p-4 pr-8 bg-gradient-to-r from-color-2/10 to-color-3/5 border border-color-2/30 rounded-2xl">
              <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-color-2 rounded-full">
                <span className="text-[10px] font-bold text-n-8 uppercase tracking-wider">Featured</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-color-2 to-color-3 flex items-center justify-center overflow-hidden">
                <img src={gcLogo} alt="Grafana Champion" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-color-2 to-color-3">{featured.title}</h3>
                <p className="text-xs text-n-4 max-w-xs">{featured.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Main Grid - Communities + Image */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Communities - Horizontal Scroll Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-6 bg-n-8/80 border border-n-6/40 rounded-2xl">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-sm font-semibold text-n-1">Community Involvement</h3>
                  <span className="text-xs font-mono text-n-5">{communities.length} active</span>
                </div>
                
                {/* Community Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {communities.map((community, index) => (
                    <motion.div
                      key={community.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="group flex items-center gap-3 p-3 bg-n-7/50 border border-n-6/30 rounded-xl hover:border-color-1/30 transition-all duration-300"
                    >
                      <div style={{ backgroundColor: community.bg }} className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 border border-n-6/30">
                        <img src={community.image} alt={community.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-medium text-n-1 truncate">{community.name}</h4>
                        <p className="text-[10px] text-n-5">{community.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-5 pt-4 border-t border-n-6/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-color-4 animate-pulse" />
                    <span className="text-xs text-n-4">Actively Contributing</span>
                  </div>
                  <div className="flex -space-x-1">
                    {communities.slice(0, 4).map((c, i) => (
                      <div key={i} style={{ backgroundColor: c.bg }} className="w-5 h-5 rounded-full overflow-hidden border-2 border-n-8">
                        <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-full min-h-[320px] bg-n-8/60 border border-n-6/40 rounded-2xl overflow-hidden">
                <img src={beyondWork} alt="Community Event" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-n-8/60 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                      {communities.slice(0, 3).map((c, i) => (
                        <div key={i} style={{ backgroundColor: c.bg }} className="w-8 h-8 rounded-full overflow-hidden border-2 border-n-8 flex items-center justify-center">
                          <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-n-3">+{communities.length - 3} more</span>
                  </div>
                  <p className="text-sm text-n-2 leading-relaxed">
                    Organizing meetups, speaking at conferences, and building bridges in the cloud-native ecosystem.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-12 lg:mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-n-1"
          >
            Through My <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Lens</span>
          </motion.h3>

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
            className=""
          />
        </div>
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

export default Services;
