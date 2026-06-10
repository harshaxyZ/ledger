import React from 'react';
import { motion } from 'framer-motion';

export default function Slide18() {
  const rows = [
    { feature: "Data Ownership", ledger: "100% Local", mint: "Corporate Servers", ynab: "Corporate Servers", expensify: "Corporate Servers", bg: "bg-[#0a0a0a]" },
    { feature: "Internet Required", ledger: "No", mint: "Yes", ynab: "Yes", expensify: "Yes", bg: "bg-[#050505]" },
    { feature: "Subscription Fee", ledger: "Free", mint: "Free (with ads)", ynab: "Paid", expensify: "Paid", bg: "bg-[#0a0a0a]" },
    { feature: "AI Coach", ledger: "Built-in", mint: "No", ynab: "No", expensify: "No", bg: "bg-[#050505]" },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Ledger vs The Competition</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Why Ledger Stands Out</h2>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="w-full max-w-[900px] text-left"
      >
        <div className="grid grid-cols-5 gap-[1px] bg-[#111111] border-b border-[#222222]">
          <div className="p-[16px] text-[18px] text-[#ffffff]">Feature</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">Ledger</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">Mint</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">YNAB</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">Expensify</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className={`grid grid-cols-5 gap-[1px] ${r.bg} border-b border-[#222222]`}>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.feature}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.ledger}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.mint}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.ynab}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.expensify}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
