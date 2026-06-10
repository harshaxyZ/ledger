import React from 'react';
import { motion } from 'framer-motion';
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide14() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[15px]">Results</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[40px]">Ledger Coach</motion.h2>
      <div className="w-full max-w-[1200px] flex justify-between items-center text-left">
        <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-[55%] flex justify-center">
          <img src="/image_3.webp" alt="Screenshot" className="w-[85%] max-h-[65vh] object-contain rounded-[20px] shadow-[0_0_40px_rgba(255,51,51,0.15)]" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="w-[40%] bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] font-bold text-[#ffffff] mb-[24px]">The Groq AI Coach</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7] whitespace-pre-line">This is the smartest feature of our application.

Instead of just showing numbers, Ledger actually talks to you. You can ask it questions like 'Am I spending too much on food?' and the Groq AI will instantly analyze your local data and give you a helpful, human-like response.</p>
        </motion.div>
      </div>
    </div>
  );
}
