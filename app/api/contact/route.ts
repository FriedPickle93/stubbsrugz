import { Resend } from "resend";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  rugType?: string;
  budget?: string;
  message?: string;
};

export async function POST(request: Request) {
  const contactEmail = process.env.CONTACT_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!contactEmail || !resendApiKey) {
    return NextResponse.json(
      {
        error: "Contact form is not configured yet.",
        code: "UNCONFIGURED",
      },
      { status: 503 }
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const rugType = body.rugType?.trim() || "Not specified";
  const budget = body.budget?.trim() || "Not specified";
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: "Stubbs' Rugs <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `New rug inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Rug type: ${rugType}`,
        `Budget: ${budget}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
