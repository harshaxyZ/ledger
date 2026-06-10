import React from 'react';
import { motion } from 'framer-motion';
export default function Slide20() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#000000] flex flex-col items-center justify-center">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="text-[100px] md:text-[120px] font-[800] text-[#ffffff] tracking-widest mb-[20px]"
      >
        THANK YOU
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
        className="text-[32px] md:text-[36px] text-[#ff3333] font-[700] tracking-widest"
      >
        ANY QUESTIONS?
      </motion.h2>
    </div>
  );
}
