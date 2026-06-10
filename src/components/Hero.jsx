import React, { useRef } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for the background abstract elements
  const bgZoom = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Parallax transforms for the text
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000] pt-20">
      
      {/* Background Deep Blue/Purple Abstract Elements with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full pointer-events-none origin-center"
        style={{ scale: bgZoom, y: bgY }}
      >
        {/* Top-left massive deep blue sweep */}
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/10 to-transparent blur-[100px] transform -rotate-12"></div>
        
        {/* Top-right massive deep purple/blue sweep */}
        <div className="absolute -top-[30%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-purple-900/10 to-transparent blur-[120px] transform rotate-12"></div>

        {/* Bottom-left electric blue core */}
        <div className="absolute bottom-0 -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[150px]"></div>

        {/* Center swoosh effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[40vh] border-t border-blue-400/10 rounded-[100%] blur-[2px] opacity-30 transform -rotate-6"></div>
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[100vw] h-[60vh] border-t border-indigo-400/20 rounded-[100%] blur-[4px] opacity-20 transform rotate-12"></div>
      </motion.div>

      <motion.div 
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-10"
        style={{ y: textY, opacity: textOpacity }}
      >
        
        {/* Top Subheading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-6"
        >
          Automate your workflow in minutes
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl lg:text-[80px] font-medium tracking-tight text-white leading-[1.1] max-w-4xl mb-12"
        >
          A new way to plan and organize with AI
        </motion.h1>
        
        {/* Interactive Pill Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full max-w-md group cursor-text"
        >
          {/* Subtle outer glow for the pill */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative flex items-center justify-between w-full bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-full py-2 pl-6 pr-2 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <span className="text-slate-500 text-sm">Describe your workflow...</span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/5 cursor-pointer hover:bg-white/20 transition-colors">
              <MoreHorizontal size={16} className="text-white" />
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* Play Video Demo Link at Bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <button className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 tracking-wide">
          Play Video Demo
        </button>
      </motion.div>

    </section>
  );
}
