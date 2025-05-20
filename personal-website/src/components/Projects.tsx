import Image from "next/image";
import { Project } from "@/data/content";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="w-full max-w-4xl mt-16">
      <h2 className="text-3xl font-bold mb-6">PROJECTS</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flex gap-4">
            <Image src={project.image} alt={project.title} width={120} height={120} className="rounded-lg object-cover" />
            <div>
              <h3 className="font-semibold text-lg">{project.title}</h3>
              {project.link && (
                <a href={project.link} className="text-blue-400 underline text-sm">code</a>
              )}
              <p className="mt-1 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 