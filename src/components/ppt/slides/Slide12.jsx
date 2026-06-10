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

export default function Slide12() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12">
          YOUR PERSONAL FINANCE GUIDE
        </motion.h1>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white mb-12">
          Ledger Coach uses AI assistance to help users understand their finances.
        </motion.p>
        
        <motion.h3 variants={item} className="text-white/40 tracking-widest uppercase mb-6 text-sm font-bold">Example Queries</motion.h3>
        <motion.div variants={item} className="flex flex-col gap-4 mb-12">
          <div className="p-5 bg-[#111] rounded-2xl border border-white/5 text-xl">"How can I save more money?"</div>
          <div className="p-5 bg-[#111] rounded-2xl border border-white/5 text-xl">"Where am I overspending?"</div>
          <div className="p-5 bg-[#111] rounded-2xl border border-white/5 text-xl">"Summarize this month."</div>
        </motion.div>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 border-l-4 border-white/30 pl-6">
          The system transforms raw financial data into understandable advice.
        </motion.p>
      </div>
      <div className="w-1/2 flex justify-center">
        <PhoneMockup src="/ppt/screenshot_privacy.png" alt="Coach" />
      </div>
    </motion.div>
  );
}
