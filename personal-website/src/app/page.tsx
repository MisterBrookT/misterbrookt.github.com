import { Header } from "@/components/Header";
import { Publications } from "@/components/Publications";
import { Misc } from "@/components/Misc";
import { personalInfo } from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#23262b] text-[#e5e7eb] font-sans flex flex-col items-center px-4 pb-20">
      <Header info={personalInfo} />
      <Publications publications={personalInfo.publications} />
      <Misc {...personalInfo.misc} />
    </div>
  );
}
