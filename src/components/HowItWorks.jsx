import React from 'react';
import { PlusCircle, Users, Bot, TrendingUp, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      title: "Create Workspace",
      description: "Set up your company's digital headquarters in seconds.",
      icon: <PlusCircle size={28} className="text-blue-400" />
    },
    {
      title: "Invite Team",
      description: "Bring everyone on board with a single click. No training required.",
      icon: <Users size={28} className="text-emerald-400" />
    },
    {
      title: "AI Organizes Tasks",
      description: "FlowSync instantly categorizes and prioritizes the workload.",
      icon: <Bot size={28} className="text-purple-400" />
    },
    {
      title: "Track Progress",
      description: "Watch your team crush tasks with real-time visual insights.",
      icon: <TrendingUp size={28} className="text-amber-400" />
    },
    {
      title: "Achieve Goals",
      description: "Hit your targets consistently with zero management overhead.",
      icon: <Trophy size={28} className="text-rose-400" />
    }
  ];

  return (
    <section className="py-40 bg-[#000000] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
            How FlowSync Works
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            From chaos to clarity in 5 simple steps.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-purple-500/30 to-rose-500/0 md:-translate-x-1/2"></div>
          
          <div className="space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  key={idx} 
                  className={`relative flex items-center md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''} group`}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 -translate-x-[11px] md:-translate-x-1/2 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center z-20 group-hover:scale-150 transition-transform duration-500">
                    <div className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white group-hover:shadow-[0_0_10px_#fff] transition-all"></div>
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Card Content - Borderless Cinematic */}
                  <div className="w-full pl-16 md:pl-0 md:w-5/12">
                    <div className="relative group-hover:translate-x-0 md:group-hover:-translate-x-2 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                      
                      <div className="relative z-10 p-4">
                        <div className="flex items-center gap-6 mb-4">
                          <div className={`w-16 h-16 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/[0.05] group-hover:bg-white/[0.05] transition-colors shadow-[0_0_30px_rgba(255,255,255,0.02)]`}>
                            {step.icon}
                          </div>
                          <span className="text-7xl font-black text-white/[0.02] absolute right-4 top-0 select-none pointer-events-none group-hover:text-white/[0.05] transition-colors">
                            0{idx + 1}
                          </span>
                          <h3 className="text-3xl font-medium text-white tracking-tight">{step.title}</h3>
                        </div>
                        <p className="text-slate-400 text-xl font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
