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

export default function Slide17() {
  const outcomes = ["Offline Functionality", "Instant Logging", "Privacy Focused", "Responsive Design", "AI Assistance"];
  
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-20 text-center">
        PROJECT OUTCOMES
      </motion.h1>
      
      <motion.div variants={item} className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-24">
        {outcomes.map((outcome, idx) => (
          <div key={idx} className="px-10 py-8 bg-[#111] rounded-3xl border border-white/10 text-2xl font-bold text-center">
            {outcome}
          </div>
        ))}
      </motion.div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.p variants={item} className="text-2xl text-white/70 mb-4">
          Testing confirmed smooth operation across desktop and mobile devices.
        </motion.p>
        <motion.p variants={item} className="text-3xl text-white font-medium">
          The final product successfully meets the project's primary objectives.
        </motion.p>
      </div>
    </motion.div>
  );
}
