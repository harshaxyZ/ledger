import React from 'react';
import { motion } from 'framer-motion';

const stepContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 1.0 } }
};
const stepItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } }
};

export default function Slide08() {
  const steps = [
    { side: "left", head: "Requirement Analysis", body: "Identified core needs: offline storage, fast logging, AI integration, and privacy." },
    { side: "right", head: "System Design", body: "Designed modular architecture with separate layers for UI, data, AI, and notifications." },
    { side: "left", head: "Development", body: "Built with Kotlin, Jetpack Compose, Room database, and Groq API for AI features." },
    { side: "right", head: "Testing", body: "Tested offline functionality, data persistence, AI response accuracy, and UI responsiveness." },
    { side: "left", head: "Deployment", body: "Packaged as Android APK. Future: Google Play Store release and desktop port." },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Methodology</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[40px]">Development Process & Workflow</h2>
      
      <div className="relative w-full max-w-[800px] flex flex-col items-center">
        {/* The line */}
        <motion.div 
          initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1.0, ease: "linear" }}
          className="absolute top-[20px] bottom-[20px] w-[2px] bg-[#333333] left-1/2 -translate-x-1/2"
        ></motion.div>
        
        <motion.div variants={stepContainer} initial="hidden" animate="show" className="w-full flex flex-col gap-[20px] relative z-10">
          {steps.map((s, i) => (
            <motion.div variants={stepItem} key={i} className={`flex w-full ${s.side === 'left' ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-[350px] ${s.side === 'left' ? 'text-right pr-[40px]' : 'text-left pl-[40px]'}`}>
                <h3 className="text-[22px] text-[#ffffff] leading-[1.2] mb-[8px]">{s.head}</h3>
                <p className="text-[16px] text-[#a0a0a0] leading-[1.6]">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
