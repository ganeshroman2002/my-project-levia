import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
      {/* Immersive Animated Gradient Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-purple-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-[spin_12s_linear_infinite_reverse]"></div>
        <div className="absolute inset-0 bg-[#000000]/60 backdrop-blur-[50px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center"
      >
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 font-medium mb-12 backdrop-blur-md">
          <Sparkles size={16} className="text-blue-400" />
          The future of work is here
        </div>
        
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-medium text-white mb-8 tracking-tighter leading-[1.1] max-w-5xl">
          Ready to let AI run<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">
            the busy work?
          </span>
        </h2>
        
        <p className="text-2xl md:text-3xl text-slate-400 mb-16 max-w-2xl font-light">
          Focus on innovation. <br className="hidden md:block" />
          We'll handle the workflow.
        </p>
        
        <button className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-white text-[#000000] rounded-full font-medium text-xl transition-all hover:scale-105 hover:shadow-[0_0_80px_rgba(255,255,255,0.3)]">
          Start Free Today
          <div className="w-12 h-12 rounded-full bg-[#050505] flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight size={20} className="text-white" />
          </div>
        </button>
      </motion.div>
      
      {/* Border separator for footer */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
