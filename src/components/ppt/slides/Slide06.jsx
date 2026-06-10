import React from 'react';
import { motion } from 'framer-motion';
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide06() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Existing System</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">How Current Trackers Work</motion.h2>
      
      <div className="w-full max-w-[1200px] flex justify-between gap-[4%] text-left">
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] text-[#ffffff] mb-[24px] font-bold">How They Work</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7]">
            Most trackers follow a cloud-first model. Users create accounts, link bank credentials, and all data uploads to remote servers. The app categorizes spending and generates reports. This requires constant internet and places absolute trust in third-party security.
          </p>
        </motion.div>
        
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] text-[#ffffff] mb-[24px] font-bold">Key Limitations</h3>
          <ul className="text-[24px] text-[#d0d0d0] leading-[1.7] list-disc list-inside space-y-3">
            <li>Data stored externally = huge breach risk</li>
            <li>Requires internet for basic functions</li>
            <li>Subscription fees or ad-supported models</li>
            <li>No control over true data deletion</li>
            <li>Complex onboarding with unnecessary permissions</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
