import { Resend } from "resend";
import { profile } from "@/content/profile";
import type { ContactFormValues } from "./contact-schema";

const CONTACT_EMAIL_FROM = "Tyler Chambers Site <contact@tylerchambers.com>";

export async function sendContactEmail(data: ContactFormValues) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  return resend.emails.send({
    from: CONTACT_EMAIL_FROM,
    to: profile.contactEmail,
    replyTo: data.email,
    subject: `[Contact Form] ${data.subject}`,
    text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
  });
}
