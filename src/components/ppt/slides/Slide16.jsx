import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide16() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center text-center">
      <motion.h1 variants={anim} className="text-[84px] md:text-[96px] font-[800] text-[#ffffff] mb-[30px] text-center">Key Features</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[50px] text-center">What Makes It Special</motion.h2>
      <div className="w-full max-w-[1200px] flex justify-between gap-[40px] text-left">
        <motion.div variants={anim} className="flex-1 bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[32px] rounded-[16px]">
          <h3 className="text-[28px] font-[700] text-[#ffffff] mb-[20px]">Instant Loading</h3>
          <p className="text-[20px] md:text-[22px] text-[#b0b0b0] font-[400] leading-[1.6]">
            Because Ledger is a Progressive Web App (PWA) that uses your browser's local storage, there is zero loading time. The moment you open the app, your data is already there. No waiting for a server to respond.
          </p>
        </motion.div>
        <motion.div variants={anim} className="flex-1 bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[32px] rounded-[16px]">
          <h3 className="text-[28px] font-[700] text-[#ffffff] mb-[20px]">Private AI Analysis</h3>
          <p className="text-[20px] md:text-[22px] text-[#b0b0b0] font-[400] leading-[1.6]">
            When you ask the AI Coach a question, it quickly sends only the relevant context to the Groq API. We do not store your chat history anywhere, and Groq's high-speed inference means you get answers in milliseconds.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
