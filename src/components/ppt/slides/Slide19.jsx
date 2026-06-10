import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide19() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-20 text-center">
        KEY TAKEAWAYS
      </motion.h1>
      
      <div className="max-w-4xl mx-auto">
        <motion.p variants={item} className="text-3xl leading-relaxed text-white font-medium mb-10 text-center">
          Ledger demonstrates that powerful expense tracking does not require sacrificing privacy.
        </motion.p>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-10 text-center">
          By combining offline-first architecture with modern web technologies, the application provides a fast, secure, and intuitive experience.
        </motion.p>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 text-center">
          The project successfully achieves its objectives while creating a strong foundation for future improvements.
        </motion.p>
      </div>
    </motion.div>
  );
}
