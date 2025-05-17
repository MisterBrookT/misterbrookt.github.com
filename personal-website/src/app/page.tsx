import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#23262b] text-[#e5e7eb] font-sans flex flex-col items-center px-4 pb-20">
      {/* Header */}
      <header className="w-full max-w-4xl flex flex-col items-center py-12">
        <h1 className="text-5xl font-extrabold tracking-wide mb-2 text-center">YOUR NAME</h1>
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
          <a href="#" className="text-blue-300 hover:underline text-lg">Curriculum Vitae</a>
          <span className="hidden sm:inline">|</span>
          <a href="mailto:your@email.com" className="text-blue-300 hover:underline text-lg">your@email.com</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="text-blue-300 hover:underline text-lg">Blog</a>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 items-center mt-6">
          <Image
            src="/profile-placeholder.png"
            alt="Profile photo"
            width={180}
            height={180}
            className="rounded-full border-4 border-gray-700 object-cover"
          />
          <div className="max-w-xl text-lg bg-[#23262b] border border-blue-500 rounded p-4">
            <p className="mb-2">
              I am a Computer Science Ph.D. student at Stanford University, and my studies will be partially supported by the Fulbright Fellowship.
            </p>
            <p>
              Please feel free to <a href="#" className="text-blue-400 underline">connect with me here</a> if you&apos;d like to chat.
            </p>
          </div>
        </div>
        <div className="max-w-2xl mt-6 text-center sm:text-left text-base text-gray-300">
          <p>I studied physics (BS, dropout), math (BS), industrial engineering (BS, minor), and computer science (MS).</p>
          <p className="mt-2">Now I am studying neuroscience because I want to know how brain works.</p>
          <p className="mt-2">Previously, I served in the ROK Army (21 months) and worked at broadcasting company (7 months), nonprofit organization (6 months), consulting firm (3 months), manufacturing company (2 months), big tech (15 months), and IT startup (5 months).</p>
          <p className="mt-2">I live by my <a href="#" className="text-blue-400 underline">creed</a>.</p>
        </div>
      </header>

      {/* Publications */}
      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-3xl font-bold mb-6">PUBLICATIONS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <Image src="/pub1-placeholder.png" alt="Publication 1" width={120} height={120} className="rounded-lg object-cover" />
            <div>
              <h3 className="font-semibold text-lg">Paper Title 1</h3>
              <p className="text-gray-400 text-sm mb-1">Author 1, Author 2, <span className="font-bold">YOUR NAME</span></p>
              <a href="#" className="text-blue-400 underline text-sm">paper</a>
              <p className="mt-1 text-sm">Short description of the publication goes here. Highlight the main contribution and context.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image src="/pub2-placeholder.png" alt="Publication 2" width={120} height={120} className="rounded-lg object-cover" />
            <div>
              <h3 className="font-semibold text-lg">Paper Title 2</h3>
              <p className="text-gray-400 text-sm mb-1">Author 1, Author 2, <span className="font-bold">YOUR NAME</span></p>
              <a href="#" className="text-blue-400 underline text-sm">paper</a>
              <p className="mt-1 text-sm">Short description of the publication goes here. Highlight the main contribution and context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="w-full max-w-4xl mt-16">
        <h2 className="text-3xl font-bold mb-6">PROJECTS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <Image src="/proj1-placeholder.png" alt="Project 1" width={120} height={120} className="rounded-lg object-cover" />
            <div>
              <h3 className="font-semibold text-lg">Project Title 1</h3>
              <a href="#" className="text-blue-400 underline text-sm">code</a>
              <p className="mt-1 text-sm">Short description of the project goes here. What did you build? What was the impact?</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image src="/proj2-placeholder.png" alt="Project 2" width={120} height={120} className="rounded-lg object-cover" />
            <div>
              <h3 className="font-semibold text-lg">Project Title 2</h3>
              <a href="#" className="text-blue-400 underline text-sm">code</a>
              <p className="mt-1 text-sm">Short description of the project goes here. What did you build? What was the impact?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Misc */}
      <section className="w-full max-w-4xl mt-16 flex flex-col md:flex-row gap-8 items-center">
        <Image src="/childhood-placeholder.png" alt="Childhood" width={200} height={200} className="rounded-lg object-cover" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">MISC</h2>
          <p className="mb-2">I love playing piano. Also, I like swimming a lot, so I go swimming almost everyday. I am a big fan of Tottenham Hotspur since 2009. I own more than 400 comic books and like reading Murakami Haruki&apos;s short novels. I love this quote the most:</p>
          <blockquote className="italic text-gray-400 mt-4 border-l-4 border-blue-500 pl-4">
            Dance like nobody&apos;s watching; Love like you&apos;ve never been hurt; Work like you don&apos;t need money; Live like it&apos;s heaven on earth.
          </blockquote>
        </div>
      </section>
    </div>
  );
}
