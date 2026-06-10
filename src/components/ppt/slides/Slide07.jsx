import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function Slide07() {
  const Arrow = () => (
    <div className="flex items-center w-[40px] justify-center mx-[10px]">
      <motion.svg width="40" height="15" viewBox="0 0 40 15" variants={anim}>
        <line x1="0" y1="7.5" x2="30" y2="7.5" stroke="#ffffff" strokeWidth="3" />
        <polygon points="30,0 40,7.5 30,15" fill="#ffffff" />
      </motion.svg>
    </div>
  );
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Our System</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">The Local-First Approach</motion.h2>
      
      <motion.p variants={anim} className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6] max-w-[900px] mb-[40px] mx-auto w-full text-center">
        Ledger completely removes the cloud. We built it as a Progressive Web App (PWA). All data is saved instantly inside your device's browser using IndexedDB. We only connect to the internet when you ask the Groq AI Coach a question.
      </motion.p>
      
      <motion.div variants={container} className="flex items-center justify-center w-full max-w-[1100px]">
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] px-[20px] py-[20px] rounded-[16px] w-[180px] text-center">
          <div className="text-[20px] font-[700] text-[#ffffff]">Input</div><div className="text-[16px] text-[#888888] font-[400] mt-[8px]">Log Expense</div>
        </motion.div>
        <Arrow />
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] px-[20px] py-[20px] rounded-[16px] w-[180px] text-center">
          <div className="text-[20px] font-[700] text-[#ffffff]">Storage</div><div className="text-[16px] text-[#888888] font-[400] mt-[8px]">IndexedDB</div>
        </motion.div>
        <Arrow />
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] px-[20px] py-[20px] rounded-[16px] w-[180px] text-center">
          <div className="text-[20px] font-[700] text-[#ffffff]">Coach</div><div className="text-[16px] text-[#888888] font-[400] mt-[8px]">Groq LLM</div>
        </motion.div>
        <Arrow />
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] px-[20px] py-[20px] rounded-[16px] w-[180px] text-center">
          <div className="text-[20px] font-[700] text-[#ffffff]">Output</div><div className="text-[16px] text-[#888888] font-[400] mt-[8px]">Dashboard</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
