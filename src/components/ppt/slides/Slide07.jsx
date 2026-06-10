import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function Slide07() {
  const Arrow = () => (
    <div className="flex items-center w-[60px] justify-center mx-[10px]">
      <motion.svg width="60" height="20" viewBox="0 0 60 20" variants={anim}>
        <line x1="0" y1="10" x2="45" y2="10" stroke="#ffffff" strokeWidth="4" />
        <polygon points="45,0 60,10 45,20" fill="#ffffff" />
      </motion.svg>
    </div>
  );
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[84px] md:text-[96px] font-[800] text-[#ffffff] mb-[30px] text-center">Our System</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[50px] text-center">The Local-First Approach</motion.h2>
      
      <motion.p variants={anim} className="text-[20px] md:text-[22px] text-[#b0b0b0] font-[400] leading-[1.6] max-w-[1000px] mb-[50px] mx-auto w-full text-center">
        Ledger completely removes the cloud. We built it as a Progressive Web App (PWA). All data is saved instantly inside your device's browser using IndexedDB. We only connect to the internet when you ask the Groq AI Coach a question, and we never save those chats.
      </motion.p>
      
      <motion.div variants={container} className="flex items-center justify-center w-full max-w-[1200px]">
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] px-[24px] py-[24px] rounded-[16px] w-[200px] text-center">
          <div className="text-[24px] font-[700] text-[#ffffff]">Input</div><div className="text-[18px] text-[#888888] font-[400] mt-[8px]">Log Expense</div>
        </motion.div>
        <Arrow />
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] px-[24px] py-[24px] rounded-[16px] w-[200px] text-center">
          <div className="text-[24px] font-[700] text-[#ffffff]">Storage</div><div className="text-[18px] text-[#888888] font-[400] mt-[8px]">IndexedDB</div>
        </motion.div>
        <Arrow />
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] px-[24px] py-[24px] rounded-[16px] w-[200px] text-center">
          <div className="text-[24px] font-[700] text-[#ffffff]">Coach</div><div className="text-[18px] text-[#888888] font-[400] mt-[8px]">Groq LLM</div>
        </motion.div>
        <Arrow />
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] px-[24px] py-[24px] rounded-[16px] w-[200px] text-center">
          <div className="text-[24px] font-[700] text-[#ffffff]">Output</div><div className="text-[18px] text-[#888888] font-[400] mt-[8px]">Dashboard</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
