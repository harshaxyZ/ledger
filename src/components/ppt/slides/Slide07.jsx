import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
};
const pill = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1.0, transition: { duration: 0.3 } }
};

export default function Slide07() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Proposed System</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Ledger — A Better Approach</h2>
      
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
        className="text-[20px] text-[#a0a0a0] leading-[1.6] max-w-[800px] mb-[40px]"
      >
        Ledger reimagines expense tracking by removing the cloud entirely. All data lives in a local SQLite database on the user's Android device. The app features a clean dashboard for daily and monthly spending, a full transaction history with search and filters, visual category breakdowns, smart budget alerts, and an AI coach powered by Groq AI that provides personalized financial advice — all without ever sending data to a server.
      </motion.p>
      
      <motion.div variants={container} initial="hidden" animate="show" className="flex gap-[16px]">
        <motion.div variants={pill} className="bg-[#111111] px-[24px] py-[12px] rounded-[8px] text-[16px] text-[#ffffff]">100% Offline</motion.div>
        <motion.div variants={pill} className="bg-[#111111] px-[24px] py-[12px] rounded-[8px] text-[16px] text-[#ffffff]">Zero Cloud</motion.div>
        <motion.div variants={pill} className="bg-[#111111] px-[24px] py-[12px] rounded-[8px] text-[16px] text-[#ffffff]">Groq AI Coach</motion.div>
        <motion.div variants={pill} className="bg-[#111111] px-[24px] py-[12px] rounded-[8px] text-[16px] text-[#ffffff]">Budget Alerts</motion.div>
      </motion.div>
    </div>
  );
}
