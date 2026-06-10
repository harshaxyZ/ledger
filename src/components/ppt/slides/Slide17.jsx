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
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Future Plans</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">What We Will Add Next</motion.h2>
      <motion.div variants={container} className="w-full max-w-[1100px] flex gap-[30px]">
        {future.map((f, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
            <h3 className="text-[24px] font-[700] text-[#ffffff] mb-[16px]">{f.title}</h3>
            <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
