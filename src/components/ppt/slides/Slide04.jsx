import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide04() {
  const objectives = [
    { head: "Complete Privacy", body: "We wanted to build an app where zero data leaves the device. All your transactions are stored securely in your browser's local storage." },
    { head: "Offline-First", body: "We wanted the app to load instantly and work perfectly even if you are in airplane mode. No loading screens, no waiting." },
    { head: "Smart AI Coaching", body: "We wanted to provide personalized financial advice without invading privacy. We use the Groq API to provide instant, smart coaching based on your habits." }
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[84px] md:text-[96px] font-[800] text-[#ffffff] mb-[30px] text-center">Objectives</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[50px] text-center">Our Goals For Ledger</motion.h2>
      <motion.div variants={container} className="w-full max-w-[1200px] flex gap-[30px] text-left">
        {objectives.map((o, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[28px] rounded-[16px]">
            <h3 className="text-[24px] md:text-[28px] text-[#ffffff] mb-[20px] font-[700]">{o.head}</h3>
            <p className="text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">{o.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
