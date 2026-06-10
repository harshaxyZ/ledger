import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
};
const pill = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1.0, transition: { duration: 0.3 } }
};

export default function Slide19() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
        className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]"
      >
        Conclusion
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
        className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]"
      >
        What We Achieved
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }}
        className="text-[20px] text-[#a0a0a0] leading-[1.6] max-w-[800px] mb-[40px]"
      >
        Ledger successfully delivers a fully offline, privacy-first expense tracking solution for Android. We achieved all core objectives: local data storage with Room database, instant expense logging, visual spending insights, smart budget alerts, and an AI-powered financial coach using Groq AI. The app proves that powerful financial tools do not require sacrificing privacy. Every rupee tracked stays on the user's device. Ledger is not just an app — it is a statement that your financial data belongs to you, and no one else.
      </motion.p>
      
      <motion.div variants={container} initial="hidden" animate="show" className="flex gap-[12px]">
        <motion.div variants={pill} className="bg-[#111111] px-[20px] py-[10px] rounded-[6px] text-[14px] text-[#ffffff]">Privacy Achieved</motion.div>
        <motion.div variants={pill} className="bg-[#111111] px-[20px] py-[10px] rounded-[6px] text-[14px] text-[#ffffff]">AI Integrated</motion.div>
        <motion.div variants={pill} className="bg-[#111111] px-[20px] py-[10px] rounded-[6px] text-[14px] text-[#ffffff]">Fully Offline</motion.div>
      </motion.div>
    </div>
  );
}
