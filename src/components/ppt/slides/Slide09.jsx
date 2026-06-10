import React from 'react';
import { motion } from 'framer-motion';

const layerContainer = { show: { transition: { staggerChildren: 0.3, delayChildren: 0.3 } } };
const layerAnim = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Slide09() {
  const DownArrow = () => (
    <motion.div variants={layerAnim} className="flex justify-center w-full my-[20px]">
      <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
        <path d="M20 0 V25 M10 15 L20 25 L30 15" stroke="#333333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.div>
  );

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[15px]">System Architecture</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-bold font-[500] mb-[20px]">How Ledger is Structured</motion.h2>
      
      <motion.div variants={layerContainer} initial="hidden" animate="show" className="w-full max-w-[1200px] flex flex-col">
        
        {/* Layer 1 */}
        <motion.div variants={layerAnim} className="bg-[#1a1a1a] p-[24px] rounded-[16px] flex flex-col items-center">
          <div className="text-[20px] text-[#666666] uppercase tracking-wider mb-[20px]">Presentation Layer</div>
          <div className="flex gap-[12px] w-full justify-center">
            {["Dashboard UI", "History View", "Insights Charts", "AI Coach Chat"].map((b, i) => (
              <div key={i} className="bg-[#0d0d0d] px-[20px] py-[12px] rounded-[8px] text-[16px] text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>

        <DownArrow />

        {/* Layer 2 */}
        <motion.div variants={layerAnim} className="bg-[#161616] p-[24px] rounded-[16px] flex flex-col items-center">
          <div className="text-[20px] text-[#666666] uppercase tracking-wider mb-[20px]">Business Logic Layer</div>
          <div className="flex gap-[12px] w-full justify-center">
            {["ViewModels", "Repository", "Budget Engine", "AI Prompt Builder", "Notification Manager"].map((b, i) => (
              <div key={i} className="bg-[#0d0d0d] px-[20px] py-[12px] rounded-[8px] text-[16px] text-[#ffffff] flex-1 text-center text-sm">{b}</div>
            ))}
          </div>
        </motion.div>

        <DownArrow />

        {/* Layer 3 */}
        <motion.div variants={layerAnim} className="bg-[#111111] p-[24px] rounded-[16px] flex flex-col items-center mb-[15px]">
          <div className="text-[20px] text-[#666666] uppercase tracking-wider mb-[20px]">Data Layer</div>
          <div className="flex gap-[12px] w-full justify-center">
            {["Room Database", "SharedPreferences", "Local File Storage"].map((b, i) => (
              <div key={i} className="bg-[#0d0d0d] px-[20px] py-[12px] rounded-[8px] text-[16px] text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
        
        <motion.p variants={layerAnim} className="text-[18px] text-[#666666] text-center mt-[10px]">
          All layers operate entirely on-device. Zero network calls for core functionality.
        </motion.p>

      </motion.div>
    </div>
  );
}
