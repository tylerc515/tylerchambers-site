"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";

type SubmitState = "idle" | "success" | "error";

const inputClasses =
  "rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitState("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-text">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={inputClasses}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={inputClasses}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-text">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className={inputClasses}
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-sm text-red-400">{errors.subject.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-text">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          className={`${inputClasses} resize-none`}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {submitState === "success" && (
        <p className="text-sm text-emerald-400" role="status">
          Thanks — your message has been sent. I&rsquo;ll get back to you
          soon.
        </p>
      )}
      {submitState === "error" && (
        <p className="text-sm text-red-400" role="alert">
          Something went wrong sending your message. Please try again or
          email me directly.
        </p>
      )}
    </form>
  );
}
