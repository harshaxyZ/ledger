import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.15 } } };
const cardAnim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function Slide17() {
  const enhancements = [
    { title: "Export to PDF / CSV", desc: "Allow users to export transaction history for tax filing, accounting, and record keeping." },
    { title: "Desktop Port", desc: "Build a cross-platform desktop version using Compose Multiplatform for Windows, macOS, and Linux." },
    { title: "Recurring Expenses", desc: "Auto-log monthly bills like rent, subscriptions, and EMIs without manual entry every time." },
    { title: "Biometric Lock", desc: "Add fingerprint or face unlock for an extra layer of security on financial data." },
    { title: "Multi-Currency Support", desc: "Support for USD, EUR, GBP, and other currencies with offline conversion caching." },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[20px]">Future Enhancements</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-bold font-[500] mb-[20px]">What's Next for Ledger</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex flex-col gap-[20px] text-left">
        {enhancements.map((e, i) => (
          <motion.div variants={cardAnim} key={i} className="bg-[#161616] py-[24px] px-[32px] rounded-[12px] border-l-[4px] border-[#ff3333]">
            <h3 className="text-[24px] text-[#ffffff] mb-[8px]">{e.title}</h3>
            <p className="text-[18px] text-[#666666] leading-[1.6]">{e.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
