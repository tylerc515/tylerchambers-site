import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/content/profile";
import { PageHeader } from "@/components/page-header";
import { SOCIAL_LINKS } from "@/content/social-links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tyler Chambers for consulting, employment opportunities, or general inquiries.",
};

export default function Contact() {
  return (
    <div className="container flex flex-col gap-section py-section">
      <PageHeader
        title="Get in Touch"
        subtitle="Questions, projects, or just to say hello"
      />

      <div className="grid gap-12 md:grid-cols-[320px_1fr]">
        <aside className="flex flex-col gap-8 rounded-2xl border border-border bg-surface p-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-accent">
              Email
            </span>
            <a
              href={`mailto:${profile.contactEmail}`}
              className="text-lg font-medium text-text transition-opacity hover:opacity-80"
            >
              {profile.contactEmail}
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-wide text-accent">
              Connect
            </span>
            <ul className="flex flex-wrap gap-5">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-accent motion-reduce:transition-none"
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-accent">
              Schedule a Call
            </span>
            <p className="text-sm text-muted">Coming soon</p>
          </div>
        </aside>

        <section>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
