import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide05() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-16">
        OUR OBJECTIVES
      </motion.h1>
      
      <div className="grid grid-cols-2 gap-8 mb-20 max-w-5xl">
        <motion.div variants={item} className="bg-[#111] p-12 rounded-3xl border border-white/10 group hover:bg-[#1a1a1a] transition-colors">
          <h2 className="text-3xl font-bold mb-4">Privacy First</h2>
          <p className="text-xl text-white/60">Keep financial data exclusively on the user's device.</p>
        </motion.div>
        
        <motion.div variants={item} className="bg-[#111] p-12 rounded-3xl border border-white/10 group hover:bg-[#1a1a1a] transition-colors">
          <h2 className="text-3xl font-bold mb-4">Offline First</h2>
          <p className="text-xl text-white/60">Allow full functionality without internet.</p>
        </motion.div>
        
        <motion.div variants={item} className="bg-[#111] p-12 rounded-3xl border border-white/10 group hover:bg-[#1a1a1a] transition-colors">
          <h2 className="text-3xl font-bold mb-4">Financial Awareness</h2>
          <p className="text-xl text-white/60">Help users understand their true spending habits.</p>
        </motion.div>
        
        <motion.div variants={item} className="bg-[#111] p-12 rounded-3xl border border-white/10 group hover:bg-[#1a1a1a] transition-colors">
          <h2 className="text-3xl font-bold mb-4">Ease of Use</h2>
          <p className="text-xl text-white/60">Reduce friction in daily expense tracking.</p>
        </motion.div>
      </div>

      <div className="max-w-4xl">
        <motion.p variants={item} className="text-2xl text-white/60 mb-4">
          The goal of Ledger is not to become a banking platform.
        </motion.p>
        <motion.p variants={item} className="text-3xl text-white font-medium">
          The goal is to make personal finance tracking simple, private, and accessible.
        </motion.p>
      </div>
    </motion.div>
  );
}
