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

export default function Slide10() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12 leading-tight">
          EVERY RUPEE ACCOUNTED FOR
        </motion.h1>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/80 mb-8">
          Every transaction is organized chronologically.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/60 mb-8">
          Powerful filtering helps users locate records instantly.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/60 mb-12">
          The history system provides transparency and accountability for daily spending.
        </motion.p>
        
        <motion.h3 variants={item} className="text-white/40 tracking-widest uppercase mb-6 text-sm font-bold">Highlighted Features</motion.h3>
        <motion.div variants={item} className="flex flex-wrap gap-4">
          <span className="px-6 py-3 bg-[#111] rounded-full border border-white/10 text-lg">Search</span>
          <span className="px-6 py-3 bg-[#111] rounded-full border border-white/10 text-lg">Filtering</span>
          <span className="px-6 py-3 bg-[#111] rounded-full border border-white/10 text-lg">Category Tracking</span>
          <span className="px-6 py-3 bg-[#111] rounded-full border border-white/10 text-lg">Date Grouping</span>
        </motion.div>
      </div>
      <div className="w-1/2 flex justify-center">
        <PhoneMockup src="/ppt/screenshot_dashboard_data.png" alt="History" />
      </div>
    </motion.div>
  );
}
