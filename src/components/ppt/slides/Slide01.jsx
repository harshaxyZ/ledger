import React from 'react';
import { motion } from 'framer-motion';

export default function Slide01() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#000000]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1.0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 bg-contain bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/slideone.png')" }}
      />
    </div>
  );
}
