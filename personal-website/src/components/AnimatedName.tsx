'use client';

import { useEffect, useState } from 'react';

interface AnimatedNameProps {
  name: string;
  className?: string;
}

export function AnimatedName({ name, className = '' }: AnimatedNameProps) {
  const [displayedChars, setDisplayedChars] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to start the animation
  const startAnimation = () => {
    setDisplayedChars('');
    setCurrentIndex(-1);
    setIsAnimating(true);
    
    // Start animation after initial delay
    const startTimer = setTimeout(() => {
      setCurrentIndex(0);
    }, 500);

    return () => clearTimeout(startTimer);
  };

  useEffect(() => {
    // Start initial animation
    const cleanup = startAnimation();
    return cleanup;
  }, [name]);

  useEffect(() => {
    if (currentIndex === -1) return;

    // If we've completed the name, wait then restart
    if (currentIndex >= name.length) {
      const pauseTimer = setTimeout(() => {
        // Clear the displayed text
        setDisplayedChars('');
        // Reset to start animation again
        setCurrentIndex(-1);
        setIsAnimating(true);
        // Start animation after brief pause
        setTimeout(() => {
          setCurrentIndex(0);
        }, 0);
      }, 2000); // Display full name for 2 seconds before clearing
      
      return () => clearTimeout(pauseTimer);
    }

    // Continue animating characters
    if (currentIndex < name.length && isAnimating) {
      // Variable delay for stroke-by-stroke effect
      const currentChar = name[currentIndex];
      let delay = 120;
      
      if (currentChar === ' ') {
        delay = 50; // Spaces appear quickly
      } else if (currentIndex === 0) {
        delay = 400; // First character takes longer
      } else {
        // Randomize delay for natural writing feel
        delay = 100 + Math.random() * 80;
      }

      const timer = setTimeout(() => {
        setDisplayedChars(name.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, name, isAnimating]);

  return (
    <h1 className={`${className} relative`}>
      <span className="text-[#00ff00] drop-shadow-[0_0_15px_rgba(0,255,0,1)] filter">
        {displayedChars}
      </span>
      {currentIndex >= 0 && currentIndex <= name.length && (
        <span 
          className="inline-block w-[2px] h-[1em] bg-[#00ff00] ml-0.5"
          style={{ 
            boxShadow: '0 0 10px #00ff00',
            animation: 'cursor-blink 0.8s infinite'
          }}
        ></span>
      )}
    </h1>
  );
}

