import React, { useRef } from 'react';
import { Mail, CheckSquare, FolderGit2, Video, FileText, Cpu, Sparkles, LayoutDashboard } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Solution() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const coreScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1.2]);
  const coreOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const inputsY = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const inputsOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const inputs = [
    { name: 'Emails', icon: <Mail size={20} />, color: 'from-blue-400 to-cyan-400', delay: '0ms' },
    { name: 'Tasks', icon: <CheckSquare size={20} />, color: 'from-emerald-400 to-green-400', delay: '200ms' },
    { name: 'Projects', icon: <FolderGit2 size={20} />, color: 'from-purple-400 to-indigo-400', delay: '400ms' },
    { name: 'Meetings', icon: <Video size={20} />, color: 'from-rose-400 to-red-400', delay: '600ms' },
    { name: 'Files', icon: <FileText size={20} />, color: 'from-amber-400 to-orange-400', delay: '800ms' },
  ];

  return (
    <section ref={containerRef} className="py-32 bg-[#000000] relative overflow-hidden flex flex-col items-center min-h-[120vh]">
      {/* Immersive Dark Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#000000] to-[#000000] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-medium tracking-tight mb-4 text-white"
        >
          One Platform.<br />
          One Workflow.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">Zero Chaos.</span>
        </motion.h2>
        
        {/* Visual Engine Diagram */}
        <div className="mt-32 max-w-5xl mx-auto flex flex-col items-center relative">
          
          {/* Top Level: Inputs */}
          <motion.div 
            style={{ y: inputsY, opacity: inputsOpacity }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 relative z-20"
          >
            {inputs.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center gap-3 animate-float"
                style={{ animationDelay: item.delay }}
              >
                {/* Removed strict glass card borders, replaced with subtle soft glowing orbs */}
                <div className="w-16 h-16 rounded-full bg-white/[0.03] flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] group hover:scale-110 transition-transform cursor-default relative">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-md`}></div>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-br ${item.color} relative z-10`}>
                    {React.cloneElement(item.icon, { className: `stroke-[url(#gradient-sol-${idx})] text-white w-8 h-8` })}
                  </div>
                  
                  {/* SVG Definition for Gradient Icon */}
                  <svg width="0" height="0">
                    <linearGradient id={`gradient-sol-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={item.color.includes('blue') ? '#60a5fa' : item.color.includes('emerald') ? '#34d399' : item.color.includes('purple') ? '#c084fc' : item.color.includes('rose') ? '#fb7185' : '#fbbf24'} />
                      <stop offset="100%" stopColor={item.color.includes('cyan') ? '#22d3ee' : item.color.includes('green') ? '#4ade80' : item.color.includes('indigo') ? '#818cf8' : item.color.includes('red') ? '#f87171' : '#fb923c'} />
                    </linearGradient>
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-400">{item.name}</span>
              </div>
            ))}
          </motion.div>

          {/* Central AI Core with Scroll Zoom Parallax */}
          <motion.div 
            style={{ scale: coreScale, opacity: coreOpacity }}
            className="relative z-30 my-8 group"
          >
            {/* Massive Cinematic Pulsing rings */}
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
            <div className="absolute -inset-10 border border-blue-500/20 rounded-full animate-[spin_6s_linear_infinite]"></div>
            <div className="absolute -inset-20 border border-indigo-500/10 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
            
            {/* Core Orb */}
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-900 via-indigo-900 to-[#000000] p-[1px] shadow-[0_0_80px_rgba(59,130,246,0.3)]">
              <div className="w-full h-full rounded-full bg-[#020308] flex flex-col items-center justify-center relative overflow-hidden">
                {/* Internal energy */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                <Cpu size={48} className="text-blue-400 mb-3 relative z-10" />
                <span className="font-medium tracking-widest uppercase text-xs text-white relative z-10 flex items-center gap-2">
                  <Sparkles size={12} className="text-blue-300" /> Core
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bottom: Unified Workspace (Cinematic fade up) */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-20 w-full max-w-2xl mt-16"
          >
            {/* Cinematic borderless glow instead of boxy glass card */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-[100px] opacity-10"></div>
            <div className="p-8 relative overflow-hidden bg-gradient-to-b from-white/[0.05] to-transparent rounded-[40px] border-t border-white/10">
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  <LayoutDashboard size={40} className="text-blue-400" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-medium text-white mb-3">Unified Workspace</h3>
                  <p className="text-slate-400 text-lg font-light leading-relaxed">
                    Everything you need to work, perfectly organized and prioritized by AI in one beautiful, frictionless interface.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
