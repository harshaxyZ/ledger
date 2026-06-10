import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide08() {
  const steps = [
    { title: "Planning & Design", body: "We decided to build a PWA for cross-platform support. We planned the UI to be clean, dark, and simple." },
    { title: "Frontend Construction", body: "We built the interface using React and Tailwind CSS. We made sure it feels like a native mobile app." },
    { title: "Local Database", body: "We implemented IndexedDB to handle saving, editing, and deleting transactions instantly." },
    { title: "AI Integration", body: "We connected the Groq API to provide lightning-fast financial coaching based on local data." },
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Methodology</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">How We Built It</motion.h2>
      
      <div className="w-full max-w-[1100px] grid grid-cols-2 gap-[30px] text-left">
        {steps.map((s, i) => (
          <motion.div variants={anim} key={i} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[32px] rounded-[16px]">
            <div className="text-[40px] font-[800] text-[#ff3333] mb-[10px]">0{i+1}</div>
            <h3 className="text-[28px] font-[700] text-[#ffffff] mb-[12px]">{s.title}</h3>
            <p className="text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
