import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } };
const pill = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.3 } } };

export default function Slide19() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Conclusion</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">What We Achieved</motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        className="text-[22px] text-[#b0b0b0] leading-[1.7] max-w-[900px] mb-[60px]"
      >
        Ledger successfully delivers a fully offline, privacy-first expense tracking solution for Android. We achieved all core objectives: local data storage with Room database, instant expense logging, visual spending insights, smart budget alerts, and an AI-powered financial coach using Groq AI. The app proves that powerful financial tools do not require sacrificing privacy. Every rupee tracked stays on the user's device. Ledger is not just an app — it is a statement that your financial data belongs to you, and no one else.
      </motion.p>
      
      <motion.div variants={container} initial="hidden" animate="show" className="flex gap-[16px]">
        <motion.div variants={pill} className="bg-[#1a1a1a] px-[32px] py-[14px] rounded-[10px] text-[18px] text-[#ffffff]">Privacy Achieved</motion.div>
        <motion.div variants={pill} className="bg-[#1a1a1a] px-[32px] py-[14px] rounded-[10px] text-[18px] text-[#ffffff]">AI Integrated</motion.div>
        <motion.div variants={pill} className="bg-[#1a1a1a] px-[32px] py-[14px] rounded-[10px] text-[18px] text-[#ffffff]">Fully Offline</motion.div>
      </motion.div>
    </div>
  );
}
