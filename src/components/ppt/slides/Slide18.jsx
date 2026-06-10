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
      <motion.h1 variants={anim} className="text-[84px] md:text-[96px] font-[800] text-[#ffffff] mb-[30px] text-center">Comparison</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[50px] text-center">Ledger vs The Industry</motion.h2>
      
      <div className="w-full max-w-[1200px] text-left rounded-[16px] overflow-hidden bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)]">
        <motion.div variants={anim} className="grid grid-cols-4 bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.06)]">
          <div className="p-[20px] text-[22px] text-[#ffffff] font-[700]">Feature</div>
          <div className="p-[20px] text-[22px] text-[#ffffff] font-[700]">YNAB App</div>
          <div className="p-[20px] text-[22px] text-[#ffffff] font-[700]">Mint App</div>
          <div className="p-[20px] text-[22px] text-[#ff3333] font-[700]">Ledger App</div>
        </motion.div>
        <motion.div variants={container}>
          {rows.map((r, i) => (
            <motion.div variants={anim} key={i} className="grid grid-cols-4 border-b border-[rgba(255,255,255,0.06)]">
              <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">{r.f}</div>
              <div className="p-[20px] text-[20px] text-[#b0b0b0] font-[400]">{r.y}</div>
              <div className="p-[20px] text-[20px] text-[#b0b0b0] font-[400]">{r.m}</div>
              <div className="p-[20px] text-[20px] text-[#ff3333] font-[700]">{r.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
