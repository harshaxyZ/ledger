import React from 'react';
import { motion } from 'framer-motion';
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide16() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px] leading-tight">Key Features</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">What Makes It Special</motion.h2>
      <div className="w-full max-w-[1200px] flex justify-between gap-[4%] text-left">
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] font-bold text-[#ffffff] mb-[24px]">Instant Loading</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7]">
            Because Ledger is a Progressive Web App (PWA) that uses your browser's local storage, there is zero loading time. The moment you open the app, your data is already there. No waiting for a server to respond.
          </p>
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] font-bold text-[#ffffff] mb-[24px]">Private AI Analysis</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7]">
            When you ask the AI Coach a question, it quickly sends only the relevant context to the Groq API. We do not store your chat history anywhere, and Groq's high-speed inference means you get answers in milliseconds.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
