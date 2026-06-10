import React from 'react';
import { motion } from 'framer-motion';
export default function Slide01() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#000000]">
      <motion.img 
        src="/slideone.webp" 
        alt="Title Slide" 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1.0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}
