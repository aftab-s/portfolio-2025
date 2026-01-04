import { motion } from "framer-motion";
import { roadmap } from "../constants";

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(172, 106, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(172, 106, 255, 0.4) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      <motion.div 
        animate={{ x: [0, 30, 0], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-color-1 rounded-full blur-[200px]" 
      />
      <motion.div 
        animate={{ x: [0, -20, 0], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-color-5 rounded-full blur-[180px]" 
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
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-color-1">// Projects</span>
            <div className="h-px w-16 bg-gradient-to-r from-color-1 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-n-1 mb-4"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Work</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-n-3 max-w-xl"
          >
            Real-world projects showcasing infrastructure, automation, and cloud-native solutions.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {roadmap.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative h-full bg-n-8/70 border border-n-6/40 rounded-2xl overflow-hidden hover:border-color-1/40 transition-all duration-300">
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-color-1/5 to-color-5/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-n-8/40 to-transparent" />
                  
                  {/* Status */}
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm ${
                      project.status === 'done' 
                        ? 'bg-color-4/20 border border-color-4/30' 
                        : 'bg-color-1/20 border border-color-1/30'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        project.status === 'done' ? 'bg-color-4' : 'bg-color-1 animate-pulse'
                      }`} />
                      <span className={`text-xs font-mono ${
                        project.status === 'done' ? 'text-color-4' : 'text-color-1'
                      }`}>
                        {project.status === 'done' ? 'Completed' : 'In Progress'}
                      </span>
                    </div>
                  </div>

                  {/* Number */}
                  <div className="absolute top-4 right-4 text-4xl font-bold text-white/10 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="w-1 h-4 bg-gradient-to-b from-color-1 to-color-5 rounded-full" />
                    <span className="text-xs font-mono text-color-1 uppercase tracking-wider">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-n-1 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-color-1 group-hover:to-color-5 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-n-4 text-sm leading-relaxed line-clamp-2">
                    {project.text}
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-xs text-color-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Project</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/aftab-s"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-6 py-4 bg-n-8/60 border border-n-6/50 rounded-xl hover:border-color-1/40 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-n-3 group-hover:text-color-1 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <div className="text-left">
              <span className="block text-sm text-n-1 font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-color-1 group-hover:to-color-5 transition-all">
                Explore More on GitHub
              </span>
              <span className="block text-xs text-n-4">View all repositories</span>
            </div>
            <svg 
              className="w-4 h-4 text-n-4 group-hover:text-color-1 group-hover:translate-x-1 transition-all" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
