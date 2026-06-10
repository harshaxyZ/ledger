import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide08() {
  const steps = [
    { title: "Planning & Design", body: "We decided to build a PWA for cross-platform support. We planned the UI to be clean, dark, and simple.", side: "left" },
    { title: "Frontend Construction", body: "We built the interface using React and Tailwind CSS. We made sure it feels like a native mobile app.", side: "right" },
    { title: "Local Database", body: "We implemented IndexedDB to handle saving, editing, and deleting transactions instantly.", side: "left" },
    { title: "AI Integration", body: "We connected the Groq API to provide lightning-fast financial coaching based on local data.", side: "right" },
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Methodology</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">How We Built It</motion.h2>
      
      <div className="relative w-full max-w-[1000px] flex flex-col items-center">
        <motion.div variants={anim} className="absolute top-0 bottom-0 w-[4px] bg-[rgba(255,255,255,0.1)] left-1/2 -translate-x-1/2" />
        <div className="w-full flex flex-col gap-[20px] relative z-10">
          {steps.map((s, i) => (
            <motion.div variants={anim} key={i} className={`flex w-full ${s.side === 'left' ? 'justify-start' : 'justify-end'} relative`}>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[16px] h-[16px] rounded-full bg-[#ff3333] border-[3px] border-[#000]" />
              <div className={`w-[45%] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px] ${s.side === 'left' ? 'mr-[5%]' : 'ml-[5%]'}`}>
                <h3 className="text-[24px] font-[700] text-[#ffffff] mb-[8px]">{s.title}</h3>
                <p className="text-[18px] text-[#b0b0b0] font-[400] leading-[1.6]">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
