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
