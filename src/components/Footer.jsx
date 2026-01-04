import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { socials } from "../constants";
import logo from "../assets/AM-logo.png";

const Footer = () => {
  const [state, handleSubmit] = useForm("xbdlojrg");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  }, [state.succeeded]);
  return (
    <footer id="contact" className="py-20 lg:py-32 relative overflow-hidden">
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
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-color-1 to-color-5 rounded-full blur-[200px]" 
      />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 lg:p-16 bg-gradient-to-br from-n-7/60 to-n-8/80 backdrop-blur-xl border border-n-6/40 rounded-3xl overflow-hidden mb-16"
          >
            {/* Corner accents */}
            <svg className="absolute top-0 left-0 w-32 h-32 text-color-1/20" viewBox="0 0 100 100">
              <path d="M0 30 L0 0 L30 0" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            <svg className="absolute bottom-0 right-0 w-32 h-32 text-color-5/20 rotate-180" viewBox="0 0 100 100">
              <path d="M0 30 L0 0 L30 0" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            
            {/* Circuit patterns */}
            <svg className="absolute top-8 right-8 w-40 h-40 text-n-6/10" viewBox="0 0 100 100">
              <path d="M10 50 L40 50 L50 30 L60 50 L90 50" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M50 10 L50 30" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M50 50 L50 70 L30 90" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M50 70 L70 90" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="4" fill="currentColor" />
            </svg>
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-color-1" />
                <span className="text-xs font-mono tracking-[0.3em] uppercase text-color-1">// Contact</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-color-1" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-n-1 mb-6"
              >
                Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Together</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-n-3 text-lg max-w-2xl mx-auto mb-10"
              >
                Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
              </motion.p>
              
              {/* Contact Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="max-w-lg mx-auto space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-n-7/50 border border-n-6/50 rounded-xl text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1/50 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-n-7/50 border border-n-6/50 rounded-xl text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1/50 transition-all"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-n-7/50 border border-n-6/50 rounded-xl text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1/50 transition-all resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group relative w-full px-8 py-4 overflow-hidden rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-color-1 to-color-5" />
                  <div className="absolute inset-px bg-n-8 rounded-xl group-hover:bg-transparent transition-colors duration-300" />
                  <span className="relative z-10 text-base font-medium text-n-1 group-hover:text-white transition-colors flex items-center justify-center gap-2">
                    {state.submitting ? "Sending..." : "Send Message"}
                    {!state.submitting && (
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Success message */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-4 py-3 bg-color-4/20 border border-color-4/40 rounded-xl"
                  >
                    <svg className="w-5 h-5 text-color-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-color-4">Message sent! I'll get back to you soon.</span>
                  </motion.div>
                )}
              </motion.form>
            </div>
          </motion.div>

          {/* Divider with gradient */}
          <div className="h-px bg-gradient-to-r from-transparent via-n-6 to-transparent mb-12" />

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            {/* Logo/Name */}
            <a href="#hero" className="group flex items-center">
              <img src={logo} alt="AM Logo" className="h-12 w-auto group-hover:opacity-80 transition-opacity" />
            </a>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="group relative w-12 h-12 flex items-center justify-center"
                  title={social.title}
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
            </div>

            {/* Copyright */}
            <p className="text-n-4 text-sm font-mono">
              © {new Date().getFullYear()} <span className="text-n-3">Aftab</span> All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
