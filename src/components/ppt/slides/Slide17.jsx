import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const cardAnim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide17() {
  const future = [
    { title: "Export to Excel", desc: "Allowing users to easily download their entire transaction history as a CSV file for their own records." },
    { title: "Push Notifications", desc: "Sending simple, local reminders to log daily expenses so users don't forget." },
    { title: "Multiple Accounts", desc: "Adding the ability to separate cash spending from bank or credit card spending in the app." }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Future Plans</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">What We Will Add Next</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex gap-[24px]">
        {future.map((f, i) => (
          <motion.div variants={cardAnim} key={i} className="flex-1 bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] font-bold text-[#ffffff] mb-[16px]">{f.title}</h3>
            <p className="text-[22px] text-[#d0d0d0] leading-[1.7]">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
