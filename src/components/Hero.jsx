import { motion } from "framer-motion";
import { socials } from "../constants";

const Hero = () => {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden pt-20 pb-12 lg:pt-0 lg:pb-0">
      {/* Futuristic background */}
      <div className="absolute inset-0">
        {/* Dot matrix */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle, rgba(172, 106, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
        
        {/* Horizontal scan lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(172, 106, 255, 0.1) 2px, rgba(172, 106, 255, 0.1) 4px)`,
        }} />
      </div>
      
      {/* Gradient blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-32 w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] bg-color-1 rounded-full blur-[150px] lg:blur-[200px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 -right-32 w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] bg-color-5 rounded-full blur-[150px] lg:blur-[180px]" 
      />
      
      <div className="container relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
          >
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-color-1" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase text-color-1">// Hello World</span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-color-1" />
          </motion.div>
          
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-4 sm:mb-6"
          >
            <span className="text-n-1">I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 via-color-5 to-color-1">Aftab</span>
          </motion.h1>
          
          {/* Role with animated underline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-10"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-n-3 font-light mb-4 px-4 sm:px-0">
              Crafting Experiences, I Aspire to Embrace.
            </p>
            <div className="flex justify-center">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "150px" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 rounded-full bg-gradient-to-r from-color-1 via-color-5 to-color-1 sm:w-[200px]"
              />
            </div>
          </motion.div>
          
          {/* Tags with futuristic styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2 sm:px-0"
          >
            {["Cloud", "DevOps", "Security", "Design", "Community"].map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm border border-n-6/50 rounded-full bg-n-8/50 backdrop-blur-sm hover:border-color-1/50 transition-all duration-300"
              >
                <span className="relative z-10 text-n-3 group-hover:text-color-1 transition-colors">{tag}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-color-1/10 to-color-5/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.span>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16"
          >
            <a
              href="#about-me"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-full w-full sm:w-auto max-w-[280px]"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-color-1 via-color-5 to-color-1 rounded-full" />
              <div className="absolute inset-px bg-n-8 rounded-full group-hover:bg-transparent transition-colors duration-300" />
              <span className="relative z-10 text-sm font-medium text-n-1 group-hover:text-white transition-colors flex items-center justify-center gap-2">
                Learn More About Me
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="group px-6 sm:px-8 py-3 sm:py-4 border border-n-6/50 rounded-full text-sm font-medium text-n-1 bg-n-8/50 backdrop-blur-sm hover:border-color-1/50 hover:bg-n-7/50 transition-all duration-300 w-full sm:w-auto max-w-[280px] flex items-center justify-center gap-2"
            >
              Get in Touch
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-3 sm:gap-4"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-color-1/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon container */}
                <div className="relative w-full h-full rounded-xl bg-n-8 border border-n-6/50 flex items-center justify-center group-hover:border-color-1/50 transition-all duration-300">
                  <img
                    src={social.iconUrl}
                    alt={social.title}
                    className="w-4 h-4 sm:w-5 sm:h-5 opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] sm:text-xs font-mono text-n-4 tracking-wider">SCROLL</span>
          <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-color-1 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
