import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide03() {
  const problems = [
    { head: "Data Privacy Crisis", body: "Popular apps like Mint and YNAB store financial data on corporate servers. Users are vulnerable to breaches, data sales, and unauthorized access." },
    { head: "Internet Dependency", body: "Most trackers require constant connectivity. They are completely useless in areas with poor or no network coverage — which is common in India." },
    { head: "Complex & Cluttered", body: "Existing apps overwhelm users with subscriptions, ads, and unnecessary features instead of simple, fast expense logging." }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Problem Statement</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">Why Existing Solutions Fail</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex gap-[24px]">
        {problems.map((p, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] border-t-[4px] border-t-[#ff3333] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] text-[#ffffff] mb-[16px] font-bold">{p.head}</h3>
            <p className="text-[20px] text-[#d0d0d0] leading-[1.7]">{p.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
