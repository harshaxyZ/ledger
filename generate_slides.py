import os

slides_dir = os.path.join('src', 'components', 'ppt', 'slides')
os.makedirs(slides_dir, exist_ok=True)

templates = {
  1: """// Slide 01: Pure black. No text.
const Slide01 = () => (
  <div className="w-full h-full flex items-center justify-center bg-black">
  </div>
);
export default Slide01;""",

  2: """// Slide 02: LEDGER
const Slide02 = () => (
  <div className="w-full h-full flex flex-col justify-center items-start max-w-5xl mx-auto">
    <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tight mb-4 font-['Horizon','Outfit',sans-serif]">LEDGER</h1>
    <h2 className="text-2xl md:text-4xl font-medium text-white/70 mb-16 tracking-wide">Private by Design.<br/>Offline by Default.</h2>
    <div className="grid grid-cols-2 gap-12 text-sm text-white/50 tracking-widest uppercase">
      <div>
        <p className="text-white mb-2 font-bold">Team</p>
        <p>Member 1</p>
        <p>Member 2</p>
        <p>Member 3</p>
        <p>Member 4</p>
        <p>Member 5</p>
        <p>Member 6</p>
      </div>
      <div>
        <p className="text-white mb-2 font-bold">Guide</p>
        <p className="mb-8">Project Guide Name</p>
        <p className="text-white mb-2 font-bold">Department</p>
        <p>Computer Science and Engineering</p>
      </div>
    </div>
  </div>
);
export default Slide02;""",

  3: """// Slide 03: Hero
const Slide03 = () => (
  <div className="w-full h-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
    <div className="flex-1">
      <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-black uppercase tracking-tighter font-['Horizon','Outfit',sans-serif]">
        YOUR<br/>MONEY.<br/>YOUR<br/>RULES.
      </h1>
    </div>
    <div className="flex-1 flex justify-center relative">
      <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-75"></div>
      <img src="/ppt/screenshot_dashboard_data.png" alt="App Dashboard" className="relative z-10 rounded-[3rem] border-8 border-[#151B23] shadow-2xl h-[70vh] object-cover" />
    </div>
  </div>
);
export default Slide03;""",

  4: """// Slide 04: Problem
const Slide04 = () => (
  <div className="w-full h-full flex flex-col justify-center items-start max-w-5xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-8">The Problem</p>
    <h2 className="text-4xl md:text-7xl font-bold leading-tight">
      Modern financial apps are fundamentally <span className="underline decoration-white/30 underline-offset-8">broken</span>. 
      <br/><br/>
      They are bloated with ads, require constant internet, and actively harvest your personal spending data.
    </h2>
  </div>
);
export default Slide04;""",

  5: """// Slide 05: Need for project
const Slide05 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-16">Need For Project</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="border-t border-white pt-6">
        <h3 className="text-3xl font-bold mb-4">Trust</h3>
        <p className="text-white/60 text-lg">When you rely on third-party servers, your data is exposed to breaches and data brokers.</p>
      </div>
      <div className="border-t border-white pt-6">
        <h3 className="text-3xl font-bold mb-4">Speed</h3>
        <p className="text-white/60 text-lg">Cloud syncing adds friction. Tracking a simple coffee purchase shouldn't take 10 seconds of loading.</p>
      </div>
      <div className="border-t border-white pt-6">
        <h3 className="text-3xl font-bold mb-4">Simplicity</h3>
        <p className="text-white/60 text-lg">Most interfaces are cluttered to serve marketing goals rather than user experience.</p>
      </div>
    </div>
  </div>
);
export default Slide05;""",

  6: """// Slide 06: Objectives
const Slide06 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-12">Objectives</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#111] p-12 rounded-3xl border border-white/10 hover:border-white/30 transition-colors">
        <h3 className="text-5xl font-bold mb-6 font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter">100% OFFLINE</h3>
        <p className="text-xl text-white/60">An application that works instantly, regardless of network conditions, acting as a native system feature.</p>
      </div>
      <div className="bg-[#111] p-12 rounded-3xl border border-white/10 hover:border-white/30 transition-colors">
        <h3 className="text-5xl font-bold mb-6 font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter">0 MS LATENCY</h3>
        <p className="text-xl text-white/60">Zero-latency transaction logging through localized state management.</p>
      </div>
      <div className="bg-[#111] p-12 rounded-3xl border border-white/10 hover:border-white/30 transition-colors md:col-span-2">
        <h3 className="text-5xl font-bold mb-6 font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter">PRIVACY BY DESIGN</h3>
        <p className="text-xl text-white/60">Total data ownership. No databases, no telemetry, no tracking.</p>
      </div>
    </div>
  </div>
);
export default Slide06;""",

  7: """// Slide 07: Literature Survey
const Slide07 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-12">Literature Survey</p>
    <div className="w-full overflow-hidden border border-white/20 rounded-2xl">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white text-black">
            <th className="p-6 font-bold text-xl">System</th>
            <th className="p-6 font-bold text-xl">Core Issue</th>
            <th className="p-6 font-bold text-xl">Privacy Impact</th>
          </tr>
        </thead>
        <tbody className="text-lg">
          <tr className="border-b border-white/10">
            <td className="p-6 font-bold">Splitwise</td>
            <td className="p-6 text-white/60">Server reliant, limits on free tier</td>
            <td className="p-6 text-white/60">High data collection</td>
          </tr>
          <tr className="border-b border-white/10">
            <td className="p-6 font-bold">Mint (Legacy)</td>
            <td className="p-6 text-white/60">Slow sync, ad-heavy interface</td>
            <td className="p-6 text-white/60">Sold financial data</td>
          </tr>
          <tr>
            <td className="p-6 font-bold">Wallet Apps</td>
            <td className="p-6 text-white/60">Complex setup, requires bank sync</td>
            <td className="p-6 text-white/60">Medium data exposure</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
export default Slide07;""",

  8: """// Slide 08: Existing Systems
const Slide08 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-16">Existing Systems vs Ledger</p>
    <div className="flex gap-16 items-center">
      <div className="flex-1 space-y-12 opacity-50">
        <h3 className="text-3xl font-bold mb-8">Existing Apps</h3>
        <div><p className="text-xl font-bold">Cloud Dependent</p><p className="text-sm">Requires connection</p></div>
        <div><p className="text-xl font-bold">Ad-Supported</p><p className="text-sm">Cluttered interface</p></div>
        <div><p className="text-xl font-bold">Account Based</p><p className="text-sm">Requires PII to use</p></div>
      </div>
      <div className="w-px h-[400px] bg-white/20"></div>
      <div className="flex-1 space-y-12">
        <h3 className="text-4xl font-black uppercase tracking-tight mb-8 font-['Horizon','Outfit',sans-serif]">LEDGER</h3>
        <div><p className="text-2xl font-bold">100% Local</p><p className="text-lg text-white/60">Instant access</p></div>
        <div><p className="text-2xl font-bold">Ad-Free</p><p className="text-lg text-white/60">Pure functionality</p></div>
        <div><p className="text-2xl font-bold">Anonymous</p><p className="text-lg text-white/60">No emails, no accounts</p></div>
      </div>
    </div>
  </div>
);
export default Slide08;""",

  9: """// Slide 09: Why Ledger
const Slide09 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-12">Why Ledger</p>
    <div className="grid grid-cols-2 gap-x-16 gap-y-12">
      <div>
        <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 font-['Horizon','Outfit',sans-serif]">SPEED</h3>
        <p className="text-xl text-white/60">Because there are no centralized databases, opening the app and logging an expense is instantaneous.</p>
      </div>
      <div>
        <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 font-['Horizon','Outfit',sans-serif]">INTELLIGENCE</h3>
        <p className="text-xl text-white/60">Embedded AI Advisor that analyzes your local spending patterns without exposing your raw data to marketers.</p>
      </div>
      <div>
        <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 font-['Horizon','Outfit',sans-serif]">DESIGN</h3>
        <p className="text-xl text-white/60">A premium dark-mode aesthetic that feels like a native operating system tool.</p>
      </div>
      <div>
        <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 font-['Horizon','Outfit',sans-serif]">OWNERSHIP</h3>
        <p className="text-xl text-white/60">Your financial footprint remains entirely under your control.</p>
      </div>
    </div>
  </div>
);
export default Slide09;""",

  10: """// Slide 10: Architecture
import React from 'react';
import { motion } from 'framer-motion';
const Slide10 = () => (
  <div className="w-full h-full flex flex-col justify-center items-center max-w-5xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-16 w-full text-left">Architecture</p>
    
    <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center">
      <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="p-8 border border-white/20 rounded-2xl w-64 text-center bg-[#111]">
        <p className="font-bold text-2xl">React UI</p>
        <p className="text-sm text-white/50 mt-2">Components</p>
      </motion.div>
      
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} className="text-white/50 rotate-90 md:rotate-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </motion.div>
      
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="p-8 border-2 border-white rounded-2xl w-64 text-center bg-white text-black">
        <p className="font-bold text-2xl">Custom Hooks</p>
        <p className="text-sm text-black/60 mt-2">State Management</p>
      </motion.div>
      
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} className="text-white/50 rotate-90 md:rotate-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </motion.div>
      
      <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.0 }} className="p-8 border border-white/20 rounded-2xl w-64 text-center bg-[#111]">
        <p className="font-bold text-2xl">LocalStorage</p>
        <p className="text-sm text-white/50 mt-2">Browser DB</p>
      </motion.div>
    </div>
  </div>
);
export default Slide10;""",

  11: """// Slide 11: Tech Stack
const Slide11 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto text-center">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-16 text-left">Technology Stack</p>
    <div className="flex flex-wrap justify-center gap-12 mt-12">
      <div className="text-5xl font-black uppercase tracking-tighter border border-white/10 px-8 py-4 rounded-full font-['Horizon','Outfit',sans-serif]">REACT 19</div>
      <div className="text-5xl font-black uppercase tracking-tighter border border-white/10 px-8 py-4 rounded-full font-['Horizon','Outfit',sans-serif]">VITE PWA</div>
      <div className="text-5xl font-black uppercase tracking-tighter border border-white/10 px-8 py-4 rounded-full font-['Horizon','Outfit',sans-serif]">TAILWIND CSS</div>
      <div className="text-5xl font-black uppercase tracking-tighter border border-white/10 px-8 py-4 rounded-full font-['Horizon','Outfit',sans-serif]">FRAMER MOTION</div>
      <div className="text-5xl font-black uppercase tracking-tighter border border-white/10 px-8 py-4 rounded-full font-['Horizon','Outfit',sans-serif]">LOCAL STORAGE</div>
    </div>
  </div>
);
export default Slide11;""",

  12: """// Slide 12: Implementation
const Slide12 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-12">Implementation Modules</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-10 border border-white/20 hover:border-white transition-colors rounded-2xl">
        <h3 className="text-3xl font-bold mb-4">Transaction Engine</h3>
        <p className="text-white/60 text-lg">Optimized local CRUD operations with automatic real-time UI updates.</p>
      </div>
      <div className="p-10 border border-white/20 hover:border-white transition-colors rounded-2xl">
        <h3 className="text-3xl font-bold mb-4">Budget System</h3>
        <p className="text-white/60 text-lg">Dynamic thresholding that visually reacts to user spending patterns.</p>
      </div>
      <div className="p-10 border border-white/20 hover:border-white transition-colors rounded-2xl">
        <h3 className="text-3xl font-bold mb-4">AI Coach</h3>
        <p className="text-white/60 text-lg">Groq API integration for intelligent, personalized financial advice.</p>
      </div>
    </div>
  </div>
);
export default Slide12;""",

  13: """// Slide 13: Dashboard Showcase
const Slide13 = () => (
  <div className="w-full h-full flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-16">
    <div className="flex-1">
      <h2 className="text-6xl font-black uppercase tracking-tighter mb-6 font-['Horizon','Outfit',sans-serif]">THE<br/>DASHBOARD</h2>
      <p className="text-xl text-white/60">Frictionless entry. Deep categorized logging. Habit-forming gamification streaks.</p>
    </div>
    <div className="flex-1 flex justify-end">
      <img src="/ppt/screenshot_dashboard.png" alt="Dashboard" className="rounded-[2.5rem] h-[75vh] object-cover border-4 border-white/10" />
    </div>
  </div>
);
export default Slide13;""",

  14: """// Slide 14: Analytics
const Slide14 = () => (
  <div className="w-full h-full flex flex-col-reverse md:flex-row-reverse items-center justify-between max-w-6xl mx-auto gap-16">
    <div className="flex-1">
      <h2 className="text-6xl font-black uppercase tracking-tighter mb-6 font-['Horizon','Outfit',sans-serif]">VISUAL<br/>INSIGHTS</h2>
      <p className="text-xl text-white/60">Complex data aggregated and presented in clean, digestible visual progress bars instantly.</p>
    </div>
    <div className="flex-1 flex justify-start">
      <img src="/ppt/screenshot_insights.png" alt="Insights" className="rounded-[2.5rem] h-[75vh] object-cover border-4 border-white/10" />
    </div>
  </div>
);
export default Slide14;""",

  15: """// Slide 15: Budget Warnings
const Slide15 = () => (
  <div className="w-full h-full flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-16">
    <div className="flex-1">
      <h2 className="text-6xl font-black uppercase tracking-tighter mb-6 font-['Horizon','Outfit',sans-serif]">DYNAMIC<br/>WARNINGS</h2>
      <p className="text-xl text-white/60">The interface reacts in real-time, flashing visually to warn you about approaching limits.</p>
    </div>
    <div className="flex-1 flex justify-end">
      <img src="/ppt/screenshot_budget_warning.png" alt="Budget Warning" className="rounded-[2.5rem] h-[75vh] object-cover border-4 border-white/10" />
    </div>
  </div>
);
export default Slide15;""",

  16: """// Slide 16: Offline First
const Slide16 = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
    <h2 className="text-7xl font-black uppercase tracking-tighter mb-12 font-['Horizon','Outfit',sans-serif]">OFFLINE. ALWAYS.</h2>
    <img src="/ppt/screenshot_offline.png" alt="Offline Mode" className="rounded-[2.5rem] h-[50vh] object-cover border-4 border-white/10 mb-8 mx-auto" />
    <p className="text-xl text-white/60">Thanks to Service Workers, Ledger boots instantly on 5G or completely off the grid.</p>
  </div>
);
export default Slide16;""",

  17: """// Slide 17: Privacy First
const Slide17 = () => (
  <div className="w-full h-full flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-16">
    <div className="flex-1">
      <h2 className="text-6xl font-black uppercase tracking-tighter mb-6 font-['Horizon','Outfit',sans-serif]">DATA<br/>OWNERSHIP</h2>
      <p className="text-xl text-white/60">No backend. No trackers. You have total control to export or hard reset your data at any time.</p>
    </div>
    <div className="flex-1 flex justify-end">
      <img src="/ppt/screenshot_privacy.png" alt="Privacy Settings" className="rounded-[2.5rem] h-[75vh] object-cover border-4 border-white/10" />
    </div>
  </div>
);
export default Slide17;""",

  18: """// Slide 18: Results
const Slide18 = () => (
  <div className="w-full h-full flex flex-col justify-center items-center max-w-5xl mx-auto text-center">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-16">Results</p>
    <div className="grid grid-cols-1 md:grid-cols-3 w-full border border-white rounded-3xl overflow-hidden">
      <div className="p-16 border-b md:border-b-0 md:border-r border-white flex flex-col justify-center items-center bg-[#111]">
        <h3 className="text-7xl font-black mb-4">0<span className="text-4xl">ms</span></h3>
        <p className="text-white/60 font-bold uppercase tracking-widest">Latency</p>
      </div>
      <div className="p-16 border-b md:border-b-0 md:border-r border-white flex flex-col justify-center items-center bg-[#111]">
        <h3 className="text-7xl font-black mb-4">100<span className="text-4xl">%</span></h3>
        <p className="text-white/60 font-bold uppercase tracking-widest">Private</p>
      </div>
      <div className="p-16 flex flex-col justify-center items-center bg-white text-black">
        <h3 className="text-7xl font-black mb-4">PWA</h3>
        <p className="text-black/60 font-bold uppercase tracking-widest">Native Feel</p>
      </div>
    </div>
  </div>
);
export default Slide18;""",

  19: """// Slide 19: Future Enhancements
const Slide19 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-16">Future Scope</p>
    <div className="space-y-12 pl-8 border-l-2 border-white/20">
      <div className="relative">
        <div className="absolute w-4 h-4 bg-white rounded-full -left-[41px] top-2"></div>
        <h3 className="text-3xl font-bold">Custom Categories</h3>
        <p className="text-white/60 text-lg mt-2">User-defined taxonomy for logging.</p>
      </div>
      <div className="relative">
        <div className="absolute w-4 h-4 bg-[#111] border-2 border-white/50 rounded-full -left-[41px] top-2"></div>
        <h3 className="text-3xl font-bold text-white/50">Recurring Logs</h3>
        <p className="text-white/40 text-lg mt-2">Automated entries for subscriptions and rent.</p>
      </div>
      <div className="relative">
        <div className="absolute w-4 h-4 bg-[#111] border-2 border-white/50 rounded-full -left-[41px] top-2"></div>
        <h3 className="text-3xl font-bold text-white/50">Biometric Lock</h3>
        <p className="text-white/40 text-lg mt-2">FaceID / Fingerprint layer for local security.</p>
      </div>
    </div>
  </div>
);
export default Slide19;""",

  20: """// Slide 20: Conclusion
const Slide20 = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-center max-w-6xl mx-auto">
    <h2 className="text-6xl md:text-[5rem] lg:text-[7rem] font-black uppercase tracking-tighter leading-none mb-8 font-['Horizon','Outfit',sans-serif]">
      FAST.<br/>SECURE.<br/>PRIVATE.
    </h2>
    <p className="text-2xl text-white/60 font-medium tracking-wide">Ready to scale locally.</p>
  </div>
);
export default Slide20;""",

  21: """// Slide 21: Thank You
const Slide21 = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-center max-w-5xl mx-auto">
    <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-4 font-['Horizon','Outfit',sans-serif]">THANK YOU</h2>
    <p className="text-2xl font-bold text-white/50 tracking-widest mb-16">LEDGER</p>
    <p className="text-xl text-white/80">Questions?</p>
  </div>
);
export default Slide21;"""
}

for num, content in templates.items():
    file_name = f"Slide{num:02d}.jsx"
    file_path = os.path.join(slides_dir, file_name)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

index_content = "\n".join([f"export {{ default as Slide{num:02d} }} from './Slide{num:02d}';" for num in templates.keys()])
with open(os.path.join(slides_dir, 'index.js'), 'w', encoding='utf-8') as f:
    f.write(index_content)

print("Generated slide components in Python successfully!")
