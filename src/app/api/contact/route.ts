import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 },
    );
  }

  try {
    const { error } = await sendContactEmail(result.data);

    if (error) {
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again later." },
      { status: 502 },
    );
  }
}
