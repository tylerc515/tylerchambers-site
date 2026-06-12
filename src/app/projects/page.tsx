import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Key projects including TRACE, an enterprise NDT data analysis platform, Neural Code Labs, and active client work.",
};

export default function Projects() {
  return (
    <div className="container flex flex-col gap-section py-section">
      <div>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="mt-2 max-w-xl text-muted">{profile.tagline}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profile.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
