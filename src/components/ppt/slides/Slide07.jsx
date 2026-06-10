import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } } };
const boxAnim = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.4 } } };
const pillAnim = { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.3 } } };

export default function Slide07() {
  const pathVariants = {
    hidden: { pathLength: 0 },
    show: { pathLength: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const Arrow = () => (
    <div className="flex items-center w-[40px] justify-center mx-[10px]">
      <motion.svg width="40" height="20" viewBox="0 0 40 20" variants={boxAnim}>
        <motion.line x1="0" y1="10" x2="30" y2="10" stroke="#333333" strokeWidth="2" variants={pathVariants} />
        <motion.polygon points="30,5 40,10 30,15" fill="#333333" variants={pillAnim} />
      </motion.svg>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[20px]">Proposed System</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-bold font-[500] mb-[20px]">Ledger — A Better Approach</motion.h2>
      
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-[22px] text-[#b0b0b0] leading-[1.7] max-w-[1200px] mb-[20px]">
        Ledger reimagines expense tracking by removing the cloud entirely. All data lives in a local SQLite database on the user's Android device. The app features a clean dashboard, full transaction history with search and filters, visual category breakdowns, smart budget alerts, and an AI coach powered by Groq AI — all without ever sending data to a server.
      </motion.p>
      
      <motion.div variants={container} initial="hidden" animate="show" className="flex items-center justify-center mb-[20px]">
        <motion.div variants={boxAnim} className="bg-[#161616] border border-[#333333] px-[28px] py-[20px] rounded-[12px]">
          <div className="text-[18px] text-[#ffffff]">User Input</div><div className="text-[14px] text-[#666666]">(expense data)</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[#161616] border border-[#333333] px-[28px] py-[20px] rounded-[12px]">
          <div className="text-[18px] text-[#ffffff]">Local Processing</div><div className="text-[14px] text-[#666666]">(Room DB)</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[#161616] border border-[#333333] px-[28px] py-[20px] rounded-[12px]">
          <div className="text-[18px] text-[#ffffff]">AI Analysis</div><div className="text-[14px] text-[#666666]">(Groq API)</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[#161616] border border-[#333333] px-[28px] py-[20px] rounded-[12px]">
          <div className="text-[18px] text-[#ffffff]">Smart Output</div><div className="text-[14px] text-[#666666]">(insights + alerts)</div>
        </motion.div>
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }} className="flex gap-[16px]">
        {["100% Offline", "Zero Cloud", "Groq AI Coach", "Budget Alerts"].map((pill, i) => (
          <div key={i} className="bg-[#1a1a1a] px-[28px] py-[14px] rounded-[10px] text-[16px] text-[#ffffff]">{pill}</div>
        ))}
      </motion.div>
    </div>
  );
}
