import React from 'react';
import { motion } from 'framer-motion';

export default function Slide02() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
        className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]"
      >
        Introduction
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }}
        className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[40px]"
      >
        Ledger — Privacy-First Expense Tracking
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.9 }}
        className="text-[20px] text-[#a0a0a0] leading-[1.6] max-w-[800px]"
      >
        In today's digital world, every financial app demands your data. Bank details, spending habits, location — all uploaded to corporate servers. Ledger was built on one belief: your money is your business. It is a 100% offline Android expense tracker that stores everything locally on your device. No cloud. No signup. No data harvesting. With an AI-powered financial coach, smart budget alerts, and visual spending insights, Ledger gives you complete control without compromising privacy.
      </motion.p>
    </div>
  );
}
