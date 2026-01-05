import { motion } from "framer-motion";

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "10+", label: "Projects Completed" },
  { number: "4", label: "Certifications" },
  { number: "5+", label: "Communities" },
];

const techStack = [
  "AWS", "Docker", "Kubernetes", "Terraform", "Prometheus", "Grafana", "Linux", "Python"
];

const AboutMe = () => {
  return (
    <section id="about-me" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle, rgba(172, 106, 255, 1) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-color-1 rounded-full blur-[150px] lg:blur-[180px]" 
      />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-color-1">// About</span>
            <div className="h-px w-16 bg-gradient-to-r from-color-1 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-n-1"
          >
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Future</span>
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 sm:p-8 bg-n-8/70 border border-n-6/40 rounded-2xl">
              <div className="space-y-4 text-n-3 leading-relaxed text-sm sm:text-base">
                <p>
                  Hi! I'm <span className="text-n-1 font-medium">Aftab</span>, a DevOps Engineer passionate about cloud-native technologies and building scalable infrastructure.
                </p>
                <p>
                  Beyond code, I organize <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5 font-medium">Grafana and Friends Kochi</span>, contribute to 
                  <span className="text-n-1 font-medium"> AWS UG Kochi</span> & <span className="text-n-1 font-medium">CNCF Kochi</span>, and speak at tech events sharing real-world insights.
                </p>
              </div>
              
              {/* Tech Stack Pills */}
              <div className="mt-6 pt-6 border-t border-n-6/40">
                <p className="text-xs text-n-4 uppercase tracking-wider mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="px-3 py-1.5 text-xs bg-n-7/80 border border-n-6/50 rounded-lg text-n-3 hover:border-color-1/40 hover:text-color-1 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#projects"
                className="group flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-n-8/70 border border-n-6/40 rounded-xl hover:border-color-1/40 transition-all duration-300"
              >
                <span className="text-sm text-n-3 group-hover:text-n-1 transition-colors">View Projects</span>
                <svg className="w-4 h-4 text-n-4 group-hover:text-color-1 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="group flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-color-1/10 to-color-5/10 border border-color-1/30 rounded-xl hover:from-color-1/20 hover:to-color-5/20 transition-all duration-300"
              >
                <span className="text-sm text-n-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-color-1 group-hover:to-color-5 transition-all">Let's Connect</span>
                <svg className="w-4 h-4 text-color-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 content-start"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative p-5 sm:p-6 bg-n-8/70 border border-n-6/40 rounded-2xl hover:border-color-1/40 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color-1 to-color-5 opacity-60" />
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-color-1/5 to-color-5/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-xs text-n-4 uppercase tracking-wider leading-tight">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
