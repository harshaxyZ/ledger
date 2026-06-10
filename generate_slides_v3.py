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

  // Keyboard Navigation
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

      if (['ArrowRight', 'Space'].includes(e.code) || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (['ArrowLeft'].includes(e.code)) {
        e.preventDefault();
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Touch Navigation
  const handleTouchStart = (e) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const diffX = touchStart.x - e.changedTouches[0].clientX;
    
    if (diffX > 50) goToNext();
    else if (diffX < -50) goToPrev();
    
    setTouchStart(null);
  };

  // Nav Hints Timer
  useEffect(() => {
    setShowNavHints(true);
    const timer = setTimeout(() => setShowNavHints(false), 3000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Horizontal slide variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100vw' : '-100vw',
    }),
    center: {
      x: 0,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100vw' : '-100vw',
    })
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-[#000000] text-[#ffffff] overflow-hidden flex flex-col font-['Horizon','Inter','Geist',sans-serif]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ userSelect: 'none' }}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-[60px]"
        >
          <div className="w-full h-full max-w-[900px] flex flex-col items-center justify-center">
            <CurrentSlideComponent />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Top Right Page Number Indicator */}
      {currentSlide > 0 && (
        <div className="absolute top-[60px] right-[60px] text-[14px] text-[#a0a0a0] z-50">
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
            className="absolute bottom-[20px] left-0 right-0 flex justify-center text-[12px] text-[#a0a0a0] tracking-[0.2em] z-50"
          >
            ← →
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

export default function Slide01() {
  return (
    <div className="w-full h-full bg-[#000000]"></div>
  );
}
""",
    "Slide02": """import React from 'react';
import { motion } from 'framer-motion';

export default function Slide02() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
        className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]"
      >
        Introduction
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }}
        className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[40px]"
      >
        Ledger — Privacy-First Expense Tracking
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.9 }}
        className="text-[20px] text-[#a0a0a0] leading-[1.6] max-w-[800px]"
      >
        In today's digital world, every financial app demands your data. Bank details, spending habits, location — all uploaded to corporate servers. Ledger was built on one belief: your money is your business. It is a 100% offline Android expense tracker that stores everything locally on your device. No cloud. No signup. No data harvesting. With an AI-powered financial coach, smart budget alerts, and visual spending insights, Ledger gives you complete control without compromising privacy.
      </motion.p>
    </div>
  );
}
""",
    "Slide03": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Slide03() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Problem Statement</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Why Existing Solutions Fail</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[800px] flex flex-col gap-[20px] text-left">
        <motion.p variants={item} className="text-[20px] text-[#a0a0a0] leading-[1.6]">
          • Data Privacy Crisis — Popular apps like Mint and YNAB store financial data on corporate servers, making users vulnerable to breaches and data sales.
        </motion.p>
        <motion.p variants={item} className="text-[20px] text-[#a0a0a0] leading-[1.6]">
          • Internet Dependency — Most trackers require constant connectivity, making them useless in areas with poor or no network coverage.
        </motion.p>
        <motion.p variants={item} className="text-[20px] text-[#a0a0a0] leading-[1.6]">
          • Complex & Cluttered — Existing apps overwhelm users with unnecessary features, subscriptions, and ads instead of simple, fast expense logging.
        </motion.p>
      </motion.div>
    </div>
  );
}
""",
    "Slide04": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};
const item = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export default function Slide04() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Objectives</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">What Ledger Aims to Achieve</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[800px] flex flex-col gap-[40px] text-left">
        <motion.div variants={item}>
          <h3 className="text-[24px] text-[#ffffff] leading-[1.2] mb-[8px]">Complete Privacy</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">Store all financial data locally on the device. Zero cloud sync. Zero external servers.</p>
        </motion.div>
        <motion.div variants={item}>
          <h3 className="text-[24px] text-[#ffffff] leading-[1.2] mb-[8px]">Offline-First Design</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">Log expenses, view insights, and manage budgets without any internet connection.</p>
        </motion.div>
        <motion.div variants={item}>
          <h3 className="text-[24px] text-[#ffffff] leading-[1.2] mb-[8px]">AI-Powered Guidance</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">Provide personalized financial coaching using on-device AI to help users save and spend smarter.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
