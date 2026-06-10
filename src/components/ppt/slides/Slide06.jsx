import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide06() {
  const tableData = [
    { name: "Mint", cloud: "Yes", privacy: "Low", complexity: "High", offline: "No" },
    { name: "YNAB", cloud: "Yes", privacy: "Medium", complexity: "High", offline: "Partial" },
    { name: "Wallet", cloud: "Yes", privacy: "Medium", complexity: "High", offline: "Partial" },
    { name: "Splitwise", cloud: "Yes", privacy: "Low", complexity: "Medium", offline: "No" },
    { name: "Ledger", cloud: "No", privacy: "High", complexity: "Low", offline: "Yes" },
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-16">
        EXISTING SOLUTIONS
      </motion.h1>
      
      <motion.div variants={item} className="w-full bg-[#111] border border-white/10 rounded-3xl overflow-hidden mb-16">
        <table className="w-full text-left text-xl">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="p-8 font-medium text-white/40 uppercase tracking-widest text-sm">Application</th>
              <th className="p-8 font-medium text-white/40 uppercase tracking-widest text-sm">Cloud Dependency</th>
              <th className="p-8 font-medium text-white/40 uppercase tracking-widest text-sm">Privacy</th>
              <th className="p-8 font-medium text-white/40 uppercase tracking-widest text-sm">Complexity</th>
              <th className="p-8 font-medium text-white/40 uppercase tracking-widest text-sm">Offline Support</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx} className={`border-b border-white/5 last:border-0 ${row.name === 'Ledger' ? 'bg-white text-black font-bold' : ''}`}>
                <td className="p-8">{row.name}</td>
                <td className="p-8">{row.cloud}</td>
                <td className="p-8">{row.privacy}</td>
                <td className="p-8">{row.complexity}</td>
                <td className="p-8">{row.offline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.p variants={item} className="text-2xl text-white/60 mb-4 max-w-4xl">
        Most existing solutions prioritize synchronization and cloud services.
      </motion.p>
      <motion.p variants={item} className="text-3xl text-white font-medium max-w-4xl">
        Ledger prioritizes ownership and privacy.
      </motion.p>
    </motion.div>
  );
}
