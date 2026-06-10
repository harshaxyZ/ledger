import React, { useState, useEffect, useCallback } from 'react';
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
