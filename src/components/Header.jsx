import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import logo from "../assets/AM-logo.png";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
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
        scrolled || openNavigation
          ? "bg-n-8/90 backdrop-blur-xl border-b border-n-6/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10 flex items-center group"
          >
            <img src={logo} alt="AM Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
            {scrolled && (
              <div className="absolute -inset-2 bg-color-1/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative px-4 py-2 text-sm font-medium text-n-3 hover:text-n-1 transition-colors duration-300 group"
              >
                <span className="relative z-10">{item.title}</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-color-1/10 to-color-5/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-color-1 to-color-5 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-n-7/50 border border-n-6/50 rounded-full text-sm font-medium text-n-1 hover:border-color-1/50 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-color-1 to-color-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 group-hover:text-white transition-colors">Let's Connect</span>
            <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-n-7/50 transition-colors"
            onClick={toggleNavigation}
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gradient-to-r from-color-1 to-color-5 transition-all duration-300 origin-center ${
                  openNavigation ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gradient-to-r from-color-1 to-color-5 transition-all duration-300 ${
                  openNavigation ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gradient-to-r from-color-1 to-color-5 transition-all duration-300 origin-center ${
                  openNavigation ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-n-8/98 backdrop-blur-xl transition-all duration-300 ${
          openNavigation ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dot pattern background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(172, 106, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        
        <nav className="container mx-auto px-6 py-12 flex flex-col gap-2 relative z-10">
          {navigation.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.url}
              onClick={handleClick}
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: openNavigation ? 1 : 0, x: openNavigation ? 0 : -20 }}
              transition={{ delay: index * 0.1 }}
              className="group relative px-6 py-4 rounded-xl border border-n-6/30 hover:border-color-1/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-color-1/5 to-color-5/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 text-base font-medium text-n-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-color-1 group-hover:to-color-5 transition-all">
                {item.title}
              </span>
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={handleClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: openNavigation ? 1 : 0, y: openNavigation ? 0 : 20 }}
            transition={{ delay: navigation.length * 0.1 }}
            className="group relative mt-4 px-6 py-4 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-color-1 to-color-5" />
            <div className="absolute inset-px bg-n-8 rounded-xl group-hover:bg-transparent transition-colors duration-300" />
            <span className="relative z-10 text-base font-medium text-n-1 group-hover:text-white transition-colors flex items-center justify-between">
              Let's Connect
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default Header;