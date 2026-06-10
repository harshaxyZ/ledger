import React from 'react';
import { motion } from 'framer-motion';
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const rowAnim = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
const container = { show: { transition: { staggerChildren: 0.1 } } };
export default function Slide18() {
  const rows = [
    { f: "Data Storage", y: "Cloud", m: "Cloud", l: "100% Local" },
    { f: "Account Required", y: "Yes", m: "Yes", l: "No" },
    { f: "Offline Access", y: "Poor", m: "None", l: "Complete" },
    { f: "AI Assistant", y: "No", m: "No", l: "Yes (Groq)" },
    { f: "Cost", y: "$84/yr", m: "Ad-supported", l: "Free" }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Comparison</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Ledger vs Industry Standard</motion.h2>
      
      <div className="w-full max-w-[1200px] text-left rounded-[16px] overflow-hidden bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)]">
        <motion.div initial="hidden" animate="show" variants={anim} className="grid grid-cols-4 bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.1)]">
          <div className="p-[20px] text-[24px] text-[#ffffff] font-bold">Feature</div>
          <div className="p-[20px] text-[24px] text-[#ffffff] font-bold">YNAB</div>
          <div className="p-[20px] text-[24px] text-[#ffffff] font-bold">Mint</div>
          <div className="p-[20px] text-[24px] text-[#ff3333] font-bold">Ledger</div>
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="show">
          {rows.map((r, i) => (
            <motion.div variants={rowAnim} key={i} className="grid grid-cols-4 border-b border-[rgba(255,255,255,0.05)]">
              <div className="p-[20px] text-[22px] text-[#ffffff] font-bold">{r.f}</div>
              <div className="p-[20px] text-[22px] text-[#d0d0d0]">{r.y}</div>
              <div className="p-[20px] text-[22px] text-[#d0d0d0]">{r.m}</div>
              <div className="p-[20px] text-[22px] text-[#ff3333] font-bold">{r.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
