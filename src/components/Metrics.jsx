import React from 'react';
import { motion } from 'framer-motion';

export default function Metrics() {
  const metrics = [
    {
      value: "+68%",
      label: "Increase in Productivity",
      color: "from-blue-400 to-cyan-500",
      glow: "bg-blue-500/20"
    },
    {
      value: "-42%",
      label: "Meeting Time",
      color: "from-indigo-400 to-purple-500",
      glow: "bg-indigo-500/20"
    },
    {
      value: "3X",
      label: "Faster Project Delivery",
      color: "from-blue-300 to-indigo-400",
      glow: "bg-blue-400/20"
    }
  ];

  return (
    <section className="py-40 bg-[#000000] relative overflow-hidden">
      {/* Background divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative py-12 md:py-0 px-4 group cursor-default"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 ${metric.glow} blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none`}></div>
              
              <div className="relative z-10">
                <div className={`text-7xl lg:text-8xl font-light mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-xl md:text-2xl font-light text-slate-400 tracking-wide">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
