import os
import shutil
import urllib.request
from PIL import Image

slide_dir = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\components\ppt\slides"
engine_path = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\components\ppt\PresentationEngine.jsx"
public_dir = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\public"
css_path = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\index.css"

# 1. Download Font
font_url = "https://raw.githubusercontent.com/PangolinSM/Pangolin/master/fonts/MonumentExtended-Ultrabold.otf"
font_path = os.path.join(public_dir, "horizon.otf")
try:
    urllib.request.urlretrieve(font_url, font_path)
    print("Downloaded font successfully")
except Exception as e:
    print(f"Failed to download font: {e}")

# Update CSS
css_content = """@import "tailwindcss";

@font-face {
  font-family: 'Horizon';
  src: url('/horizon.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@layer base {
  body {
    font-family: 'Horizon', sans-serif;
  }
}
"""
with open(css_path, "w", encoding="utf-8") as f:
    f.write(css_content)

# 2. Convert Images to WebP to fix lag
images_to_convert = ['bg1.png', 'bg2.png', 'bg3.png', 'image_1.png', 'image_2.png', 'image_3.png', 'image_4.png', 'slideone.png']
for img_name in images_to_convert:
    img_path = os.path.join(public_dir, img_name)
    if os.path.exists(img_path):
        try:
            with Image.open(img_path) as im:
                im = im.convert("RGB")
                webp_name = img_name.replace(".png", ".webp")
                webp_path = os.path.join(public_dir, webp_name)
                # Resize backgrounds to max 1920x1080 to save memory
                if img_name.startswith('bg'):
                    im.thumbnail((1920, 1080), Image.Resampling.LANCZOS)
                im.save(webp_path, "WEBP", quality=75)
                print(f"Converted {img_name} to {webp_name}")
        except Exception as e:
            print(f"Failed to convert {img_name}: {e}")

