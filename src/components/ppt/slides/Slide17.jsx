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

export default function Slide17() {
  const enhancements = [
    { title: "Export to PDF / CSV", desc: "Allow users to export transaction history for tax filing and record keeping." },
    { title: "Desktop Port", desc: "Build a cross-platform desktop version using Compose Multiplatform for Windows, macOS, and Linux." },
    { title: "Recurring Expenses", desc: "Auto-log monthly bills like rent, subscriptions, and EMIs without manual entry." },
    { title: "Biometric Lock", desc: "Add fingerprint or face unlock for an extra layer of financial data security." },
    { title: "Multi-Currency Support", desc: "Support for USD, EUR, GBP, and other currencies with real-time conversion caching." },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Future Enhancements</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">What's Next for Ledger</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[700px] flex flex-col gap-[24px] text-left">
        {enhancements.map((e, i) => (
          <motion.div variants={item} key={i}>
            <div className="flex items-center gap-[8px] mb-[8px]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#333333]"></div>
              <h3 className="text-[22px] text-[#ffffff] leading-[1.2]">{e.title}</h3>
            </div>
            <p className="text-[16px] text-[#a0a0a0] leading-[1.6] pl-[16px]">{e.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
