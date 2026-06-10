import React from 'react';
import { motion } from 'framer-motion';

export default function Slide01() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <motion.img 
        src="/ppt/college_title.png" 
        alt="College Title" 
        className="max-w-[90%] max-h-[90%] object-contain rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
