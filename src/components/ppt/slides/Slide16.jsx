import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide16() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-20 text-center">
        HOW IT WORKS
      </motion.h1>
      
      <motion.div variants={item} className="flex flex-col items-center gap-4 w-full max-w-3xl mx-auto mb-16">
        <div className="w-full py-5 bg-[#111] rounded-xl border border-white/10 text-center text-xl font-bold">User Interface</div>
        <div className="text-white/30">↓</div>
        <div className="w-full py-5 bg-[#111] rounded-xl border border-white/10 text-center text-xl font-bold">React Components</div>
        <div className="text-white/30">↓</div>
        <div className="w-full py-5 bg-[#111] rounded-xl border border-white/10 text-center text-xl font-bold">Business Logic</div>
        <div className="text-white/30">↓</div>
        <div className="w-full py-5 bg-[#111] rounded-xl border border-white/10 text-center text-xl font-bold">Local Storage</div>
        <div className="text-white/30">↓</div>
        <div className="w-full py-5 bg-[#111] rounded-xl border border-white/10 text-center text-xl font-bold">Analytics Engine</div>
        <div className="text-white/30">↓</div>
        <div className="w-full py-5 bg-[#111] rounded-xl border border-white/10 text-center text-xl font-bold">UI Updates</div>
      </motion.div>
      
      <motion.p variants={item} className="text-2xl text-center text-white/80 max-w-3xl mx-auto">
        All operations occur locally, reducing latency and improving privacy.
      </motion.p>
    </motion.div>
  );
}
