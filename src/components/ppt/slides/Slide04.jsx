import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};
const item = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export default function Slide04() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Objectives</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">What Ledger Aims to Achieve</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[800px] flex flex-col gap-[40px] text-left">
        <motion.div variants={item}>
          <h3 className="text-[24px] text-[#ffffff] leading-[1.2] mb-[8px]">Complete Privacy</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">Store all financial data locally on the device. Zero cloud sync. Zero external servers.</p>
        </motion.div>
        <motion.div variants={item}>
          <h3 className="text-[24px] text-[#ffffff] leading-[1.2] mb-[8px]">Offline-First Design</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">Log expenses, view insights, and manage budgets without any internet connection.</p>
        </motion.div>
        <motion.div variants={item}>
          <h3 className="text-[24px] text-[#ffffff] leading-[1.2] mb-[8px]">AI-Powered Guidance</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">Provide personalized financial coaching using on-device AI to help users save and spend smarter.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
