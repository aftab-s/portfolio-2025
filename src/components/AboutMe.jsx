import { motion } from "framer-motion";
import aboutImg from "../assets/about/Aftab S.jpg";

const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "5+", label: "Projects Completed" },
  { number: "4", label: "Certifications" },
  { number: "5+", label: "Communities" },
];

const AboutMe = () => {
  return (
    <section id="about-me" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(172, 106, 255, 0.3), transparent)`
      }} />
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-color-1 rounded-full blur-[180px]" 
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
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-color-1">// About Me</span>
            <div className="h-px w-16 bg-gradient-to-r from-color-1 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-n-1"
          >
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Cloud-Native</span> Solutions
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Profile Card - Spans 2 columns and 2 rows on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-2 row-span-2 relative group"
          >
            <div className="h-full p-6 lg:p-8 bg-n-8/80 border border-n-6/40 rounded-2xl hover:border-color-1/30 transition-all duration-300">
              <div className="flex flex-col h-full">
                {/* Profile Section */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative flex-shrink-0">
                    <img
                      src={aboutImg}
                      alt="Aftab S"
                      className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl object-cover border border-n-6/50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-color-4 rounded-full border-2 border-n-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-n-1 mb-1">Aftab S</h3>
                    <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5 font-medium">DevOps Engineer</p>
                    <div className="flex items-center gap-2 text-xs text-n-4 mt-2">
                      <span className="w-2 h-2 bg-color-4 rounded-full animate-pulse" />
                      Available for opportunities
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="flex-1 space-y-4 text-n-3 text-sm lg:text-base leading-relaxed">
                  <p>
                    I specialize in designing and implementing <span className="text-n-1 font-medium">cloud infrastructure</span>, 
                    <span className="text-n-1 font-medium"> CI/CD pipelines</span>, and 
                    <span className="text-n-1 font-medium"> observability solutions</span> that help teams ship faster and more reliably.
                  </p>
                  <p>
                    Beyond engineering, I'm deeply involved in the tech community - organizing meetups, 
                    speaking at conferences, and contributing to open-source projects.
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-6 pt-4 border-t border-n-6/30 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {["bg-color-1", "bg-color-5", "bg-color-2"].map((color, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full ${color} opacity-60 border-2 border-n-8`} />
                    ))}
                  </div>
                  <span className="text-xs text-n-5">Cloud • DevOps • Observability</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-6 bg-n-8/80 border border-n-6/40 rounded-2xl hover:border-color-1/30 transition-all duration-300 flex flex-col justify-center">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-color-1 to-color-5 opacity-50" />
                
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs text-n-4 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;