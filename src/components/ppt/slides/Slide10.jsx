import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const cardAnim = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.4, ease: "easeOut" } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
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
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Tech Stack</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">What We Used</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-3 gap-[24px] w-full max-w-[1200px]">
        {techs.map((t, i) => (
          <motion.div variants={cardAnim} key={i} className="bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] font-bold text-[#ffffff] mb-[16px]">{t.name}</h3>
            <p className="text-[20px] text-[#d0d0d0] leading-[1.6]">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
