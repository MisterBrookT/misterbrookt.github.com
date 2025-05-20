import Image from "next/image";
import { Publication } from "@/data/content";

interface PublicationsProps {
  publications: Publication[];
}

// Helper for author links (reuse logic from before)
const getAuthorLink = (author: string) => {
  switch (author) {
    case "Wei Chen":
      return "http://www.cad.zju.edu.cn/home/chenwei/";
    case "Mingjie Tang":
      return "https://scholar.google.com/citations?user=8nQkQJwAAAAJ";
    default:
      return null;
  }
};

export function Publications({ publications }: PublicationsProps) {
  return (
    <section className="w-full max-w-4xl mt-12">
      <h2 className="text-3xl font-bold mb-6">PUBLICATIONS</h2>
      <div className="flex flex-col gap-10">
        {publications.map((pub, index) => (
          <div key={index} className="flex flex-row gap-6 items-start">
            {pub.image && (
              <Image
                src={pub.image}
                alt={pub.title}
                width={140}
                height={140}
                className="rounded-lg object-cover flex-shrink-0 border border-gray-700"
              />
            )}
            <div className="flex-1">
              <h3 className="font-bold text-2xl mb-1">{pub.title}</h3>
              <div className="text-base mb-1 text-gray-200">
                {pub.authors.map((author, i) => {
                  const link = getAuthorLink(author);
                  return (
                    <span key={i}>
                      {i > 0 && ", "}
                      {link ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${author === "Yinghao Tang" ? "font-bold" : ""} underline hover:text-blue-400`}
                        >
                          {author}
                        </a>
                      ) : (
                        <span className={author === "Yinghao Tang" ? "font-bold" : ""}>{author}</span>
                      )}
                    </span>
                  );
                })}
              </div>
              <div className="italic text-gray-400 mb-1">
                {pub.venue} {pub.year}
              </div>
              {pub.link && (
                <div className="mb-1">
                  <a
                    href={pub.link}
                    className="text-blue-400 underline text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    paper
                  </a>
                </div>
              )}
              <div className="text-base text-gray-300">
                {pub.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 