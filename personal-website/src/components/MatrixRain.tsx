'use client';

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  width: number;
  height: number;
}

export function MatrixRain({ width, height }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    // English characters only: 0-9, A-Z, and some symbols
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ+-*/=<>[]{}';
    const charArray = chars.split('');

    // Column configuration
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let animationFrameId: number;

    function draw() {
      if (!ctx) return;

      // Semi-transparent black background for fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      // Draw characters
      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const trailLength = 1; // Number of characters in each trail
        const x = i * fontSize;
        
        // Draw multiple characters in a trail (top to bottom, so trail appears behind)
        for (let j = 0; j < trailLength; j++) {
          // Position of this character in the trail
          const trailPosition = drops[i] - j; // j=0 is the head, j increases goes up
          const y = trailPosition * fontSize;
          
          // Only draw if within visible bounds
          if (y > -fontSize && y < height + fontSize) {
            // Random character for this position in trail
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            
            // Calculate opacity based on:
            // 1. Position in trail (head is brightest)
            // 2. Screen position (top is brighter)
            const trailOpacity = 1 - (j / trailLength); // Decreases as j increases (going up the trail)
            const screenPosition = y / height; // 0 at top, 1 at bottom
            const combinedOpacity = trailOpacity * (1 - screenPosition * 0.3); // Screen fade effect
            
            // Set color based on combined opacity
            if (combinedOpacity > 0.7) {
              ctx.fillStyle = '#00ff00'; // Bright green
            } else if (combinedOpacity > 0.3) {
              ctx.fillStyle = '#00cc00'; // Medium green
            } else {
              const alpha = Math.max(0, combinedOpacity * 0.5);
              ctx.fillStyle = `rgba(0, 204, 0, ${alpha})`; // Faded green with alpha
            }
            
            ctx.fillText(text, x, y);
          }
        }

        // Reset drop to top when it reaches bottom or randomly
        if (drops[i] * fontSize > height || Math.random() > 0.985) {
          drops[i] = 0;
        }

        // Move drop down (speed varies per column) - slower animation
        drops[i] += 0.05 + Math.random() * 0.3;
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

