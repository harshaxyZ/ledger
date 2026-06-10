import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide04() {
  const objectives = [
    { head: "Complete Privacy", body: "We wanted to build an app where zero data leaves the device. All your transactions are stored securely in your browser's local storage." },
    { head: "Offline-First", body: "We wanted the app to load instantly and work perfectly even if you are in airplane mode. No loading screens, no waiting." },
    { head: "Smart AI Coaching", body: "We wanted to provide personalized financial advice without invading privacy. We use the Groq API to provide instant, smart coaching based on your habits." }
  ];
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Objectives</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">Our Goals For Ledger</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex gap-[24px] text-left">
        {objectives.map((o, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] text-[#ffffff] mb-[20px] font-bold">{o.head}</h3>
            <p className="text-[22px] text-[#d0d0d0] leading-[1.7]">{o.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
