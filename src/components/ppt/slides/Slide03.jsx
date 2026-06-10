import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Slide03() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Problem Statement</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Why Existing Solutions Fail</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[800px] flex flex-col gap-[20px] text-left">
        <motion.p variants={item} className="text-[20px] text-[#a0a0a0] leading-[1.6]">
          • Data Privacy Crisis — Popular apps like Mint and YNAB store financial data on corporate servers, making users vulnerable to breaches and data sales.
        </motion.p>
        <motion.p variants={item} className="text-[20px] text-[#a0a0a0] leading-[1.6]">
          • Internet Dependency — Most trackers require constant connectivity, making them useless in areas with poor or no network coverage.
        </motion.p>
        <motion.p variants={item} className="text-[20px] text-[#a0a0a0] leading-[1.6]">
          • Complex & Cluttered — Existing apps overwhelm users with unnecessary features, subscriptions, and ads instead of simple, fast expense logging.
        </motion.p>
      </motion.div>
    </div>
  );
}
