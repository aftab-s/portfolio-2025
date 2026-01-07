import { motion } from "framer-motion";
import RaysBackground from "./RaysBackground";
import AuroraTextEffect from "./AuroraTextEffect";
import { useState, useEffect } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "portfolio.init()";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden pt-28 pb-12 lg:pt-16 lg:pb-16">
      {/* Rays Background */}
      <RaysBackground
        theme="dark"
        animated={true}
        animationSpeed={1}
        opacity={0.7}
        colors={{
          purple: '#AC6AFF',
          yellow: '#FFC876',
          pink: '#FF98E2',
          teal: '#7ADB78',
          blue: '#858DFF',
        }}
        blurAmount={6}
      />
      
      <div className="container relative z-10 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Terminal-style greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
            >
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase text-color-1">// Hello World</span>
              <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-color-1" />
            </motion.div>
            
            {/* Name with Aurora Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 sm:mb-6"
            >
              <h1 className="flex items-baseline gap-2 sm:gap-3 justify-center lg:justify-start text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold">
                <span className="text-n-1">I'm</span>
                <AuroraTextEffect
                  text="Aftab"
                  fontSize="inherit"
                  colors={{
                    first: "#AC6AFF",
                    second: "#FFC876",
                    third: "#858DFF",
                    fourth: "#FF98E2",
                  }}
                  animationSpeed={6}
                />
              </h1>
            </motion.div>
            
            {/* Role with animated underline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 sm:mb-10"
            >
              <p className="text-base sm:text-lg md:text-xl text-n-3 font-light mb-4">
                Crafting Experiences, I Aspire to Embrace.
              </p>
              <div className="flex justify-center lg:justify-start">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "150px" }}
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
              className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-8 sm:mb-10"
            >
              {["Cloud", "DevOps", "Security", "Design", "Community"].map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group relative px-3 sm:px-4 py-2 text-xs sm:text-sm border border-n-6/50 rounded-full bg-n-8/50 backdrop-blur-sm hover:border-color-1/50 transition-all duration-300"
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
              className="hidden md:flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 mb-8"
            >
              <a
                href="#about-me"
                className="group inline-flex items-center gap-3 px-5 py-3 bg-n-8/60 border border-n-6/50 rounded-xl hover:border-color-1/40 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <span className="text-sm text-n-1 font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-color-1 group-hover:to-color-5 transition-all">
                  Learn More
                </span>
                <svg 
                  className="w-4 h-4 text-n-4 group-hover:text-color-1 group-hover:translate-y-1 transition-all" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              
            </motion.div>
          </div>

          {/* Right Column - Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Terminal Container */}
            <div className="relative rounded-lg overflow-hidden border border-n-6/50 bg-n-8/80 backdrop-blur-md shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-n-7/90 border-b border-n-6/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-color-3" />
                    <div className="w-3 h-3 rounded-full bg-color-2" />
                    <div className="w-3 h-3 rounded-full bg-color-4" />
                  </div>
                  <span className="text-xs font-mono text-n-3 ml-2">~/aftab</span>
                </div>
                <div className="text-xs font-mono text-n-4">bash</div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-3 min-h-[400px] lg:min-h-[450px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-color-4">$</span>
                  <span className="text-n-2 ml-2">{typedText}</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-color-1"
                  >
                    |
                  </motion.span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="space-y-2 text-n-3"
                >
                  <div className="text-color-1">// Initializing portfolio...</div>
                  <div className="text-color-4">✓</div>
                  <div className="pl-4">
                    <div className="text-n-2">Name: <span className="text-color-1">Aftab S</span></div>
                    <div className="text-n-2">Role: <span className="text-color-5">DevOps Engineer</span></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                  className="space-y-2 pt-2"
                >
                  <div className="text-color-1">// Interests:</div>
                  <div className="pl-4 space-y-1 text-n-3">
                    <div><span className="text-color-4">▸</span> Cloud & Infrastructure</div>
                    <div><span className="text-color-4">▸</span> Container Orchestration</div>
                    <div><span className="text-color-4">▸</span> Observability</div>
                    <div><span className="text-color-4">▸</span> Community Building & OSS</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.9 }}
                  className="pt-2"
                >
                  <div className="text-color-4">
                    ✓ Portfolio ready!
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 }}
                  className="pt-2"
                >
                  <span className="text-color-4">$</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: 3.5 }}
                    className="text-color-1 ml-2"
                  >
                    |
                  </motion.span>
                </motion.div>
              </div>
            </div>

            {/* Glow effect behind terminal */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-color-1/10 via-color-5/10 to-color-6/10 blur-3xl rounded-lg" />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator - Hidden on mobile, centered below grid on desktop */}
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
