import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.15 } } };
const barAnim = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide11() {
  const modules = [
    { name: "The Main Dashboard", desc: "This is the first screen you see. It gives you a complete summary of your daily and monthly spending. It also has a quick button to add a new expense." },
    { name: "The History Log", desc: "This screen shows every single transaction you have ever made. You can scroll through them, filter by category, or delete mistakes." },
    { name: "The Charts & Insights", desc: "This module takes your boring numbers and turns them into beautiful graphs. It helps you quickly see exactly where your money is going." },
    { name: "The AI Coach", desc: "This is a chat interface. You can ask it questions about your spending, and the Groq AI will give you smart tips on how to save money." },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Implementation</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">The Four Main Parts</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex flex-col gap-[20px]">
        {modules.map((m, i) => (
          <motion.div variants={barAnim} key={i} className="bg-[#121212] border border-[#333333] px-[40px] py-[24px] rounded-[16px]">
            <h3 className="text-[28px] font-bold text-[#ffffff] mb-[8px]">{m.name}</h3>
            <p className="text-[24px] text-[#d0d0d0] leading-[1.6]">{m.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
