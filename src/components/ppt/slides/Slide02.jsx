import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide02() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[84px] md:text-[96px] font-[800] text-[#ffffff] mb-[30px] leading-tight text-center">Introduction</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[50px] text-center">The Need for Privacy</motion.h2>
      
      <motion.div variants={anim} className="text-[20px] md:text-[22px] text-[#b0b0b0] font-[400] leading-[1.6] max-w-[1000px] mb-[40px] w-full text-center space-y-[20px]">
        <p>Right now, every single financial app on the market demands your personal data. They want to know what you buy, where you shop, and how much money you make.</p>
        <p>This data is uploaded to their cloud servers, analyzed, and often sold to advertisers. We believe your money is your private business.</p>
        <p>Ledger was built to solve this. It is a 100% offline, privacy-first web application. There is no cloud. There is no login. Everything stays on your device forever.</p>
      </motion.div>
      
      <motion.div variants={container} className="grid grid-cols-3 gap-[30px] w-full max-w-[1200px]">
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[28px] rounded-[16px]">
          <div className="text-[40px] text-[#ffffff] font-[800] mb-[12px]">100%</div>
          <div className="text-[20px] text-[#b0b0b0] font-[400]">Offline Operation</div>
        </motion.div>
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[28px] rounded-[16px]">
          <div className="text-[40px] text-[#ffffff] font-[800] mb-[12px]">Zero</div>
          <div className="text-[20px] text-[#b0b0b0] font-[400]">Data Harvesting</div>
        </motion.div>
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[28px] rounded-[16px]">
          <div className="text-[40px] text-[#ffffff] font-[800] mb-[12px]">PWA</div>
          <div className="text-[20px] text-[#b0b0b0] font-[400]">Install Anywhere</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
