import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } }
};

export default function Slide20() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center items-center text-center">
      <h1 className="text-[140px] font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter leading-none mb-8">
        THANK YOU
      </h1>
      <h2 className="text-4xl text-white/50 font-light tracking-wide mb-32">
        Questions?
      </h2>
      
      <div className="mt-auto pb-12">
        <h3 className="text-3xl font-['Horizon','Outfit',sans-serif] uppercase tracking-widest mb-4">LEDGER</h3>
        <p className="text-white/40 tracking-widest uppercase text-sm">Private by Design. Offline by Default.</p>
      </div>
    </motion.div>
  );
}
