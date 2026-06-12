import type { Metadata } from "next";
import { profile, skillCategories } from "@/content/profile";
import { SkillSection } from "@/components/skill-section";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical and operational skills spanning NDT quality assurance, data analysis, Python, JavaScript, AI tooling, digital marketing, and more.",
};

export default function Skills() {
  return (
    <div className="container flex flex-col gap-section py-section">
      <div>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Skills
        </h1>
        <p className="mt-2 max-w-xl text-muted">{profile.tagline}</p>
      </div>

      {skillCategories.map((category) => (
        <SkillSection
          key={category}
          title={category}
          skills={profile.skills.filter((skill) => skill.category === category)}
        />
      ))}
    </div>
  );
}
