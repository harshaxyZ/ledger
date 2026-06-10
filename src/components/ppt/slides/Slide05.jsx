import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.1 } } };
const rowAnim = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function Slide05() {
  const rows = [
    { app: "Mint (Intuit)", approach: "Cloud-based aggregation", key: "Automatic bank sync", lim: "Sells user data to advertisers", bg: "bg-[#0a0a0a]" },
    { app: "YNAB", approach: "Zero-based budgeting", key: "Envelope method", lim: "Requires paid subscription, stores data online", bg: "bg-[#111111]" },
    { app: "Expensify", approach: "Receipt scanning OCR", key: "Expense capture", lim: "Cloud-only, major privacy concerns", bg: "bg-[#0a0a0a]" },
    { app: "Ledger (Ours)", approach: "Local-first architecture", key: "100% offline + AI coach", lim: "Limited to single device (by design)", bg: "bg-[#111111]", highlight: true }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[20px]">Literature Survey</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-bold font-[500] mb-[20px]">Review of Existing Systems</motion.h2>
      
      <div className="w-full max-w-[1300px] text-left">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="grid grid-cols-4 bg-[#1a1a1a]">
          <div className="p-[16px] text-[20px] text-[#ffffff]">App / Study</div>
          <div className="p-[16px] text-[20px] text-[#ffffff]">Approach</div>
          <div className="p-[16px] text-[20px] text-[#ffffff]">Key Feature</div>
          <div className="p-[16px] text-[20px] text-[#ffffff]">Limitation</div>
        </motion.div>
        
        <motion.div variants={container} initial="hidden" animate="show">
          {rows.map((r, i) => (
            <motion.div variants={rowAnim} key={i} className={`grid grid-cols-4 ${r.bg} border-b border-[#222222] ${r.highlight ? 'border-l-[4px] border-l-[#ff3333]' : ''}`}>
              <div className={`p-[16px] text-[18px] ${r.highlight ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`}>{r.app}</div>
              <div className="p-[16px] text-[18px] text-[#b0b0b0]">{r.approach}</div>
              <div className="p-[16px] text-[18px] text-[#b0b0b0]">{r.key}</div>
              <div className="p-[16px] text-[18px] text-[#b0b0b0]">{r.lim}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
