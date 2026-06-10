import os
import shutil

slide_dir = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\components\ppt\slides"

# Clear old slides
if os.path.exists(slide_dir):
    shutil.rmtree(slide_dir)
os.makedirs(slide_dir)

slides_data = {
    "Slide01": """import React from 'react';
import { motion } from 'framer-motion';

export default function Slide01() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <motion.img 
        src="/ppt/college_title.png" 
        alt="College Title" 
        className="max-w-[90%] max-h-[90%] object-contain rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
""",
    "Slide02": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Slide02() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center items-center text-center">
      <motion.h1 variants={item} className="text-[120px] font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter leading-none mb-4">
        LEDGER
      </motion.h1>
      <motion.h2 variants={item} className="text-4xl text-white/70 font-light mb-16 tracking-wide">
        Private by Design.<br/>Offline by Default.
      </motion.h2>
      <motion.div variants={item} className="w-24 h-[1px] bg-white/20 mb-16"></motion.div>
      <motion.p variants={item} className="text-2xl text-white/50 max-w-3xl leading-relaxed mb-24">
        A modern expense tracker built for students who want complete control over their finances without giving up privacy.
      </motion.p>
      <motion.div variants={item} className="flex gap-16 text-left">
        <div>
          <p className="text-white/40 text-sm tracking-widest uppercase mb-2">Team Members</p>
          <p className="text-xl">Harsha N</p>
          <p className="text-xl">Harshith R Goniger</p>
          <p className="text-xl">Hemanth Kumar KP</p>
          <p className="text-xl">Jathin K M</p>
          <p className="text-xl">Kishan Kumar R</p>
          <p className="text-xl">Kishan M</p>
        </div>
        <div>
          <p className="text-white/40 text-sm tracking-widest uppercase mb-2">Guide Name</p>
          <p className="text-xl mb-6">Sheeba S</p>
          <p className="text-white/40 text-sm tracking-widest uppercase mb-2">Department</p>
          <p className="text-xl">Computer Science & Engineering</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
""",
    "Slide03": """import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from '../PhoneMockup';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide03() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12">
          WHAT IS LEDGER?
        </motion.h1>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-8">
          Ledger is a privacy-first expense tracking application built as a Progressive Web App.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-8">
          Most finance apps depend on cloud servers and user accounts. Ledger takes a different approach.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-8">
          Everything works directly on the user's device. Expenses, budgets, insights, and history remain private and accessible even without internet connectivity.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white font-medium">
          Ledger focuses on speed, simplicity, privacy, and financial awareness.
        </motion.p>
      </div>
      <div className="w-1/2 flex justify-center">
        <PhoneMockup src="/ppt/screenshot_dashboard.png" alt="Dashboard" />
      </div>
    </motion.div>
  );
}
""",
    "Slide04": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide04() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12 text-center">
        WHY DO WE NEED LEDGER?
      </motion.h1>
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.p variants={item} className="text-3xl leading-relaxed text-white mb-6">
          Managing personal expenses sounds simple, but most students struggle to track where their money goes.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-6">
          Existing applications often introduce unnecessary complexity.
        </motion.p>
        <motion.div variants={item} className="text-2xl leading-relaxed text-white/50 mb-10 flex flex-col gap-2">
          <span>Many require account creation.</span>
          <span>Many collect financial data.</span>
          <span>Many stop functioning properly without internet access.</span>
        </motion.div>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white border-l-4 border-white pl-6 py-2 inline-block">
          As a result, users lose trust, privacy, and consistency.
        </motion.p>
      </div>
      <motion.div variants={item} className="grid grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
        <div className="bg-[#111] p-10 rounded-3xl border border-white/5">
          <h3 className="text-white/40 tracking-widest uppercase mb-4 text-sm font-bold">Privacy</h3>
          <p className="text-xl">Financial data is stored externally by third parties.</p>
        </div>
        <div className="bg-[#111] p-10 rounded-3xl border border-white/5">
          <h3 className="text-white/40 tracking-widest uppercase mb-4 text-sm font-bold">Complexity</h3>
          <p className="text-xl">Too many unnecessary features slow down input.</p>
        </div>
        <div className="bg-[#111] p-10 rounded-3xl border border-white/5">
          <h3 className="text-white/40 tracking-widest uppercase mb-4 text-sm font-bold">Dependency</h3>
          <p className="text-xl">Internet is required for basic functionality.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
""",
    "Slide05": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide05() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-16">
        OUR OBJECTIVES
      </motion.h1>
      
      <div className="grid grid-cols-2 gap-8 mb-20 max-w-5xl">
        <motion.div variants={item} className="bg-[#111] p-12 rounded-3xl border border-white/10 group hover:bg-[#1a1a1a] transition-colors">
          <h2 className="text-3xl font-bold mb-4">Privacy First</h2>
          <p className="text-xl text-white/60">Keep financial data exclusively on the user's device.</p>
        </motion.div>
        
        <motion.div variants={item} className="bg-[#111] p-12 rounded-3xl border border-white/10 group hover:bg-[#1a1a1a] transition-colors">
          <h2 className="text-3xl font-bold mb-4">Offline First</h2>
          <p className="text-xl text-white/60">Allow full functionality without internet.</p>
        </motion.div>
        
        <motion.div variants={item} className="bg-[#111] p-12 rounded-3xl border border-white/10 group hover:bg-[#1a1a1a] transition-colors">
          <h2 className="text-3xl font-bold mb-4">Financial Awareness</h2>
          <p className="text-xl text-white/60">Help users understand their true spending habits.</p>
        </motion.div>
        
        <motion.div variants={item} className="bg-[#111] p-12 rounded-3xl border border-white/10 group hover:bg-[#1a1a1a] transition-colors">
          <h2 className="text-3xl font-bold mb-4">Ease of Use</h2>
          <p className="text-xl text-white/60">Reduce friction in daily expense tracking.</p>
        </motion.div>
      </div>

      <div className="max-w-4xl">
        <motion.p variants={item} className="text-2xl text-white/60 mb-4">
          The goal of Ledger is not to become a banking platform.
        </motion.p>
        <motion.p variants={item} className="text-3xl text-white font-medium">
          The goal is to make personal finance tracking simple, private, and accessible.
        </motion.p>
      </div>
    </motion.div>
  );
}
""",
    "Slide06": """import React from 'react';
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
""",
    "Slide07": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide07() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12">
          CURRENT APPROACHES
        </motion.h1>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white mb-8">
          Most modern expense trackers use cloud databases.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-8">
          Transactions are uploaded to remote servers. Users must create accounts and rely on continuous internet access.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/50">
          While these systems offer synchronization, they also introduce privacy concerns and dependency on third-party infrastructure.
        </motion.p>
      </div>
      
      <div className="w-1/2 flex justify-center">
        <motion.div variants={item} className="flex flex-col items-center gap-6">
          <div className="w-48 h-32 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold">User</div>
          <div className="w-[2px] h-12 bg-white/20"></div>
          <div className="w-48 h-32 bg-white/10 rounded-2xl border border-white/30 flex items-center justify-center text-xl font-bold">Internet</div>
          <div className="w-[2px] h-12 bg-white/20"></div>
          <div className="w-48 h-32 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold">Server</div>
          <div className="w-[2px] h-12 bg-white/20"></div>
          <div className="w-48 h-32 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold">Database</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
""",
    "Slide08": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide08() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12">
          THE LEDGER APPROACH
        </motion.h1>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white mb-8">
          Ledger removes unnecessary infrastructure.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-8">
          The application operates directly on the user's device. Transactions are stored locally, and insights are generated instantly.
        </motion.p>
        <motion.p variants={item} className="text-3xl leading-relaxed text-white font-medium">
          The result is a faster and more private experience.
        </motion.p>
      </div>
      
      <div className="w-1/2 flex justify-center">
        <motion.div variants={item} className="flex flex-col items-center gap-6">
          <div className="w-56 h-32 bg-white text-black rounded-2xl flex items-center justify-center text-2xl font-bold shadow-[0_0_40px_rgba(255,255,255,0.2)]">User</div>
          <div className="w-[2px] h-12 bg-white/40"></div>
          <div className="w-56 h-32 bg-[#111] rounded-2xl border-2 border-white/40 flex items-center justify-center text-2xl font-bold">Ledger App</div>
          <div className="w-[2px] h-12 bg-white/40"></div>
          <div className="flex gap-8">
            <div className="w-40 h-32 bg-[#111] rounded-2xl border border-white/20 flex flex-col items-center justify-center text-lg font-medium text-white/70">
              <span>Local</span>
              <span>Storage</span>
            </div>
            <div className="w-40 h-32 bg-[#111] rounded-2xl border border-white/20 flex flex-col items-center justify-center text-lg font-medium text-white/70">
              <span>Instant</span>
              <span>Insights</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
