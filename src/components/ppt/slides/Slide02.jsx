import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide02() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px] leading-tight">Introduction</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[40px]">The Need for Privacy</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="text-[24px] md:text-[28px] text-[#d0d0d0] leading-[1.7] max-w-[1100px] mb-[60px] w-full text-center">
        <motion.p variants={anim} className="mb-4">Right now, every single financial app on the market demands your personal data. They want to know what you buy, where you shop, and how much money you make.</motion.p>
        <motion.p variants={anim} className="mb-4">This data is uploaded to their cloud servers, analyzed, and often sold to advertisers. We believe your money is your private business.</motion.p>
        <motion.p variants={anim}>Ledger was built to solve this. It is a 100% offline, privacy-first web application. There is no cloud. There is no login. Everything stays on your device forever.</motion.p>
      </motion.div>
      
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-3 gap-[24px] w-full max-w-[1200px]">
        <motion.div variants={anim} className="bg-[#121212] border border-[#333333] p-[32px] rounded-[16px]">
          <div className="text-[48px] text-[#ffffff] font-bold mb-[8px]">100%</div>
          <div className="text-[20px] text-[#888888]">Offline Operation</div>
        </motion.div>
        <motion.div variants={anim} className="bg-[#121212] border border-[#333333] p-[32px] rounded-[16px]">
          <div className="text-[48px] text-[#ffffff] font-bold mb-[8px]">Zero</div>
          <div className="text-[20px] text-[#888888]">Data Harvesting</div>
        </motion.div>
        <motion.div variants={anim} className="bg-[#121212] border border-[#333333] p-[32px] rounded-[16px]">
          <div className="text-[48px] text-[#ffffff] font-bold mb-[8px]">PWA</div>
          <div className="text-[20px] text-[#888888]">Install Anywhere</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
