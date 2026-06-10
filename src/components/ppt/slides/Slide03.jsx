import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide03() {
  const problems = [
    { head: "Data Privacy Crisis", body: "Popular apps store your sensitive financial data on corporate servers. If they get hacked, your data is leaked." },
    { head: "Internet Dependency", body: "Most tracking apps are useless without internet. They require a connection just to log a simple expense." },
    { head: "Too Much Clutter", body: "Existing apps are filled with annoying ads and complicated features. People want a fast way to track spending." }
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Problem</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">Why We Built This</motion.h2>
      
      <motion.div variants={container} className="w-full max-w-[1100px] flex gap-[30px]">
        {problems.map((p, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-t-[4px] border-t-[#ff3333] p-[24px] rounded-[16px]">
            <h3 className="text-[24px] md:text-[28px] text-[#ffffff] mb-[16px] font-[700]">{p.head}</h3>
            <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">{p.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
