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

export default function Slide08() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12">
          THE LEDGER APPROACH
        </motion.h1>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white mb-8">
          Ledger removes unnecessary infrastructure.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-8">
          The application operates directly on the user's device. Transactions are stored locally, and insights are generated instantly.
        </motion.p>
        <motion.p variants={item} className="text-3xl leading-relaxed text-white font-medium">
          The result is a faster and more private experience.
        </motion.p>
      </div>
      
      <div className="w-1/2 flex justify-center">
        <motion.div variants={item} className="flex flex-col items-center gap-6">
          <div className="w-56 h-32 bg-white text-black rounded-2xl flex items-center justify-center text-2xl font-bold shadow-[0_0_40px_rgba(255,255,255,0.2)]">User</div>
          <div className="w-[2px] h-12 bg-white/40"></div>
          <div className="w-56 h-32 bg-[#111] rounded-2xl border-2 border-white/40 flex items-center justify-center text-2xl font-bold">Ledger App</div>
          <div className="w-[2px] h-12 bg-white/40"></div>
          <div className="flex gap-8">
            <div className="w-40 h-32 bg-[#111] rounded-2xl border border-white/20 flex flex-col items-center justify-center text-lg font-medium text-white/70">
              <span>Local</span>
              <span>Storage</span>
            </div>
            <div className="w-40 h-32 bg-[#111] rounded-2xl border border-white/20 flex flex-col items-center justify-center text-lg font-medium text-white/70">
              <span>Instant</span>
              <span>Insights</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
