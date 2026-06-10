import React from 'react';
import { motion } from 'framer-motion';

export default function Slide16() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">AI Coach & Budget System</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Smart Features That Make a Difference</h2>
      
      <div className="w-full max-w-[900px] flex justify-between text-left">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
          className="w-[45%]"
        >
          <h3 className="text-[28px] text-[#ffffff] leading-[1.2] mb-[16px]">Ledger Coach</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">
            An AI-powered financial advisor built into the app. It reads your spending data locally, generates personalized tips, answers finance questions, and suggests budget adjustments. Powered by Groq's ultra-fast LLM inference for near-instant responses. The AI never stores conversation history or personal data.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }}
          className="w-[45%]"
        >
          <h3 className="text-[28px] text-[#ffffff] leading-[1.2] mb-[16px]">Budget System</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">
            Users set monthly budgets per category. The app tracks progress in real-time and sends alerts when approaching limits. Overspending triggers visual warnings on the dashboard. Budgets reset automatically each month. All calculations happen on-device using local data only.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
