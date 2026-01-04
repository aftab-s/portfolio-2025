import { motion } from "framer-motion";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import beyondWork from "../assets/services/beyondWork/beyond-work.png";

const Services = () => {
  const communities = [
    { name: "Grafana and Friends Kochi", role: "Core Organizer", emoji: "📊" },
    { name: "CNCF & CNCG Kochi", role: "Community Member", emoji: "☸️" },
    { name: "AWS UG Kochi", role: "Active Member", emoji: "☁️" },
    { name: "DevOps Malayalam", role: "Contributor", emoji: "🛠️" },
    { name: "WordPress Kerala", role: "Community Member", emoji: "🌐" },
  ];

  return (
    <section id="beyond-work" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(172, 106, 255, 0.3) 60deg, transparent 120deg)`,
      }} />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-color-1/10 via-transparent to-color-5/10 rounded-full blur-[100px] opacity-50" 
      />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-color-1">// Beyond Work</span>
            <div className="h-px w-16 bg-gradient-to-r from-color-1 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-n-1 mb-4"
          >
            Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-5">Involvement</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-n-3 max-w-xl"
          >
            Active participant and organizer in tech communities, sharing knowledge and learning from fellow enthusiasts.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          {/* Communities List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {communities.map((community, index) => (
              <motion.div
                key={community.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5 }}
                className="group flex items-center gap-4 p-4 bg-n-8/60 border border-n-6/40 rounded-xl hover:border-color-1/40 transition-all duration-300"
              >
                <span className="text-2xl">{community.emoji}</span>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-n-1">{community.name}</h3>
                  <p className="text-xs text-n-4">{community.role}</p>
                </div>
                <svg className="w-4 h-4 text-n-5 group-hover:text-color-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-full min-h-[300px] bg-n-8/60 border border-n-6/40 rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="h-full">
                <img src={beyondWork} alt="Beyond Work" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-n-8/50 to-transparent" />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center bg-n-8/60">
                <div className="text-center p-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-color-1/20 rounded-full mb-4">
                    <span className="w-2 h-2 rounded-full bg-color-4 animate-pulse" />
                    <span className="text-xs font-mono text-color-1">Active in 5+ Communities</span>
                  </div>
                  <p className="text-sm text-n-2 max-w-xs mx-auto">
                    Passionate about giving back to the tech community through organizing events, speaking, and mentoring.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
