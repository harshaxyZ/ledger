import os

slide_dir = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\components\ppt\slides"
engine_path = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\components\ppt\PresentationEngine.jsx"
css_path = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\index.css"

# Update CSS
css_content = """@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');
@import "tailwindcss";

@layer base {
  body {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
  }
}
"""
with open(css_path, "w", encoding="utf-8") as f:
    f.write(css_content)

# Update Engine
engine_content = """import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bgMap = {
  0: null,
  1: '/bg1.webp', 2: '/bg1.webp', 3: '/bg1.webp', 4: '/bg1.webp',
  5: '/bg2.webp', 6: '/bg2.webp', 7: '/bg2.webp', 8: '/bg2.webp', 9: '/bg2.webp', 10: '/bg2.webp',
  11: '/bg3.webp', 12: '/bg3.webp', 13: '/bg3.webp', 14: '/bg3.webp', 15: '/bg3.webp', 16: '/bg3.webp', 17: '/bg3.webp', 18: '/bg3.webp',
  19: null
};

const PresentationEngine = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  
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
      wheelTimeout = setTimeout(() => { wheelTimeout = null; }, 500); // 500ms debounce
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

  const variants = {
    enter: (direction) => ({ y: direction > 0 ? '100vh' : '-100vh', opacity: 0 }),
    center: { y: 0, opacity: 1, zIndex: 1 },
    exit: (direction) => ({ y: direction < 0 ? '100vh' : '-100vh', opacity: 0, zIndex: 0 })
  };

  const CurrentSlideComponent = slides[currentSlide];
  const bgImage = bgMap[currentSlide];

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-[#000000] text-[#ffffff] overflow-hidden flex flex-col font-['Space_Grotesk',sans-serif]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ userSelect: 'none', WebkitFontSmoothing: 'antialiased', contain: 'layout style paint' }}
    >
      <AnimatePresence mode="wait">
        {bgImage && (
          <motion.div 
            key={bgImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${bgImage}')`, transform: 'translateZ(0)' }}
          />
        )}
      </AnimatePresence>
      
      {bgImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.55)] to-[rgba(0,0,0,0.35)] pointer-events-none transform-gpu" />
      )}

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-[60px]"
          style={{ transform: 'translateZ(0)' }}
        >
          <div className="w-full h-full max-w-[1100px] flex flex-col items-center justify-center">
            <CurrentSlideComponent />
          </div>
        </motion.div>
      </AnimatePresence>

      {currentSlide > 0 && (
        <div className="absolute top-[60px] right-[60px] text-[16px] text-[#666666] font-[400] z-50">
          {currentSlide + 1} / {totalSlides}
        </div>
      )}

      <div className="absolute bottom-[20px] left-0 right-0 flex justify-center text-[14px] text-[#666666] font-[400] z-50 pointer-events-none">
        ↑ ↓
      </div>
    </div>
  );
};

export default PresentationEngine;
"""
with open(engine_path, "w", encoding="utf-8") as f:
    f.write(engine_content)

# Update Slides
slides_data = {}

slides_data["Slide01"] = """import React from 'react';
import { motion } from 'framer-motion';
export default function Slide01() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#000000]">
      <motion.img 
        src="/slideone.webp" 
        alt="Title Slide" 
        loading="lazy" decoding="async"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}
"""

slides_data["Slide02"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide02() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] leading-tight text-center">Introduction</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">The Need for Privacy</motion.h2>
      
      <motion.div variants={anim} className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6] max-w-[900px] mb-[40px] w-full text-center space-y-[16px]">
        <p>Right now, every single financial app on the market demands your personal data. They want to know what you buy, where you shop, and how much money you make.</p>
        <p>This data is uploaded to their cloud servers, analyzed, and often sold to advertisers. We believe your money is your private business.</p>
        <p>Ledger was built to solve this. It is a 100% offline, privacy-first web application. There is no cloud. There is no login. Everything stays on your device forever.</p>
      </motion.div>
      
      <motion.div variants={container} className="grid grid-cols-3 gap-[30px] w-full max-w-[1100px]">
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px] text-center">
          <div className="text-[32px] text-[#ffffff] font-[700] mb-[8px]">100%</div>
          <div className="text-[18px] text-[#b0b0b0] font-[400]">Offline Operation</div>
        </motion.div>
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px] text-center">
          <div className="text-[32px] text-[#ffffff] font-[700] mb-[8px]">Zero</div>
          <div className="text-[18px] text-[#b0b0b0] font-[400]">Data Harvesting</div>
        </motion.div>
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px] text-center">
          <div className="text-[32px] text-[#ffffff] font-[700] mb-[8px]">PWA</div>
          <div className="text-[18px] text-[#b0b0b0] font-[400]">Install Anywhere</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
