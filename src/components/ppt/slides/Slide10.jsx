import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const cardAnim = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.4, ease: "easeOut" } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide10() {
  const techs = [
    { name: "Kotlin", desc: "Modern, concise, robust language for Android." },
    { name: "Jetpack Compose", desc: "Declarative UI toolkit for native interfaces." },
    { name: "Room DB", desc: "Robust local data persistence via SQLite." },
    { name: "Groq API", desc: "Ultra-fast LLM inference for the Coach." },
    { name: "Android Studio", desc: "Official IDE with built-in emulators." },
    { name: "Material 3", desc: "Design system for polished components." },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Technologies Used</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Tools & Stack</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-3 gap-[24px] w-full max-w-[1200px]">
        {techs.map((t, i) => (
          <motion.div variants={cardAnim} key={i} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] font-bold text-[#ffffff] mb-[16px]">{t.name}</h3>
            <p className="text-[20px] text-[#d0d0d0] leading-[1.6]">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
