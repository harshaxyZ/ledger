import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };
const boxAnim = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.4 } } };
const pathVariants = { hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 0.4, ease: "easeOut" } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Slide07() {
  const Arrow = () => (
    <div className="flex items-center w-[80px] justify-center mx-[10px]">
      <motion.svg width="80" height="20" viewBox="0 0 80 20" variants={boxAnim}>
        <motion.line x1="0" y1="10" x2="60" y2="10" stroke="#ffffff" strokeWidth="4" variants={pathVariants} />
        <motion.polygon points="60,0 80,10 60,20" fill="#ffffff" variants={boxAnim} />
      </motion.svg>
    </div>
  );
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Proposed System</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Ledger — A Better Approach</motion.h2>
      
      <motion.p initial="hidden" animate="show" variants={anim} className="text-[24px] md:text-[28px] text-[#d0d0d0] leading-[1.7] max-w-[1100px] mb-[60px] mx-auto w-full">
        Ledger reimagines expense tracking by removing the cloud entirely. All data lives in a local SQLite database on the Android device. Clean dashboard, offline search, smart budget alerts, and an AI coach powered by Groq — all without sending data to a server.
      </motion.p>
      
      <motion.div variants={container} initial="hidden" animate="show" className="flex items-center justify-center w-full max-w-[1200px] mb-[60px]">
        <motion.div variants={boxAnim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] px-[40px] py-[30px] rounded-[16px] w-[220px]">
          <div className="text-[24px] font-bold text-[#ffffff]">Input</div><div className="text-[18px] text-[#888888] mt-2">Expense Data</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] px-[40px] py-[30px] rounded-[16px] w-[220px]">
          <div className="text-[24px] font-bold text-[#ffffff]">Process</div><div className="text-[18px] text-[#888888] mt-2">Room DB</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] px-[40px] py-[30px] rounded-[16px] w-[220px]">
          <div className="text-[24px] font-bold text-[#ffffff]">AI Engine</div><div className="text-[18px] text-[#888888] mt-2">Groq API</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] px-[40px] py-[30px] rounded-[16px] w-[220px]">
          <div className="text-[24px] font-bold text-[#ffffff]">Output</div><div className="text-[18px] text-[#888888] mt-2">Insights</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
