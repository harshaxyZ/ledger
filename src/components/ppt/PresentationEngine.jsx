import React, { useState, useEffect, useCallback } from 'react';
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
