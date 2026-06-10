import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide06() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[84px] md:text-[96px] font-[800] text-[#ffffff] mb-[30px] text-center">Old Systems</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[50px] text-center">How Current Trackers Work</motion.h2>
      
      <div className="w-full max-w-[1200px] flex justify-between gap-[40px] text-left">
        <motion.div variants={anim} className="flex-1 bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[32px] rounded-[16px]">
          <h3 className="text-[24px] md:text-[28px] text-[#ffffff] mb-[20px] font-[700]">The Cloud Model</h3>
          <p className="text-[20px] md:text-[22px] text-[#b0b0b0] font-[400] leading-[1.6]">
            Most trackers operate on a centralized cloud model. When you open the app, it connects to a server. When you log an expense, it is sent over the internet and saved in a massive company database alongside millions of other users.
          </p>
        </motion.div>
        
        <motion.div variants={anim} className="flex-1 bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[32px] rounded-[16px]">
          <h3 className="text-[24px] md:text-[28px] text-[#ffffff] mb-[20px] font-[700]">Why It Is Bad</h3>
          <ul className="text-[20px] md:text-[22px] text-[#b0b0b0] font-[400] leading-[1.6] list-disc list-inside space-y-[10px]">
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
