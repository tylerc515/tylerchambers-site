import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tyler Chambers for consulting, employment opportunities, or general inquiries.",
};

export default function Contact() {
  return (
    <div className="container flex flex-col gap-section py-section">
      <section className="flex flex-col gap-3">
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="max-w-2xl text-muted">
          Have a project, an idea, or a question about TRACE or Neural Code
          Labs? Send a message below, or reach me directly at{" "}
          <a
            href={`mailto:${profile.contactEmail}`}
            className="text-accent transition-opacity hover:opacity-80"
          >
            {profile.contactEmail}
          </a>
          .
        </p>
      </section>

      <section className="max-w-2xl">
        <ContactForm />
      </section>
    </div>
  );
}
