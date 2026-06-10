import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};
const item = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export default function Slide11() {
  const modules = [
    { name: "Dashboard Module", desc: "Real-time spending overview with daily totals, monthly summaries, and quick-add expense button." },
    { name: "Transaction History Module", desc: "Chronological log with category filters, search functionality, and swipe-to-delete gestures." },
    { name: "Insights Module", desc: "Visual category breakdown using charts, top spending categories, and trend analysis." },
    { name: "Budget Module", desc: "Monthly budget setup with overspend alerts, progress indicators, and category-wise limits." },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Implementation</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Core Modules Developed</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[800px] flex flex-col gap-[16px] text-left">
        {modules.map((m, i) => (
          <motion.div variants={item} key={i} className="bg-[#111111] px-[30px] py-[20px] rounded-[8px] w-full">
            <h3 className="text-[22px] text-[#ffffff] leading-[1.2] mb-[8px]">{m.name}</h3>
            <p className="text-[16px] text-[#a0a0a0] leading-[1.6]">{m.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
