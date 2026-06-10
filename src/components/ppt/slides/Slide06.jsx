import React from 'react';
import { motion } from 'framer-motion';
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide06() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Old Systems</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">How Current Trackers Work</motion.h2>
      
      <div className="w-full max-w-[1200px] flex justify-between gap-[4%] text-left">
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] text-[#ffffff] mb-[24px] font-bold">The Cloud Model</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7]">
            Most trackers operate on a centralized cloud model. When you open the app, it connects to a server. When you log an expense, it is sent over the internet and saved in a massive company database alongside millions of other users.
          </p>
        </motion.div>
        
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] text-[#ffffff] mb-[24px] font-bold">Why It Is Bad</h3>
          <ul className="text-[24px] text-[#d0d0d0] leading-[1.7] list-disc list-inside space-y-3">
            <li>Your data can be stolen in server hacks.</li>
            <li>You cannot use the app without internet.</li>
            <li>The company analyzes your spending habits.</li>
            <li>They force you to view ads or pay monthly.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
