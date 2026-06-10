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

export default function Slide04() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12 text-center">
        WHY DO WE NEED LEDGER?
      </motion.h1>
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.p variants={item} className="text-3xl leading-relaxed text-white mb-6">
          Managing personal expenses sounds simple, but most students struggle to track where their money goes.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-6">
          Existing applications often introduce unnecessary complexity.
        </motion.p>
        <motion.div variants={item} className="text-2xl leading-relaxed text-white/50 mb-10 flex flex-col gap-2">
          <span>Many require account creation.</span>
          <span>Many collect financial data.</span>
          <span>Many stop functioning properly without internet access.</span>
        </motion.div>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white border-l-4 border-white pl-6 py-2 inline-block">
          As a result, users lose trust, privacy, and consistency.
        </motion.p>
      </div>
      <motion.div variants={item} className="grid grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
        <div className="bg-[#111] p-10 rounded-3xl border border-white/5">
          <h3 className="text-white/40 tracking-widest uppercase mb-4 text-sm font-bold">Privacy</h3>
          <p className="text-xl">Financial data is stored externally by third parties.</p>
        </div>
        <div className="bg-[#111] p-10 rounded-3xl border border-white/5">
          <h3 className="text-white/40 tracking-widest uppercase mb-4 text-sm font-bold">Complexity</h3>
          <p className="text-xl">Too many unnecessary features slow down input.</p>
        </div>
        <div className="bg-[#111] p-10 rounded-3xl border border-white/5">
          <h3 className="text-white/40 tracking-widest uppercase mb-4 text-sm font-bold">Dependency</h3>
          <p className="text-xl">Internet is required for basic functionality.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
