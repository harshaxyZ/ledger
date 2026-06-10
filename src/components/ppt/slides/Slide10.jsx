// Slide 10: Architecture
import React from 'react';
import { motion } from 'framer-motion';
const Slide10 = () => (
  <div className="w-full h-full flex flex-col justify-center items-center max-w-5xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-16 w-full text-left">Architecture</p>
    
    <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center">
      <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="p-8 border border-white/20 rounded-2xl w-64 text-center bg-[#111]">
        <p className="font-bold text-2xl">React UI</p>
        <p className="text-sm text-white/50 mt-2">Components</p>
      </motion.div>
      
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} className="text-white/50 rotate-90 md:rotate-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </motion.div>
      
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="p-8 border-2 border-white rounded-2xl w-64 text-center bg-white text-black">
        <p className="font-bold text-2xl">Custom Hooks</p>
        <p className="text-sm text-black/60 mt-2">State Management</p>
      </motion.div>
      
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} className="text-white/50 rotate-90 md:rotate-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </motion.div>
      
      <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.0 }} className="p-8 border border-white/20 rounded-2xl w-64 text-center bg-[#111]">
        <p className="font-bold text-2xl">LocalStorage</p>
        <p className="text-sm text-white/50 mt-2">Browser DB</p>
      </motion.div>
    </div>
  </div>
);
export default Slide10;