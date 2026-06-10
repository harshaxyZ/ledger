import React from 'react';
import { motion } from 'framer-motion';

export default function Slide08() {
  const steps = [
    { title: "Requirement Analysis", body: "Identified core needs: offline storage, fast logging, AI integration, and absolute privacy.", side: "left" },
    { title: "System Design", body: "Designed modular architecture with separate layers for UI, data, AI, and notifications.", side: "right" },
    { title: "Development", body: "Built with Kotlin, Jetpack Compose, Room database, and Groq API for AI features.", side: "left" },
    { title: "Testing", body: "Tested offline functionality, data persistence, AI response accuracy, and UI responsiveness across devices.", side: "right" },
    { title: "Deployment", body: "Packaged as Android APK. Roadmap includes Google Play Store release and desktop port.", side: "left" }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[20px]">Methodology</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-bold font-[500] mb-[20px]">Development Process & Workflow</motion.h2>
      
      <div className="relative w-full max-w-[1200px] flex flex-col items-center mt-[20px]">
        {/* Animated Central Line */}
        <motion.div 
          initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          className="absolute top-0 bottom-0 w-[3px] bg-[#333333] left-1/2 -translate-x-1/2"
        ></motion.div>
        
        <div className="w-full flex flex-col gap-[30px] relative z-10">
          {steps.map((s, i) => (
            <div key={i} className={`flex w-full ${s.side === 'left' ? 'justify-start' : 'justify-end'} relative`}>
              {/* Animated Dot */}
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + (i * 0.2), duration: 0.3 }}
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[12px] h-[12px] rounded-full bg-[#ff3333]"
              ></motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: s.side === 'left' ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + (i * 0.2), duration: 0.4 }}
                className={`w-[380px] bg-[#161616] p-[24px] rounded-[16px] ${s.side === 'left' ? 'mr-[40px]' : 'ml-[40px]'}`}
              >
                <h3 className="text-[24px] text-[#ffffff] mb-[8px]">{s.title}</h3>
                <p className="text-[16px] text-[#666666] leading-[1.6]">{s.body}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