""",
    "Slide09": """import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from '../PhoneMockup';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide09() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12">
          TRACK EVERYTHING
        </motion.h1>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/80 mb-8">
          The dashboard provides a quick overview of income, expenses, balance, and budget status.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/60 mb-12">
          Users immediately understand their financial position without navigating through multiple screens.
        </motion.p>
        
        <motion.h3 variants={item} className="text-white/40 tracking-widest uppercase mb-6 text-sm font-bold">Key Features</motion.h3>
        <motion.div variants={item} className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Income Tracking</p>
          </div>
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Expense Tracking</p>
          </div>
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Net Balance Monitoring</p>
          </div>
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Budget Alerts</p>
          </div>
        </motion.div>
      </div>
      <div className="w-1/2 flex justify-center">
        <PhoneMockup src="/ppt/screenshot_dashboard.png" alt="Dashboard" />
      </div>
    </motion.div>
  );
}
""",
    "Slide10": """import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from '../PhoneMockup';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide10() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12 leading-tight">
          EVERY RUPEE ACCOUNTED FOR
        </motion.h1>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/80 mb-8">
          Every transaction is organized chronologically.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/60 mb-8">
          Powerful filtering helps users locate records instantly.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/60 mb-12">
          The history system provides transparency and accountability for daily spending.
        </motion.p>
        
        <motion.h3 variants={item} className="text-white/40 tracking-widest uppercase mb-6 text-sm font-bold">Highlighted Features</motion.h3>
        <motion.div variants={item} className="flex flex-wrap gap-4">
          <span className="px-6 py-3 bg-[#111] rounded-full border border-white/10 text-lg">Search</span>
          <span className="px-6 py-3 bg-[#111] rounded-full border border-white/10 text-lg">Filtering</span>
          <span className="px-6 py-3 bg-[#111] rounded-full border border-white/10 text-lg">Category Tracking</span>
          <span className="px-6 py-3 bg-[#111] rounded-full border border-white/10 text-lg">Date Grouping</span>
        </motion.div>
      </div>
      <div className="w-1/2 flex justify-center">
        <PhoneMockup src="/ppt/screenshot_dashboard_data.png" alt="History" />
      </div>
    </motion.div>
  );
}
""",
    "Slide11": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide11() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-16 text-center">
        STAY WITHIN LIMITS
      </motion.h1>
      
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.p variants={item} className="text-2xl leading-relaxed text-white mb-6">
          Users can define spending limits for different categories.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-6">
          When spending approaches the limit, Ledger immediately displays visual warnings.
        </motion.p>
        <motion.p variants={item} className="text-3xl leading-relaxed font-bold text-white">
          This creates awareness before overspending occurs.
        </motion.p>
      </div>
      
      <motion.div variants={item} className="flex justify-center items-center gap-6 w-full max-w-6xl mx-auto">
        <div className="flex-1 h-32 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold">Budget Created</div>
        <div className="text-white/30 text-3xl">→</div>
        <div className="flex-1 h-32 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold">Expense Added</div>
        <div className="text-white/30 text-3xl">→</div>
        <div className="flex-1 h-32 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold">Limit Checked</div>
        <div className="text-white/30 text-3xl">→</div>
        <div className="flex-1 h-32 bg-white text-black rounded-2xl border border-white flex items-center justify-center text-xl font-bold">Warning Triggered</div>
      </motion.div>
    </motion.div>
  );
}
""",
    "Slide12": """import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from '../PhoneMockup';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide12() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12">
          YOUR PERSONAL FINANCE GUIDE
        </motion.h1>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white mb-12">
          Ledger Coach uses AI assistance to help users understand their finances.
        </motion.p>
        
        <motion.h3 variants={item} className="text-white/40 tracking-widest uppercase mb-6 text-sm font-bold">Example Queries</motion.h3>
        <motion.div variants={item} className="flex flex-col gap-4 mb-12">
          <div className="p-5 bg-[#111] rounded-2xl border border-white/5 text-xl">"How can I save more money?"</div>
          <div className="p-5 bg-[#111] rounded-2xl border border-white/5 text-xl">"Where am I overspending?"</div>
          <div className="p-5 bg-[#111] rounded-2xl border border-white/5 text-xl">"Summarize this month."</div>
        </motion.div>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 border-l-4 border-white/30 pl-6">
          The system transforms raw financial data into understandable advice.
        </motion.p>
      </div>
      <div className="w-1/2 flex justify-center">
        <PhoneMockup src="/ppt/screenshot_privacy.png" alt="Coach" />
      </div>
    </motion.div>
  );
}
""",
    "Slide13": """import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from '../PhoneMockup';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide13() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex items-center">
      <div className="w-1/2 pr-16 flex flex-col justify-center">
        <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-12">
          UNDERSTAND YOUR MONEY
        </motion.h1>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white mb-10">
          Ledger automatically analyzes spending patterns. Users can identify:
        </motion.p>
        
        <motion.div variants={item} className="grid grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Highest Spending Category</p>
          </div>
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Average Transaction Value</p>
          </div>
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Total Monthly Spending</p>
          </div>
          <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-xl font-medium">Transaction Count</p>
          </div>
        </motion.div>
        
        <motion.p variants={item} className="text-3xl leading-relaxed text-white font-bold">
          Understanding patterns leads to better decisions.
        </motion.p>
      </div>
      <div className="w-1/2 flex justify-center">
        <PhoneMockup src="/ppt/screenshot_insights.png" alt="Insights" />
      </div>
    </motion.div>
  );
}
""",
    "Slide14": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide14() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-16 text-center">
        WORKS ANYWHERE
      </motion.h1>
      
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.p variants={item} className="text-3xl leading-relaxed text-white mb-6 font-medium">
          Ledger is built as a Progressive Web App.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-6">
          The application can be installed directly from the browser. Once installed, it behaves like a native application.
        </motion.p>
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70">
          Even when internet connectivity is unavailable, users can continue tracking expenses normally.
        </motion.p>
      </div>
      
      <motion.div variants={item} className="grid grid-cols-4 gap-6 w-full max-w-5xl mx-auto">
        <div className="bg-[#111] p-10 rounded-3xl border border-white/10 text-center flex flex-col justify-center min-h-[160px]">
          <h2 className="text-2xl font-bold">Installable</h2>
        </div>
        <div className="bg-[#111] p-10 rounded-3xl border border-white/10 text-center flex flex-col justify-center min-h-[160px]">
          <h2 className="text-2xl font-bold">Offline</h2>
        </div>
        <div className="bg-[#111] p-10 rounded-3xl border border-white/10 text-center flex flex-col justify-center min-h-[160px]">
          <h2 className="text-2xl font-bold">Fast</h2>
        </div>
        <div className="bg-[#111] p-10 rounded-3xl border border-white/10 text-center flex flex-col justify-center min-h-[160px]">
          <h2 className="text-2xl font-bold">Reliable</h2>
        </div>
      </motion.div>
    </motion.div>
  );
}
""",
    "Slide15": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Slide15() {
  const techs = ["React", "Vite", "Tailwind CSS", "Framer Motion", "Local Storage", "Groq AI", "PWA", "Vercel"];
  
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-20 text-center">
        BUILT WITH MODERN WEB TECHNOLOGIES
      </motion.h1>
      
      <motion.div variants={item} className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-20">
        {techs.map((tech, idx) => (
          <div key={idx} className="px-10 py-6 bg-[#111] rounded-2xl border border-white/10 text-2xl font-medium">
            {tech}
          </div>
        ))}
      </motion.div>
      
      <motion.p variants={item} className="text-3xl text-center text-white/60 max-w-4xl mx-auto leading-relaxed">
        These technologies were selected to maximize performance, maintainability, and user experience.
      </motion.p>
    </motion.div>
  );
}
""",
    "Slide16": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide16() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-20 text-center">
        HOW IT WORKS
      </motion.h1>
      
      <motion.div variants={item} className="flex flex-col items-center gap-4 w-full max-w-3xl mx-auto mb-16">
        <div className="w-full py-5 bg-[#111] rounded-xl border border-white/10 text-center text-xl font-bold">User Interface</div>
        <div className="text-white/30">↓</div>
        <div className="w-full py-5 bg-[#111] rounded-xl border border-white/10 text-center text-xl font-bold">React Components</div>
        <div className="text-white/30">↓</div>
        <div className="w-full py-5 bg-[#111] rounded-xl border border-white/10 text-center text-xl font-bold">Business Logic</div>
        <div className="text-white/30">↓</div>
        <div className="w-full py-5 bg-[#111] rounded-xl border border-white/10 text-center text-xl font-bold">Local Storage</div>
        <div className="text-white/30">↓</div>
        <div className="w-full py-5 bg-[#111] rounded-xl border border-white/10 text-center text-xl font-bold">Analytics Engine</div>
        <div className="text-white/30">↓</div>
        <div className="w-full py-5 bg-[#111] rounded-xl border border-white/10 text-center text-xl font-bold">UI Updates</div>
      </motion.div>
      
      <motion.p variants={item} className="text-2xl text-center text-white/80 max-w-3xl mx-auto">
        All operations occur locally, reducing latency and improving privacy.
      </motion.p>
    </motion.div>
  );
}
""",
    "Slide17": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide17() {
  const outcomes = ["Offline Functionality", "Instant Logging", "Privacy Focused", "Responsive Design", "AI Assistance"];
  
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-20 text-center">
        PROJECT OUTCOMES
      </motion.h1>
      
      <motion.div variants={item} className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-24">
        {outcomes.map((outcome, idx) => (
          <div key={idx} className="px-10 py-8 bg-[#111] rounded-3xl border border-white/10 text-2xl font-bold text-center">
            {outcome}
          </div>
        ))}
      </motion.div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.p variants={item} className="text-2xl text-white/70 mb-4">
          Testing confirmed smooth operation across desktop and mobile devices.
        </motion.p>
        <motion.p variants={item} className="text-3xl text-white font-medium">
          The final product successfully meets the project's primary objectives.
        </motion.p>
      </div>
    </motion.div>
  );
}
""",
    "Slide18": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide18() {
  const future = [
    "Custom Categories", 
    "Recurring Transactions", 
    "Advanced Analytics", 
    "Multi Device Sync", 
    "Receipt Scanning", 
    "Enhanced AI Features"
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-20 text-center">
        WHAT COMES NEXT?
      </motion.h1>
      
      <motion.div variants={item} className="grid grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
        {future.map((f, idx) => (
          <div key={idx} className="bg-[#111] p-10 rounded-3xl border border-white/5 flex items-center justify-center min-h-[160px] text-center">
            <h3 className="text-2xl font-bold">{f}</h3>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
""",
    "Slide19": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Slide19() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center">
      <motion.h1 variants={item} className="text-6xl font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter mb-20 text-center">
        KEY TAKEAWAYS
      </motion.h1>
      
      <div className="max-w-4xl mx-auto">
        <motion.p variants={item} className="text-3xl leading-relaxed text-white font-medium mb-10 text-center">
          Ledger demonstrates that powerful expense tracking does not require sacrificing privacy.
        </motion.p>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 mb-10 text-center">
          By combining offline-first architecture with modern web technologies, the application provides a fast, secure, and intuitive experience.
        </motion.p>
        
        <motion.p variants={item} className="text-2xl leading-relaxed text-white/70 text-center">
          The project successfully achieves its objectives while creating a strong foundation for future improvements.
        </motion.p>
      </div>
    </motion.div>
  );
}
""",
    "Slide20": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } }
};

export default function Slide20() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full h-full flex flex-col justify-center items-center text-center">
      <h1 className="text-[140px] font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter leading-none mb-8">
        THANK YOU
      </h1>
      <h2 className="text-4xl text-white/50 font-light tracking-wide mb-32">
        Questions?
      </h2>
      
      <div className="mt-auto pb-12">
        <h3 className="text-3xl font-['Horizon','Outfit',sans-serif] uppercase tracking-widest mb-4">LEDGER</h3>
        <p className="text-white/40 tracking-widest uppercase text-sm">Private by Design. Offline by Default.</p>
      </div>
    </motion.div>
  );
}
"""
}

# Create new slide files
for file_name, content in slides_data.items():
    file_path = os.path.join(slide_dir, f"{file_name}.jsx")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

# Create index.js
index_content = "\n".join([f"export {{ default as {k} }} from './{k}';" for k in slides_data.keys()])
with open(os.path.join(slide_dir, "index.js"), "w", encoding="utf-8") as f:
    f.write(index_content)

print(f"Generated {len(slides_data)} slides successfully.")
