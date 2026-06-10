import os
import shutil

slide_dir = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\components\ppt\slides"
engine_path = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\components\ppt\PresentationEngine.jsx"

# Clear old slides
if os.path.exists(slide_dir):
    shutil.rmtree(slide_dir)
os.makedirs(slide_dir)

# Presentation Engine
engine_content = """import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Keyboard & Scroll Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Fullscreen support (Ctrl+F or Cmd+F)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(err => {
            console.warn("Could not activate full-screen mode", err);
          });
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
    
    // Wheel navigation (debounce to prevent skipping)
    let wheelTimeout;
    const handleWheel = (e) => {
      e.preventDefault();
      if (wheelTimeout) return;
      wheelTimeout = setTimeout(() => {
        wheelTimeout = null;
      }, 800);
      
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

  // Touch Navigation
  const handleTouchStart = (e) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const diffY = touchStart.y - e.changedTouches[0].clientY;
    
    if (diffY > 50) goToNext();
    else if (diffY < -50) goToPrev();
    
    setTouchStart(null);
  };

  // Nav Hints Timer
  useEffect(() => {
    setShowNavHints(true);
    const timer = setTimeout(() => setShowNavHints(false), 3000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Vertical slide variants
  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? '100vh' : '-100vh',
    }),
    center: {
      y: 0,
    },
    exit: (direction) => ({
      y: direction < 0 ? '100vh' : '-100vh',
    })
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-[#000000] text-[#ffffff] overflow-hidden flex flex-col font-['Horizon','Inter','Geist','Space_Grotesk',sans-serif]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ userSelect: 'none', WebkitFontSmoothing: 'antialiased' }}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-[80px]"
        >
          <div className="w-full h-full max-w-[1000px] flex flex-col items-center justify-center">
            <CurrentSlideComponent />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Top Right Page Number Indicator */}
      {currentSlide > 0 && (
        <div className="absolute top-[80px] right-[80px] text-[18px] text-[#666666] z-50 tracking-wider">
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
            className="absolute bottom-[40px] left-0 right-0 flex justify-center text-[14px] text-[#666666] font-bold tracking-[0.2em] z-50"
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

slides_data = {
    "Slide01": """import React from 'react';
import { motion } from 'framer-motion';

export default function Slide01() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/mockups_collage.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.4)]"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          className="text-[20px] text-[#666666] tracking-[0.3em] uppercase mb-[20px]"
        >
          Final Year Project
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[84px] text-[#ffffff] font-[800] leading-[1.1] mb-[10px]"
        >
          LEDGER
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[32px] text-[#ff3333] font-[500] mb-[30px]"
        >
          Privacy-First Expense Tracker
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.45 }}
          className="text-[22px] text-[#b0b0b0]"
        >
          Your money. Your data. Your device.
        </motion.p>
      </div>
    </div>
  );
}
""",
    "Slide02": """import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.15 } } };
const itemFade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } };
const cardAnim = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Slide02() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-[72px] text-[#ffffff] font-[700] leading-[1.2] mb-[40px]"
      >
        Introduction
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }}
        className="text-[32px] text-[#ff3333] font-[500] leading-[1.2] mb-[50px]"
      >
        The Need for Financial Privacy
      </motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="text-[22px] text-[#b0b0b0] leading-[1.7] max-w-[900px] mb-[60px]">
        <motion.span variants={itemFade}>In 2026, every financial app demands your data. </motion.span>
        <motion.span variants={itemFade}>Bank details, spending habits, location — all uploaded to corporate servers and sold to advertisers. </motion.span>
        <motion.span variants={itemFade}>Ledger was built on one belief: your money is your business. </motion.span>
        <motion.span variants={itemFade}>It is a 100% offline Android expense tracker that stores everything locally. </motion.span>
        <motion.span variants={itemFade}>No cloud. No signup. No data harvesting. </motion.span>
        <motion.span variants={itemFade}>With an AI-powered financial coach, smart budget alerts, and visual spending insights, Ledger gives you complete control without ever compromising your privacy.</motion.span>
      </motion.div>
      
      <motion.div variants={container} initial="hidden" animate="show" className="flex gap-[20px]">
        <motion.div variants={cardAnim} className="bg-[#161616] p-[24px] rounded-[16px] w-[200px]">
          <div className="text-[36px] text-[#ffffff] font-bold mb-[8px]">100%</div>
          <div className="text-[16px] text-[#666666]">Offline</div>
        </motion.div>
        <motion.div variants={cardAnim} className="bg-[#161616] p-[24px] rounded-[16px] w-[200px]">
          <div className="text-[36px] text-[#ffffff] font-bold mb-[8px]">Zero</div>
          <div className="text-[16px] text-[#666666]">Data Shared</div>
        </motion.div>
        <motion.div variants={cardAnim} className="bg-[#161616] p-[24px] rounded-[16px] w-[200px]">
          <div className="text-[36px] text-[#ffffff] font-bold mb-[8px]">2 Sec</div>
          <div className="text-[16px] text-[#666666]">To Log</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
