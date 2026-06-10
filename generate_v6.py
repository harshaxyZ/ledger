import os
import shutil

slide_dir = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\components\ppt\slides"
engine_path = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\components\ppt\PresentationEngine.jsx"

if os.path.exists(slide_dir):
    shutil.rmtree(slide_dir)
os.makedirs(slide_dir)

# -----------------
# ENGINE
# -----------------
engine_content = """import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bgMap = {
  0: null,
  1: '/bg1.png', 2: '/bg1.png', 3: '/bg1.png', 4: '/bg1.png', 5: '/bg1.png',
  6: '/bg2.png', 7: '/bg2.png', 8: '/bg2.png', 9: '/bg2.png', 10: '/bg2.png',
  11: '/bg3.png', 12: '/bg3.png', 13: '/bg3.png', 14: '/bg3.png', 15: '/bg3.png',
  16: '/bg3.png', 17: '/bg3.png', 18: '/bg3.png',
  19: null
};

const PresentationEngine = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [showNavHints, setShowNavHints] = useState(true);
  
  const totalSlides = slides.length;

  const goToNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const goToPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(err => console.warn(err));
        } else {
          document.exitFullscreen();
        }
        return;
      }
      if (['ArrowDown', 'ArrowRight', 'PageDown', 'Space'].includes(e.code) || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.code)) {
        e.preventDefault();
        goToPrev();
      }
    };
    
    let wheelTimeout;
    const handleWheel = (e) => {
      e.preventDefault();
      if (wheelTimeout) return;
      wheelTimeout = setTimeout(() => { wheelTimeout = null; }, 800);
      if (e.deltaY > 0) goToNext();
      else if (e.deltaY < 0) goToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [goToNext, goToPrev]);

  const handleTouchStart = (e) => setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const diffY = touchStart.y - e.changedTouches[0].clientY;
    if (diffY > 50) goToNext();
    else if (diffY < -50) goToPrev();
    setTouchStart(null);
  };

  useEffect(() => {
    setShowNavHints(true);
    const timer = setTimeout(() => setShowNavHints(false), 3000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const variants = {
    enter: (direction) => ({ y: direction > 0 ? '100vh' : '-100vh' }),
    center: { y: 0 },
    exit: (direction) => ({ y: direction < 0 ? '100vh' : '-100vh' })
  };

  const CurrentSlideComponent = slides[currentSlide];
  const bgImage = bgMap[currentSlide];

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-[#000000] text-[#ffffff] overflow-hidden flex flex-col font-['Horizon','Space_Grotesk','Syne',sans-serif]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ userSelect: 'none', WebkitFontSmoothing: 'antialiased' }}
    >
      {/* Background Image Layer */}
      <AnimatePresence mode="wait">
        {bgImage && (
          <motion.div 
            key={bgImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
        )}
      </AnimatePresence>
      
      {/* Gradient Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.55)] pointer-events-none" />

      {/* Slide Content Layer */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center z-10 ${currentSlide === 0 ? '' : 'p-[60px]'}`}
        >
          <div className={`w-full h-full flex flex-col items-center justify-center ${currentSlide === 0 ? '' : 'max-w-[1200px] w-full'}`}>
            <CurrentSlideComponent />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Top Right Page Number Indicator */}
      {currentSlide > 0 && (
        <div className="absolute top-[60px] right-[60px] text-[18px] text-[#b0b0b0] z-50 tracking-wider">
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </div>
      )}

      {/* Subtle Navigation Hints */}
      <AnimatePresence>
        {showNavHints && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-[20px] left-0 right-0 flex justify-center text-[16px] text-[#b0b0b0] font-bold tracking-[0.2em] z-50"
          >
            ↑ ↓
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PresentationEngine;
"""

with open(engine_path, "w", encoding="utf-8") as f:
    f.write(engine_content)

# -----------------
# SLIDES GENERATION
# -----------------
slides_data = {}

slides_data["Slide01"] = """import React from 'react';
import { motion } from 'framer-motion';
export default function Slide01() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#000000]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1.0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 bg-contain bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/slideone.png')" }}
      />
    </div>
  );
}
"""

