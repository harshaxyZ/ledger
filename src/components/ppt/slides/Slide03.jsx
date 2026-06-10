import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.2 } } };
const cardAnim = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Slide03() {
  const problems = [
    { head: "Data Privacy Crisis", body: "Popular apps like Mint and YNAB store financial data on corporate servers. Users are vulnerable to breaches, data sales, and unauthorized access." },
    { head: "Internet Dependency", body: "Most trackers require constant connectivity. They are completely useless in areas with poor or no network coverage — which is common in India." },
    { head: "Complex & Cluttered", body: "Existing apps overwhelm users with subscriptions, ads, and unnecessary features instead of simple, fast expense logging." }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[20px]">Problem Statement</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-bold font-[500] mb-[20px]">Why Existing Solutions Fail</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex flex-col gap-[24px] text-left">
        {problems.map((p, i) => (
          <motion.div variants={cardAnim} key={i} className="bg-[#111111] py-[28px] px-[32px] rounded-[16px] border-l-[4px] border-[#ff3333]">
            <h3 className="text-[28px] text-[#ffffff] mb-[12px]">{p.head}</h3>
            <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">{p.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
