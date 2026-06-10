import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide05() {
  const rows = [
    { app: "Mint (Intuit)", approach: "Cloud-based aggregation", key: "Automatic bank sync", lim: "Sells user data to advertisers" },
    { app: "YNAB", approach: "Zero-based budgeting", key: "Envelope method", lim: "Requires paid subscription, stores data online" },
    { app: "Expensify", approach: "Receipt scanning OCR", key: "Expense capture", lim: "Cloud-only, major privacy concerns" },
    { app: "Ledger (Ours)", approach: "Local-first architecture", key: "100% offline + AI coach", lim: "Limited to single device (by design)", highlight: true }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Literature Survey</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Review of Existing Systems</motion.h2>
      
      <div className="w-full max-w-[1200px] text-left rounded-[16px] overflow-hidden bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)]">
        <motion.div initial="hidden" animate="show" variants={anim} className="grid grid-cols-4 bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.1)]">
          <div className="p-[20px] text-[22px] text-[#ffffff] font-bold">App / Study</div>
          <div className="p-[20px] text-[22px] text-[#ffffff] font-bold">Approach</div>
          <div className="p-[20px] text-[22px] text-[#ffffff] font-bold">Key Feature</div>
          <div className="p-[20px] text-[22px] text-[#ffffff] font-bold">Limitation</div>
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="show">
          {rows.map((r, i) => (
            <motion.div variants={anim} key={i} className={`grid grid-cols-4 border-b border-[rgba(255,255,255,0.05)] ${r.highlight ? 'bg-[rgba(255,51,51,0.1)] border-l-[6px] border-l-[#ff3333]' : 'bg-transparent'}`}>
              <div className={`p-[20px] text-[20px] font-bold ${r.highlight ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`}>{r.app}</div>
              <div className="p-[20px] text-[20px] text-[#d0d0d0]">{r.approach}</div>
              <div className="p-[20px] text-[20px] text-[#d0d0d0]">{r.key}</div>
              <div className="p-[20px] text-[20px] text-[#d0d0d0]">{r.lim}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
