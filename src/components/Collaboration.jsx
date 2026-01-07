import { motion } from "framer-motion";
import { techTools, coreCompetencies } from "../constants";

const Collaboration = () => {
  const skillCategories = [
    {
      name: "Cloud & Infrastructure",
      skills: ["AWS", "Terraform"],
      color: "from-color-1 to-color-5",
    },
    {
      name: "Containers & Orchestration",
      skills: ["Docker", "Podman", "Kubernetes", "Helm"],
      color: "from-color-5 to-color-2",
    },
    {
      name: "CI/CD & Automation",
      skills: ["GitHub Actions","Bash"],
      color: "from-color-2 to-color-4",
    },
    {
      name: "Monitoring & Observability",
      skills: ["Grafana", "Prometheus", "Loki", "Tempo", "Alloy", "SigNoz"],
      color: "from-color-4 to-color-1",
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(172, 106, 255, 0.4) 0%, transparent 50%),
                          radial-gradient(circle at 80% 50%, rgba(133, 141, 255, 0.3) 0%, transparent 50%)`
      }} />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-color-1">// Skills</span>
              <div className="h-px w-16 bg-gradient-to-r from-color-1 to-transparent" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-n-1"
            >
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Arsenal</span>
            </motion.h2>
          </div>

          {/* Resume Link */}
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            href="https://drive.google.com/file/d/1n-2w7eN4t50LWtJmu8ZzJEAtE4MUVpeA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-n-3 hover:text-color-1 transition-colors duration-150"
          >
            <span>View Full Resume</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Skill Categories - Left Column */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-5 bg-n-8/70 border border-n-6/40 rounded-2xl hover:border-color-1/30 transition-all duration-300"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${category.color} opacity-60`} />
                
                <h3 className="text-sm font-semibold text-n-1 mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs bg-n-7/80 border border-n-6/50 rounded-lg text-n-3 hover:text-color-1 hover:border-color-1/30 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Card - Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative p-5 bg-n-8/70 border border-n-6/40 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-color-4 animate-pulse" />
                <span className="text-xs font-mono text-n-4">tools.config</span>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-n-6" />
                <div className="w-2 h-2 rounded-full bg-n-6" />
                <div className="w-2 h-2 rounded-full bg-n-6" />
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {techTools.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.03 * index }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="group relative aspect-square rounded-xl bg-n-7 border border-n-6/50 flex items-center justify-center hover:border-color-1/50 transition-all duration-300 cursor-pointer"
                >
                  <img src={app.icon} alt={app.title} className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-n-7 border border-n-6 rounded text-[10px] text-n-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    {app.title}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative bottom */}
            <div className="mt-5 pt-4 border-t border-n-6/30">
              <div className="flex items-center justify-between text-xs text-n-5">
                <span>{techTools.length} tools</span>
                <span className="font-mono">v2.0.25</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 p-5 bg-gradient-to-r from-color-1/5 via-transparent to-color-5/5 border border-n-6/30 rounded-2xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {coreCompetencies.map((item, index) => (
              <motion.span
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-sm text-n-3 hover:text-color-1 transition-colors cursor-default"
              >
                {item.title}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
