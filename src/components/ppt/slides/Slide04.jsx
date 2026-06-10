import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide04() {
  const objectives = [
    { head: "Complete Privacy", body: "Store all financial data locally on the device. Zero cloud sync. Zero external servers." },
    { head: "Offline-First Design", body: "Log expenses, view insights, and manage budgets without any internet connection. Works everywhere." },
    { head: "AI-Powered Guidance", body: "Personalized financial coaching using on-device AI to help users save money and spend smarter." }
  ];
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Objectives</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">What Ledger Aims to Achieve</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex gap-[24px] text-left">
        {objectives.map((o, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] text-[#ffffff] mb-[16px] font-bold">{o.head}</h3>
            <p className="text-[20px] text-[#d0d0d0] leading-[1.7]">{o.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
