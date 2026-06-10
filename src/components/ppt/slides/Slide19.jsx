import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide19() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center text-center">
      <motion.h1 variants={anim} className="text-[84px] md:text-[96px] font-[800] text-[#ffffff] mb-[30px] text-center">Conclusion</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[50px] text-center">Taking Back Control</motion.h2>
      
      <motion.div variants={anim} className="text-[20px] md:text-[22px] text-[#b0b0b0] font-[400] leading-[1.6] max-w-[1000px] mb-[40px] w-full text-center space-y-[24px]">
        <p>Ledger successfully proves that powerful financial tools do not need to steal your data.</p>
        <p>By using modern web technologies like React and IndexedDB, we created an app that is faster, safer, and simpler than the biggest corporate competitors on the market.</p>
        <p className="text-[#ffffff] font-[700] mt-[40px] text-[28px]">Your money. Your data. Your device.</p>
      </motion.div>
    </motion.div>
  );
}
