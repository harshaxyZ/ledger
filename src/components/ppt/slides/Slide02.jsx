import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.15 } } };
const itemFade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } };
const cardAnim = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Slide02() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-[72px] text-[#ffffff] font-[700] leading-[1.2] mb-[40px]"
      >
        Introduction
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }}
        className="text-[32px] text-[#ff3333] font-[500] leading-[1.2] mb-[50px]"
      >
        The Need for Financial Privacy
      </motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="text-[22px] text-[#b0b0b0] leading-[1.7] max-w-[900px] mb-[60px]">
        <motion.span variants={itemFade}>In 2026, every financial app demands your data. </motion.span>
        <motion.span variants={itemFade}>Bank details, spending habits, location — all uploaded to corporate servers and sold to advertisers. </motion.span>
        <motion.span variants={itemFade}>Ledger was built on one belief: your money is your business. </motion.span>
        <motion.span variants={itemFade}>It is a 100% offline Android expense tracker that stores everything locally. </motion.span>
        <motion.span variants={itemFade}>No cloud. No signup. No data harvesting. </motion.span>
        <motion.span variants={itemFade}>With an AI-powered financial coach, smart budget alerts, and visual spending insights, Ledger gives you complete control without ever compromising your privacy.</motion.span>
      </motion.div>
      
      <motion.div variants={container} initial="hidden" animate="show" className="flex gap-[20px]">
        <motion.div variants={cardAnim} className="bg-[#161616] p-[24px] rounded-[16px] w-[200px]">
          <div className="text-[36px] text-[#ffffff] font-bold mb-[8px]">100%</div>
          <div className="text-[16px] text-[#666666]">Offline</div>
        </motion.div>
        <motion.div variants={cardAnim} className="bg-[#161616] p-[24px] rounded-[16px] w-[200px]">
          <div className="text-[36px] text-[#ffffff] font-bold mb-[8px]">Zero</div>
          <div className="text-[16px] text-[#666666]">Data Shared</div>
        </motion.div>
        <motion.div variants={cardAnim} className="bg-[#161616] p-[24px] rounded-[16px] w-[200px]">
          <div className="text-[36px] text-[#ffffff] font-bold mb-[8px]">2 Sec</div>
          <div className="text-[16px] text-[#666666]">To Log</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
