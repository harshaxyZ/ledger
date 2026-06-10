import React from 'react';
import { motion } from 'framer-motion';

export default function Slide01() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/mockups_collage.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.4)]"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          className="text-[20px] text-[#666666] tracking-[0.3em] uppercase mb-[20px]"
        >
          Final Year Project
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[84px] text-[#ffffff] font-[800] leading-[1.1] mb-[10px]"
        >
          LEDGER
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[32px] text-[#ff3333] font-[500] mb-[30px]"
        >
          Privacy-First Expense Tracker
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.45 }}
          className="text-[22px] text-[#b0b0b0]"
        >
          Your money. Your data. Your device.
        </motion.p>
      </div>
    </div>
  );
}
