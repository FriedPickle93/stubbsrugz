import { NextResponse } from "next/server";
import { Resend } from "resend";
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

function buildEmailHtml(data: z.infer<typeof contactSchema>) {
  const referenceLine = data.referenceFileName
    ? `<p><strong>Reference file:</strong> ${data.referenceFileName}</p>`
    : "";

  return `
    <h2>New custom rug order</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Desired size:</strong> ${data.size}</p>
    <p><strong>Budget:</strong> ${data.budget}</p>
    <p><strong>Project description:</strong></p>
    <p>${data.description.replace(/\n/g, "<br>")}</p>
    ${referenceLine}
  `;
}

export async function POST(request: Request) {
  const contactEmail = process.env.CONTACT_EMAIL ?? SITE_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      {
        error: "Order email is not configured yet. Please email us directly.",
        code: "UNCONFIGURED",
      },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: `${SITE_NAME} <onboarding@resend.dev>`,
      to: contactEmail,
      replyTo: data.email,
      subject: `New Rug Order — ${data.name}`,
      text: buildEmailBody(data),
      html: buildEmailHtml(data),
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
