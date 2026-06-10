import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide12() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[84px] md:text-[96px] font-[800] text-[#ffffff] mb-[30px] text-center">Results</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[50px] text-center">Dashboard View</motion.h2>
      <div className="w-full max-w-[1200px] flex justify-between items-center text-left">
        <motion.div variants={anim} className="w-[45%] flex justify-center bg-transparent">
          <img src="/image_1.webp" alt="Screenshot" className="w-full max-h-[65vh] object-contain mix-blend-lighten" />
        </motion.div>
        <motion.div variants={anim} className="w-[50%] bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[32px] rounded-[16px]">
          <h3 className="text-[28px] font-[700] text-[#ffffff] mb-[24px]">The Home Screen</h3>
          <p className="text-[20px] md:text-[22px] text-[#b0b0b0] font-[400] leading-[1.6] whitespace-pre-line">When you open Ledger, this is the very first thing you see.

We designed it to be dark, minimal, and extremely easy to read. It immediately tells you how much money you have spent today, and how much you have spent this whole month. You don't have to navigate through menus just to check your balance.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
