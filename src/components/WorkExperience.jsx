import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workExperiences } from "../constants";

const WorkExperience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExp = workExperiences[activeIndex];

  return (
    <section id="work" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(rgba(172, 106, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(172, 106, 255, 0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-color-1 rounded-full blur-[200px]" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-color-5 rounded-full blur-[180px]" 
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-color-1">// Experience</span>
            <div className="h-px w-16 bg-gradient-to-r from-color-1 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-n-1 mb-4"
          >
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Timeline</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-n-3 max-w-xl"
          >
            From intern to engineer - a journey of continuous learning and growth in the Cloud-Native ecosystem.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-6 lg:gap-8">
          
          {/* Left - Role Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {workExperiences.map((exp, index) => (
              <motion.button
                key={exp.id}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-color-1/10 to-color-5/10 border-color-1/40'
                    : 'bg-n-8/60 border-n-6/40 hover:border-n-5/60'
                }`}
              >
                {/* Company Logo */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-br from-color-1/20 to-color-5/20 border border-color-1/30'
                    : 'bg-n-7 border border-n-6/50'
                }`}>
                  <img src={exp.icon} alt={exp.name} className="w-7 h-7 object-contain" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-semibold truncate transition-colors ${
                    activeIndex === index ? 'text-n-1' : 'text-n-3'
                  }`}>
                    {exp.name}
                  </h3>
                  <p className={`text-xs truncate transition-colors ${
                    activeIndex === index ? 'text-color-1' : 'text-n-5'
                  }`}>
                    {exp.pos}
                  </p>
                </div>

                {/* Active Indicator */}
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-color-1 shadow-lg shadow-color-1/50'
                    : 'bg-n-6'
                }`} />
              </motion.button>
            ))}
            
            {/* Timeline indicator */}
            <div className="hidden lg:flex items-center gap-3 pt-4 pl-4">
              <div className="flex gap-1">
                {workExperiences.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i <= activeIndex ? 'w-6 bg-gradient-to-r from-color-1 to-color-5' : 'w-3 bg-n-6'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-mono text-n-5">
                {activeIndex + 1}/{workExperiences.length}
              </span>
            </div>
          </motion.div>

          {/* Right - Detail Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-full min-h-[400px] bg-n-8/60 border border-n-6/40 rounded-2xl overflow-hidden">
              {/* Corner Decorations */}
              <svg className="absolute top-0 left-0 w-20 h-20 text-color-1/20" viewBox="0 0 80 80">
                <path d="M0 20 L0 0 L20 0" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-20 h-20 text-color-5/20 rotate-180" viewBox="0 0 80 80">
                <path d="M0 20 L0 0 L20 0" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>

              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color-1 via-color-5 to-color-1" />

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full p-8 lg:p-10 flex flex-col"
                >
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <motion.span 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          className="inline-block text-xs font-mono px-3 py-1.5 bg-color-1/10 text-color-1 rounded-full border border-color-1/20 mb-4"
                        >
                          {activeExp.date}
                        </motion.span>
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          className="text-2xl lg:text-3xl font-semibold text-n-1 mb-2"
                        >
                          {activeExp.name}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5 font-medium"
                        >
                          {activeExp.pos}
                        </motion.p>
                      </div>
                      
                      {/* Large Logo */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, type: "spring" }}
                        className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-n-7 border border-n-6/50 flex items-center justify-center flex-shrink-0"
                      >
                        <img src={activeExp.icon} alt={activeExp.name} className="w-12 h-12 lg:w-14 lg:h-14 object-contain" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="flex-1"
                  >
                    <p className="text-n-3 text-lg leading-relaxed">
                      {activeExp.title}
                    </p>
                  </motion.div>

                  {/* Bottom Decorative Elements */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 pt-6 border-t border-n-6/30 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-color-4 animate-pulse" />
                      <span className="text-xs text-n-4 font-mono">
                        {activeIndex === 0 ? 'Current Role' : 'Past Experience'}
                      </span>
                    </div>
                    
                    {/* Navigation Arrows */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
                        disabled={activeIndex === 0}
                        className="w-10 h-10 rounded-lg bg-n-7 border border-n-6/50 flex items-center justify-center text-n-4 hover:text-n-1 hover:border-color-1/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setActiveIndex(prev => Math.min(workExperiences.length - 1, prev + 1))}
                        disabled={activeIndex === workExperiences.length - 1}
                        className="w-10 h-10 rounded-lg bg-n-7 border border-n-6/50 flex items-center justify-center text-n-4 hover:text-n-1 hover:border-color-1/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>

                  {/* Background Number */}
                  <div className="absolute bottom-6 right-8 text-[120px] lg:text-[160px] font-bold text-n-7/20 select-none leading-none pointer-events-none">
                    {String(activeIndex + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
