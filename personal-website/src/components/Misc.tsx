import Image from "next/image";

interface MiscProps {
  image: string;
  description: string;
  quote: string;
}

export function Misc({ image, description, quote }: MiscProps) {
  return (
    <section className="w-full max-w-4xl mt-16 flex flex-col md:flex-row gap-8 items-center">
      <Image src={image} alt="Childhood" width={200} height={200} className="rounded-lg object-cover" />
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">MISC</h2>
        <p className="mb-2">{description}</p>
        <blockquote className="italic text-gray-400 mt-4 border-l-4 border-blue-500 pl-4">
          {quote}
        </blockquote>
      </div>
    </section>
  );
} 