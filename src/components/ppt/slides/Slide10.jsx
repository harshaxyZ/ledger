import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide10() {
  const techs = [
    { name: "React JS", desc: "A powerful JavaScript library for building fast and interactive user interfaces." },
    { name: "Tailwind CSS", desc: "A modern utility-first CSS framework for styling the app beautifully and quickly." },
    { name: "IndexedDB", desc: "The browser's built-in local database. It safely stores all financial data." },
    { name: "Groq API", desc: "One of the fastest AI inference engines in the world, powering our smart coach." },
    { name: "Framer Motion", desc: "Used to create all the smooth, beautiful animations and page transitions." },
    { name: "Vite & PWA", desc: "A blazing fast build tool. It packages our app so users can install it on their phones." },
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Tech Stack</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">What We Used</motion.h2>
      <motion.div variants={container} className="grid grid-cols-3 gap-[30px] w-full max-w-[1100px]">
        {techs.map((t, i) => (
          <motion.div variants={anim} key={i} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
            <h3 className="text-[24px] font-[700] text-[#ffffff] mb-[12px]">{t.name}</h3>
            <p className="text-[18px] text-[#b0b0b0] font-[400] leading-[1.6]">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
