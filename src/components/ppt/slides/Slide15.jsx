import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Slide15() {
  const techs = ["React", "Vite", "Tailwind CSS", "Framer Motion", "Local Storage", "Groq AI", "PWA", "Vercel"];
  
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-20 text-center">
        BUILT WITH MODERN WEB TECHNOLOGIES
      </motion.h1>
      
      <motion.div variants={item} className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-20">
        {techs.map((tech, idx) => (
          <div key={idx} className="px-10 py-6 bg-[#111] rounded-2xl border border-white/10 text-2xl font-medium">
            {tech}
          </div>
        ))}
      </motion.div>
      
      <motion.p variants={item} className="text-3xl text-center text-white/60 max-w-4xl mx-auto leading-relaxed">
        These technologies were selected to maximize performance, maintainability, and user experience.
      </motion.p>
    </motion.div>
  );
}
