import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.12 } } };
const cardAnim = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function Slide10() {
  const techs = [
    { name: "Kotlin", desc: "Primary language for Android. Modern, concise, fully interoperable with Java." },
    { name: "Jetpack Compose", desc: "Declarative UI toolkit for building native Android interfaces with minimal code." },
    { name: "Room Database", desc: "SQLite abstraction layer for robust local data persistence and queries." },
    { name: "Groq AI API", desc: "Ultra-fast LLM inference for the Ledger Coach financial advisor." },
    { name: "Android Studio", desc: "Official IDE with built-in emulator, debugger, and profiler." },
    { name: "Material Design 3", desc: "Design system for consistent, accessible, polished UI components." },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Technologies Used</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Tools & Stack</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 gap-[24px] w-full max-w-[1000px]">
        {techs.map((t, i) => (
          <motion.div 
            variants={cardAnim} key={i} 
            whileHover={{ scale: 1.02, backgroundColor: "#1a1a1a" }}
            className="bg-[#161616] p-[32px] rounded-[16px] transition-colors duration-300"
          >
            <h3 className="text-[24px] text-[#ffffff] mb-[12px]">{t.name}</h3>
            <p className="text-[18px] text-[#666666] leading-[1.6]">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
