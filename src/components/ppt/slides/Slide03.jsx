import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide03() {
  const problems = [
    { head: "Data Privacy Crisis", body: "Popular apps store your highly sensitive financial data on corporate servers. If they get hacked, your data gets leaked. You are completely vulnerable." },
    { head: "Internet Dependency", body: "Most tracking apps are completely useless if you don't have internet. They require a connection just to open and log a simple expense." },
    { head: "Too Much Clutter", body: "Existing apps are filled with annoying ads, premium subscriptions, and complicated features. People just want a simple, fast way to track spending." }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Problem</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">Why We Built This</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex gap-[24px]">
        {problems.map((p, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[#121212] border border-[#333333] border-t-[4px] border-t-[#ff3333] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] text-[#ffffff] mb-[20px] font-bold">{p.head}</h3>
            <p className="text-[22px] text-[#d0d0d0] leading-[1.7]">{p.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
