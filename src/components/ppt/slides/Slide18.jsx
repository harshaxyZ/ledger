import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide18() {
  const rows = [
    { f: "Data Storage", y: "Company Cloud", m: "Company Cloud", l: "On Your Device" },
    { f: "App Loading Speed", y: "Slow", m: "Average", l: "Instant" },
    { f: "Offline Access", y: "Very Poor", m: "None", l: "100% Complete" },
    { f: "AI Assistant", y: "No", m: "No", l: "Yes (Groq)" },
    { f: "Pricing", y: "$84 / Year", m: "Shows Ads", l: "Completely Free" }
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Comparison</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">Ledger vs The Industry</motion.h2>
      
      <div className="w-full max-w-[1100px] text-left rounded-[16px] overflow-hidden bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
        <motion.div variants={anim} className="grid grid-cols-4 bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.08)]">
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">Feature</div>
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">YNAB App</div>
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">Mint App</div>
          <div className="p-[20px] text-[20px] text-[#ff3333] font-[700]">Ledger App</div>
        </motion.div>
        <motion.div variants={container}>
          {rows.map((r, i) => (
            <motion.div variants={anim} key={i} className="grid grid-cols-4 border-b border-[rgba(255,255,255,0.08)]">
              <div className="p-[20px] text-[18px] text-[#ffffff] font-[700]">{r.f}</div>
              <div className="p-[20px] text-[18px] text-[#b0b0b0] font-[400]">{r.y}</div>
              <div className="p-[20px] text-[18px] text-[#b0b0b0] font-[400]">{r.m}</div>
              <div className="p-[20px] text-[18px] text-[#ff3333] font-[700]">{r.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
