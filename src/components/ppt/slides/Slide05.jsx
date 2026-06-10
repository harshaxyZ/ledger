import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export default function Slide05() {
  const rows = [
    { app: "Mint (Intuit)", approach: "Cloud-based aggregation", key: "Automatic bank sync", lim: "Sells user data to advertisers", bg: "bg-[#0a0a0a]" },
    { app: "YNAB", approach: "Zero-based budgeting", key: "Envelope method", lim: "Requires subscription, stores data online", bg: "bg-[#050505]" },
    { app: "Expensify", approach: "Receipt scanning", key: "OCR expense capture", lim: "Cloud-only, privacy concerns", bg: "bg-[#0a0a0a]" }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Literature Survey</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Review of Existing Systems</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[900px]">
        <motion.div variants={item} className="grid grid-cols-4 gap-[2px] bg-[#111111] border-b border-[#222222]">
          <div className="p-[16px] text-[18px] text-[#ffffff]">App / Study</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">Approach</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">Key Feature</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">Limitation</div>
        </motion.div>
        {rows.map((r, i) => (
          <motion.div variants={item} key={i} className={`grid grid-cols-4 gap-[2px] ${r.bg} border-b border-[#222222]`}>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.app}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.approach}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.key}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.lim}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
