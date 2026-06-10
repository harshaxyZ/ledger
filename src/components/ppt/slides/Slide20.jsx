import React from 'react';
import { motion } from 'framer-motion';

export default function Slide20() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1.0, opacity: 1 }} transition={{ duration: 0.5 }}
        className="text-[84px] text-[#ffffff] font-[700] mb-[15px]"
      >
        Thank You
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
        className="text-[32px] text-[#ff3333] font-bold font-[500] mb-[20px]"
      >
        Questions & Discussion
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.6 }}
        className="text-[20px] text-[#666666] flex flex-col gap-[10px]"
      >
        <p>github.com/harshaxyZ/ledger</p>
        <p>ledger67.vercel.app</p>
      </motion.div>
    </div>
  );
}
