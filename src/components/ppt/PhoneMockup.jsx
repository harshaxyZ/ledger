import React from 'react';
import { motion } from 'framer-motion';

export default function PhoneMockup({ src, alt }) {
  return (
    <motion.div 
      className="relative mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Phone Hardware Frame */}
      <div className="relative w-[340px] h-[720px] bg-black rounded-[3.5rem] border-[12px] border-[#2A2A2A] shadow-2xl overflow-hidden ring-1 ring-white/10 flex flex-col justify-center items-center">
        
        {/* Dynamic Island */}
        <div className="absolute top-0 inset-x-0 h-8 flex justify-center z-50">
          <div className="w-[120px] h-[30px] bg-black rounded-b-3xl mt-1 flex justify-between items-center px-4">
            <div className="w-2 h-2 rounded-full bg-[#111111] shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]"></div>
            <div className="w-2 h-2 rounded-full bg-[#050505]"></div>
          </div>
        </div>

        {/* Inner Screen */}
        <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-zinc-950 flex flex-col pt-10">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto object-cover object-top"
          />
        </div>

        {/* Hardware Buttons (Decorative) */}
        {/* Volume Up */}
        <div className="absolute -left-[14px] top-[150px] w-1 h-12 bg-[#2A2A2A] rounded-l-md border-y border-l border-white/10"></div>
        {/* Volume Down */}
        <div className="absolute -left-[14px] top-[210px] w-1 h-12 bg-[#2A2A2A] rounded-l-md border-y border-l border-white/10"></div>
        {/* Action Button */}
        <div className="absolute -left-[14px] top-[90px] w-1 h-8 bg-[#2A2A2A] rounded-l-md border-y border-l border-white/10"></div>
        {/* Power Button */}
        <div className="absolute -right-[14px] top-[180px] w-1 h-16 bg-[#2A2A2A] rounded-r-md border-y border-r border-white/10"></div>
      </div>
    </motion.div>
  );
}
