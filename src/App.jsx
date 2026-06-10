import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Metrics from './components/Metrics';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-50 font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />

      <Solution />
      <HowItWorks />
      <Features />
      <Showcase />
      <Metrics />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
