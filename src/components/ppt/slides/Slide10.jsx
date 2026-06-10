import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1.0, transition: { duration: 0.3 } }
};

export default function Slide10() {
  const techs = [
    { name: "Kotlin", desc: "Primary language for Android development. Modern, concise, and fully interoperable with Java." },
    { name: "Jetpack Compose", desc: "Modern declarative UI toolkit for building native Android interfaces with less code." },
    { name: "Room Database", desc: "SQLite abstraction layer for robust local data persistence and query management." },
    { name: "Groq AI API", desc: "Ultra-fast LLM inference for the Ledger Coach financial advisor feature." },
    { name: "Android Studio", desc: "Official IDE for Android development with built-in emulator and debugging tools." },
    { name: "Material Design 3", desc: "Design system ensuring consistent, accessible, and visually polished UI components." },
  ];

  return (
    <div className="w-full flex flex-col items-center text-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Technologies Used</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Tools & Stack</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 gap-[20px] w-full max-w-[900px] text-left">
        {techs.map((t, i) => (
          <motion.div variants={item} key={i} className="bg-[#0d0d0d] p-[24px] rounded-[12px]">
            <h3 className="text-[22px] text-[#ffffff] leading-[1.2] mb-[8px]">{t.name}</h3>
            <p className="text-[16px] text-[#a0a0a0] leading-[1.6]">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
