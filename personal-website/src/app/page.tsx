'use client';

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Publications } from "@/components/Publications";
import { Misc } from "@/components/Misc";
import { CalendlyChat } from "@/components/CalendlyChat";
import { MatrixRain } from "@/components/MatrixRain";
import { personalInfo } from "@/data/content";

export default function Home() {
  const [dimensions, setDimensions] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080
  });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="bg-[#000000] text-[#e5e7eb] font-sans">
      {/* Header and Personal Info Section - Full viewport height, Matrix rain only here */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Matrix Rain - only in this section */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <MatrixRain width={dimensions.width} height={dimensions.height} />
        </div>
        
        {/* Header and Personal Info Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <Header info={personalInfo} />
        </div>
      </section>

      {/* Publications and Misc Section - below viewport, requires scrolling */}
      <section className="relative z-10 bg-[#000000] pb-20">
        <div className="w-full max-w-4xl mx-auto px-4">
          <Publications publications={personalInfo.publications} />
          <Misc {...personalInfo.misc} />
          <CalendlyChat />
        </div>
      </section>
    </div>
  );
}
