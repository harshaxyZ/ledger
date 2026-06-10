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

export default function Slide11() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-16 text-center">
        STAY WITHIN LIMITS
      </motion.h1>
      
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.p variants={item} className="text-2xl leading-relaxed text-white mb-6">
          Users can define spending limits for different categories.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-6">
          When spending approaches the limit, Ledger immediately displays visual warnings.
        </motion.p>
        <motion.p variants={item} className="text-3xl leading-relaxed font-bold text-white">
          This creates awareness before overspending occurs.
        </motion.p>
      </div>
      
      <motion.div variants={item} className="flex justify-center items-center gap-6 w-full max-w-6xl mx-auto">
        <div className="flex-1 h-32 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold">Budget Created</div>
        <div className="text-white/30 text-3xl">→</div>
        <div className="flex-1 h-32 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold">Expense Added</div>
        <div className="text-white/30 text-3xl">→</div>
        <div className="flex-1 h-32 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold">Limit Checked</div>
        <div className="text-white/30 text-3xl">→</div>
        <div className="flex-1 h-32 bg-white text-black rounded-2xl border border-white flex items-center justify-center text-xl font-bold">Warning Triggered</div>
      </motion.div>
    </motion.div>
  );
}
