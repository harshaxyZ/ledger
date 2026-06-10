import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide13() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[84px] md:text-[96px] font-[800] text-[#ffffff] mb-[30px] text-center">Results</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[50px] text-center">Transaction History</motion.h2>
      <div className="w-full max-w-[1200px] flex justify-between items-center text-left">
        <motion.div variants={anim} className="w-[45%] flex justify-center bg-transparent">
          <img src="/image_2.webp" alt="Screenshot" className="w-full max-h-[65vh] object-contain mix-blend-lighten" />
        </motion.div>
        <motion.div variants={anim} className="w-[50%] bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[32px] rounded-[16px]">
          <h3 className="text-[28px] font-[700] text-[#ffffff] mb-[24px]">Your Complete Log</h3>
          <p className="text-[20px] md:text-[22px] text-[#b0b0b0] font-[400] leading-[1.6] whitespace-pre-line">This screen acts like your personal bank statement.

Every single time you buy a coffee or pay rent, it is logged here. The transactions are neatly sorted by day and date. It uses different colors to separate your income from your expenses, making it very easy to scan.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