""",
    "Slide05": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export default function Slide05() {
  const rows = [
    { app: "Mint (Intuit)", approach: "Cloud-based aggregation", key: "Automatic bank sync", lim: "Sells user data to advertisers", bg: "bg-[#0a0a0a]" },
    { app: "YNAB", approach: "Zero-based budgeting", key: "Envelope method", lim: "Requires subscription, stores data online", bg: "bg-[#050505]" },
    { app: "Expensify", approach: "Receipt scanning", key: "OCR expense capture", lim: "Cloud-only, privacy concerns", bg: "bg-[#0a0a0a]" }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Literature Survey</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Review of Existing Systems</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[900px]">
        <motion.div variants={item} className="grid grid-cols-4 gap-[2px] bg-[#111111] border-b border-[#222222]">
          <div className="p-[16px] text-[18px] text-[#ffffff]">App / Study</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">Approach</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">Key Feature</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">Limitation</div>
        </motion.div>
        {rows.map((r, i) => (
          <motion.div variants={item} key={i} className={`grid grid-cols-4 gap-[2px] ${r.bg} border-b border-[#222222]`}>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.app}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.approach}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.key}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.lim}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
""",
    "Slide06": """import React from 'react';
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
""",
    "Slide07": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
};
const pill = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1.0, transition: { duration: 0.3 } }
};

export default function Slide07() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Proposed System</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Ledger — A Better Approach</h2>
      
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
        className="text-[20px] text-[#a0a0a0] leading-[1.6] max-w-[800px] mb-[40px]"
      >
        Ledger reimagines expense tracking by removing the cloud entirely. All data lives in a local SQLite database on the user's Android device. The app features a clean dashboard for daily and monthly spending, a full transaction history with search and filters, visual category breakdowns, smart budget alerts, and an AI coach powered by Groq AI that provides personalized financial advice — all without ever sending data to a server.
      </motion.p>
      
      <motion.div variants={container} initial="hidden" animate="show" className="flex gap-[16px]">
        <motion.div variants={pill} className="bg-[#111111] px-[24px] py-[12px] rounded-[8px] text-[16px] text-[#ffffff]">100% Offline</motion.div>
        <motion.div variants={pill} className="bg-[#111111] px-[24px] py-[12px] rounded-[8px] text-[16px] text-[#ffffff]">Zero Cloud</motion.div>
        <motion.div variants={pill} className="bg-[#111111] px-[24px] py-[12px] rounded-[8px] text-[16px] text-[#ffffff]">Groq AI Coach</motion.div>
        <motion.div variants={pill} className="bg-[#111111] px-[24px] py-[12px] rounded-[8px] text-[16px] text-[#ffffff]">Budget Alerts</motion.div>
      </motion.div>
    </div>
  );
}
""",
    "Slide08": """import React from 'react';
import { motion } from 'framer-motion';

const stepContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 1.0 } }
};
const stepItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } }
};

