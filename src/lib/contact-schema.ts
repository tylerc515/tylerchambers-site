import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Enter your name").max(100, "Name is too long"),
  email: z.email("Enter a valid email address"),
  subject: z
    .string()
    .min(2, "Enter a subject")
    .max(150, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters")
    .max(5000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
