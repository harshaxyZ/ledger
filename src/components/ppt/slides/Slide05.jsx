import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide05() {
  const rows = [
    { app: "Mint", approach: "Cloud Database", key: "Bank Sync", lim: "Sells data to ads" },
    { app: "YNAB", approach: "Cloud App", key: "Envelope method", lim: "Requires subscription" },
    { app: "Expensify", approach: "Cloud App", key: "Receipt scans", lim: "Privacy concerns" },
    { app: "Ledger", approach: "Local PWA", key: "Offline + AI", lim: "Data stays on device", highlight: true }
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Survey</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">Looking At Competitors</motion.h2>
      
      <div className="w-full max-w-[1100px] text-left rounded-[16px] overflow-hidden bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
        <motion.div variants={anim} className="grid grid-cols-4 bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.08)]">
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">App Name</div>
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">Architecture</div>
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">Main Feature</div>
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">Drawbacks</div>
        </motion.div>
        <motion.div variants={container}>
          {rows.map((r, i) => (
            <motion.div variants={anim} key={i} className={`grid grid-cols-4 border-b border-[rgba(255,255,255,0.08)] ${r.highlight ? 'bg-[rgba(255,51,51,0.1)] border-l-[4px] border-l-[#ff3333]' : 'bg-transparent'}`}>
              <div className={`p-[20px] text-[18px] font-[700] ${r.highlight ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`}>{r.app}</div>
              <div className="p-[20px] text-[18px] text-[#b0b0b0] font-[400]">{r.approach}</div>
              <div className="p-[20px] text-[18px] text-[#b0b0b0] font-[400]">{r.key}</div>
              <div className="p-[20px] text-[18px] text-[#b0b0b0] font-[400]">{r.lim}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
