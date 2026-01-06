import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { socials } from "../constants";
import { logo } from "../assets";

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
    <footer id="contact" className="relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-n-8/95 to-transparent pointer-events-none" />
      
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-n-6/50 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Main content area */}
        <div className="py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left side - Contact info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 sm:gap-3 mb-8"
              >
                <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase text-color-1">// Get in touch</span>
                <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-color-1" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-n-1 mb-6 leading-tight"
              >
                Let's build<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">something great</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-n-4 text-base lg:text-lg max-w-md mb-10"
              >
                Have a project in mind or just want to connect? I'm always open to new opportunities.
              </motion.p>

              {/* Quick links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {socials.map((social, index) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="px-4 py-2 text-sm text-n-3 border border-n-6/50 rounded-lg hover:text-color-1 hover:border-color-1/30 transition-all duration-300"
                  >
                    {social.title}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right side - Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-n-4 mb-2 tracking-wider">NAME</label>
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full px-0 py-3 bg-transparent border-b border-n-6 text-n-1 placeholder-n-5 focus:outline-none focus:border-color-1 transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-n-4 mb-2 tracking-wider">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full px-0 py-3 bg-transparent border-b border-n-6 text-n-1 placeholder-n-5 focus:outline-none focus:border-color-1 transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-n-4 mb-2 tracking-wider">MESSAGE</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="w-full px-0 py-3 bg-transparent border-b border-n-6 text-n-1 placeholder-n-5 focus:outline-none focus:border-color-1 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1.5" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group inline-flex items-center gap-3 px-5 py-3 bg-n-8/60 border border-n-6/50 rounded-xl hover:border-color-1/40 transition-all duration-300 w-full sm:w-auto justify-center mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-sm text-n-1 font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-color-1 group-hover:to-color-5 transition-all">
                    {state.submitting ? "Sending..." : "Send Message"}
                  </span>
                  {!state.submitting && (
                    <svg className="w-4 h-4 text-n-4 group-hover:text-color-1 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>

                {/* Success message */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 px-4 py-3 bg-color-4/10 border border-color-4/30 rounded-lg"
                  >
                    <svg className="w-5 h-5 text-color-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-color-4">Message sent successfully!</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-n-6/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo/Brand */}
            <motion.a
              href="#hero"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 group"
            >
              <img src={logo} alt="AM Logo" className="h-9 w-auto transition-all duration-500 group-hover:scale-110 brightness-110" />
            </motion.a>

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-n-5 text-sm font-mono"
            >
              © {new Date().getFullYear()} All rights reserved
            </motion.p>

            {/* Back to top removed per design request */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
