import React from 'react';
import { motion } from 'framer-motion';
const layerContainer = { show: { transition: { staggerChildren: 0.3, delayChildren: 0.3 } } };
const layerAnim = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide09() {
  const DownArrow = () => (
    <motion.div variants={layerAnim} className="flex justify-center w-full my-[15px]">
      <svg width="60" height="40" viewBox="0 0 40 30" fill="none">
        <path d="M20 0 V25 M10 15 L20 25 L30 15" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"/>
      </svg>
    </motion.div>
  );
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Architecture</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[40px]">How The App Is Structured</motion.h2>
      
      <motion.div variants={layerContainer} initial="hidden" animate="show" className="w-full max-w-[1200px] flex flex-col">
        <motion.div variants={layerAnim} className="bg-[#121212] border border-[#333333] p-[32px] rounded-[16px] flex flex-col items-center">
          <div className="text-[24px] font-bold text-[#ff3333] tracking-widest mb-[24px]">USER INTERFACE</div>
          <div className="flex gap-[20px] w-full justify-center">
            {["Dashboard View", "Transactions List", "Charts & Graphs", "AI Chat Interface"].map((b, i) => (
              <div key={i} className="bg-[#222222] px-[24px] py-[16px] rounded-[12px] text-[20px] font-bold text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
        <DownArrow />
        <motion.div variants={layerAnim} className="bg-[#121212] border border-[#333333] p-[32px] rounded-[16px] flex flex-col items-center">
          <div className="text-[24px] font-bold text-[#ff3333] tracking-widest mb-[24px]">LOGIC & CONTROLLERS</div>
          <div className="flex gap-[20px] w-full justify-center">
            {["State Management", "Data Filtering", "Budget Calculation", "Groq API Handler"].map((b, i) => (
              <div key={i} className="bg-[#222222] px-[24px] py-[16px] rounded-[12px] text-[20px] font-bold text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
        <DownArrow />
        <motion.div variants={layerAnim} className="bg-[#121212] border border-[#333333] p-[32px] rounded-[16px] flex flex-col items-center mb-[20px]">
          <div className="text-[24px] font-bold text-[#ff3333] tracking-widest mb-[24px]">STORAGE LAYER</div>
          <div className="flex gap-[20px] w-full justify-center">
            {["Browser IndexedDB", "Local Storage", "Service Workers"].map((b, i) => (
              <div key={i} className="bg-[#222222] px-[24px] py-[16px] rounded-[12px] text-[20px] font-bold text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
