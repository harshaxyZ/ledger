import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.18 } } };
const cardAnim = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Slide04() {
  const objectives = [
    { head: "Complete Privacy", body: "Store all financial data locally on the device. Zero cloud sync. Zero external servers." },
    { head: "Offline-First Design", body: "Log expenses, view insights, and manage budgets without any internet connection. Works everywhere." },
    { head: "AI-Powered Guidance", body: "Personalized financial coaching using on-device AI to help users save money and spend smarter." }
  ];

  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Objectives</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">What Ledger Aims to Achieve</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1000px] flex gap-[24px] text-left">
        {objectives.map((o, i) => (
          <motion.div variants={cardAnim} key={i} className="flex-1 bg-[#161616] p-[32px] rounded-[16px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#1a1a1a] mb-[24px]"></div>
            <h3 className="text-[28px] text-[#ffffff] mb-[16px]">{o.head}</h3>
            <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">{o.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
