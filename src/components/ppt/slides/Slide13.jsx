import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide13() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Results</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">Transaction History</motion.h2>
      <div className="w-full max-w-[1100px] flex justify-between items-center text-left">
        <motion.div variants={anim} className="w-[40%] flex justify-center bg-transparent">
          <div className="rounded-[24px] overflow-hidden border-[4px] border-[#222222] shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full max-h-[55vh] flex items-center justify-center bg-[#000000]">
             <img src="/image_2.webp" alt="Screenshot" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          </div>
        </motion.div>
        <motion.div variants={anim} className="w-[50%] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
          <h3 className="text-[24px] md:text-[28px] font-[700] text-[#ffffff] mb-[20px]">Your Complete Log</h3>
          <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6] whitespace-pre-line">This screen acts like your personal bank statement.

Every single time you buy a coffee or pay rent, it is logged here. The transactions are neatly sorted by day and date. It uses different colors to separate your income from your expenses, making it very easy to scan.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
