'use client';

import Image from "next/image";
import { PersonalInfo } from "@/data/content";

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
    <header className="w-full max-w-4xl flex flex-col items-center py-12">
      {/* <h1 className="text-5xl font-extrabold tracking-wide mb-5 text-center pacifico-regular"> */}
      <h1 className="text-5xl tracking-wide mb-5 text-center pacifico-regular">
        {info.name}
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
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
          <div className="text-lg bg-[#23262b] border border-blue-500 rounded p-4">
            <p className="mb-2">{renderWithPeople(info.bio, info.people)}</p>
          </div>
          <div className="max-w-2xl text-base text-gray-300 text-justify">
            {info.background.map((text, index) => (
              <p key={index} className={index > 0 ? "mt-2" : ""}>
                {renderWithPeople(text, info.people)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
} 