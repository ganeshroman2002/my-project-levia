import React, { useState } from 'react';
import { Menu, X, Circle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
          <div className="w-6 h-6 rounded-full border-[3px] border-white flex items-center justify-center relative">
            <div className="absolute -left-3 w-2 h-[2px] bg-white"></div>
          </div>
          <span>FlowSync</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {['Product', 'How it works', 'Features', 'Mission', 'Company'].map((item) => (
            <a key={item} href="#" className="text-sm text-slate-300 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
            Enterprise
          </button>
          <button className="px-5 py-2 text-sm font-medium text-slate-950 bg-white rounded-full hover:bg-slate-200 transition-colors">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-slate-950 border-b border-white/5 p-6 flex flex-col gap-4 shadow-2xl">
          {['Product', 'How it works', 'Features', 'Mission', 'Company'].map((item) => (
            <a key={item} href="#" className="text-slate-300 hover:text-white transition-colors py-2">
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
            <button className="w-full px-5 py-3 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
              Enterprise
            </button>
            <button className="w-full px-5 py-3 text-sm font-medium text-slate-950 bg-white rounded-full hover:bg-slate-200 transition-colors">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