slides_data["Slide02"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide02() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px] leading-tight">Introduction</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[40px]">The Need for Financial Privacy</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="text-[24px] md:text-[28px] text-[#d0d0d0] leading-[1.7] max-w-[1100px] mb-[60px] w-full text-center">
        <motion.p variants={anim} className="mb-4">In 2026, every financial app demands your data. Bank details, spending habits, location — all uploaded to corporate servers and sold to advertisers.</motion.p>
        <motion.p variants={anim} className="mb-4">Ledger was built on one belief: your money is your business.</motion.p>
        <motion.p variants={anim}>It is a 100% offline Android expense tracker. No cloud. No signup. No data harvesting.</motion.p>
      </motion.div>
      
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-3 gap-[24px] w-full max-w-[1200px]">
        <motion.div variants={anim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[32px] rounded-[16px]">
          <div className="text-[48px] text-[#ffffff] font-bold mb-[8px]">100%</div>
          <div className="text-[20px] text-[#666666]">Offline Operation</div>
        </motion.div>
        <motion.div variants={anim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[32px] rounded-[16px]">
          <div className="text-[48px] text-[#ffffff] font-bold mb-[8px]">Zero</div>
          <div className="text-[20px] text-[#666666]">Data Harvested</div>
        </motion.div>
        <motion.div variants={anim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[32px] rounded-[16px]">
          <div className="text-[48px] text-[#ffffff] font-bold mb-[8px]">2 Sec</div>
          <div className="text-[20px] text-[#666666]">Fast Logging</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
"""

slides_data["Slide03"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide03() {
  const problems = [
    { head: "Data Privacy Crisis", body: "Popular apps like Mint and YNAB store financial data on corporate servers. Users are vulnerable to breaches, data sales, and unauthorized access." },
    { head: "Internet Dependency", body: "Most trackers require constant connectivity. They are completely useless in areas with poor or no network coverage — which is common in India." },
    { head: "Complex & Cluttered", body: "Existing apps overwhelm users with subscriptions, ads, and unnecessary features instead of simple, fast expense logging." }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Problem Statement</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">Why Existing Solutions Fail</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex gap-[24px]">
        {problems.map((p, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] border-t-[4px] border-t-[#ff3333] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] text-[#ffffff] mb-[16px] font-bold">{p.head}</h3>
            <p className="text-[20px] text-[#d0d0d0] leading-[1.7]">{p.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
"""

slides_data["Slide04"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide04() {
  const objectives = [
    { head: "Complete Privacy", body: "Store all financial data locally on the device. Zero cloud sync. Zero external servers." },
    { head: "Offline-First Design", body: "Log expenses, view insights, and manage budgets without any internet connection. Works everywhere." },
    { head: "AI-Powered Guidance", body: "Personalized financial coaching using on-device AI to help users save money and spend smarter." }
  ];
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Objectives</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">What Ledger Aims to Achieve</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex gap-[24px] text-left">
        {objectives.map((o, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] text-[#ffffff] mb-[16px] font-bold">{o.head}</h3>
            <p className="text-[20px] text-[#d0d0d0] leading-[1.7]">{o.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
"""

slides_data["Slide05"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide05() {
  const rows = [
    { app: "Mint (Intuit)", approach: "Cloud-based aggregation", key: "Automatic bank sync", lim: "Sells user data to advertisers" },
    { app: "YNAB", approach: "Zero-based budgeting", key: "Envelope method", lim: "Requires paid subscription, stores data online" },
    { app: "Expensify", approach: "Receipt scanning OCR", key: "Expense capture", lim: "Cloud-only, major privacy concerns" },
    { app: "Ledger (Ours)", approach: "Local-first architecture", key: "100% offline + AI coach", lim: "Limited to single device (by design)", highlight: true }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Literature Survey</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Review of Existing Systems</motion.h2>
      
      <div className="w-full max-w-[1200px] text-left rounded-[16px] overflow-hidden bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)]">
        <motion.div initial="hidden" animate="show" variants={anim} className="grid grid-cols-4 bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.1)]">
          <div className="p-[20px] text-[22px] text-[#ffffff] font-bold">App / Study</div>
          <div className="p-[20px] text-[22px] text-[#ffffff] font-bold">Approach</div>
          <div className="p-[20px] text-[22px] text-[#ffffff] font-bold">Key Feature</div>
          <div className="p-[20px] text-[22px] text-[#ffffff] font-bold">Limitation</div>
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="show">
          {rows.map((r, i) => (
            <motion.div variants={anim} key={i} className={`grid grid-cols-4 border-b border-[rgba(255,255,255,0.05)] ${r.highlight ? 'bg-[rgba(255,51,51,0.1)] border-l-[6px] border-l-[#ff3333]' : 'bg-transparent'}`}>
              <div className={`p-[20px] text-[20px] font-bold ${r.highlight ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`}>{r.app}</div>
              <div className="p-[20px] text-[20px] text-[#d0d0d0]">{r.approach}</div>
              <div className="p-[20px] text-[20px] text-[#d0d0d0]">{r.key}</div>
              <div className="p-[20px] text-[20px] text-[#d0d0d0]">{r.lim}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
"""

slides_data["Slide06"] = """import React from 'react';
import { motion } from 'framer-motion';
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide06() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Existing System</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">How Current Trackers Work</motion.h2>
      
      <div className="w-full max-w-[1200px] flex justify-between gap-[4%] text-left">
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] text-[#ffffff] mb-[24px] font-bold">How They Work</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7]">
            Most trackers follow a cloud-first model. Users create accounts, link bank credentials, and all data uploads to remote servers. The app categorizes spending and generates reports. This requires constant internet and places absolute trust in third-party security.
          </p>
        </motion.div>
        
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] text-[#ffffff] mb-[24px] font-bold">Key Limitations</h3>
          <ul className="text-[24px] text-[#d0d0d0] leading-[1.7] list-disc list-inside space-y-3">
            <li>Data stored externally = huge breach risk</li>
            <li>Requires internet for basic functions</li>
            <li>Subscription fees or ad-supported models</li>
            <li>No control over true data deletion</li>
            <li>Complex onboarding with unnecessary permissions</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
"""

slides_data["Slide07"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };
const boxAnim = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.4 } } };
const pathVariants = { hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 0.4, ease: "easeOut" } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Slide07() {
  const Arrow = () => (
    <div className="flex items-center w-[80px] justify-center mx-[10px]">
      <motion.svg width="80" height="20" viewBox="0 0 80 20" variants={boxAnim}>
        <motion.line x1="0" y1="10" x2="60" y2="10" stroke="#ffffff" strokeWidth="4" variants={pathVariants} />
        <motion.polygon points="60,0 80,10 60,20" fill="#ffffff" variants={boxAnim} />
      </motion.svg>
    </div>
  );
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Proposed System</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Ledger — A Better Approach</motion.h2>
      
      <motion.p initial="hidden" animate="show" variants={anim} className="text-[24px] md:text-[28px] text-[#d0d0d0] leading-[1.7] max-w-[1100px] mb-[60px] mx-auto w-full">
        Ledger reimagines expense tracking by removing the cloud entirely. All data lives in a local SQLite database on the Android device. Clean dashboard, offline search, smart budget alerts, and an AI coach powered by Groq — all without sending data to a server.
      </motion.p>
      
      <motion.div variants={container} initial="hidden" animate="show" className="flex items-center justify-center w-full max-w-[1200px] mb-[60px]">
        <motion.div variants={boxAnim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] px-[40px] py-[30px] rounded-[16px] w-[220px]">
          <div className="text-[24px] font-bold text-[#ffffff]">Input</div><div className="text-[18px] text-[#888888] mt-2">Expense Data</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] px-[40px] py-[30px] rounded-[16px] w-[220px]">
          <div className="text-[24px] font-bold text-[#ffffff]">Process</div><div className="text-[18px] text-[#888888] mt-2">Room DB</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] px-[40px] py-[30px] rounded-[16px] w-[220px]">
          <div className="text-[24px] font-bold text-[#ffffff]">AI Engine</div><div className="text-[18px] text-[#888888] mt-2">Groq API</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] px-[40px] py-[30px] rounded-[16px] w-[220px]">
          <div className="text-[24px] font-bold text-[#ffffff]">Output</div><div className="text-[18px] text-[#888888] mt-2">Insights</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
"""

slides_data["Slide08"] = """import React from 'react';
import { motion } from 'framer-motion';
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide08() {
  const steps = [
    { title: "Requirement Analysis", body: "Offline storage, fast logging, AI integration, and privacy.", side: "left" },
    { title: "System Design", body: "Modular architecture for UI, data, AI, and notifications.", side: "right" },
    { title: "Development", body: "Kotlin, Jetpack Compose, Room database, Groq API.", side: "left" },
    { title: "Testing", body: "Offline functions, data persistence, UI responsiveness.", side: "right" },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Methodology</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Development Workflow</motion.h2>
      
      <div className="relative w-full max-w-[1100px] flex flex-col items-center mt-[20px]">
        <motion.div 
          initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          className="absolute top-0 bottom-0 w-[6px] bg-[#ffffff] opacity-20 left-1/2 -translate-x-1/2"
        ></motion.div>
        
        <div className="w-full flex flex-col gap-[40px] relative z-10">
          {steps.map((s, i) => (
            <div key={i} className={`flex w-full ${s.side === 'left' ? 'justify-start' : 'justify-end'} relative`}>
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + (i * 0.3), duration: 0.4 }}
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[24px] h-[24px] rounded-full bg-[#ff3333] border-[4px] border-[#000]"
              ></motion.div>
              <motion.div 
                initial={{ opacity: 0, x: s.side === 'left' ? -40 : 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + (i * 0.3), duration: 0.5 }}
                className={`w-[45%] bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[32px] rounded-[16px] ${s.side === 'left' ? 'mr-[5%]' : 'ml-[5%]'}`}
              >
                <h3 className="text-[28px] font-bold text-[#ffffff] mb-[12px]">{s.title}</h3>
                <p className="text-[22px] text-[#d0d0d0] leading-[1.6]">{s.body}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
"""

slides_data["Slide09"] = """import React from 'react';
import { motion } from 'framer-motion';
const layerContainer = { show: { transition: { staggerChildren: 0.3, delayChildren: 0.3 } } };
const layerAnim = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide09() {
  const DownArrow = () => (
    <motion.div variants={layerAnim} className="flex justify-center w-full my-[15px]">
      <svg width="60" height="40" viewBox="0 0 40 30" fill="none">
        <path d="M20 0 V25 M10 15 L20 25 L30 15" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"/>
      </svg>
    </motion.div>
  );
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">System Architecture</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[40px]">How Ledger is Structured</motion.h2>
      
      <motion.div variants={layerContainer} initial="hidden" animate="show" className="w-full max-w-[1200px] flex flex-col">
        <motion.div variants={layerAnim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[32px] rounded-[16px] flex flex-col items-center">
          <div className="text-[24px] font-bold text-[#ff3333] tracking-widest mb-[24px]">PRESENTATION LAYER</div>
          <div className="flex gap-[20px] w-full justify-center">
            {["Dashboard UI", "History View", "Insights Charts", "AI Coach Chat"].map((b, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.1)] px-[24px] py-[16px] rounded-[12px] text-[20px] font-bold text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
        <DownArrow />
        <motion.div variants={layerAnim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[32px] rounded-[16px] flex flex-col items-center">
          <div className="text-[24px] font-bold text-[#ff3333] tracking-widest mb-[24px]">BUSINESS LOGIC LAYER</div>
          <div className="flex gap-[20px] w-full justify-center">
            {["ViewModels", "Repository", "Budget Engine", "Groq AI Agent"].map((b, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.1)] px-[24px] py-[16px] rounded-[12px] text-[20px] font-bold text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
        <DownArrow />
        <motion.div variants={layerAnim} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[32px] rounded-[16px] flex flex-col items-center mb-[20px]">
          <div className="text-[24px] font-bold text-[#ff3333] tracking-widest mb-[24px]">DATA LAYER</div>
          <div className="flex gap-[20px] w-full justify-center">
            {["Room Database (SQLite)", "SharedPreferences"].map((b, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.1)] px-[24px] py-[16px] rounded-[12px] text-[20px] font-bold text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
"""

slides_data["Slide10"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const cardAnim = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.4, ease: "easeOut" } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide10() {
  const techs = [
    { name: "Kotlin", desc: "Modern, concise, robust language for Android." },
    { name: "Jetpack Compose", desc: "Declarative UI toolkit for native interfaces." },
    { name: "Room DB", desc: "Robust local data persistence via SQLite." },
    { name: "Groq API", desc: "Ultra-fast LLM inference for the Coach." },
    { name: "Android Studio", desc: "Official IDE with built-in emulators." },
    { name: "Material 3", desc: "Design system for polished components." },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Technologies Used</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Tools & Stack</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-3 gap-[24px] w-full max-w-[1200px]">
        {techs.map((t, i) => (
          <motion.div variants={cardAnim} key={i} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] font-bold text-[#ffffff] mb-[16px]">{t.name}</h3>
            <p className="text-[20px] text-[#d0d0d0] leading-[1.6]">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
"""

slides_data["Slide11"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.15 } } };
const barAnim = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide11() {
  const modules = [
    { name: "Dashboard Module", desc: "Real-time overview with daily totals and one-tap logging." },
    { name: "Transaction History", desc: "Chronological log with filters and swipe-to-delete." },
    { name: "Insights Module", desc: "Visual category breakdown and monthly trend analysis." },
    { name: "Budget Module", desc: "Monthly budget setup with overspend alerts." },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Implementation</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Core Modules Developed</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex flex-col gap-[20px]">
        {modules.map((m, i) => (
          <motion.div variants={barAnim} key={i} className="bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] px-[40px] py-[24px] rounded-[16px]">
            <h3 className="text-[28px] font-bold text-[#ffffff] mb-[8px]">{m.name}</h3>
            <p className="text-[24px] text-[#d0d0d0] leading-[1.6]">{m.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
"""

def generate_result_slide(idx, title, subtitle, image_src, desc_head, desc_body):
    return f"""import React from 'react';
import {{ motion }} from 'framer-motion';
const anim = {{ hidden: {{ opacity: 0, y: 40 }}, show: {{ opacity: 1, y: 0, transition: {{ duration: 0.5, ease: "easeOut" }} }} }};
export default function Slide{idx}() {{
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={{anim}} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[15px]">{title}</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={{anim}} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[40px]">{subtitle}</motion.h2>
      <div className="w-full max-w-[1200px] flex justify-between items-center text-left">
        <motion.div initial={{{{ opacity: 0, y: 80 }}}} animate={{{{ opacity: 1, y: 0 }}}} transition={{{{ duration: 0.6, ease: "easeOut" }}}} className="w-[55%] flex justify-center">
          <img src="{image_src}" alt="Screenshot" className="w-full max-h-[60vh] object-contain rounded-[20px] border-[2px] border-[rgba(255,255,255,0.1)] shadow-2xl" />
        </motion.div>
        <motion.div initial={{{{ opacity: 0, x: 40 }}}} animate={{{{ opacity: 1, x: 0 }}}} transition={{{{ duration: 0.5, delay: 0.3 }}}} className="w-[40%] bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] font-bold text-[#ffffff] mb-[24px]">{desc_head}</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7] whitespace-pre-line">{desc_body}</p>
        </motion.div>
      </div>
    </div>
  );
}}
"""

slides_data["Slide12"] = generate_result_slide("12", "Results", "Dashboard View", "/image_1.png", "Dashboard Overview", "The home screen provides an instant snapshot of financial health.\n\nUsers see today's spending, monthly totals, and recent transactions at a glance. Bottom navigation provides quick access to History, Insights, and AI Coach.")
slides_data["Slide13"] = generate_result_slide("13", "Results", "Transaction History", "/image_2.png", "Complete Log", "Every expense is recorded with date, category, and amount.\n\nTransactions are grouped by day. Users can search by keyword, filter by category, or delete entries. All data persists locally.")
slides_data["Slide14"] = generate_result_slide("14", "Results", "Ledger Coach", "/image_3.png", "AI Financial Coach", "Powered by Groq AI, the coach analyzes spending patterns to provide advice.\n\nUsers can ask 'How can I save more?' and receive instant, personalized responses without storing conversation data on servers.")
slides_data["Slide15"] = generate_result_slide("15", "Results", "Spending Insights", "/image_4.png", "Visual Breakdown", "Transforms raw data into actionable intelligence.\n\nUsers see total spending, transaction count, average per transaction, and top category visually charted out for clarity.")

slides_data["Slide16"] = """import React from 'react';
import { motion } from 'framer-motion';
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide16() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px] leading-tight">AI Coach & Budgets</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Smart Features That Matter</motion.h2>
      <div className="w-full max-w-[1200px] flex justify-between gap-[4%] text-left">
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] font-bold text-[#ffffff] mb-[24px]">Ledger Coach Engine</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7]">
            An AI advisor built into the app. It reads spending data locally, generates personalized tips, and answers finance questions. Powered by Groq's ultra-fast LLM inference.
          </p>
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] font-bold text-[#ffffff] mb-[24px]">Dynamic Budgeting</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7]">
            Users set monthly limits. The app tracks progress locally and warns the user when spending crosses 80% or 100% of the threshold, preventing end-of-month surprises.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
"""

slides_data["Slide17"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const cardAnim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide17() {
  const future = [
    { title: "End-to-End Sync", desc: "Optional E2E encrypted sync across devices using user-controlled keys." },
    { title: "Receipt Scanning", desc: "Local OCR processing to auto-fill expense amounts from photos." },
    { title: "Desktop Port", desc: "Bringing the Ledger ecosystem to Windows and macOS via Kotlin Multiplatform." }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Future Enhancements</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">What's Next for Ledger</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex gap-[24px]">
        {future.map((f, i) => (
          <motion.div variants={cardAnim} key={i} className="flex-1 bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] font-bold text-[#ffffff] mb-[16px]">{f.title}</h3>
            <p className="text-[20px] text-[#d0d0d0] leading-[1.7]">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
"""

slides_data["Slide18"] = """import React from 'react';
import { motion } from 'framer-motion';
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const rowAnim = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
const container = { show: { transition: { staggerChildren: 0.1 } } };
export default function Slide18() {
  const rows = [
    { f: "Data Storage", y: "Cloud", m: "Cloud", l: "100% Local" },
    { f: "Account Required", y: "Yes", m: "Yes", l: "No" },
    { f: "Offline Access", y: "Poor", m: "None", l: "Complete" },
    { f: "AI Assistant", y: "No", m: "No", l: "Yes (Groq)" },
    { f: "Cost", y: "$84/yr", m: "Ad-supported", l: "Free" }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Comparison</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Ledger vs Industry Standard</motion.h2>
      
      <div className="w-full max-w-[1200px] text-left rounded-[16px] overflow-hidden bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.08)]">
        <motion.div initial="hidden" animate="show" variants={anim} className="grid grid-cols-4 bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.1)]">
          <div className="p-[20px] text-[24px] text-[#ffffff] font-bold">Feature</div>
          <div className="p-[20px] text-[24px] text-[#ffffff] font-bold">YNAB</div>
          <div className="p-[20px] text-[24px] text-[#ffffff] font-bold">Mint</div>
          <div className="p-[20px] text-[24px] text-[#ff3333] font-bold">Ledger</div>
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="show">
          {rows.map((r, i) => (
            <motion.div variants={rowAnim} key={i} className="grid grid-cols-4 border-b border-[rgba(255,255,255,0.05)]">
              <div className="p-[20px] text-[22px] text-[#ffffff] font-bold">{r.f}</div>
              <div className="p-[20px] text-[22px] text-[#d0d0d0]">{r.y}</div>
              <div className="p-[20px] text-[22px] text-[#d0d0d0]">{r.m}</div>
              <div className="p-[20px] text-[22px] text-[#ff3333] font-bold">{r.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
"""

slides_data["Slide19"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { show: { transition: { staggerChildren: 0.12 } } };
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide19() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Conclusion</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">Taking Back Control</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="text-[24px] md:text-[28px] text-[#d0d0d0] leading-[1.7] max-w-[1100px] mb-[60px] w-full text-center">
        <motion.p variants={anim} className="mb-4">Ledger proves that powerful financial tools don't require trading away personal privacy.</motion.p>
        <motion.p variants={anim} className="mb-4">By executing all logic and database operations locally, and utilizing efficient AI APIs solely for inference, we achieved a modern, secure, and blazing fast expense tracker.</motion.p>
        <motion.p variants={anim} className="text-[#ffffff] font-bold mt-8">Your money. Your data. Your device.</motion.p>
      </motion.div>
    </div>
  );
}
"""

slides_data["Slide20"] = """import React from 'react';
import { motion } from 'framer-motion';
export default function Slide20() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#000000] flex flex-col items-center justify-center">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
        className="text-[120px] md:text-[150px] font-bold text-[#ffffff] tracking-widest mb-[20px]"
      >
        THANK YOU
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
        className="text-[40px] text-[#ff3333] font-bold tracking-widest"
      >
        ANY QUESTIONS?
      </motion.h2>
    </div>
  );
}
"""

for slide_name, content in slides_data.items():
    with open(os.path.join(slide_dir, f"{slide_name}.jsx"), "w", encoding="utf-8") as f:
        f.write(content)

print("V6 slides and engine generated.")
