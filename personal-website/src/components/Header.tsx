'use client';

import Image from "next/image";
import { PersonalInfo } from "@/data/content";
import { AnimatedName } from "./AnimatedName";

interface HeaderProps {
  info: PersonalInfo;
}

function renderWithPeople(text: string, people: Record<string, { name: string; link?: string }>) {
  // Replace {Name} with a link if available, or plain text otherwise
  return text.split(/(\{[^}]+\})/g).map((part, i) => {
    const match = part.match(/^\{([^}]+)\}$/);
    if (match) {
      const person = people[match[1]];
      if (person && person.link) {
        return (
          <a
            key={i}
            href={person.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            {person.name}
          </a>
        );
      } else if (person) {
        return <span key={i}>{person.name}</span>;
      }
    }
    return <span key={i}>{part}</span>;
  });
}

export function Header({ info }: HeaderProps) {
  return (
    <header className="relative w-full max-w-4xl mx-auto flex flex-col items-center py-12 z-10 px-4">
        <div className="flex flex-col items-center w-full">
          <AnimatedName 
            name={info.name}
            className="text-6xl tracking-wide mb-8 text-center pacifico-regular"
          />
          <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
            {/* svg icon */}
            <a href={info.cvLink} className="text-blue-300 hover:text-blue-400 transition-colors flex items-center gap-2">
              <Image src="/cv.svg" alt="CV" width={24} height={24} className="w-6 h-6" />
              <span className="lobster-label text-lg hover:underline hover:scale-110 transition-transform">CV</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:yinghaotang@zju.edu.cn" className="text-blue-300 hover:text-blue-400 transition-colors flex items-center gap-2">
              <Image src="/email.svg" alt="Email" width={24} height={24} className="w-6 h-6" />
              <span className="lobster-label text-lg hover:underline hover:scale-110 transition-transform">Email</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a href={info.github} className="text-blue-300 hover:text-blue-400 transition-colors flex items-center gap-2">
              <Image src="/github.svg" alt="GitHub" width={24} height={24} className="w-6 h-6" />
              <span className="lobster-label text-lg hover:underline hover:scale-110 transition-transform">GitHub</span>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center mt-6">
            <Image
              src={info.profileImage}
              alt="Profile photo"
              width={180}
              height={180}
              className="rounded-full border-4 border-gray-700 object-cover"
            />
            <div className="flex flex-col gap-4 max-w">
              <div className="max-w-2xl">
                <p className="text-xl text-gray-300 mb-2 font-mono">{renderWithPeople(info.bio, info.people)}</p>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}