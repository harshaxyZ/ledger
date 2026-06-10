import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide11() {
  const modules = [
    { name: "The Main Dashboard", desc: "This is the first screen you see. It gives you a complete summary of your daily and monthly spending. It also has a quick button to add a new expense." },
    { name: "The History Log", desc: "This screen shows every single transaction you have ever made. You can scroll through them, filter by category, or delete mistakes." },
    { name: "The Charts & Insights", desc: "This module takes your boring numbers and turns them into beautiful graphs. It helps you quickly see exactly where your money is going." },
    { name: "The AI Coach", desc: "This is a chat interface. You can ask it questions about your spending, and the Groq AI will give you smart tips on how to save money." },
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[84px] md:text-[96px] font-[800] text-[#ffffff] mb-[30px] text-center">Implementation</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[50px] text-center">The Four Main Parts</motion.h2>
      <motion.div variants={container} className="w-full max-w-[1200px] flex flex-col gap-[20px]">
        {modules.map((m, i) => (
          <motion.div variants={anim} key={i} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] px-[32px] py-[24px] rounded-[16px]">
            <h3 className="text-[24px] font-[700] text-[#ffffff] mb-[8px]">{m.name}</h3>
            <p className="text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">{m.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
