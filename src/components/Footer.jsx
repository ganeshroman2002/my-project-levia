import React from 'react';
import { Layers } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Integrations", "Pricing", "Changelog", "Docs"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Contact", "Partners"]
    },
    {
      title: "Resources",
      links: ["Community", "Help Center", "Webinars", "API Reference", "Status"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"]
    }
  ];

  const socialIcons = [
    // Twitter / X
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>,
    // LinkedIn
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
    // GitHub
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
    // YouTube
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
  ];

  return (
    <footer className="bg-[#000000] pt-24 pb-12 relative overflow-hidden border-t border-white/[0.02]">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 md:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-shadow">
                <Layers className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">FlowSync</span>
            </a>
            <p className="text-slate-400 mb-8 max-w-sm text-lg">
              The AI-native operating system for modern teams. Stop managing tasks, start executing ideas.
            </p>
            
            <div className="flex gap-4">
              {socialIcons.map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="text-white font-semibold mb-6 text-lg">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500">
            © {new Date().getFullYear()} FlowSync AI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500">
            <span>Designed in the future.</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
            <span>All systems operational.</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
