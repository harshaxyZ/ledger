import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.15 } } };
const barAnim = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const flowAnim = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } };

export default function Slide11() {
  const modules = [
    { name: "Dashboard Module", desc: "Real-time spending overview with daily totals, monthly summaries, and one-tap expense logging." },
    { name: "Transaction History", desc: "Chronological log with category filters, keyword search, and swipe-to-delete gestures." },
    { name: "Insights Module", desc: "Visual category breakdown using charts, top spending categories, and monthly trend analysis." },
    { name: "Budget Module", desc: "Monthly budget setup with overspend alerts, progress indicators, and category-wise limits." },
  ];

  const Arrow = () => <div className="text-[#333333] text-[20px]">→</div>;
  const Box = ({t}) => <div className="bg-[#161616] border border-[#333333] px-[20px] py-[12px] rounded-[8px] text-[16px] text-[#ffffff]">{t}</div>;

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Implementation</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Core Modules Developed</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[900px] flex flex-col gap-[20px] mb-[40px]">
        {modules.map((m, i) => (
          <motion.div variants={barAnim} key={i} className="bg-[#161616] px-[32px] py-[24px] rounded-[12px]">
            <h3 className="text-[24px] text-[#ffffff] mb-[8px]">{m.name}</h3>
            <p className="text-[18px] text-[#666666] leading-[1.6]">{m.desc}</p>
          </motion.div>
        ))}
        
        <motion.div variants={flowAnim} className="flex justify-between mt-[20px]">
          <div className="flex items-center gap-[12px]">
            <Box t="Dashboard" /><Arrow /><Box t="Repository" /><Arrow /><Box t="Room DB" />
          </div>
          <div className="flex items-center gap-[12px]">
            <Box t="AI Coach" /><Arrow /><Box t="Groq API" /><Arrow /><Box t="Response" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
