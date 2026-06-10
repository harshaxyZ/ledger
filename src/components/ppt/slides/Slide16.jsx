import React from 'react';
import { motion } from 'framer-motion';

export default function Slide16() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">AI Coach & Budget System</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Smart Features That Make a Difference</motion.h2>
      
      <div className="w-full max-w-[1000px] flex justify-between text-left">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="w-[48%] bg-[#161616] p-[32px] rounded-[16px]"
        >
          <h3 className="text-[28px] text-[#ffffff] mb-[20px]">Ledger Coach</h3>
          <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">
            An AI-powered financial advisor built into the app. It reads spending data locally, generates personalized tips, answers finance questions, and suggests budget adjustments. Powered by Groq's ultra-fast LLM inference for near-instant responses. The AI never stores conversation history or personal data.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="w-[48%] bg-[#161616] p-[32px] rounded-[16px]"
        >
          <h3 className="text-[28px] text-[#ffffff] mb-[20px]">Budget System</h3>
          <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">
            Users set monthly budgets per category. The app tracks progress in real-time and sends alerts when approaching limits. Overspending triggers visual warnings on the dashboard. Budgets reset automatically each month. All calculations happen on-device using local data only.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
