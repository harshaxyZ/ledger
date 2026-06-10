import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide06() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Old Systems</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">How Current Trackers Work</motion.h2>
      
      <div className="w-full max-w-[1100px] flex justify-between gap-[30px] text-left">
        <motion.div variants={anim} className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
          <h3 className="text-[24px] md:text-[28px] text-[#ffffff] mb-[16px] font-[700]">The Cloud Model</h3>
          <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">
            Most trackers operate on a centralized cloud model. When you open the app, it connects to a server. When you log an expense, it is sent over the internet and saved in a massive company database alongside millions of other users.
          </p>
        </motion.div>
        
        <motion.div variants={anim} className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
          <h3 className="text-[24px] md:text-[28px] text-[#ffffff] mb-[16px] font-[700]">Why It Is Bad</h3>
          <ul className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6] list-disc list-inside space-y-[10px]">
            <li>Your data can be stolen in server hacks.</li>
            <li>You cannot use the app without internet.</li>
            <li>The company analyzes your spending habits.</li>
            <li>They force you to view ads or pay monthly.</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
