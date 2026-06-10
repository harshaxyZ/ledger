import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide18() {
  const future = [
    "Custom Categories", 
    "Recurring Transactions", 
    "Advanced Analytics", 
    "Multi Device Sync", 
    "Receipt Scanning", 
    "Enhanced AI Features"
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-20 text-center">
        WHAT COMES NEXT?
      </motion.h1>
      
      <motion.div variants={item} className="grid grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
        {future.map((f, idx) => (
          <div key={idx} className="bg-[#111] p-10 rounded-3xl border border-white/5 flex items-center justify-center min-h-[160px] text-center">
            <h3 className="text-2xl font-bold">{f}</h3>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
