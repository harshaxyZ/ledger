import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide16() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center text-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Key Features</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">What Makes It Special</motion.h2>
      <div className="w-full max-w-[1100px] flex justify-between gap-[30px] text-left">
        <motion.div variants={anim} className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
          <h3 className="text-[24px] md:text-[28px] font-[700] text-[#ffffff] mb-[16px]">Instant Loading</h3>
          <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">
            Because Ledger is a Progressive Web App (PWA) that uses your browser's local storage, there is zero loading time. The moment you open the app, your data is already there. No waiting for a server to respond.
          </p>
        </motion.div>
        <motion.div variants={anim} className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
          <h3 className="text-[24px] md:text-[28px] font-[700] text-[#ffffff] mb-[16px]">Private AI Analysis</h3>
          <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">
            When you ask the AI Coach a question, it quickly sends only the relevant context to the Groq API. We do not store your chat history anywhere, and Groq's high-speed inference means you get answers in milliseconds.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