""",
    "Slide03": """import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.2 } } };
const cardAnim = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Slide03() {
  const problems = [
    { head: "Data Privacy Crisis", body: "Popular apps like Mint and YNAB store financial data on corporate servers. Users are vulnerable to breaches, data sales, and unauthorized access." },
    { head: "Internet Dependency", body: "Most trackers require constant connectivity. They are completely useless in areas with poor or no network coverage — which is common in India." },
    { head: "Complex & Cluttered", body: "Existing apps overwhelm users with subscriptions, ads, and unnecessary features instead of simple, fast expense logging." }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Problem Statement</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Why Existing Solutions Fail</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[900px] flex flex-col gap-[24px] text-left">
        {problems.map((p, i) => (
          <motion.div variants={cardAnim} key={i} className="bg-[#111111] py-[28px] px-[32px] rounded-[16px] border-l-[4px] border-[#ff3333]">
            <h3 className="text-[28px] text-[#ffffff] mb-[12px]">{p.head}</h3>
            <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">{p.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
""",
    "Slide04": """import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.18 } } };
const cardAnim = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Slide04() {
  const objectives = [
    { head: "Complete Privacy", body: "Store all financial data locally on the device. Zero cloud sync. Zero external servers." },
    { head: "Offline-First Design", body: "Log expenses, view insights, and manage budgets without any internet connection. Works everywhere." },
    { head: "AI-Powered Guidance", body: "Personalized financial coaching using on-device AI to help users save money and spend smarter." }
  ];

  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Objectives</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">What Ledger Aims to Achieve</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1000px] flex gap-[24px] text-left">
        {objectives.map((o, i) => (
          <motion.div variants={cardAnim} key={i} className="flex-1 bg-[#161616] p-[32px] rounded-[16px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#1a1a1a] mb-[24px]"></div>
            <h3 className="text-[28px] text-[#ffffff] mb-[16px]">{o.head}</h3>
            <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">{o.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
""",
    "Slide05": """import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.1 } } };
const rowAnim = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function Slide05() {
  const rows = [
    { app: "Mint (Intuit)", approach: "Cloud-based aggregation", key: "Automatic bank sync", lim: "Sells user data to advertisers", bg: "bg-[#0a0a0a]" },
    { app: "YNAB", approach: "Zero-based budgeting", key: "Envelope method", lim: "Requires paid subscription, stores data online", bg: "bg-[#111111]" },
    { app: "Expensify", approach: "Receipt scanning OCR", key: "Expense capture", lim: "Cloud-only, major privacy concerns", bg: "bg-[#0a0a0a]" },
    { app: "Ledger (Ours)", approach: "Local-first architecture", key: "100% offline + AI coach", lim: "Limited to single device (by design)", bg: "bg-[#111111]", highlight: true }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Literature Survey</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Review of Existing Systems</motion.h2>
      
      <div className="w-full max-w-[1000px] text-left">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="grid grid-cols-4 bg-[#1a1a1a]">
          <div className="p-[16px] text-[20px] text-[#ffffff]">App / Study</div>
          <div className="p-[16px] text-[20px] text-[#ffffff]">Approach</div>
          <div className="p-[16px] text-[20px] text-[#ffffff]">Key Feature</div>
          <div className="p-[16px] text-[20px] text-[#ffffff]">Limitation</div>
        </motion.div>
        
        <motion.div variants={container} initial="hidden" animate="show">
          {rows.map((r, i) => (
            <motion.div variants={rowAnim} key={i} className={`grid grid-cols-4 ${r.bg} border-b border-[#222222] ${r.highlight ? 'border-l-[4px] border-l-[#ff3333]' : ''}`}>
              <div className={`p-[16px] text-[18px] ${r.highlight ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`}>{r.app}</div>
              <div className="p-[16px] text-[18px] text-[#b0b0b0]">{r.approach}</div>
              <div className="p-[16px] text-[18px] text-[#b0b0b0]">{r.key}</div>
              <div className="p-[16px] text-[18px] text-[#b0b0b0]">{r.lim}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
""",
    "Slide06": """import React from 'react';
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
""",
    "Slide07": """import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } } };
const boxAnim = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.4 } } };
const pillAnim = { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.3 } } };

