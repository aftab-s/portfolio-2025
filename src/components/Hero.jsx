import { motion } from "framer-motion";
import { socials } from "../constants";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-color-1 rounded-full blur-[200px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-color-5 rounded-full blur-[180px]" 
      />
      
      <div className="container relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-color-1" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-color-1">// Hello World</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-color-1" />
          </motion.div>
          
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-6"
          >
            <span className="text-n-1">I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 via-color-5 to-color-1">Aftab</span>
          </motion.h1>
          
          {/* Role with animated underline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-xl md:text-2xl text-n-3 font-light mb-4">
              Crafting Experiences, I Aspire to Embrace.
            </p>
            <div className="flex justify-center">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 rounded-full bg-gradient-to-r from-color-1 via-color-5 to-color-1"
              />
            </div>
          </motion.div>
          
          {/* Tags with futuristic styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {["Cloud", "DevOps", "Security", "Design", "Community"].map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative px-5 py-2.5 text-sm border border-n-6/50 rounded-full bg-n-8/50 backdrop-blur-sm hover:border-color-1/50 transition-all duration-300"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#about-me"
              className="group relative px-8 py-4 overflow-hidden rounded-full"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-color-1 via-color-5 to-color-1 rounded-full" />
              <div className="absolute inset-px bg-n-8 rounded-full group-hover:bg-transparent transition-colors duration-300" />
              <span className="relative z-10 text-sm font-medium text-n-1 group-hover:text-white transition-colors">
                Learn More About Me
              </span>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 border border-n-6/50 rounded-full text-sm font-medium text-n-1 bg-n-8/50 backdrop-blur-sm hover:border-color-1/50 hover:bg-n-7/50 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
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
                className="group relative w-12 h-12 flex items-center justify-center"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-color-1/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon container */}
                <div className="relative w-full h-full rounded-xl bg-n-8 border border-n-6/50 flex items-center justify-center group-hover:border-color-1/50 transition-all duration-300">
                  <img
                    src={social.iconUrl}
                    alt={social.title}
                    className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-n-4 tracking-wider">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-color-1 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
