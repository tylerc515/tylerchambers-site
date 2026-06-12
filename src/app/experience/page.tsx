import { profile } from "@/content/profile";
import { TimelineCard } from "@/components/timeline-card";

export default function Experience() {
  return (
    <div className="container flex flex-col gap-section py-section">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Experience
          </h1>
          <p className="mt-2 max-w-xl text-muted">{profile.tagline}</p>
        </div>
        <a
          href={profile.resumeUrl}
          download
          className="inline-flex items-center justify-center self-start rounded-md border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
        >
          Download Resume
        </a>
      </div>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Work Experience
        </h2>
        <div className="relative mt-8 flex flex-col gap-12 border-l border-border pl-10">
          {profile.workExperience.map((entry) => (
            <TimelineCard key={entry.company} entry={entry} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Education
        </h2>
        <div className="mt-6 flex max-w-2xl flex-col gap-4">
          {profile.education.map((entry) => (
            <div
              key={entry.institution}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <p className="font-medium text-text">{entry.institution}</p>
                <p className="text-sm text-muted">{entry.degree}</p>
                {entry.note && (
                  <p className="mt-1 text-sm text-muted">{entry.note}</p>
                )}
              </div>
              <p className="font-mono text-sm text-muted">{entry.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
