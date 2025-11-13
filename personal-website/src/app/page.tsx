'use client';

import { Header } from "@/components/Header";
import { Publications } from "@/components/Publications";
import { Misc } from "@/components/Misc";
import { CalendlyChat } from "@/components/CalendlyChat";
import { VisitTracker } from "@/components/VisitTracker";
import { personalInfo } from "@/data/content";

export default function Home() {
  return (
    <div className="bg-[#000000] text-[#e5e7eb] font-sans">
      {/* Header and Personal Info Section - Full viewport height */}
      <section className="relative h-screen w-full overflow-hidden">
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
          <VisitTracker />
          <CalendlyChat />
        </div>
      </section>
    </div>
  );
}