export default function Slide07() {
  const pathVariants = {
    hidden: { pathLength: 0 },
    show: { pathLength: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const Arrow = () => (
    <div className="flex items-center w-[40px] justify-center mx-[10px]">
      <motion.svg width="40" height="20" viewBox="0 0 40 20" variants={boxAnim}>
        <motion.line x1="0" y1="10" x2="30" y2="10" stroke="#333333" strokeWidth="2" variants={pathVariants} />
        <motion.polygon points="30,5 40,10 30,15" fill="#333333" variants={pillAnim} />
      </motion.svg>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Proposed System</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Ledger — A Better Approach</motion.h2>
      
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-[22px] text-[#b0b0b0] leading-[1.7] max-w-[900px] mb-[50px]">
        Ledger reimagines expense tracking by removing the cloud entirely. All data lives in a local SQLite database on the user's Android device. The app features a clean dashboard, full transaction history with search and filters, visual category breakdowns, smart budget alerts, and an AI coach powered by Groq AI — all without ever sending data to a server.
      </motion.p>
      
      <motion.div variants={container} initial="hidden" animate="show" className="flex items-center justify-center mb-[50px]">
        <motion.div variants={boxAnim} className="bg-[#161616] border border-[#333333] px-[28px] py-[20px] rounded-[12px]">
          <div className="text-[18px] text-[#ffffff]">User Input</div><div className="text-[14px] text-[#666666]">(expense data)</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[#161616] border border-[#333333] px-[28px] py-[20px] rounded-[12px]">
          <div className="text-[18px] text-[#ffffff]">Local Processing</div><div className="text-[14px] text-[#666666]">(Room DB)</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[#161616] border border-[#333333] px-[28px] py-[20px] rounded-[12px]">
          <div className="text-[18px] text-[#ffffff]">AI Analysis</div><div className="text-[14px] text-[#666666]">(Groq API)</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[#161616] border border-[#333333] px-[28px] py-[20px] rounded-[12px]">
          <div className="text-[18px] text-[#ffffff]">Smart Output</div><div className="text-[14px] text-[#666666]">(insights + alerts)</div>
        </motion.div>
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }} className="flex gap-[16px]">
        {["100% Offline", "Zero Cloud", "Groq AI Coach", "Budget Alerts"].map((pill, i) => (
          <div key={i} className="bg-[#1a1a1a] px-[28px] py-[14px] rounded-[10px] text-[16px] text-[#ffffff]">{pill}</div>
        ))}
      </motion.div>
    </div>
  );
}
""",
    "Slide08": """import React from 'react';
import { motion } from 'framer-motion';

export default function Slide08() {
  const steps = [
    { title: "Requirement Analysis", body: "Identified core needs: offline storage, fast logging, AI integration, and absolute privacy.", side: "left" },
    { title: "System Design", body: "Designed modular architecture with separate layers for UI, data, AI, and notifications.", side: "right" },
    { title: "Development", body: "Built with Kotlin, Jetpack Compose, Room database, and Groq API for AI features.", side: "left" },
    { title: "Testing", body: "Tested offline functionality, data persistence, AI response accuracy, and UI responsiveness across devices.", side: "right" },
    { title: "Deployment", body: "Packaged as Android APK. Roadmap includes Google Play Store release and desktop port.", side: "left" }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Methodology</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[40px]">Development Process & Workflow</motion.h2>
      
      <div className="relative w-full max-w-[900px] flex flex-col items-center mt-[20px]">
        {/* Animated Central Line */}
        <motion.div 
          initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          className="absolute top-0 bottom-0 w-[3px] bg-[#333333] left-1/2 -translate-x-1/2"
        ></motion.div>
        
        <div className="w-full flex flex-col gap-[30px] relative z-10">
          {steps.map((s, i) => (
            <div key={i} className={`flex w-full ${s.side === 'left' ? 'justify-start' : 'justify-end'} relative`}>
              {/* Animated Dot */}
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + (i * 0.2), duration: 0.3 }}
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[12px] h-[12px] rounded-full bg-[#ff3333]"
              ></motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: s.side === 'left' ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + (i * 0.2), duration: 0.4 }}
                className={`w-[380px] bg-[#161616] p-[24px] rounded-[16px] ${s.side === 'left' ? 'mr-[40px]' : 'ml-[40px]'}`}
              >
                <h3 className="text-[24px] text-[#ffffff] mb-[8px]">{s.title}</h3>
                <p className="text-[16px] text-[#666666] leading-[1.6]">{s.body}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
""",
    "Slide09": """import React from 'react';
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
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[30px]">System Architecture</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[40px]">How Ledger is Structured</motion.h2>
      
      <motion.div variants={layerContainer} initial="hidden" animate="show" className="w-full max-w-[900px] flex flex-col">
        
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
        <motion.div variants={layerAnim} className="bg-[#111111] p-[24px] rounded-[16px] flex flex-col items-center mb-[30px]">
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
""",
    "Slide10": """import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.12 } } };
const cardAnim = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function Slide10() {
  const techs = [
    { name: "Kotlin", desc: "Primary language for Android. Modern, concise, fully interoperable with Java." },
    { name: "Jetpack Compose", desc: "Declarative UI toolkit for building native Android interfaces with minimal code." },
    { name: "Room Database", desc: "SQLite abstraction layer for robust local data persistence and queries." },
    { name: "Groq AI API", desc: "Ultra-fast LLM inference for the Ledger Coach financial advisor." },
    { name: "Android Studio", desc: "Official IDE with built-in emulator, debugger, and profiler." },
    { name: "Material Design 3", desc: "Design system for consistent, accessible, polished UI components." },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Technologies Used</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Tools & Stack</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 gap-[24px] w-full max-w-[1000px]">
        {techs.map((t, i) => (
          <motion.div 
            variants={cardAnim} key={i} 
            whileHover={{ scale: 1.02, backgroundColor: "#1a1a1a" }}
            className="bg-[#161616] p-[32px] rounded-[16px] transition-colors duration-300"
          >
            <h3 className="text-[24px] text-[#ffffff] mb-[12px]">{t.name}</h3>
            <p className="text-[18px] text-[#666666] leading-[1.6]">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
""",
    "Slide11": """import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.15 } } };
const barAnim = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const flowAnim = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } };

export default function Slide11() {
  const modules = [
    { name: "Dashboard Module", desc: "Real-time spending overview with daily totals, monthly summaries, and one-tap expense logging." },
    { name: "Transaction History", desc: "Chronological log with category filters, keyword search, and swipe-to-delete gestures." },
    { name: "Insights Module", desc: "Visual category breakdown using charts, top spending categories, and monthly trend analysis." },
    { name: "Budget Module", desc: "Monthly budget setup with overspend alerts, progress indicators, and category-wise limits." },
  ];

  const Arrow = () => <div className="text-[#333333] text-[20px]">→</div>;
  const Box = ({t}) => <div className="bg-[#161616] border border-[#333333] px-[20px] py-[12px] rounded-[8px] text-[16px] text-[#ffffff]">{t}</div>;

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Implementation</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Core Modules Developed</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[900px] flex flex-col gap-[20px] mb-[40px]">
        {modules.map((m, i) => (
          <motion.div variants={barAnim} key={i} className="bg-[#161616] px-[32px] py-[24px] rounded-[12px]">
            <h3 className="text-[24px] text-[#ffffff] mb-[8px]">{m.name}</h3>
            <p className="text-[18px] text-[#666666] leading-[1.6]">{m.desc}</p>
          </motion.div>
        ))}
        
        <motion.div variants={flowAnim} className="flex justify-between mt-[20px]">
          <div className="flex items-center gap-[12px]">
            <Box t="Dashboard" /><Arrow /><Box t="Repository" /><Arrow /><Box t="Room DB" />
          </div>
          <div className="flex items-center gap-[12px]">
            <Box t="AI Coach" /><Arrow /><Box t="Groq API" /><Arrow /><Box t="Response" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
""",
    "Slide12": """import React from 'react';
import { motion } from 'framer-motion';

export default function Slide12() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Results</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Dashboard View</motion.h2>
      
      <div className="w-full max-w-[1000px] flex justify-between items-center text-left">
        <motion.div 
          initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[60%] flex justify-center"
        >
          <img src="/image_1.png" alt="Dashboard" className="w-full max-h-[70vh] rounded-[16px] border border-[#222222] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] object-contain" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="w-[35%]"
        >
          <h3 className="text-[28px] text-[#ffffff] mb-[20px]">Dashboard Overview</h3>
          <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">
            The home screen provides an instant snapshot of financial health. Users see today's spending, monthly totals, and recent transactions at a glance. The 'Add Expense' button enables two-second logging. Bottom navigation provides quick access to History, Insights, and AI Coach.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
""",
    "Slide13": """import React from 'react';
import { motion } from 'framer-motion';

export default function Slide13() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Results</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Transaction History</motion.h2>
      
      <div className="w-full max-w-[1000px] flex justify-between items-center text-left">
        <motion.div 
          initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[60%] flex justify-center"
        >
          <img src="/image_2.png" alt="History" className="w-full max-h-[70vh] rounded-[16px] border border-[#222222] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] object-contain" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="w-[35%]"
        >
          <h3 className="text-[28px] text-[#ffffff] mb-[20px]">Complete Transaction Log</h3>
          <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">
            Every expense is recorded with date, category, and amount. Transactions are grouped by day for easy review. Users can search by keyword, filter by category, or delete entries with a simple swipe. All data persists locally even after app restart or device reboot.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
""",
    "Slide14": """import React from 'react';
import { motion } from 'framer-motion';

export default function Slide14() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Results</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Ledger Coach — AI Assistant</motion.h2>
      
      <div className="w-full max-w-[1000px] flex justify-between items-center text-left">
        <motion.div 
          initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[60%] flex justify-center"
        >
          <img src="/image_3.png" alt="AI Coach" className="w-full max-h-[70vh] rounded-[16px] border border-[#222222] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] object-contain" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="w-[35%]"
        >
          <h3 className="text-[28px] text-[#ffffff] mb-[20px]">Personal AI Financial Coach</h3>
          <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">
            Powered by Groq AI, the Ledger Coach analyzes spending patterns and provides actionable advice. Users can ask 'How can I save more?' or 'Recap my day' and receive instant, personalized responses. The AI operates through API calls — no personal data is stored or trained on.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
""",
    "Slide15": """import React from 'react';
import { motion } from 'framer-motion';

export default function Slide15() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Results</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Spending Insights</motion.h2>
      
      <div className="w-full max-w-[1000px] flex justify-between items-center text-left">
        <motion.div 
          initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[60%] flex justify-center"
        >
          <img src="/image_4.png" alt="Insights" className="w-full max-h-[70vh] rounded-[16px] border border-[#222222] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] object-contain" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="w-[35%]"
        >
          <h3 className="text-[28px] text-[#ffffff] mb-[20px]">Visual Spending Breakdown</h3>
          <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">
            The Insights page transforms raw data into actionable intelligence. Users see total spending, transaction count, average per transaction, and top category. A breakdown shows exactly where money goes — Rent & Home, Groceries, Food, Shopping, and Transport.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
""",
    "Slide16": """import React from 'react';
import { motion } from 'framer-motion';

export default function Slide16() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">AI Coach & Budget System</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Smart Features That Make a Difference</motion.h2>
      
      <div className="w-full max-w-[1000px] flex justify-between text-left">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="w-[48%] bg-[#161616] p-[32px] rounded-[16px]"
        >
          <h3 className="text-[28px] text-[#ffffff] mb-[20px]">Ledger Coach</h3>
          <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">
            An AI-powered financial advisor built into the app. It reads spending data locally, generates personalized tips, answers finance questions, and suggests budget adjustments. Powered by Groq's ultra-fast LLM inference for near-instant responses. The AI never stores conversation history or personal data.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="w-[48%] bg-[#161616] p-[32px] rounded-[16px]"
        >
          <h3 className="text-[28px] text-[#ffffff] mb-[20px]">Budget System</h3>
          <p className="text-[20px] text-[#b0b0b0] leading-[1.7]">
            Users set monthly budgets per category. The app tracks progress in real-time and sends alerts when approaching limits. Overspending triggers visual warnings on the dashboard. Budgets reset automatically each month. All calculations happen on-device using local data only.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
""",
    "Slide17": """import React from 'react';
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
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Future Enhancements</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">What's Next for Ledger</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[900px] flex flex-col gap-[20px] text-left">
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
""",
    "Slide18": """import React from 'react';
import { motion } from 'framer-motion';

export default function Slide18() {
  const rows = [
    { feature: "Data Ownership", ledger: "100% Local", mint: "Corporate Servers", ynab: "Corporate Servers", expensify: "Corporate Servers", bg: "bg-[#0a0a0a]" },
    { feature: "Internet Required", ledger: "No", mint: "Yes", ynab: "Yes", expensify: "Yes", bg: "bg-[#111111]" },
    { feature: "Subscription Fee", ledger: "Free", mint: "Free (ads)", ynab: "Paid", expensify: "Paid", bg: "bg-[#0a0a0a]" },
    { feature: "AI Coach", ledger: "Built-in", mint: "No", ynab: "No", expensify: "No", bg: "bg-[#111111]" },
    { feature: "Privacy", ledger: "Zero Harvesting", mint: "Data For Sale", ynab: "Data Stored", expensify: "Cloud Only", bg: "bg-[#0a0a0a]" },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Ledger vs The Competition</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">Why Ledger Stands Out</motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-[1000px] text-left"
      >
        <div className="grid grid-cols-5 bg-[#1a1a1a]">
          <div className="p-[18px] text-[20px] text-[#ffffff]">Feature</div>
          <div className="p-[18px] text-[20px] text-[#ffffff]">Ledger</div>
          <div className="p-[18px] text-[20px] text-[#ffffff]">Mint</div>
          <div className="p-[18px] text-[20px] text-[#ffffff]">YNAB</div>
          <div className="p-[18px] text-[20px] text-[#ffffff]">Expensify</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className={`grid grid-cols-5 ${r.bg} border-b border-[#222222]`}>
            <div className="p-[18px] text-[18px] text-[#b0b0b0]">{r.feature}</div>
            <div className="p-[18px] text-[18px] text-[#ffffff] font-bold">{r.ledger}</div>
            <div className="p-[18px] text-[18px] text-[#b0b0b0]">{r.mint}</div>
            <div className="p-[18px] text-[18px] text-[#b0b0b0]">{r.ynab}</div>
            <div className="p-[18px] text-[18px] text-[#b0b0b0]">{r.expensify}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
""",
    "Slide19": """import React from 'react';
import { motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } };
const pill = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1.0, transition: { duration: 0.3 } } };

export default function Slide19() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[72px] text-[#ffffff] font-[700] mb-[40px]">Conclusion</motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[32px] text-[#ff3333] font-[500] mb-[50px]">What We Achieved</motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        className="text-[22px] text-[#b0b0b0] leading-[1.7] max-w-[900px] mb-[60px]"
      >
        Ledger successfully delivers a fully offline, privacy-first expense tracking solution for Android. We achieved all core objectives: local data storage with Room database, instant expense logging, visual spending insights, smart budget alerts, and an AI-powered financial coach using Groq AI. The app proves that powerful financial tools do not require sacrificing privacy. Every rupee tracked stays on the user's device. Ledger is not just an app — it is a statement that your financial data belongs to you, and no one else.
      </motion.p>
      
      <motion.div variants={container} initial="hidden" animate="show" className="flex gap-[16px]">
        <motion.div variants={pill} className="bg-[#1a1a1a] px-[32px] py-[14px] rounded-[10px] text-[18px] text-[#ffffff]">Privacy Achieved</motion.div>
        <motion.div variants={pill} className="bg-[#1a1a1a] px-[32px] py-[14px] rounded-[10px] text-[18px] text-[#ffffff]">AI Integrated</motion.div>
        <motion.div variants={pill} className="bg-[#1a1a1a] px-[32px] py-[14px] rounded-[10px] text-[18px] text-[#ffffff]">Fully Offline</motion.div>
      </motion.div>
    </div>
  );
}
""",
    "Slide20": """import React from 'react';
import { motion } from 'framer-motion';

export default function Slide20() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1.0, opacity: 1 }} transition={{ duration: 0.5 }}
        className="text-[84px] text-[#ffffff] font-[700] mb-[30px]"
      >
        Thank You
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
        className="text-[32px] text-[#ff3333] font-[500] mb-[40px]"
      >
        Questions & Discussion
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.6 }}
        className="text-[20px] text-[#666666] flex flex-col gap-[10px]"
      >
        <p>github.com/harshaxyZ/ledger</p>
        <p>ledger67.vercel.app</p>
      </motion.div>
    </div>
  );
}
"""
}

for file_name, content in slides_data.items():
    file_path = os.path.join(slide_dir, f"{file_name}.jsx")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

index_content = "\n".join([f"export {{ default as {k} }} from './{k}';" for k in slides_data.keys()])
with open(os.path.join(slide_dir, "index.js"), "w", encoding="utf-8") as f:
    f.write(index_content)

print(f"Generated Presentation Engine and {len(slides_data)} slides successfully.")
