import { motion } from "framer-motion";

const stats = [
  { number: "2+", label: "Years" },
  { number: "10+", label: "Projects" },
  { number: "4", label: "Certs" },
  { number: "5+", label: "Communities" },
];

const AboutMe = () => {
  return (
    <section id="about-me" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle, rgba(172, 106, 255, 1) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-color-1 rounded-full blur-[180px]" 
      />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-color-1" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-color-1">// About</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-n-1 mb-6"
            >
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Future</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-n-3 leading-relaxed"
            >
              <p>
                Hi! I'm Aftab, a DevOps Engineer passionate about cloud-native tech. My toolkit includes 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5 font-medium"> AWS, Docker, Kubernetes, Terraform, Prometheus & Grafana</span>.
              </p>
              <p>
                Beyond code, I organize <span className="text-n-1">Grafana and Friends Kochi</span>, contribute to 
                <span className="text-n-1"> AWS UG Kochi, CNCF Kochi</span>, and speak at tech events with humor and real-world insights.
              </p>
            </motion.div>
          </div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-6 bg-n-8/80 border border-n-6/50 rounded-2xl hover:border-color-1/30 transition-all duration-300 text-center"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-n-4 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
