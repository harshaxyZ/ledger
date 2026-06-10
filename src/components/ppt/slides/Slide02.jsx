import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Slide02() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center items-center text-center">
      <motion.h1 variants={item} className="text-[120px] font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter leading-none mb-4">
        LEDGER
      </motion.h1>
      <motion.h2 variants={item} className="text-4xl text-white/70 font-light mb-16 tracking-wide">
        Private by Design.<br/>Offline by Default.
      </motion.h2>
      <motion.div variants={item} className="w-24 h-[1px] bg-white/20 mb-16"></motion.div>
      <motion.p variants={item} className="text-2xl text-white/50 max-w-3xl leading-relaxed mb-24">
        A modern expense tracker built for students who want complete control over their finances without giving up privacy.
      </motion.p>
      <motion.div variants={item} className="flex gap-16 text-left">
        <div>
          <p className="text-white/40 text-sm tracking-widest uppercase mb-2">Team Members</p>
          <p className="text-xl">Harsha N</p>
          <p className="text-xl">Harshith R Goniger</p>
          <p className="text-xl">Hemanth Kumar KP</p>
          <p className="text-xl">Jathin K M</p>
          <p className="text-xl">Kishan Kumar R</p>
          <p className="text-xl">Kishan M</p>
        </div>
        <div>
          <p className="text-white/40 text-sm tracking-widest uppercase mb-2">Guide Name</p>
          <p className="text-xl mb-6">Sheeba S</p>
          <p className="text-white/40 text-sm tracking-widest uppercase mb-2">Department</p>
          <p className="text-xl">Computer Science & Engineering</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
