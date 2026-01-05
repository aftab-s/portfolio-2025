import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import logo from "../assets/AM-logo.png";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Clear active section when at the very top
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }
      
      // Track active section
      const sections = navigation.filter(item => !item.url.startsWith("http"));
      const currentSection = sections.find(item => {
        const element = document.querySelector(item.url);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.url);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || openNavigation ? "py-2" : "py-3"
      }`}
    >
      {/* Main navbar container with enhanced glassmorphism */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
            scrolled || openNavigation
              ? "bg-n-8/30 backdrop-blur-xl shadow-2xl shadow-n-8/20 border border-n-6/20"
              : "bg-n-8/30 backdrop-blur-xl border border-n-6/10"
          }`}
        >
          {/* Animated gradient border glow */}
          <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
            scrolled || openNavigation ? "opacity-100" : "opacity-0"
          }`}>
            <div className="absolute inset-0 bg-gradient-to-r from-color-1/20 via-color-5/20 to-color-1/20 blur-xl" />
          </div>
          
          {/* Top gradient line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-color-1/30 to-transparent" />
          
          {/* Bottom gradient line */}
          <div className={`absolute inset-x-0 bottom-0 h-px transition-opacity duration-500 ${
            scrolled || openNavigation 
              ? "opacity-100 bg-gradient-to-r from-transparent via-color-5/30 to-transparent" 
              : "opacity-0"
          }`} />
          
          <div className="relative flex items-center justify-between h-16 lg:h-18 px-6">
            {/* Logo with enhanced styling */}
            <motion.a
              href="#hero"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 flex items-center group"
            >
              <div className="relative">
                <img 
                  src={logo} 
                  alt="AM Logo" 
                  className="h-9 w-auto transition-all duration-500 group-hover:scale-110 relative z-10 brightness-110" 
                />
                {/* Multi-layer glow effect */}
                <div className="absolute inset-0 -m-3 bg-gradient-to-r from-color-1/30 via-color-5/30 to-color-6/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 -m-1.5 bg-gradient-to-br from-color-1/20 to-color-5/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75" />
              </div>
            </motion.a>

            {/* Desktop Navigation with enhanced glassmorphism */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navigation.map((item, index) => {
                const isActive = activeSection === item.url;
                const isExternal = item.url.startsWith("http");
                
                return (
                  <motion.a
                    key={item.id}
                    href={item.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="relative group"
                  >
                    <div className={`relative px-5 py-2.5 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'text-color-1 bg-color-1/10 backdrop-blur-sm' 
                        : 'text-n-3 hover:text-n-1'
                    }`}>
                      {/* Glassmorphic background on hover */}
                      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-br from-color-1/10 via-color-5/5 to-transparent border border-color-1/30 opacity-100' 
                          : 'bg-n-7/30 backdrop-blur-md border border-n-6/30 opacity-0 group-hover:opacity-100'
                      }`} />
                      
                      {/* Active indicator with smooth transition */}
                      {isActive && (
                        <motion.div
                          layoutId="navActiveSection"
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: 'linear-gradient(135deg, rgba(172, 106, 255, 0.15), rgba(133, 141, 255, 0.1))',
                          }}
                          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                        />
                      )}
                      
                      <span className="relative z-10 text-[13px] font-medium font-mono tracking-wider uppercase">
                        {item.title}
                      </span>
                      
                      {/* Animated underline */}
                      <motion.div 
                        className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-color-1 via-color-5 to-color-1 transition-all duration-300 ${
                          isActive ? 'w-1/2 opacity-100' : 'w-0 opacity-0 group-hover:w-1/3 group-hover:opacity-70'
                        }`}
                      />
                    </div>
                  </motion.a>
                );
              })}
            </nav>

            {/* Desktop CTA button - consistent style */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:inline-flex group items-center gap-3 px-5 py-3 bg-n-8/60 border border-n-6/50 rounded-xl hover:border-color-1/40 transition-all duration-300"
            >
              <span className="text-sm text-n-1 font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-color-1 group-hover:to-color-5 transition-all font-mono tracking-wide">
                GET IN TOUCH
              </span>
              <svg 
                className="w-4 h-4 text-n-4 group-hover:text-color-1 group-hover:translate-x-1 transition-all" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            {/* Mobile Menu Button with glassmorphic design */}
            <button
              className="lg:hidden relative z-10 p-3 flex items-center justify-center rounded-xl border border-n-6/40 bg-n-8/60 backdrop-blur-xl hover:border-color-1/50 hover:bg-n-8/80 transition-all duration-300 group"
              onClick={toggleNavigation}
              aria-label="Toggle navigation"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-color-1/10 to-color-5/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-n-1 rounded-full transition-all duration-300 origin-center ${
                    openNavigation ? "rotate-45 translate-y-[9px] bg-color-1" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-n-1 rounded-full transition-all duration-300 ${
                    openNavigation ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-n-1 rounded-full transition-all duration-300 origin-center ${
                    openNavigation ? "-rotate-45 -translate-y-[9px] bg-color-5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation with premium glassmorphic design */}
      <AnimatePresence>
        {openNavigation && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 top-20 z-40"
          >
            {/* Glassmorphic backdrop */}
            <div className="absolute inset-0 bg-gradient-to-b from-n-8/95 via-n-8/98 to-n-8/95 backdrop-blur-3xl" />
            
            {/* Decorative gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-color-1/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-color-5/5 via-transparent to-transparent" />
            
            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              <motion.div
                animate={{ 
                  backgroundPosition: ['0% 0%', '50% 50%', '100% 100%', '50% 50%', '0% 0%']
                }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(172, 106, 255, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(133, 141, 255, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '32px 32px'
                }} 
              />
            </div>
            
            {/* Top border */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-color-1/40 to-transparent" />
            
            {/* Navigation content */}
            <nav className="container mx-auto px-6 md:px-12 lg:px-20 py-8 flex flex-col gap-3 relative z-10 h-full overflow-y-auto">
              {/* Menu header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-2"
              >
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-gradient-to-r from-color-1 via-color-5 to-transparent" />
                  <span className="text-xs font-mono tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Navigation</span>
                </div>
              </motion.div>

              {/* Navigation items with enhanced glassmorphism */}
              {navigation.map((item, index) => {
                const isExternal = item.url.startsWith("http");
                
                return (
                  <motion.a
                    key={item.id}
                    href={item.url}
                    onClick={handleClick}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.06, type: "spring", stiffness: 100 }}
                    className="group relative"
                  >
                    <div className="relative p-5 rounded-2xl border border-n-6/30 bg-n-8/60 backdrop-blur-xl hover:border-color-1/40 hover:bg-n-8/80 transition-all duration-500 overflow-hidden">
                      {/* Animated gradient background on hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-color-1/10 via-color-5/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        whileHover={{
                          background: [
                            'linear-gradient(135deg, rgba(172, 106, 255, 0.1), rgba(133, 141, 255, 0.05), transparent)',
                            'linear-gradient(225deg, rgba(133, 141, 255, 0.1), rgba(172, 106, 255, 0.05), transparent)',
                            'linear-gradient(135deg, rgba(172, 106, 255, 0.1), rgba(133, 141, 255, 0.05), transparent)',
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-color-1/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-color-5/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      
                      {/* Content */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {/* Index number */}
                          <span className="text-xs font-mono text-n-5 group-hover:text-color-1 transition-colors">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          
                          {/* Item title */}
                          <span className="text-base font-semibold text-n-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-color-1 group-hover:to-color-5 transition-all font-mono tracking-wide">
                            {item.title}
                          </span>
                        </div>
                        
                        {/* Arrow icon with glow */}
                        <div className="relative">
                          <svg 
                            className="w-5 h-5 text-n-4 group-hover:text-color-1 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                          <div className="absolute inset-0 bg-color-1 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                        </div>
                      </div>
                      
                      {/* Bottom shine effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-color-1/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.a>
                );
              })}

              {/* CTA Button - consistent style */}
              <motion.a
                href="#contact"
                onClick={handleClick}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + navigation.length * 0.06, type: "spring" }}
                className="group inline-flex items-center gap-3 px-5 py-3 bg-n-8/60 border border-n-6/50 rounded-xl hover:border-color-1/40 transition-all duration-300 mt-6"
              >
                <span className="text-sm text-n-1 font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-color-1 group-hover:to-color-5 transition-all">
                  GET IN TOUCH
                </span>
                <svg 
                  className="w-4 h-4 text-n-4 group-hover:text-color-1 group-hover:translate-x-1 transition-all" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              {/* Footer hint with glassmorphic styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pt-8 pb-safe"
              >
                <div className="p-4 rounded-xl bg-n-8/40 backdrop-blur-lg border border-n-6/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-n-4">Scroll to explore</span>
                    <motion.div
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <svg className="w-4 h-4 text-color-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;