# 3. Generate Engine
engine_content = """import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bgMap = {
  0: null,
  1: '/bg1.webp', 2: '/bg1.webp', 3: '/bg1.webp', 4: '/bg1.webp', 5: '/bg1.webp',
  6: '/bg2.webp', 7: '/bg2.webp', 8: '/bg2.webp', 9: '/bg2.webp', 10: '/bg2.webp',
  11: '/bg3.webp', 12: '/bg3.webp', 13: '/bg3.webp', 14: '/bg3.webp', 15: '/bg3.webp',
  16: '/bg3.webp', 17: '/bg3.webp', 18: '/bg3.webp',
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

  // We removed backdrop-filter: blur to fix lag.
  // We use solid dark colors for cards now.

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-[#000000] text-[#ffffff] overflow-hidden flex flex-col font-['Horizon',sans-serif]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ userSelect: 'none', WebkitFontSmoothing: 'antialiased' }}
    >
      <AnimatePresence mode="wait">
        {bgImage && (
          <motion.div 
            key={bgImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
        )}
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.85)] to-[rgba(0,0,0,0.65)] pointer-events-none" />

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center z-10 ${currentSlide === 0 ? 'p-[20px]' : 'p-[60px]'}`}
        >
          <div className={`w-full h-full flex flex-col items-center justify-center ${currentSlide === 0 ? 'w-full h-full' : 'max-w-[1200px] w-full'}`}>
            <CurrentSlideComponent />
          </div>
        </motion.div>
      </AnimatePresence>

      {currentSlide > 0 && (
        <div className="absolute top-[60px] right-[60px] text-[18px] text-[#b0b0b0] z-50 tracking-wider">
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </div>
      )}

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

# 4. Generate Slides
slides_data = {}

# Slide 1: Image using img tag instead of background for full visibility
slides_data["Slide01"] = """import React from 'react';
import { motion } from 'framer-motion';
export default function Slide01() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#000000]">
      <motion.img 
        src="/slideone.webp" 
        alt="Title Slide" 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1.0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-full max-h-full object-contain"
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
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[40px]">The Need for Privacy</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="text-[24px] md:text-[28px] text-[#d0d0d0] leading-[1.7] max-w-[1100px] mb-[60px] w-full text-center">
        <motion.p variants={anim} className="mb-4">Right now, every single financial app on the market demands your personal data. They want to know what you buy, where you shop, and how much money you make.</motion.p>
        <motion.p variants={anim} className="mb-4">This data is uploaded to their cloud servers, analyzed, and often sold to advertisers. We believe your money is your private business.</motion.p>
        <motion.p variants={anim}>Ledger was built to solve this. It is a 100% offline, privacy-first web application. There is no cloud. There is no login. Everything stays on your device forever.</motion.p>
      </motion.div>
      
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-3 gap-[24px] w-full max-w-[1200px]">
        <motion.div variants={anim} className="bg-[#121212] border border-[#333333] p-[32px] rounded-[16px]">
          <div className="text-[48px] text-[#ffffff] font-bold mb-[8px]">100%</div>
          <div className="text-[20px] text-[#888888]">Offline Operation</div>
        </motion.div>
        <motion.div variants={anim} className="bg-[#121212] border border-[#333333] p-[32px] rounded-[16px]">
          <div className="text-[48px] text-[#ffffff] font-bold mb-[8px]">Zero</div>
          <div className="text-[20px] text-[#888888]">Data Harvesting</div>
        </motion.div>
        <motion.div variants={anim} className="bg-[#121212] border border-[#333333] p-[32px] rounded-[16px]">
          <div className="text-[48px] text-[#ffffff] font-bold mb-[8px]">PWA</div>
          <div className="text-[20px] text-[#888888]">Install Anywhere</div>
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
    { head: "Data Privacy Crisis", body: "Popular apps store your highly sensitive financial data on corporate servers. If they get hacked, your data gets leaked. You are completely vulnerable." },
    { head: "Internet Dependency", body: "Most tracking apps are completely useless if you don't have internet. They require a connection just to open and log a simple expense." },
    { head: "Too Much Clutter", body: "Existing apps are filled with annoying ads, premium subscriptions, and complicated features. People just want a simple, fast way to track spending." }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Problem</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">Why We Built This</motion.h2>
      
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex gap-[24px]">
        {problems.map((p, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[#121212] border border-[#333333] border-t-[4px] border-t-[#ff3333] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] text-[#ffffff] mb-[20px] font-bold">{p.head}</h3>
            <p className="text-[22px] text-[#d0d0d0] leading-[1.7]">{p.body}</p>
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
    { head: "Complete Privacy", body: "We wanted to build an app where zero data leaves the device. All your transactions are stored securely in your browser's local storage." },
    { head: "Offline-First", body: "We wanted the app to load instantly and work perfectly even if you are in airplane mode. No loading screens, no waiting." },
    { head: "Smart AI Coaching", body: "We wanted to provide personalized financial advice without invading privacy. We use the Groq API to provide instant, smart coaching based on your habits." }
  ];
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Objectives</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">Our Goals For Ledger</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex gap-[24px] text-left">
        {objectives.map((o, i) => (
          <motion.div variants={anim} key={i} className="flex-1 bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] text-[#ffffff] mb-[20px] font-bold">{o.head}</h3>
            <p className="text-[22px] text-[#d0d0d0] leading-[1.7]">{o.body}</p>
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
    { app: "Mint", approach: "Cloud Database", key: "Bank Sync", lim: "Sells data to ad networks" },
    { app: "YNAB", approach: "Cloud App", key: "Envelope method", lim: "Requires monthly paid subscription" },
    { app: "Expensify", approach: "Cloud App", key: "Receipt scans", lim: "Major privacy concerns" },
    { app: "Ledger", approach: "Local PWA", key: "100% Offline + AI", lim: "Data stays on one device", highlight: true }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Survey</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Looking At Competitors</motion.h2>
      
      <div className="w-full max-w-[1200px] text-left rounded-[16px] overflow-hidden bg-[#121212] border border-[#333333]">
        <motion.div initial="hidden" animate="show" variants={anim} className="grid grid-cols-4 bg-[#1a1a1a] border-b border-[#333333]">
          <div className="p-[24px] text-[24px] text-[#ffffff] font-bold">App Name</div>
          <div className="p-[24px] text-[24px] text-[#ffffff] font-bold">Architecture</div>
          <div className="p-[24px] text-[24px] text-[#ffffff] font-bold">Main Feature</div>
          <div className="p-[24px] text-[24px] text-[#ffffff] font-bold">Drawbacks</div>
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="show">
          {rows.map((r, i) => (
            <motion.div variants={anim} key={i} className={`grid grid-cols-4 border-b border-[#333333] ${r.highlight ? 'bg-[rgba(255,51,51,0.1)] border-l-[8px] border-l-[#ff3333]' : 'bg-transparent'}`}>
              <div className={`p-[24px] text-[22px] font-bold ${r.highlight ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`}>{r.app}</div>
              <div className="p-[24px] text-[22px] text-[#d0d0d0]">{r.approach}</div>
              <div className="p-[24px] text-[22px] text-[#d0d0d0]">{r.key}</div>
              <div className="p-[24px] text-[22px] text-[#d0d0d0]">{r.lim}</div>
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
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Old Systems</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">How Current Trackers Work</motion.h2>
      
      <div className="w-full max-w-[1200px] flex justify-between gap-[4%] text-left">
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] text-[#ffffff] mb-[24px] font-bold">The Cloud Model</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7]">
            Most trackers operate on a centralized cloud model. When you open the app, it connects to a server. When you log an expense, it is sent over the internet and saved in a massive company database alongside millions of other users.
          </p>
        </motion.div>
        
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] text-[#ffffff] mb-[24px] font-bold">Why It Is Bad</h3>
          <ul className="text-[24px] text-[#d0d0d0] leading-[1.7] list-disc list-inside space-y-3">
            <li>Your data can be stolen in server hacks.</li>
            <li>You cannot use the app without internet.</li>
            <li>The company analyzes your spending habits.</li>
            <li>They force you to view ads or pay monthly.</li>
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
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Our System</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">The Local-First Approach</motion.h2>
      
      <motion.p initial="hidden" animate="show" variants={anim} className="text-[24px] md:text-[28px] text-[#d0d0d0] leading-[1.7] max-w-[1100px] mb-[60px] mx-auto w-full">
        Ledger completely removes the cloud. We built it as a Progressive Web App (PWA). All data is saved instantly inside your device's browser using IndexedDB. We only connect to the internet when you ask the Groq AI Coach a question, and we never save those chats.
      </motion.p>
      
      <motion.div variants={container} initial="hidden" animate="show" className="flex items-center justify-center w-full max-w-[1200px] mb-[60px]">
        <motion.div variants={boxAnim} className="bg-[#121212] border border-[#333333] px-[40px] py-[30px] rounded-[16px] w-[220px]">
          <div className="text-[24px] font-bold text-[#ffffff]">Input</div><div className="text-[18px] text-[#888888] mt-2">Log Expense</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[#121212] border border-[#333333] px-[40px] py-[30px] rounded-[16px] w-[220px]">
          <div className="text-[24px] font-bold text-[#ffffff]">Storage</div><div className="text-[18px] text-[#888888] mt-2">IndexedDB</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[#121212] border border-[#333333] px-[40px] py-[30px] rounded-[16px] w-[220px]">
          <div className="text-[24px] font-bold text-[#ffffff]">Coach</div><div className="text-[18px] text-[#888888] mt-2">Groq LLM</div>
        </motion.div>
        <Arrow />
        <motion.div variants={boxAnim} className="bg-[#121212] border border-[#333333] px-[40px] py-[30px] rounded-[16px] w-[220px]">
          <div className="text-[24px] font-bold text-[#ffffff]">Output</div><div className="text-[18px] text-[#888888] mt-2">Dashboard</div>
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
    { title: "Planning & Design", body: "We decided to build a PWA for cross-platform support. We planned the UI to be clean, dark, and extremely simple to use.", side: "left" },
    { title: "Frontend Construction", body: "We built the interface using React and Tailwind CSS. We made sure it feels like a native mobile app on phones.", side: "right" },
    { title: "Local Database", body: "We implemented IndexedDB to handle saving, editing, and deleting transactions instantly without internet.", side: "left" },
    { title: "AI Integration", body: "We connected the Groq API to provide lightning-fast financial coaching based on the user's local data.", side: "right" },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Methodology</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">How We Built It</motion.h2>
      
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
                className={`w-[45%] bg-[#121212] border border-[#333333] p-[32px] rounded-[16px] ${s.side === 'left' ? 'mr-[5%]' : 'ml-[5%]'}`}
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
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Architecture</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[40px]">How The App Is Structured</motion.h2>
      
      <motion.div variants={layerContainer} initial="hidden" animate="show" className="w-full max-w-[1200px] flex flex-col">
        <motion.div variants={layerAnim} className="bg-[#121212] border border-[#333333] p-[32px] rounded-[16px] flex flex-col items-center">
          <div className="text-[24px] font-bold text-[#ff3333] tracking-widest mb-[24px]">USER INTERFACE</div>
          <div className="flex gap-[20px] w-full justify-center">
            {["Dashboard View", "Transactions List", "Charts & Graphs", "AI Chat Interface"].map((b, i) => (
              <div key={i} className="bg-[#222222] px-[24px] py-[16px] rounded-[12px] text-[20px] font-bold text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
        <DownArrow />
        <motion.div variants={layerAnim} className="bg-[#121212] border border-[#333333] p-[32px] rounded-[16px] flex flex-col items-center">
          <div className="text-[24px] font-bold text-[#ff3333] tracking-widest mb-[24px]">LOGIC & CONTROLLERS</div>
          <div className="flex gap-[20px] w-full justify-center">
            {["State Management", "Data Filtering", "Budget Calculation", "Groq API Handler"].map((b, i) => (
              <div key={i} className="bg-[#222222] px-[24px] py-[16px] rounded-[12px] text-[20px] font-bold text-[#ffffff] flex-1 text-center">{b}</div>
            ))}
          </div>
        </motion.div>
        <DownArrow />
        <motion.div variants={layerAnim} className="bg-[#121212] border border-[#333333] p-[32px] rounded-[16px] flex flex-col items-center mb-[20px]">
          <div className="text-[24px] font-bold text-[#ff3333] tracking-widest mb-[24px]">STORAGE LAYER</div>
          <div className="flex gap-[20px] w-full justify-center">
            {["Browser IndexedDB", "Local Storage", "Service Workers"].map((b, i) => (
              <div key={i} className="bg-[#222222] px-[24px] py-[16px] rounded-[12px] text-[20px] font-bold text-[#ffffff] flex-1 text-center">{b}</div>
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
    { name: "React JS", desc: "A powerful JavaScript library for building fast and interactive user interfaces." },
    { name: "Tailwind CSS", desc: "A modern utility-first CSS framework for styling the app beautifully and quickly." },
    { name: "IndexedDB", desc: "The browser's built-in local database. It safely stores all financial data." },
    { name: "Groq API", desc: "One of the fastest AI inference engines in the world, powering our smart coach." },
    { name: "Framer Motion", desc: "Used to create all the smooth, beautiful animations and page transitions." },
    { name: "Vite & PWA", desc: "A blazing fast build tool. It packages our app so users can install it on their phones." },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Tech Stack</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">What We Used</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-3 gap-[24px] w-full max-w-[1200px]">
        {techs.map((t, i) => (
          <motion.div variants={cardAnim} key={i} className="bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
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
    { name: "The Main Dashboard", desc: "This is the first screen you see. It gives you a complete summary of your daily and monthly spending. It also has a quick button to add a new expense." },
    { name: "The History Log", desc: "This screen shows every single transaction you have ever made. You can scroll through them, filter by category, or delete mistakes." },
    { name: "The Charts & Insights", desc: "This module takes your boring numbers and turns them into beautiful graphs. It helps you quickly see exactly where your money is going." },
    { name: "The AI Coach", desc: "This is a chat interface. You can ask it questions about your spending, and the Groq AI will give you smart tips on how to save money." },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Implementation</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">The Four Main Parts</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex flex-col gap-[20px]">
        {modules.map((m, i) => (
          <motion.div variants={barAnim} key={i} className="bg-[#121212] border border-[#333333] px-[40px] py-[24px] rounded-[16px]">
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
          <img src="{image_src}" alt="Screenshot" className="w-[85%] max-h-[65vh] object-contain rounded-[20px] shadow-[0_0_40px_rgba(255,51,51,0.15)]" />
        </motion.div>
        <motion.div initial={{{{ opacity: 0, x: 40 }}}} animate={{{{ opacity: 1, x: 0 }}}} transition={{{{ duration: 0.5, delay: 0.3 }}}} className="w-[40%] bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] font-bold text-[#ffffff] mb-[24px]">{desc_head}</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7] whitespace-pre-line">{desc_body}</p>
        </motion.div>
      </div>
    </div>
  );
}}
"""

slides_data["Slide12"] = generate_result_slide("12", "Results", "Dashboard View", "/image_1.webp", "The Home Screen", "When you open Ledger, this is the very first thing you see.\n\nWe designed it to be dark, minimal, and extremely easy to read. It immediately tells you how much money you have spent today, and how much you have spent this whole month. You don't have to navigate through menus just to check your balance.")
slides_data["Slide13"] = generate_result_slide("13", "Results", "Transaction History", "/image_2.webp", "Your Complete Log", "This screen acts like your personal bank statement.\n\nEvery single time you buy a coffee or pay rent, it is logged here. The transactions are neatly sorted by day and date. It uses different colors to separate your income from your expenses, making it very easy to scan.")
slides_data["Slide14"] = generate_result_slide("14", "Results", "Ledger Coach", "/image_3.webp", "The Groq AI Coach", "This is the smartest feature of our application.\n\nInstead of just showing numbers, Ledger actually talks to you. You can ask it questions like 'Am I spending too much on food?' and the Groq AI will instantly analyze your local data and give you a helpful, human-like response.")
slides_data["Slide15"] = generate_result_slide("15", "Results", "Spending Insights", "/image_4.webp", "Visualizing Data", "Looking at long lists of numbers can be boring and confusing.\n\nThe insights tab takes all your expenses and turns them into beautiful visual charts. You can instantly see exactly which categories are eating up most of your budget, helping you make better financial decisions.")

slides_data["Slide16"] = """import React from 'react';
import { motion } from 'framer-motion';
const anim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
export default function Slide16() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px] leading-tight">Key Features</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">What Makes It Special</motion.h2>
      <div className="w-full max-w-[1200px] flex justify-between gap-[4%] text-left">
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] font-bold text-[#ffffff] mb-[24px]">Instant Loading</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7]">
            Because Ledger is a Progressive Web App (PWA) that uses your browser's local storage, there is zero loading time. The moment you open the app, your data is already there. No waiting for a server to respond.
          </p>
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={anim} className="w-[48%] bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
          <h3 className="text-[32px] font-bold text-[#ffffff] mb-[24px]">Private AI Analysis</h3>
          <p className="text-[24px] text-[#d0d0d0] leading-[1.7]">
            When you ask the AI Coach a question, it quickly sends only the relevant context to the Groq API. We do not store your chat history anywhere, and Groq's high-speed inference means you get answers in milliseconds.
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
    { title: "Export to Excel", desc: "Allowing users to easily download their entire transaction history as a CSV file for their own records." },
    { title: "Push Notifications", desc: "Sending simple, local reminders to log daily expenses so users don't forget." },
    { title: "Multiple Accounts", desc: "Adding the ability to separate cash spending from bank or credit card spending in the app." }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Future Plans</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[60px]">What We Will Add Next</motion.h2>
      <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] flex gap-[24px]">
        {future.map((f, i) => (
          <motion.div variants={cardAnim} key={i} className="flex-1 bg-[#121212] border border-[#333333] p-[40px] rounded-[16px]">
            <h3 className="text-[28px] font-bold text-[#ffffff] mb-[16px]">{f.title}</h3>
            <p className="text-[22px] text-[#d0d0d0] leading-[1.7]">{f.desc}</p>
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
    { f: "Data Storage", y: "Company Cloud", m: "Company Cloud", l: "On Your Device" },
    { f: "App Loading Speed", y: "Slow", m: "Average", l: "Instant" },
    { f: "Offline Access", y: "Very Poor", m: "None", l: "100% Complete" },
    { f: "AI Assistant", y: "No", m: "No", l: "Yes (Groq)" },
    { f: "Pricing", y: "$84 / Year", m: "Shows Ads", l: "Completely Free" }
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <motion.h1 initial="hidden" animate="show" variants={anim} className="text-[96px] md:text-[120px] font-bold text-[#ffffff] mb-[20px]">Comparison</motion.h1>
      <motion.h2 initial="hidden" animate="show" variants={anim} className="text-[36px] md:text-[42px] font-bold text-[#ff3333] mb-[50px]">Ledger vs The Industry</motion.h2>
      
      <div className="w-full max-w-[1200px] text-left rounded-[16px] overflow-hidden bg-[#121212] border border-[#333333]">
        <motion.div initial="hidden" animate="show" variants={anim} className="grid grid-cols-4 bg-[#1a1a1a] border-b border-[#333333]">
          <div className="p-[20px] text-[24px] text-[#ffffff] font-bold">Feature</div>
          <div className="p-[20px] text-[24px] text-[#ffffff] font-bold">YNAB App</div>
          <div className="p-[20px] text-[24px] text-[#ffffff] font-bold">Mint App</div>
          <div className="p-[20px] text-[24px] text-[#ff3333] font-bold">Ledger App</div>
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="show">
          {rows.map((r, i) => (
            <motion.div variants={rowAnim} key={i} className="grid grid-cols-4 border-b border-[#333333]">
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
        <motion.p variants={anim} className="mb-6">Ledger successfully proves that powerful financial tools do not need to steal your data.</motion.p>
        <motion.p variants={anim} className="mb-6">By using modern web technologies like React and IndexedDB, we created an app that is faster, safer, and simpler than the biggest corporate competitors on the market.</motion.p>
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

print("V7 generation complete.")
