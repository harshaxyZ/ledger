import React from 'react';
import { motion } from 'framer-motion';
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide08() {
  const steps = [
    { title: "Planning & Design", body: "We decided to build a PWA for cross-platform support. We planned the UI to be clean, dark, and extremely simple to use.", side: "left" },
    { title: "Frontend Construction", body: "We built the interface using React and Tailwind CSS. We made sure it feels like a native mobile app on phones.", side: "right" },
    { title: "Local Database", body: "We implemented IndexedDB to handle saving, editing, and deleting transactions instantly without internet.", side: "left" },
    { title: "AI Integration", body: "We connected the Groq API to provide lightning-fast financial coaching based on the user's local data.", side: "right" },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Methodology</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">How We Built It</motion.h2>
      
      <div className="relative w-full max-w-[1100px] flex flex-col items-center mt-[20px]">
        <motion.div 
          initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          className="absolute top-0 bottom-0 w-[6px] bg-[#ffffff] opacity-20 left-1/2 -translate-x-1/2"
        ></motion.div>
        
        <div className="w-full flex flex-col gap-[40px] relative z-10">
          {steps.map((s, i) => (
            <div key={i} className={`flex w-full ${s.side === 'left' ? 'justify-start' : 'justify-end'} relative`}>
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + (i * 0.3), duration: 0.4 }}
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[24px] h-[24px] rounded-full bg-[#ff3333] border-[4px] border-[#000]"
              ></motion.div>
              <motion.div 
                initial={{ opacity: 0, x: s.side === 'left' ? -40 : 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + (i * 0.3), duration: 0.5 }}
                className={`w-[45%] bg-[#121212] border border-[#333333] p-[32px] rounded-[16px] ${s.side === 'left' ? 'mr-[5%]' : 'ml-[5%]'}`}
              >
                <h3 className="text-[28px] font-bold text-[#ffffff] mb-[12px]">{s.title}</h3>
                <p className="text-[22px] text-[#d0d0d0] leading-[1.6]">{s.body}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
