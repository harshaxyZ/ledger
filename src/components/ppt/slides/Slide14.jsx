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

export default function Slide14() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-16 text-center">
        WORKS ANYWHERE
      </motion.h1>
      
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.p variants={item} className="text-3xl leading-relaxed text-white mb-6 font-medium">
          Ledger is built as a Progressive Web App.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-6">
          The application can be installed directly from the browser. Once installed, it behaves like a native application.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70">
          Even when internet connectivity is unavailable, users can continue tracking expenses normally.
        </motion.p>
      </div>
      
      <motion.div variants={item} className="grid grid-cols-4 gap-6 w-full max-w-5xl mx-auto">
        <div className="bg-[#111] p-10 rounded-3xl border border-white/10 text-center flex flex-col justify-center min-h-[160px]">
          <h2 className="text-2xl font-bold">Installable</h2>
        </div>
        <div className="bg-[#111] p-10 rounded-3xl border border-white/10 text-center flex flex-col justify-center min-h-[160px]">
          <h2 className="text-2xl font-bold">Offline</h2>
        </div>
        <div className="bg-[#111] p-10 rounded-3xl border border-white/10 text-center flex flex-col justify-center min-h-[160px]">
          <h2 className="text-2xl font-bold">Fast</h2>
        </div>
        <div className="bg-[#111] p-10 rounded-3xl border border-white/10 text-center flex flex-col justify-center min-h-[160px]">
          <h2 className="text-2xl font-bold">Reliable</h2>
        </div>
      </motion.div>
    </motion.div>
  );
}
