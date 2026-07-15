import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  size: z.string().min(1),
  description: z.string().min(10),
  budget: z.string().min(1),
  referenceFileName: z.string().optional(),
});

function buildEmailBody(data: z.infer<typeof contactSchema>) {
  const lines = [
    `New custom rug request for ${SITE_NAME}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Desired size: ${data.size}`,
    `Budget: ${data.budget}`,
    "",
    "Project description:",
    data.description,
  ];

  if (data.referenceFileName) {
    lines.push("", `Reference file selected: ${data.referenceFileName}`);
  }

  return lines.join("\n");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error("Contact form: SMTP_USER or SMTP_PASS is not configured");
      return NextResponse.json(
        {
          error: "Order email is not configured yet. Please email us directly.",
          code: "UNCONFIGURED",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"${SITE_NAME}" <${smtpUser}>`,
      to: SITE_EMAIL,
      replyTo: data.email,
      subject: `New Rug Order — ${data.name}`,
      text: buildEmailBody(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    console.error("Contact form email failed:", error);
    return NextResponse.json(
      {
        error:
          "Could not send your request. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
