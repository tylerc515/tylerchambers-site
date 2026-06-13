import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { ProjectCard } from "@/components/project-card";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Key projects including TRACE, an enterprise NDT data analysis platform, Neural Code Labs, and active client work.",
};

export default function Projects() {
  const [featuredProject, ...otherProjects] = profile.projects;

  return (
    <div className="container flex flex-col gap-section py-section">
      <PageHeader
        title="Projects"
        subtitle="What I've built and who I'm building for"
      />

      <div className="flex flex-col gap-6">
        <ProjectCard project={featuredProject} featured />
        <div className="grid gap-6 sm:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
