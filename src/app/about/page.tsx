import type { Metadata } from "next";
import Image from "next/image";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Tyler Chambers - from trade work and factory floors to a Computer Information Systems degree, building TRACE, and founding Neural Code Labs.",
};

const PRINCIPLES = [
  {
    title: "Start with the real workflow",
    description:
      "I build from actual field scenarios, not abstract feature lists. The requirements come from how the work actually gets done.",
  },
  {
    title: "Support decisions, don't replace them",
    description:
      "Good software helps people make better calls. It doesn't pretend the math is perfect just because it produces a number.",
  },
  {
    title: "The output has to make sense",
    description:
      "If the client can't read the report or the end user can't follow the workflow, the backend doesn't matter.",
  },
];

export default function About() {
  return (
    <div className="container flex flex-col gap-section py-section">
      <section className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/tyler-chambers.png"
            alt={profile.name}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg text-muted">The story so far</p>
          </div>

          <p>
            I didn&rsquo;t start in software. My first jobs were hands-on,
            turning wrenches as a mechanic and running the floor as an
            operator. That work taught me how systems actually fail, and how
            the people running them think under pressure. It&rsquo;s a
            perspective that doesn&rsquo;t show up in a CS curriculum.
          </p>

          <p>
            At some point I decided I wanted more leverage, so I made a
            deliberate pivot. I went back to school for a Computer
            Information Systems degree at the University of Arkansas at
            Monticello, graduating in 2014.
          </p>

          <p>
            From there I joined BSI, where I grew from individual contributor
            into the person designing and overseeing the full development of{" "}
            <strong className="text-text">TRACE</strong>, an enterprise NDT
            data analysis platform now running in production across the pulp
            and paper industry. I also handle all of BSI&rsquo;s IT
            operations, because someone has to and I&rsquo;m good at it.
          </p>

          <p>
            Now I&rsquo;m building{" "}
            <strong className="text-text">Neural Code Labs</strong>, where
            that same combination, industrial floor experience and modern
            software, gets put to work for other businesses.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          How I Work
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl border border-border border-l-2 border-l-accent bg-surface p-6"
            >
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Neural Code Labs
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          Marketing, consulting, and software development for businesses that
          need both technical depth and commercial clarity.
        </p>
        <a
          href="https://www.neuralcodelabs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          Visit Neural Code Labs &rarr;
        </a>
      </section>
    </div>
  );
}