"""

slides_data["Slide03"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide03() {
  const problems = [
    { head: "Data Privacy Crisis", body: "Popular apps store your sensitive financial data on corporate servers. If they get hacked, your data is leaked." },
    { head: "Internet Dependency", body: "Most tracking apps are useless without internet. They require a connection just to log a simple expense." },
    { head: "Too Much Clutter", body: "Existing apps are filled with annoying ads and complicated features. People want a fast way to track spending." }
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Problem</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">Why We Built This</motion.h2>
      
      <motion.div variants={container} className="w-full max-w-[1100px] flex gap-[30px]">
        {problems.map((p, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-t-[4px] border-t-[#ff3333] p-[24px] rounded-[16px]">
            <h3 className="text-[24px] md:text-[28px] text-[#ffffff] mb-[16px] font-[700]">{p.head}</h3>
            <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">{p.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
"""

slides_data["Slide04"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide04() {
  const objectives = [
    { head: "Complete Privacy", body: "We wanted to build an app where zero data leaves the device. All transactions are stored securely in your browser." },
    { head: "Offline-First", body: "We wanted the app to load instantly and work perfectly even if you are in airplane mode. No loading screens." },
    { head: "Smart AI Coaching", body: "We wanted to provide personalized financial advice without invading privacy, using the Groq API." }
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Objectives</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">Our Goals For Ledger</motion.h2>
      <motion.div variants={container} className="w-full max-w-[1100px] flex gap-[30px] text-left">
        {objectives.map((o, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
            <h3 className="text-[24px] md:text-[28px] text-[#ffffff] mb-[16px] font-[700]">{o.head}</h3>
            <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">{o.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
"""

slides_data["Slide05"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide05() {
  const rows = [
    { app: "Mint", approach: "Cloud Database", key: "Bank Sync", lim: "Sells data to ads" },
    { app: "YNAB", approach: "Cloud App", key: "Envelope method", lim: "Requires subscription" },
    { app: "Expensify", approach: "Cloud App", key: "Receipt scans", lim: "Privacy concerns" },
    { app: "Ledger", approach: "Local PWA", key: "Offline + AI", lim: "Data stays on device", highlight: true }
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Survey</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">Looking At Competitors</motion.h2>
      
      <div className="w-full max-w-[1100px] text-left rounded-[16px] overflow-hidden bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
        <motion.div variants={anim} className="grid grid-cols-4 bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.08)]">
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">App Name</div>
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">Architecture</div>
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">Main Feature</div>
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">Drawbacks</div>
        </motion.div>
        <motion.div variants={container}>
          {rows.map((r, i) => (
            <motion.div variants={anim} key={i} className={`grid grid-cols-4 border-b border-[rgba(255,255,255,0.08)] ${r.highlight ? 'bg-[rgba(255,51,51,0.1)] border-l-[4px] border-l-[#ff3333]' : 'bg-transparent'}`}>
              <div className={`p-[20px] text-[18px] font-[700] ${r.highlight ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`}>{r.app}</div>
              <div className="p-[20px] text-[18px] text-[#b0b0b0] font-[400]">{r.approach}</div>
              <div className="p-[20px] text-[18px] text-[#b0b0b0] font-[400]">{r.key}</div>
              <div className="p-[20px] text-[18px] text-[#b0b0b0] font-[400]">{r.lim}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
"""

slides_data["Slide06"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide06() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Old Systems</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">How Current Trackers Work</motion.h2>
      
      <div className="w-full max-w-[1100px] flex justify-between gap-[30px] text-left">
        <motion.div variants={anim} className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
          <h3 className="text-[24px] md:text-[28px] text-[#ffffff] mb-[16px] font-[700]">The Cloud Model</h3>
          <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">
            Most trackers operate on a centralized cloud model. When you open the app, it connects to a server. When you log an expense, it is sent over the internet and saved in a massive company database alongside millions of other users.
          </p>
        </motion.div>
        
        <motion.div variants={anim} className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
          <h3 className="text-[24px] md:text-[28px] text-[#ffffff] mb-[16px] font-[700]">Why It Is Bad</h3>
          <ul className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6] list-disc list-inside space-y-[10px]">
            <li>Your data can be stolen in server hacks.</li>
            <li>You cannot use the app without internet.</li>
            <li>The company analyzes your spending habits.</li>
            <li>They force you to view ads or pay monthly.</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
"""

slides_data["Slide07"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function Slide07() {
  const Arrow = () => (
    <div className="flex items-center w-[40px] justify-center mx-[10px]">
      <motion.svg width="40" height="15" viewBox="0 0 40 15" variants={anim}>
        <line x1="0" y1="7.5" x2="30" y2="7.5" stroke="#ffffff" strokeWidth="3" />
        <polygon points="30,0 40,7.5 30,15" fill="#ffffff" />
      </motion.svg>
    </div>
  );
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Our System</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">The Local-First Approach</motion.h2>
      
      <motion.p variants={anim} className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6] max-w-[900px] mb-[40px] mx-auto w-full text-center">
        Ledger completely removes the cloud. We built it as a Progressive Web App (PWA). All data is saved instantly inside your device's browser using IndexedDB. We only connect to the internet when you ask the Groq AI Coach a question.
      </motion.p>
      
      <motion.div variants={container} className="flex items-center justify-center w-full max-w-[1100px]">
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] px-[20px] py-[20px] rounded-[16px] w-[180px] text-center">
          <div className="text-[20px] font-[700] text-[#ffffff]">Input</div><div className="text-[16px] text-[#888888] font-[400] mt-[8px]">Log Expense</div>
        </motion.div>
        <Arrow />
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] px-[20px] py-[20px] rounded-[16px] w-[180px] text-center">
          <div className="text-[20px] font-[700] text-[#ffffff]">Storage</div><div className="text-[16px] text-[#888888] font-[400] mt-[8px]">IndexedDB</div>
        </motion.div>
        <Arrow />
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] px-[20px] py-[20px] rounded-[16px] w-[180px] text-center">
          <div className="text-[20px] font-[700] text-[#ffffff]">Coach</div><div className="text-[16px] text-[#888888] font-[400] mt-[8px]">Groq LLM</div>
        </motion.div>
        <Arrow />
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] px-[20px] py-[20px] rounded-[16px] w-[180px] text-center">
          <div className="text-[20px] font-[700] text-[#ffffff]">Output</div><div className="text-[16px] text-[#888888] font-[400] mt-[8px]">Dashboard</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
"""

slides_data["Slide08"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide08() {
  const steps = [
    { title: "Planning & Design", body: "We decided to build a PWA for cross-platform support. We planned the UI to be clean, dark, and simple.", side: "left" },
    { title: "Frontend Construction", body: "We built the interface using React and Tailwind CSS. We made sure it feels like a native mobile app.", side: "right" },
    { title: "Local Database", body: "We implemented IndexedDB to handle saving, editing, and deleting transactions instantly.", side: "left" },
    { title: "AI Integration", body: "We connected the Groq API to provide lightning-fast financial coaching based on local data.", side: "right" },
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Methodology</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">How We Built It</motion.h2>
      
      <div className="relative w-full max-w-[1000px] flex flex-col items-center">
        <motion.div variants={anim} className="absolute top-0 bottom-0 w-[4px] bg-[rgba(255,255,255,0.1)] left-1/2 -translate-x-1/2" />
        <div className="w-full flex flex-col gap-[20px] relative z-10">
          {steps.map((s, i) => (
            <motion.div variants={anim} key={i} className={`flex w-full ${s.side === 'left' ? 'justify-start' : 'justify-end'} relative`}>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[16px] h-[16px] rounded-full bg-[#ff3333] border-[3px] border-[#000]" />
              <div className={`w-[45%] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px] ${s.side === 'left' ? 'mr-[5%]' : 'ml-[5%]'}`}>
                <h3 className="text-[24px] font-[700] text-[#ffffff] mb-[8px]">{s.title}</h3>
                <p className="text-[18px] text-[#b0b0b0] font-[400] leading-[1.6]">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
"""

slides_data["Slide09"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide09() {
  const DownArrow = () => (
    <motion.div variants={anim} className="flex justify-center w-full my-[10px]">
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
        <path d="M20 0 V15 M10 5 L20 15 L30 5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-30"/>
      </svg>
    </motion.div>
  );
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Architecture</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">How The App Is Structured</motion.h2>
      
      <motion.div variants={container} className="w-full max-w-[1000px] flex flex-col">
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px] flex flex-col items-center">
          <div className="text-[20px] md:text-[24px] font-[700] text-[#ff3333] tracking-widest mb-[16px]">USER INTERFACE</div>
          <div className="flex gap-[16px] w-full justify-center">
            {["Dashboard View", "Transactions List", "Charts & Graphs", "AI Chat Interface"].map((b, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.05)] px-[16px] py-[12px] rounded-[12px] text-[18px] font-[700] text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
        <DownArrow />
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px] flex flex-col items-center">
          <div className="text-[20px] md:text-[24px] font-[700] text-[#ff3333] tracking-widest mb-[16px]">LOGIC & CONTROLLERS</div>
          <div className="flex gap-[16px] w-full justify-center">
            {["State Management", "Data Filtering", "Budget Calculation", "Groq API Handler"].map((b, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.05)] px-[16px] py-[12px] rounded-[12px] text-[18px] font-[700] text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
        <DownArrow />
        <motion.div variants={anim} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px] flex flex-col items-center">
          <div className="text-[20px] md:text-[24px] font-[700] text-[#ff3333] tracking-widest mb-[16px]">STORAGE LAYER</div>
          <div className="flex gap-[16px] w-full justify-center">
            {["Browser IndexedDB", "Local Storage", "Service Workers"].map((b, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.05)] px-[16px] py-[12px] rounded-[12px] text-[18px] font-[700] text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
"""

slides_data["Slide10"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide10() {
  const techs = [
    { name: "React JS", desc: "A powerful JavaScript library for building fast and interactive user interfaces." },
    { name: "Tailwind CSS", desc: "A modern utility-first CSS framework for styling the app beautifully and quickly." },
    { name: "IndexedDB", desc: "The browser's built-in local database. It safely stores all financial data." },
    { name: "Groq API", desc: "One of the fastest AI inference engines in the world, powering our smart coach." },
    { name: "Framer Motion", desc: "Used to create all the smooth, beautiful animations and page transitions." },
    { name: "Vite & PWA", desc: "A blazing fast build tool. It packages our app so users can install it on their phones." },
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Tech Stack</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">What We Used</motion.h2>
      <motion.div variants={container} className="grid grid-cols-3 gap-[30px] w-full max-w-[1100px]">
        {techs.map((t, i) => (
          <motion.div variants={anim} key={i} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
            <h3 className="text-[24px] font-[700] text-[#ffffff] mb-[12px]">{t.name}</h3>
            <p className="text-[18px] text-[#b0b0b0] font-[400] leading-[1.6]">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
"""

slides_data["Slide11"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide11() {
  const modules = [
    { name: "The Main Dashboard", desc: "This is the first screen you see. It gives you a complete summary of your daily and monthly spending. It also has a quick button to add a new expense." },
    { name: "The History Log", desc: "This screen shows every single transaction you have ever made. You can scroll through them, filter by category, or delete mistakes." },
    { name: "The Charts & Insights", desc: "This module takes your boring numbers and turns them into beautiful graphs. It helps you quickly see exactly where your money is going." },
    { name: "The AI Coach", desc: "This is a chat interface. You can ask it questions about your spending, and the Groq AI will give you smart tips on how to save money." },
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Implementation</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">The Four Main Parts</motion.h2>
      <motion.div variants={container} className="w-full max-w-[1100px] flex flex-col gap-[20px]">
        {modules.map((m, i) => (
          <motion.div variants={anim} key={i} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] px-[24px] py-[20px] rounded-[16px]">
            <h3 className="text-[24px] font-[700] text-[#ffffff] mb-[8px]">{m.name}</h3>
            <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">{m.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
"""

def generate_result_slide(idx, title, subtitle, image_src, desc_head, desc_body):
    return f"""import React from 'react';
import {{ motion }} from 'framer-motion';
const container = {{ hidden: {{ opacity: 0 }}, show: {{ opacity: 1, transition: {{ staggerChildren: 0.1 }} }} }};
const anim = {{ hidden: {{ opacity: 0, y: 30 }}, show: {{ opacity: 1, y: 0, transition: {{ duration: 0.4, ease: "easeOut" }} }} }};
export default function Slide{idx}() {{
  return (
    <motion.div variants={{container}} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={{anim}} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">{title}</motion.h1>
      <motion.h2 variants={{anim}} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">{subtitle}</motion.h2>
      <div className="w-full max-w-[1100px] flex justify-between items-center text-left">
        <motion.div variants={{anim}} className="w-[40%] flex justify-center bg-transparent">
          <div className="rounded-[24px] overflow-hidden border-[4px] border-[#222222] shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full max-h-[55vh] flex items-center justify-center bg-[#000000]">
             <img src="{image_src}" alt="Screenshot" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          </div>
        </motion.div>
        <motion.div variants={{anim}} className="w-[50%] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
          <h3 className="text-[24px] md:text-[28px] font-[700] text-[#ffffff] mb-[20px]">{desc_head}</h3>
          <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6] whitespace-pre-line">{desc_body}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}}
"""

slides_data["Slide12"] = generate_result_slide("12", "Results", "Dashboard View", "/image_1.webp", "The Home Screen", "When you open Ledger, this is the very first thing you see.\n\nWe designed it to be dark, minimal, and extremely easy to read. It immediately tells you how much money you have spent today, and how much you have spent this whole month. You don't have to navigate through menus just to check your balance.")
slides_data["Slide13"] = generate_result_slide("13", "Results", "Transaction History", "/image_2.webp", "Your Complete Log", "This screen acts like your personal bank statement.\n\nEvery single time you buy a coffee or pay rent, it is logged here. The transactions are neatly sorted by day and date. It uses different colors to separate your income from your expenses, making it very easy to scan.")
slides_data["Slide14"] = generate_result_slide("14", "Results", "Ledger Coach", "/image_3.webp", "The Groq AI Coach", "This is the smartest feature of our application.\n\nInstead of just showing numbers, Ledger actually talks to you. You can ask it questions like 'Am I spending too much on food?' and the Groq AI will instantly analyze your local data and give you a helpful, human-like response.")
slides_data["Slide15"] = generate_result_slide("15", "Results", "Spending Insights", "/image_4.webp", "Visualizing Data", "Looking at long lists of numbers can be boring and confusing.\n\nThe insights tab takes all your expenses and turns them into beautiful visual charts. You can instantly see exactly which categories are eating up most of your budget, helping you make better financial decisions.")

slides_data["Slide16"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide16() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center text-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Key Features</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">What Makes It Special</motion.h2>
      <div className="w-full max-w-[1100px] flex justify-between gap-[30px] text-left">
        <motion.div variants={anim} className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
          <h3 className="text-[24px] md:text-[28px] font-[700] text-[#ffffff] mb-[16px]">Instant Loading</h3>
          <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">
            Because Ledger is a Progressive Web App (PWA) that uses your browser's local storage, there is zero loading time. The moment you open the app, your data is already there. No waiting for a server to respond.
          </p>
        </motion.div>
        <motion.div variants={anim} className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
          <h3 className="text-[24px] md:text-[28px] font-[700] text-[#ffffff] mb-[16px]">Private AI Analysis</h3>
          <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">
            When you ask the AI Coach a question, it quickly sends only the relevant context to the Groq API. We do not store your chat history anywhere, and Groq's high-speed inference means you get answers in milliseconds.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
"""

slides_data["Slide17"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide17() {
  const future = [
    { title: "Export to Excel", desc: "Allowing users to easily download their entire transaction history as a CSV file for their own records." },
    { title: "Push Notifications", desc: "Sending simple, local reminders to log daily expenses so users don't forget." },
    { title: "Multiple Accounts", desc: "Adding the ability to separate cash spending from bank or credit card spending in the app." }
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Future Plans</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">What We Will Add Next</motion.h2>
      <motion.div variants={container} className="w-full max-w-[1100px] flex gap-[30px]">
        {future.map((f, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[24px] rounded-[16px]">
            <h3 className="text-[24px] font-[700] text-[#ffffff] mb-[16px]">{f.title}</h3>
            <p className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
"""

slides_data["Slide18"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide18() {
  const rows = [
    { f: "Data Storage", y: "Company Cloud", m: "Company Cloud", l: "On Your Device" },
    { f: "App Loading Speed", y: "Slow", m: "Average", l: "Instant" },
    { f: "Offline Access", y: "Very Poor", m: "None", l: "100% Complete" },
    { f: "AI Assistant", y: "No", m: "No", l: "Yes (Groq)" },
    { f: "Pricing", y: "$84 / Year", m: "Shows Ads", l: "Completely Free" }
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Comparison</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">Ledger vs The Industry</motion.h2>
      
      <div className="w-full max-w-[1100px] text-left rounded-[16px] overflow-hidden bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
        <motion.div variants={anim} className="grid grid-cols-4 bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.08)]">
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">Feature</div>
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">YNAB App</div>
          <div className="p-[20px] text-[20px] text-[#ffffff] font-[700]">Mint App</div>
          <div className="p-[20px] text-[20px] text-[#ff3333] font-[700]">Ledger App</div>
        </motion.div>
        <motion.div variants={container}>
          {rows.map((r, i) => (
            <motion.div variants={anim} key={i} className="grid grid-cols-4 border-b border-[rgba(255,255,255,0.08)]">
              <div className="p-[20px] text-[18px] text-[#ffffff] font-[700]">{r.f}</div>
              <div className="p-[20px] text-[18px] text-[#b0b0b0] font-[400]">{r.y}</div>
              <div className="p-[20px] text-[18px] text-[#b0b0b0] font-[400]">{r.m}</div>
              <div className="p-[20px] text-[18px] text-[#ff3333] font-[700]">{r.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
"""

slides_data["Slide19"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide19() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center text-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Conclusion</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">Taking Back Control</motion.h2>
      
      <motion.div variants={anim} className="text-[18px] md:text-[20px] text-[#b0b0b0] font-[400] leading-[1.6] max-w-[900px] mb-[40px] w-full text-center space-y-[24px]">
        <p>Ledger successfully proves that powerful financial tools do not need to steal your data.</p>
        <p>By using modern web technologies like React and IndexedDB, we created an app that is faster, safer, and simpler than the biggest corporate competitors on the market.</p>
        <p className="text-[#ffffff] font-[700] mt-[40px] text-[24px] md:text-[28px]">Your money. Your data. Your device.</p>
      </motion.div>
    </motion.div>
  );
}
"""

slides_data["Slide20"] = """import React from 'react';
import { motion } from 'framer-motion';
export default function Slide20() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#000000] flex flex-col items-center justify-center">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="text-[96px] md:text-[120px] font-[700] text-[#ffffff] tracking-widest mb-[20px]"
      >
        THANK YOU
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
        className="text-[28px] md:text-[32px] text-[#ff3333] font-[700] tracking-widest"
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

print("V9 generation complete.")
