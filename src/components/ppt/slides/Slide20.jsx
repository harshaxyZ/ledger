import React from 'react';
import { motion } from 'framer-motion';
export default function Slide20() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#000000] flex flex-col items-center justify-center">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
        className="text-[120px] md:text-[150px] font-bold text-[#ffffff] tracking-widest mb-[20px]"
      >
        THANK YOU
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
        className="text-[40px] text-[#ff3333] font-bold tracking-widest"
      >
        ANY QUESTIONS?
      </motion.h2>
    </div>
  );
}
