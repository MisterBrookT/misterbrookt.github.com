import Image from "next/image";

interface MiscProps {
  image: string;
  description: string;
  quote: string;
}

export function Misc({ image, description, quote }: MiscProps) {
  return (
    <section className="w-full max-w-4xl mt-12 max-w-[800px]">
      <h2 className="text-2xl font-bold mb-6">MISC</h2>
      <div className="flex flex-row gap-6 items-start">
        <div className="flex-shrink-0 w-[160px] h-[90px] flex items-center justify-center bg-[#23262b] border border-gray-700 rounded-lg overflow-hidden">
          <Image src={image} alt="Childhood" width={160} height={90} className="object-fill w-full h-full" />
        </div>
        <div className="flex-1 text-justify">
          <p className="mb-2 text-sm">{description}</p>
          <blockquote className="italic text-gray-400 mt-4 border-l-4 border-blue-500 pl-4">
            {quote}
          </blockquote>
        </div>
      </div>
    </section>
  );
} 