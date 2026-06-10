import React from 'react';
import { motion } from 'framer-motion';

export default function Slide06() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Existing System</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">How Current Expense Trackers Work</motion.h2>
      
      <div className="w-full max-w-[1000px] flex justify-between text-left">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="w-[48%]">
          <h3 className="text-[28px] text-[#ffffff] mb-[24px]">How They Work</h3>
          <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">
            Most expense trackers follow a cloud-first model. Users create accounts, link bank credentials, and all data uploads to remote servers. The app categorizes spending and generates reports. This requires constant internet and places absolute trust in third-party security.
          </p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} className="w-[48%]">
          <h3 className="text-[28px] text-[#ffffff] mb-[24px]">Key Limitations</h3>
          <p className="text-[20px] text-[#b0b0b0] leading-[1.7] whitespace-pre-line">
            • Data stored externally = breach risk<br/>
            • Requires internet for basic functions<br/>
            • Subscription fees or ad-supported models<br/>
            • No control over data deletion<br/>
            • Complex onboarding with unnecessary permissions
          </p>
        </motion.div>
      </div>
    </div>
  );
}
