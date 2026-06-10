import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide17() {
  const future = [
    { title: "Export to Excel", desc: "Allowing users to easily download their entire transaction history as a CSV file for their own records." },
    { title: "Push Notifications", desc: "Sending simple, local reminders to log daily expenses so users don't forget." },
    { title: "Multiple Accounts", desc: "Adding the ability to separate cash spending from bank or credit card spending in the app." }
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[84px] md:text-[96px] font-[800] text-[#ffffff] mb-[30px] text-center">Future Plans</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[50px] text-center">What We Will Add Next</motion.h2>
      <motion.div variants={container} className="w-full max-w-[1200px] flex gap-[30px]">
        {future.map((f, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] p-[32px] rounded-[16px]">
            <h3 className="text-[24px] md:text-[28px] font-[700] text-[#ffffff] mb-[16px]">{f.title}</h3>
            <p className="text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
