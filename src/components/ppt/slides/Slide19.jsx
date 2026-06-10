import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide19() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Conclusion</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">Taking Back Control</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="text-[24px] md:text-[28px] text-[#d0d0d0] leading-[1.7] max-w-[1100px] mb-[60px] w-full text-center">
        <motion.p variants={anim} className="mb-4">Ledger proves that powerful financial tools don't require trading away personal privacy.</motion.p>
        <motion.p variants={anim} className="mb-4">By executing all logic and database operations locally, and utilizing efficient AI APIs solely for inference, we achieved a modern, secure, and blazing fast expense tracker.</motion.p>
        <motion.p variants={anim} className="text-[#ffffff] font-bold mt-8">Your money. Your data. Your device.</motion.p>
      </motion.div>
    </div>
  );
}
