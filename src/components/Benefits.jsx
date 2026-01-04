import { motion } from "framer-motion";
import { benefits } from "../constants";

const Benefits = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(172, 106, 255, 0.1) 40px, rgba(172, 106, 255, 0.1) 41px)`
      }} />
      <motion.div 
        animate={{ y: [0, -30, 0], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-0 w-[600px] h-[300px] bg-color-1 rounded-full blur-[200px]" 
      />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-color-1" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-color-1">// Certifications</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-color-1" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-n-1"
          >
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Expertise</span>
          </motion.h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {benefits.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group block"
            >
              <div className="relative h-full p-5 bg-n-8/70 border border-n-6/40 rounded-2xl hover:border-color-1/40 transition-all duration-300">
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-color-1/10 to-color-5/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-n-7 border border-n-6/50 flex items-center justify-center mb-4 group-hover:border-color-1/50 transition-colors">
                    <img src={cert.iconUrl} alt={cert.title} className="w-5 h-5 object-contain" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-sm font-semibold text-n-1 mb-2 leading-tight">{cert.title}</h3>
                  <p className="text-xs text-n-4 line-clamp-2">{cert.text}</p>
                  
                  {/* Link Indicator */}
                  <div className="flex items-center gap-1 mt-3 text-xs text-color-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
