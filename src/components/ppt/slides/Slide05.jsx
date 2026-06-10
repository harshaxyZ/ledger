import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide05() {
  const rows = [
    { app: "Mint", approach: "Cloud Database", key: "Bank Sync", lim: "Sells data to ad networks" },
    { app: "YNAB", approach: "Cloud App", key: "Envelope method", lim: "Requires monthly paid subscription" },
    { app: "Expensify", approach: "Cloud App", key: "Receipt scans", lim: "Major privacy concerns" },
    { app: "Ledger", approach: "Local PWA", key: "100% Offline + AI", lim: "Data stays on one device", highlight: true }
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[84px] md:text-[96px] font-[800] text-[#ffffff] mb-[30px] text-center">Survey</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[50px] text-center">Looking At Competitors</motion.h2>
      
      <div className="w-full max-w-[1200px] text-left rounded-[16px] overflow-hidden bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)]">
        <motion.div variants={anim} className="grid grid-cols-4 bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.06)]">
          <div className="p-[24px] text-[22px] text-[#ffffff] font-[700]">App Name</div>
          <div className="p-[24px] text-[22px] text-[#ffffff] font-[700]">Architecture</div>
          <div className="p-[24px] text-[22px] text-[#ffffff] font-[700]">Main Feature</div>
          <div className="p-[24px] text-[22px] text-[#ffffff] font-[700]">Drawbacks</div>
        </motion.div>
        <motion.div variants={container}>
          {rows.map((r, i) => (
            <motion.div variants={anim} key={i} className={`grid grid-cols-4 border-b border-[rgba(255,255,255,0.06)] ${r.highlight ? 'bg-[rgba(255,51,51,0.1)] border-l-[4px] border-l-[#ff3333]' : 'bg-transparent'}`}>
              <div className={`p-[24px] text-[20px] font-[700] ${r.highlight ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`}>{r.app}</div>
              <div className="p-[24px] text-[20px] text-[#b0b0b0] font-[400]">{r.approach}</div>
              <div className="p-[24px] text-[20px] text-[#b0b0b0] font-[400]">{r.key}</div>
              <div className="p-[24px] text-[20px] text-[#b0b0b0] font-[400]">{r.lim}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
