import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } }
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const arrow = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } }
};

export default function Slide09() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">System Architecture</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">How Ledger is Structured</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[700px] flex flex-col items-center">
        <motion.div variants={item} className="w-full bg-[#1a1a1a] p-[20px]">
          <h3 className="text-[22px] text-[#ffffff] leading-[1.2] mb-[8px]">Presentation Layer</h3>
          <p className="text-[16px] text-[#a0a0a0] leading-[1.6]">Jetpack Compose UI | Dashboard | History | Insights | AI Coach Chat</p>
        </motion.div>
        
        <motion.div variants={arrow} className="text-[20px] text-[#a0a0a0] my-[5px]">▼</motion.div>
        
        <motion.div variants={item} className="w-full bg-[#151515] p-[20px]">
          <h3 className="text-[22px] text-[#ffffff] leading-[1.2] mb-[8px]">Business Logic Layer</h3>
          <p className="text-[16px] text-[#a0a0a0] leading-[1.6]">ViewModels | Repository Pattern | Budget Engine | AI Prompt Builder | Notification Manager</p>
        </motion.div>
        
        <motion.div variants={arrow} className="text-[20px] text-[#a0a0a0] my-[5px]">▼</motion.div>
        
        <motion.div variants={item} className="w-full bg-[#101010] p-[20px]">
          <h3 className="text-[22px] text-[#ffffff] leading-[1.2] mb-[8px]">Data Layer</h3>
          <p className="text-[16px] text-[#a0a0a0] leading-[1.6]">Room Database (SQLite) | Local SharedPreferences | On-Device File Storage</p>
        </motion.div>
      </motion.div>
      
      <p className="text-[16px] text-[#a0a0a0] mt-[40px]">All layers operate entirely on-device. No network calls for core functionality.</p>
    </div>
  );
}
