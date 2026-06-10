import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide05() {
  const rows = [
    { app: "Mint", approach: "Cloud Database", key: "Bank Sync", lim: "Sells data to ad networks" },
    { app: "YNAB", approach: "Cloud App", key: "Envelope method", lim: "Requires monthly paid subscription" },
    { app: "Expensify", approach: "Cloud App", key: "Receipt scans", lim: "Major privacy concerns" },
    { app: "Ledger", approach: "Local PWA", key: "100% Offline + AI", lim: "Data stays on one device", highlight: true }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Survey</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Looking At Competitors</motion.h2>
      
      <div className="w-full max-w-[1200px] text-left rounded-[16px] overflow-hidden bg-[#121212] border border-[#333333]">
        <motion.div initial="hidden" animate="show" variants={anim} className="grid grid-cols-4 bg-[#1a1a1a] border-b border-[#333333]">
          <div className="p-[24px] text-[24px] text-[#ffffff] font-bold">App Name</div>
          <div className="p-[24px] text-[24px] text-[#ffffff] font-bold">Architecture</div>
          <div className="p-[24px] text-[24px] text-[#ffffff] font-bold">Main Feature</div>
          <div className="p-[24px] text-[24px] text-[#ffffff] font-bold">Drawbacks</div>
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="show">
          {rows.map((r, i) => (
            <motion.div variants={anim} key={i} className={`grid grid-cols-4 border-b border-[#333333] ${r.highlight ? 'bg-[rgba(255,51,51,0.1)] border-l-[8px] border-l-[#ff3333]' : 'bg-transparent'}`}>
              <div className={`p-[24px] text-[22px] font-bold ${r.highlight ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`}>{r.app}</div>
              <div className="p-[24px] text-[22px] text-[#d0d0d0]">{r.approach}</div>
              <div className="p-[24px] text-[22px] text-[#d0d0d0]">{r.key}</div>
              <div className="p-[24px] text-[22px] text-[#d0d0d0]">{r.lim}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
