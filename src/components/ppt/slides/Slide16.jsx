import React from 'react';
import { motion } from 'framer-motion';
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide16() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px] leading-tight">AI Coach & Budgets</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Smart Features That Matter</motion.h2>
      <div className="w-full max-w-[1200px] flex justify-between gap-[4%] text-left">
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] font-bold text-[#ffffff] mb-[24px]">Ledger Coach Engine</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7]">
            An AI advisor built into the app. It reads spending data locally, generates personalized tips, and answers finance questions. Powered by Groq's ultra-fast LLM inference.
          </p>
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] font-bold text-[#ffffff] mb-[24px]">Dynamic Budgeting</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7]">
            Users set monthly limits. The app tracks progress locally and warns the user when spending crosses 80% or 100% of the threshold, preventing end-of-month surprises.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
