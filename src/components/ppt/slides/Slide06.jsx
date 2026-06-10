import React from 'react';
import { motion } from 'framer-motion';

export default function Slide06() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Existing System</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">How Current Expense Trackers Work</h2>
      
      <div className="w-full max-w-[900px] flex gap-[60px] text-left">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
          className="flex-1"
        >
          <h3 className="text-[24px] text-[#ffffff] leading-[1.2] mb-[16px]">How They Work</h3>
          <p className="text-[20px] text-[#a0a0a0] leading-[1.6]">
            Most expense trackers follow a cloud-first model. Users create accounts, link bank credentials, and all transaction data is uploaded to remote servers. The app then categorizes spending and generates reports. This requires constant internet access and places trust in third-party security.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }}
          className="flex-1"
        >
          <h3 className="text-[24px] text-[#ffffff] leading-[1.2] mb-[16px]">Key Limitations</h3>
          <p className="text-[20px] text-[#a0a0a0] leading-[1.6] whitespace-pre-line">
            • Data stored on external servers = breach risk<br/>
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
