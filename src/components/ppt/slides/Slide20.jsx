import React from 'react';
import { motion } from 'framer-motion';

export default function Slide20() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1.0, opacity: 1 }} transition={{ duration: 0.5 }}
        className="text-[64px] text-[#ffffff] leading-[1.2] mb-[30px]"
      >
        Thank You
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
        className="text-[24px] text-[#a0a0a0] leading-[1.2] mb-[40px]"
      >
        Questions & Discussion
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.6 }}
        className="text-[18px] text-[#a0a0a0] flex flex-col gap-[8px]"
      >
        <p>GitHub: github.com/harshaxyZ/ledger</p>
        <p>Live Demo: ledger67.vercel.app</p>
      </motion.div>
    </div>
  );
}
