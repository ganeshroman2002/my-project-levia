import React, { useRef } from 'react';
import { CalendarX2, ClockAlert, Boxes, NotebookPen, Layers } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Problem() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const chaosSpin = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const problems = [
    {
      title: "Too Many Meetings",
      icon: <CalendarX2 className="w-8 h-8 text-rose-400" />
    },
    {
      title: "Missed Deadlines",
      icon: <ClockAlert className="w-8 h-8 text-orange-400" />
    },
    {
      title: "Scattered Tools",
      icon: <Boxes className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Manual Task Management",
      icon: <NotebookPen className="w-8 h-8 text-indigo-400" />
    }
  ];

  return (
    <section ref={containerRef} className="relative py-40 bg-[#000000] overflow-hidden min-h-[120vh] flex items-center">
      {/* Background massive blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
            Work is more <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">chaotic</span> than ever.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
          
          {/* Left: Chaos Illustration (Parallax Spin) */}
          <motion.div 
            style={{ rotate: chaosSpin }}
            className="relative flex justify-center items-center h-[500px]"
          >
            {/* Center core */}
            <div className="absolute w-24 h-24 bg-[#050505] rounded-full border border-white/10 flex items-center justify-center z-20 shadow-[0_0_50px_rgba(0,0,0,1)]">
              <Layers className="w-10 h-10 text-white" />
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute w-[400px] h-[400px] border border-white/[0.03] rounded-full"></div>
            <div className="absolute w-[300px] h-[300px] border border-white/[0.05] rounded-full"></div>
            
            {/* Floating Icons */}
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-10 w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center backdrop-blur-md border border-rose-500/20">
              <CalendarX2 className="text-rose-400" />
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 left-4 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-md border border-blue-500/20">
              <Boxes className="text-blue-400" />
            </motion.div>
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-24 right-8 w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center backdrop-blur-md border border-orange-500/20">
              <ClockAlert className="text-orange-400" />
            </motion.div>
            <motion.div animate={{ y: [0, 25, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 right-16 w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center backdrop-blur-md border border-indigo-500/20">
              <NotebookPen className="text-indigo-400" />
            </motion.div>
          </motion.div>

          {/* Right: Borderless Typography List */}
          <div className="flex flex-col gap-12">
            {problems.map((problem, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="flex items-center gap-8 group"
              >
                <div className="w-20 h-20 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/[0.05] group-hover:bg-white/[0.05] transition-colors group-hover:scale-110 duration-500">
                  {problem.icon}
                </div>
                <h3 className="text-3xl font-light text-slate-300 group-hover:text-white transition-colors tracking-tight">
                  {problem.title}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
