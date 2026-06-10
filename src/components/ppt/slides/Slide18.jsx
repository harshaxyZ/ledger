import React from 'react';
import { motion } from 'framer-motion';

export default function Slide18() {
  const rows = [
    { feature: "Data Ownership", ledger: "100% Local", mint: "Corporate Servers", ynab: "Corporate Servers", expensify: "Corporate Servers", bg: "bg-[#0a0a0a]" },
    { feature: "Internet Required", ledger: "No", mint: "Yes", ynab: "Yes", expensify: "Yes", bg: "bg-[#111111]" },
    { feature: "Subscription Fee", ledger: "Free", mint: "Free (ads)", ynab: "Paid", expensify: "Paid", bg: "bg-[#0a0a0a]" },
    { feature: "AI Coach", ledger: "Built-in", mint: "No", ynab: "No", expensify: "No", bg: "bg-[#111111]" },
    { feature: "Privacy", ledger: "Zero Harvesting", mint: "Data For Sale", ynab: "Data Stored", expensify: "Cloud Only", bg: "bg-[#0a0a0a]" },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[20px]">Ledger vs The Competition</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-bold font-[500] mb-[20px]">Why Ledger Stands Out</motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-[1300px] text-left"
      >
        <div className="grid grid-cols-5 bg-[#1a1a1a]">
          <div className="p-[18px] text-[20px] text-[#ffffff]">Feature</div>
          <div className="p-[18px] text-[20px] text-[#ffffff]">Ledger</div>
          <div className="p-[18px] text-[20px] text-[#ffffff]">Mint</div>
          <div className="p-[18px] text-[20px] text-[#ffffff]">YNAB</div>
          <div className="p-[18px] text-[20px] text-[#ffffff]">Expensify</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className={`grid grid-cols-5 ${r.bg} border-b border-[#222222]`}>
            <div className="p-[18px] text-[18px] text-[#b0b0b0]">{r.feature}</div>
            <div className="p-[18px] text-[18px] text-[#ffffff] font-bold">{r.ledger}</div>
            <div className="p-[18px] text-[18px] text-[#b0b0b0]">{r.mint}</div>
            <div className="p-[18px] text-[18px] text-[#b0b0b0]">{r.ynab}</div>
            <div className="p-[18px] text-[18px] text-[#b0b0b0]">{r.expensify}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
