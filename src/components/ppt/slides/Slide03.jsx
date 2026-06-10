import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from '../PhoneMockup';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide03() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12">
          WHAT IS LEDGER?
        </motion.h1>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-8">
          Ledger is a privacy-first expense tracking application built as a Progressive Web App.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-8">
          Most finance apps depend on cloud servers and user accounts. Ledger takes a different approach.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-8">
          Everything works directly on the user's device. Expenses, budgets, insights, and history remain private and accessible even without internet connectivity.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white font-medium">
          Ledger focuses on speed, simplicity, privacy, and financial awareness.
        </motion.p>
      </div>
      <div className="w-1/2 flex justify-center">
        <PhoneMockup src="/ppt/screenshot_dashboard.png" alt="Dashboard" />
      </div>
    </motion.div>
  );
}
