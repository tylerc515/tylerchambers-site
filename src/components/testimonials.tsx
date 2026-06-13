import { profile } from "@/content/profile";

export function Testimonials() {
  return (
    <section className="container flex flex-col gap-12 border-t border-border py-section">
      <h2 className="font-display text-2xl font-semibold tracking-tight">
        What People Say
      </h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {profile.testimonials.map((testimonial) => (
          <div
            key={`${testimonial.name}-${testimonial.company}`}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <span className="font-display text-5xl text-accent" aria-hidden="true">
              &ldquo;
            </span>
            <p className="mt-2 text-lg italic text-text">
              {testimonial.quote}
            </p>
            <p className="mt-4 text-sm text-muted">
              <span className="font-medium text-text">{testimonial.name}</span>
              , {testimonial.title} at {testimonial.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
