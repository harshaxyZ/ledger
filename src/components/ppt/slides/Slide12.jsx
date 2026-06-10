import React from 'react';
import { motion } from 'framer-motion';

export default function Slide12() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[20px]">Results</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-bold font-[500] mb-[20px]">Dashboard View</motion.h2>
      
      <div className="w-full max-w-[1300px] flex justify-between items-center text-left">
        <motion.div 
          initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[60%] flex justify-center"
        >
          <img src="/image_1.png" alt="Dashboard" className="w-full max-h-[60vh] rounded-[16px] border border-[#222222] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] object-contain" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="w-[35%]"
        >
          <h3 className="text-[28px] text-[#ffffff] mb-[20px]">Dashboard Overview</h3>
          <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">
            The home screen provides an instant snapshot of financial health. Users see today's spending, monthly totals, and recent transactions at a glance. The 'Add Expense' button enables two-second logging. Bottom navigation provides quick access to History, Insights, and AI Coach.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
