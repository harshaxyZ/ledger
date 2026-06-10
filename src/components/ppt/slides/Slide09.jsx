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

export default function Slide09() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12">
          TRACK EVERYTHING
        </motion.h1>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/80 mb-8">
          The dashboard provides a quick overview of income, expenses, balance, and budget status.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/60 mb-12">
          Users immediately understand their financial position without navigating through multiple screens.
        </motion.p>
        
        <motion.h3 variants={item} className="text-white/40 tracking-widest uppercase mb-6 text-sm font-bold">Key Features</motion.h3>
        <motion.div variants={item} className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Income Tracking</p>
          </div>
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Expense Tracking</p>
          </div>
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Net Balance Monitoring</p>
          </div>
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Budget Alerts</p>
          </div>
        </motion.div>
      </div>
      <div className="w-1/2 flex justify-center">
        <PhoneMockup src="/ppt/screenshot_dashboard.png" alt="Dashboard" />
      </div>
    </motion.div>
  );
}
