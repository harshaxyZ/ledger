import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from '../PhoneMockup';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide13() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12">
          UNDERSTAND YOUR MONEY
        </motion.h1>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white mb-10">
          Ledger automatically analyzes spending patterns. Users can identify:
        </motion.p>
        
        <motion.div variants={item} className="grid grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Highest Spending Category</p>
          </div>
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Average Transaction Value</p>
          </div>
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Total Monthly Spending</p>
          </div>
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Transaction Count</p>
          </div>
        </motion.div>
        
        <motion.p variants={item} className="text-3xl leading-relaxed text-white font-bold">
          Understanding patterns leads to better decisions.
        </motion.p>
      </div>
      <div className="w-1/2 flex justify-center">
        <PhoneMockup src="/ppt/screenshot_insights.png" alt="Insights" />
      </div>
    </motion.div>
  );
}
