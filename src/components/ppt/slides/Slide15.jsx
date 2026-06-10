import React from 'react';
import { motion } from 'framer-motion';

export default function Slide15() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Results</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[40px]">Spending Insights</h2>
      
      <div className="w-full max-w-[900px] flex justify-between items-center text-left">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
          className="w-[55%] flex justify-center"
        >
          <img src="/image_4.png" alt="Insights" className="max-h-[500px] rounded-[12px] object-contain" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
          className="w-[40%]"
        >
          <h3 className="text-[24px] text-[#ffffff] leading-[1.2] mb-[16px]">Visual Spending Breakdown</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">
            The Insights page transforms raw data into actionable intelligence. Users see total spending, transaction count, average per transaction, and top category. A color-coded breakdown (displayed in grayscale/monochrome in the app) shows exactly where money goes — Rent & Home, Groceries, Food, Shopping, and Transport.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
