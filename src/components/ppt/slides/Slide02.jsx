import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide02() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px] leading-tight">Introduction</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[40px]">The Need for Financial Privacy</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="text-[24px] md:text-[28px] text-[#d0d0d0] leading-[1.7] max-w-[1100px] mb-[60px] w-full text-center">
        <motion.p variants={anim} className="mb-4">In 2026, every financial app demands your data. Bank details, spending habits, location — all uploaded to corporate servers and sold to advertisers.</motion.p>
        <motion.p variants={anim} className="mb-4">Ledger was built on one belief: your money is your business.</motion.p>
        <motion.p variants={anim}>It is a 100% offline Android expense tracker. No cloud. No signup. No data harvesting.</motion.p>
      </motion.div>
      
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-3 gap-[24px] w-full max-w-[1200px]">
        <motion.div variants={anim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[32px] rounded-[16px]">
          <div className="text-[48px] text-[#ffffff] font-bold mb-[8px]">100%</div>
          <div className="text-[20px] text-[#666666]">Offline Operation</div>
        </motion.div>
        <motion.div variants={anim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[32px] rounded-[16px]">
          <div className="text-[48px] text-[#ffffff] font-bold mb-[8px]">Zero</div>
          <div className="text-[20px] text-[#666666]">Data Harvested</div>
        </motion.div>
        <motion.div variants={anim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[32px] rounded-[16px]">
          <div className="text-[48px] text-[#ffffff] font-bold mb-[8px]">2 Sec</div>
          <div className="text-[20px] text-[#666666]">Fast Logging</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