export default function Slide08() {
  const steps = [
    { side: "left", head: "Requirement Analysis", body: "Identified core needs: offline storage, fast logging, AI integration, and privacy." },
    { side: "right", head: "System Design", body: "Designed modular architecture with separate layers for UI, data, AI, and notifications." },
    { side: "left", head: "Development", body: "Built with Kotlin, Jetpack Compose, Room database, and Groq API for AI features." },
    { side: "right", head: "Testing", body: "Tested offline functionality, data persistence, AI response accuracy, and UI responsiveness." },
    { side: "left", head: "Deployment", body: "Packaged as Android APK. Future: Google Play Store release and desktop port." },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Methodology</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[40px]">Development Process & Workflow</h2>
      
      <div className="relative w-full max-w-[800px] flex flex-col items-center">
        {/* The line */}
        <motion.div 
          initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1.0, ease: "linear" }}
          className="absolute top-[20px] bottom-[20px] w-[2px] bg-[#333333] left-1/2 -translate-x-1/2"
        ></motion.div>
        
        <motion.div variants={stepContainer} initial="hidden" animate="show" className="w-full flex flex-col gap-[20px] relative z-10">
          {steps.map((s, i) => (
            <motion.div variants={stepItem} key={i} className={`flex w-full ${s.side === 'left' ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-[350px] ${s.side === 'left' ? 'text-right pr-[40px]' : 'text-left pl-[40px]'}`}>
                <h3 className="text-[22px] text-[#ffffff] leading-[1.2] mb-[8px]">{s.head}</h3>
                <p className="text-[16px] text-[#a0a0a0] leading-[1.6]">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
""",
    "Slide09": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } }
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const arrow = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } }
};

export default function Slide09() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">System Architecture</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">How Ledger is Structured</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[700px] flex flex-col items-center">
        <motion.div variants={item} className="w-full bg-[#1a1a1a] p-[20px]">
          <h3 className="text-[22px] text-[#ffffff] leading-[1.2] mb-[8px]">Presentation Layer</h3>
          <p className="text-[16px] text-[#a0a0a0] leading-[1.6]">Jetpack Compose UI | Dashboard | History | Insights | AI Coach Chat</p>
        </motion.div>
        
        <motion.div variants={arrow} className="text-[20px] text-[#a0a0a0] my-[5px]">▼</motion.div>
        
        <motion.div variants={item} className="w-full bg-[#151515] p-[20px]">
          <h3 className="text-[22px] text-[#ffffff] leading-[1.2] mb-[8px]">Business Logic Layer</h3>
          <p className="text-[16px] text-[#a0a0a0] leading-[1.6]">ViewModels | Repository Pattern | Budget Engine | AI Prompt Builder | Notification Manager</p>
        </motion.div>
        
        <motion.div variants={arrow} className="text-[20px] text-[#a0a0a0] my-[5px]">▼</motion.div>
        
        <motion.div variants={item} className="w-full bg-[#101010] p-[20px]">
          <h3 className="text-[22px] text-[#ffffff] leading-[1.2] mb-[8px]">Data Layer</h3>
          <p className="text-[16px] text-[#a0a0a0] leading-[1.6]">Room Database (SQLite) | Local SharedPreferences | On-Device File Storage</p>
        </motion.div>
      </motion.div>
      
      <p className="text-[16px] text-[#a0a0a0] mt-[40px]">All layers operate entirely on-device. No network calls for core functionality.</p>
    </div>
  );
}
""",
    "Slide10": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1.0, transition: { duration: 0.3 } }
};

export default function Slide10() {
  const techs = [
    { name: "Kotlin", desc: "Primary language for Android development. Modern, concise, and fully interoperable with Java." },
    { name: "Jetpack Compose", desc: "Modern declarative UI toolkit for building native Android interfaces with less code." },
    { name: "Room Database", desc: "SQLite abstraction layer for robust local data persistence and query management." },
    { name: "Groq AI API", desc: "Ultra-fast LLM inference for the Ledger Coach financial advisor feature." },
    { name: "Android Studio", desc: "Official IDE for Android development with built-in emulator and debugging tools." },
    { name: "Material Design 3", desc: "Design system ensuring consistent, accessible, and visually polished UI components." },
  ];

  return (
    <div className="w-full flex flex-col items-center text-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Technologies Used</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Tools & Stack</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 gap-[20px] w-full max-w-[900px] text-left">
        {techs.map((t, i) => (
          <motion.div variants={item} key={i} className="bg-[#0d0d0d] p-[24px] rounded-[12px]">
            <h3 className="text-[22px] text-[#ffffff] leading-[1.2] mb-[8px]">{t.name}</h3>
            <p className="text-[16px] text-[#a0a0a0] leading-[1.6]">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
""",
    "Slide11": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};
const item = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export default function Slide11() {
  const modules = [
    { name: "Dashboard Module", desc: "Real-time spending overview with daily totals, monthly summaries, and quick-add expense button." },
    { name: "Transaction History Module", desc: "Chronological log with category filters, search functionality, and swipe-to-delete gestures." },
    { name: "Insights Module", desc: "Visual category breakdown using charts, top spending categories, and trend analysis." },
    { name: "Budget Module", desc: "Monthly budget setup with overspend alerts, progress indicators, and category-wise limits." },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Implementation</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Core Modules Developed</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[800px] flex flex-col gap-[16px] text-left">
        {modules.map((m, i) => (
          <motion.div variants={item} key={i} className="bg-[#111111] px-[30px] py-[20px] rounded-[8px] w-full">
            <h3 className="text-[22px] text-[#ffffff] leading-[1.2] mb-[8px]">{m.name}</h3>
            <p className="text-[16px] text-[#a0a0a0] leading-[1.6]">{m.desc}</p>
          </motion.div>
        ))}
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
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Results</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[40px]">Dashboard View</h2>
      
      <div className="w-full max-w-[900px] flex justify-between items-center text-left">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
          className="w-[55%] flex justify-center"
        >
          <img src="/image_1.png" alt="Dashboard" className="max-h-[500px] rounded-[12px] object-contain" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
          className="w-[40%]"
        >
          <h3 className="text-[24px] text-[#ffffff] leading-[1.2] mb-[16px]">Dashboard Overview</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">
            The home screen provides an instant snapshot of financial health. Users see today's spending, monthly totals, and recent transactions at a glance. The 'Add Expense' button enables two-second logging. The bottom navigation provides quick access to History, Insights, and AI Coach.
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
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Results</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[40px]">Transaction History</h2>
      
      <div className="w-full max-w-[900px] flex justify-between items-center text-left">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
          className="w-[55%] flex justify-center"
        >
          <img src="/image_2.png" alt="History" className="max-h-[500px] rounded-[12px] object-contain" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
          className="w-[40%]"
        >
          <h3 className="text-[24px] text-[#ffffff] leading-[1.2] mb-[16px]">Complete Transaction Log</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">
            Every expense is recorded with date, category, and amount. Transactions are grouped by day for easy review. Users can search by keyword, filter by category, or delete entries with a simple swipe. All data persists locally even after app restart.
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
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Results</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[40px]">Ledger Coach — AI Assistant</h2>
      
      <div className="w-full max-w-[900px] flex justify-between items-center text-left">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
          className="w-[55%] flex justify-center"
        >
          <img src="/image_3.png" alt="AI Coach" className="max-h-[500px] rounded-[12px] object-contain" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
          className="w-[40%]"
        >
          <h3 className="text-[24px] text-[#ffffff] leading-[1.2] mb-[16px]">Personal AI Financial Coach</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">
            Powered by Groq AI, the Ledger Coach analyzes spending patterns and provides actionable advice. Users can ask questions like 'How can I save more?' or 'Recap my day' and receive instant, personalized responses. The AI operates through API calls — no personal data is stored or trained on.
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
""",
    "Slide16": """import React from 'react';
import { motion } from 'framer-motion';

export default function Slide16() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">AI Coach & Budget System</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Smart Features That Make a Difference</h2>
      
      <div className="w-full max-w-[900px] flex justify-between text-left">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
          className="w-[45%]"
        >
          <h3 className="text-[28px] text-[#ffffff] leading-[1.2] mb-[16px]">Ledger Coach</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">
            An AI-powered financial advisor built into the app. It reads your spending data locally, generates personalized tips, answers finance questions, and suggests budget adjustments. Powered by Groq's ultra-fast LLM inference for near-instant responses. The AI never stores conversation history or personal data.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }}
          className="w-[45%]"
        >
          <h3 className="text-[28px] text-[#ffffff] leading-[1.2] mb-[16px]">Budget System</h3>
          <p className="text-[18px] text-[#a0a0a0] leading-[1.6]">
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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Slide17() {
  const enhancements = [
    { title: "Export to PDF / CSV", desc: "Allow users to export transaction history for tax filing and record keeping." },
    { title: "Desktop Port", desc: "Build a cross-platform desktop version using Compose Multiplatform for Windows, macOS, and Linux." },
    { title: "Recurring Expenses", desc: "Auto-log monthly bills like rent, subscriptions, and EMIs without manual entry." },
    { title: "Biometric Lock", desc: "Add fingerprint or face unlock for an extra layer of financial data security." },
    { title: "Multi-Currency Support", desc: "Support for USD, EUR, GBP, and other currencies with real-time conversion caching." },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Future Enhancements</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">What's Next for Ledger</h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[700px] flex flex-col gap-[24px] text-left">
        {enhancements.map((e, i) => (
          <motion.div variants={item} key={i}>
            <div className="flex items-center gap-[8px] mb-[8px]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#333333]"></div>
              <h3 className="text-[22px] text-[#ffffff] leading-[1.2]">{e.title}</h3>
            </div>
            <p className="text-[16px] text-[#a0a0a0] leading-[1.6] pl-[16px]">{e.desc}</p>
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
    { feature: "Internet Required", ledger: "No", mint: "Yes", ynab: "Yes", expensify: "Yes", bg: "bg-[#050505]" },
    { feature: "Subscription Fee", ledger: "Free", mint: "Free (with ads)", ynab: "Paid", expensify: "Paid", bg: "bg-[#0a0a0a]" },
    { feature: "AI Coach", ledger: "Built-in", mint: "No", ynab: "No", expensify: "No", bg: "bg-[#050505]" },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]">Ledger vs The Competition</h1>
      <h2 className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]">Why Ledger Stands Out</h2>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="w-full max-w-[900px] text-left"
      >
        <div className="grid grid-cols-5 gap-[1px] bg-[#111111] border-b border-[#222222]">
          <div className="p-[16px] text-[18px] text-[#ffffff]">Feature</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">Ledger</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">Mint</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">YNAB</div>
          <div className="p-[16px] text-[18px] text-[#ffffff]">Expensify</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className={`grid grid-cols-5 gap-[1px] ${r.bg} border-b border-[#222222]`}>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.feature}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.ledger}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.mint}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.ynab}</div>
            <div className="p-[16px] text-[16px] text-[#a0a0a0]">{r.expensify}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
""",
    "Slide19": """import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
};
const pill = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1.0, transition: { duration: 0.3 } }
};

export default function Slide19() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
        className="text-[56px] text-[#ffffff] leading-[1.2] mb-[24px]"
      >
        Conclusion
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
        className="text-[28px] text-[#a0a0a0] leading-[1.2] mb-[60px]"
      >
        What We Achieved
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }}
        className="text-[20px] text-[#a0a0a0] leading-[1.6] max-w-[800px] mb-[40px]"
      >
        Ledger successfully delivers a fully offline, privacy-first expense tracking solution for Android. We achieved all core objectives: local data storage with Room database, instant expense logging, visual spending insights, smart budget alerts, and an AI-powered financial coach using Groq AI. The app proves that powerful financial tools do not require sacrificing privacy. Every rupee tracked stays on the user's device. Ledger is not just an app — it is a statement that your financial data belongs to you, and no one else.
      </motion.p>
      
      <motion.div variants={container} initial="hidden" animate="show" className="flex gap-[12px]">
        <motion.div variants={pill} className="bg-[#111111] px-[20px] py-[10px] rounded-[6px] text-[14px] text-[#ffffff]">Privacy Achieved</motion.div>
        <motion.div variants={pill} className="bg-[#111111] px-[20px] py-[10px] rounded-[6px] text-[14px] text-[#ffffff]">AI Integrated</motion.div>
        <motion.div variants={pill} className="bg-[#111111] px-[20px] py-[10px] rounded-[6px] text-[14px] text-[#ffffff]">Fully Offline</motion.div>
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
        className="text-[64px] text-[#ffffff] leading-[1.2] mb-[30px]"
      >
        Thank You
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
        className="text-[24px] text-[#a0a0a0] leading-[1.2] mb-[40px]"
      >
        Questions & Discussion
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.6 }}
        className="text-[18px] text-[#a0a0a0] flex flex-col gap-[8px]"
      >
        <p>GitHub: github.com/harshaxyZ/ledger</p>
        <p>Live Demo: ledger67.vercel.app</p>
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
