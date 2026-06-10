import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide09() {
  const DownArrow = () => (
    <motion.div variants={anim} className="flex justify-center w-full my-[15px]">
      <svg width="60" height="30" viewBox="0 0 40 30" fill="none">
        <path d="M20 0 V20 M10 10 L20 20 L30 10" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="opacity-30"/>
      </svg>
    </motion.div>
  );
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[84px] md:text-[96px] font-[800] text-[#ffffff] mb-[30px] text-center">Architecture</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[50px] text-center">How The App Is Structured</motion.h2>
      
      <motion.div variants={container} className="w-full max-w-[1000px] flex flex-col">
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[28px] rounded-[16px] flex flex-col items-center">
          <div className="text-[24px] font-[700] text-[#ff3333] tracking-widest mb-[20px]">USER INTERFACE</div>
          <div className="flex gap-[20px] w-full justify-center">
            {["Dashboard View", "Transactions List", "Charts & Graphs", "AI Chat Interface"].map((b, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.05)] px-[20px] py-[16px] rounded-[12px] text-[20px] font-[700] text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
        <DownArrow />
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[28px] rounded-[16px] flex flex-col items-center">
          <div className="text-[24px] font-[700] text-[#ff3333] tracking-widest mb-[20px]">LOGIC & CONTROLLERS</div>
          <div className="flex gap-[20px] w-full justify-center">
            {["State Management", "Data Filtering", "Budget Calculation", "Groq API Handler"].map((b, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.05)] px-[20px] py-[16px] rounded-[12px] text-[20px] font-[700] text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
        <DownArrow />
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[28px] rounded-[16px] flex flex-col items-center">
          <div className="text-[24px] font-[700] text-[#ff3333] tracking-widest mb-[20px]">STORAGE LAYER</div>
          <div className="flex gap-[20px] w-full justify-center">
            {["Browser IndexedDB", "Local Storage", "Service Workers"].map((b, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.05)] px-[20px] py-[16px] rounded-[12px] text-[20px] font-[700] text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
