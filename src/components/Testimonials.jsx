import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      text: "FlowSync changed how our team works. We no longer ask 'what's next?', the AI just lines it up.",
      author: "Product Manager",
      position: "left-4 md:left-10 top-0",
      delay: "0s",
      pointer: "bottom-[-16px] left-[40px]"
    },
    {
      text: "I haven't manually assigned a task in three months. It's like having a project manager on autopilot.",
      author: "Engineering Lead",
      position: "right-4 md:right-10 top-40",
      delay: "1.5s",
      pointer: "bottom-[-16px] right-[40px]"
    },
    {
      text: "Our meeting time has literally been cut in half. The dashboard gives me everything I need at a glance.",
      author: "Startup Founder",
      position: "left-1/2 -translate-x-1/2 top-80",
      delay: "3s",
      pointer: "bottom-[-16px] left-1/2 -translate-x-1/2"
    }
  ];

  return (
    <section className="py-40 bg-[#000000] relative overflow-hidden min-h-[900px] flex items-center">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#000000] to-[#000000] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32 relative z-20"
        >
          <h2 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
            Loved by Teams Everywhere
          </h2>
        </motion.div>

        {/* Floating Speech Bubbles Container */}
        <div className="relative w-full h-[600px] md:h-[400px]">
          
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`absolute w-[90%] md:w-[450px] animate-float z-10 ${test.position}`}
              style={{ animationDelay: test.delay }}
            >
              <div className="relative group cursor-default">
                {/* Bubble Body */}
                <div className="bg-[#050505]/80 backdrop-blur-3xl border border-white/10 p-10 rounded-[32px] shadow-[0_0_50px_rgba(0,0,0,1)] relative z-10 hover:bg-white/[0.03] transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-[32px] pointer-events-none"></div>
                  <Quote className="text-blue-500/20 w-12 h-12 absolute top-6 right-8" />
                  <p className="text-xl text-slate-300 mb-8 relative z-10 leading-relaxed font-light">
                    "{test.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${idx === 0 ? 'from-blue-500 to-cyan-500' : idx === 1 ? 'from-indigo-500 to-purple-500' : 'from-indigo-400 to-blue-400'}`}></div>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{test.author}</span>
                  </div>
                </div>
                
                {/* Speech Bubble Pointer */}
                <div className={`absolute w-8 h-8 bg-[#050505]/90 border-r border-b border-white/10 rotate-45 z-0 ${test.pointer}`}></div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
