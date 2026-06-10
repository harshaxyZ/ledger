import React from 'react';
import { motion } from 'framer-motion';
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide12() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[15px]">Results</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[40px]">Dashboard View</motion.h2>
      <div className="w-full max-w-[1200px] flex justify-between items-center text-left">
        <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-[55%] flex justify-center">
          <img src="/image_1.png" alt="Screenshot" className="w-full max-h-[60vh] object-contain rounded-[20px] border-[2px] border-[rgba(255,255,255,0.1)] shadow-2xl" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="w-[40%] bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] font-bold text-[#ffffff] mb-[24px]">Dashboard Overview</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7] whitespace-pre-line">The home screen provides an instant snapshot of financial health.

Users see today's spending, monthly totals, and recent transactions at a glance. Bottom navigation provides quick access to History, Insights, and AI Coach.</p>
        </motion.div>
      </div>
    </div>
  );
}
