import { profile } from "@/content/profile";

export function WhatIDo() {
  return (
    <section className="container grid gap-12 border-t border-border py-section sm:grid-cols-3">
      {profile.focusAreas.map((area) => (
        <div key={area.title} className="flex flex-col gap-3">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            {area.title}
          </h2>
          <p className="text-sm text-muted">{area.description}</p>
          {area.href && (
            <a
              href={area.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              {area.linkLabel} &rarr;
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
