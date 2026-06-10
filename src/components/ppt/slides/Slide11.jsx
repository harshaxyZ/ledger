import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.15 } } };
const barAnim = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide11() {
  const modules = [
    { name: "Dashboard Module", desc: "Real-time overview with daily totals and one-tap logging." },
    { name: "Transaction History", desc: "Chronological log with filters and swipe-to-delete." },
    { name: "Insights Module", desc: "Visual category breakdown and monthly trend analysis." },
    { name: "Budget Module", desc: "Monthly budget setup with overspend alerts." },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Implementation</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Core Modules Developed</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex flex-col gap-[20px]">
        {modules.map((m, i) => (
          <motion.div variants={barAnim} key={i} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] px-[40px] py-[24px] rounded-[16px]">
            <h3 className="text-[28px] font-bold text-[#ffffff] mb-[8px]">{m.name}</h3>
            <p className="text-[24px] text-[#d0d0d0] leading-[1.6]">{m.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
