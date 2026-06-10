import React, { useRef } from 'react';
import { Activity, Target, Zap, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Showcase() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax zoom for the laptop mockup to make it feel extremely cinematic
  const mockupScale = useTransform(scrollYProgress, [0.1, 0.6], [0.8, 1]);
  const mockupY = useTransform(scrollYProgress, [0.1, 0.6], [100, 0]);

  return (
    <section ref={containerRef} className="py-40 bg-[#000000] relative overflow-hidden min-h-[140vh] flex flex-col justify-center">
      {/* Deep cinematic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#000000] to-[#000000] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
            Everything You Need.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">One Beautiful Dashboard.</span>
          </h2>
        </motion.div>

        {/* Mockup Container with Parallax Zoom */}
        <motion.div 
          style={{ scale: mockupScale, y: mockupY }}
          className="relative mx-auto max-w-5xl"
        >
          
          {/* Extremely dark glass cinematic container */}
          <div className="rounded-[40px] border border-white/10 bg-[#050505]/80 backdrop-blur-3xl p-2 md:p-4 shadow-[0_0_100px_rgba(0,0,0,1)] relative z-10">
            {/* Outer edge glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-[40px] pointer-events-none"></div>

            {/* Screen Content Area */}
            <div className="rounded-[32px] overflow-hidden bg-[#020308] border border-white/5 h-[600px] relative flex flex-col shadow-inner">
              
              {/* Fake App Topbar */}
              <div className="h-16 border-b border-white/5 flex items-center px-8 justify-between bg-white/[0.02]">
                <div className="flex gap-4 items-center">
                  <LayoutGrid size={20} className="text-slate-500" />
                  <div className="h-3 w-32 bg-white/10 rounded-full"></div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="h-3 w-16 bg-white/10 rounded-full mr-4"></div>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500"></div>
                </div>
              </div>

              {/* Main App Canvas */}
              <div className="flex-1 p-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] relative">
                
                {/* Floating Elements (Mock Data) */}
                <div className="grid grid-cols-3 gap-6 h-full">
                  
                  {/* Left Column */}
                  <div className="col-span-2 space-y-6">
                    {/* Big Graph Card */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 h-64 flex flex-col justify-between hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                      <div className="flex justify-between items-center mb-4 relative z-10">
                        <h4 className="text-slate-400 font-medium flex items-center gap-2"><Activity size={16} className="text-blue-400"/> Activity Overview</h4>
                        <span className="text-blue-400 text-sm font-bold bg-blue-400/10 px-3 py-1 rounded-full">+14.2%</span>
                      </div>
                      <div className="flex-1 flex items-end gap-3 pb-2 relative z-10">
                        {/* Mock Bar Chart */}
                        {[30, 50, 40, 70, 45, 90, 60, 85, 40, 65, 80, 55].map((height, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/20 to-blue-500/50 rounded-sm hover:from-blue-400 hover:to-blue-400 transition-colors cursor-pointer group/bar relative" style={{ height: `${height}%` }}>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#000000] text-white text-xs py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 pointer-events-none transition-opacity border border-white/10">{height}%</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Trackers */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 hover:bg-white/[0.04] transition-colors">
                        <h4 className="text-slate-400 font-medium flex items-center gap-2 mb-4"><Target size={16} className="text-indigo-400"/> Q3 Goals</h4>
                        <div className="w-[120px] h-[120px] mx-auto rounded-full border-8 border-white/5 relative flex items-center justify-center">
                          {/* Fake SVG Circle Progress */}
                          <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle cx="60" cy="60" r="52" fill="none" stroke="#6366f1" strokeWidth="8" strokeDasharray="326" strokeDashoffset="80" className="drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                          </svg>
                          <span className="text-2xl font-light text-white">78%</span>
                        </div>
                      </div>
                      
                      <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 hover:bg-white/[0.04] transition-colors flex flex-col gap-6">
                        <h4 className="text-slate-400 font-medium flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400"/> Priority Tasks</h4>
                        <div className="space-y-4">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4">
                              <div className="w-5 h-5 rounded-full border-2 border-blue-500/50"></div>
                              <div className="h-2 flex-1 bg-white/5 rounded-full"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Productivity Score */}
                  <div className="col-span-1 space-y-6">
                    <div className="bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none"></div>
                      <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/30 relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                        <Zap size={32} className="text-blue-400" />
                      </div>
                      <h4 className="text-slate-400 font-medium mb-3 relative z-10">Productivity Score</h4>
                      <div className="text-7xl font-light text-white mb-4 relative z-10 tracking-tighter">94</div>
                      <p className="text-blue-400/80 text-sm relative z-10">Top 5% globally</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Ambient Screen Light escaping */}
            <div className="absolute -top-10 left-20 right-20 h-20 bg-blue-500/20 blur-[60px] -z-10"></div>
          </div>

          {/* Floating UI Elements Overlapping the Mockup with Parallax */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -left-16 top-32 bg-[#000000]/80 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,1)] z-20 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <Activity size={24} className="text-emerald-400" />
            </div>
            <div>
              <div className="text-xs tracking-wider uppercase font-medium text-slate-500 mb-1">System Status</div>
              <div className="text-sm font-medium text-white">All Systems Nominal</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute -right-12 bottom-40 bg-[#000000]/80 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,1)] z-20 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <Target size={24} className="text-blue-400" />
            </div>
            <div>
              <div className="text-xs tracking-wider uppercase font-medium text-slate-500 mb-1">Milestone</div>
              <div className="text-sm font-medium text-white">Sprint Completed</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
