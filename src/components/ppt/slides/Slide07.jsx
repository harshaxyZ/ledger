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

export default function Slide07() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12">
          CURRENT APPROACHES
        </motion.h1>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white mb-8">
          Most modern expense trackers use cloud databases.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-8">
          Transactions are uploaded to remote servers. Users must create accounts and rely on continuous internet access.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/50">
          While these systems offer synchronization, they also introduce privacy concerns and dependency on third-party infrastructure.
        </motion.p>
      </div>
      
      <div className="w-1/2 flex justify-center">
        <motion.div variants={item} className="flex flex-col items-center gap-6">
          <div className="w-48 h-32 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold">User</div>
          <div className="w-[2px] h-12 bg-white/20"></div>
          <div className="w-48 h-32 bg-white/10 rounded-2xl border border-white/30 flex items-center justify-center text-xl font-bold">Internet</div>
          <div className="w-[2px] h-12 bg-white/20"></div>
          <div className="w-48 h-32 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold">Server</div>
          <div className="w-[2px] h-12 bg-white/20"></div>
          <div className="w-48 h-32 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold">Database</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
