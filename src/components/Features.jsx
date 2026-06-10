import React from 'react';
import { BrainCircuit, LineChart, Users, BellRing, Cloud, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "AI Task Planning",
      description: "Automatically prioritizes your most critical work.",
      icon: <BrainCircuit size={28} />,
      color: "from-purple-500 to-indigo-500",
      glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast deadlines and pinpoint delivery risks early.",
      icon: <LineChart size={28} />,
      color: "from-blue-500 to-cyan-500",
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    },
    {
      title: "Team Sync",
      description: "Real-time, context-aware team communication.",
      icon: <Users size={28} />,
      color: "from-emerald-500 to-teal-500",
      glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]"
    },
    {
      title: "Smart Notifications",
      description: "Silence the noise. Only alerts that truly matter.",
      icon: <BellRing size={28} />,
      color: "from-amber-500 to-orange-500",
      glow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]"
    },
    {
      title: "Cloud Native",
      description: "Instant synchronization from anywhere on Earth.",
      icon: <Cloud size={28} />,
      color: "from-indigo-500 to-blue-500",
      glow: "shadow-[0_0_30px_rgba(99,102,241,0.3)]"
    },
    {
      title: "Zero Trust Security",
      description: "Military-grade encryption for all your data.",
      icon: <ShieldCheck size={28} />,
      color: "from-rose-500 to-pink-500",
      glow: "shadow-[0_0_30px_rgba(244,63,110,0.3)]"
    }
  ];

  return (
    <section className="py-40 bg-[#000000] relative overflow-hidden">
      {/* Immersive background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#000000] to-[#000000] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
            Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Built In</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Everything you need to automate workflows and take productivity to the next level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group cursor-pointer relative"
            >
              {/* Cinematic glow on hover instead of border */}
              <div className="absolute inset-0 bg-white/[0.02] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10 flex flex-col items-start px-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${feature.color} text-white group-hover:scale-110 transition-transform duration-500 ${feature.glow}`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-medium text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">{feature.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed font-light">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
