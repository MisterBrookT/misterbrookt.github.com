import Image from "next/image";
import { Publication } from "@/data/content";

interface PublicationsProps {
  publications: Publication[];
}

export function Publications({ publications }: PublicationsProps) {
  return (
    <section className="w-full max-w-4xl mt-12 max-w">
      <h2 className="text-2xl font-bold mb-6">PUBLICATIONS</h2>
      <div className="flex flex-col gap-10">
        {publications.map((pub, index) => (
          <div key={index} className="flex flex-row gap-6 items-start">
            {pub.image && (
              <div className="flex-shrink-0 w-[160px] h-[90px] flex items-center justify-center bg-[#23262b] border border-gray-700 rounded-lg overflow-hidden">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  width={160}
                  height={90}
                  className="object-fill w-full h-full"
                />
              </div>
            )}
            <div className="flex-1 text-justify">
              <h3 className="font-bold text-base mb-1">{pub.title}</h3>
              <div className="text-sm mb-1 text-gray-200">
                {pub.author.split(/\s+and\s+/).map((a, i) => (
                  <span key={i}>
                    {i > 0 && ', '}
                    {a.trim() === "Yinghao Tang" ? <b>{a.trim()}</b> : a.trim()}
                  </span>
                ))}
              </div>
              <div className="italic text-gray-400 mb-1">
                {pub.journal} {pub.year}
                {pub.paper_link && (
                  <a
                    href={pub.paper_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-400 underline hover:text-blue-300"
                  >
                    Paper
                  </a>
                )}
              </div>
              <div className="text-sm text-gray-300">
                {pub.abstract}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 