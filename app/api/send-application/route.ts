import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = "ahmjal@yahoo.com";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type } = body;

    if (type !== "student" && type !== "collaborator") {
      return NextResponse.json({ error: "Invalid application type" }, { status: 400 });
    }

    if (type === "student") {
      const { name, email, phone, program, university, researchInterest, experience, statement } = body;

      if (!name || !email || !program || !researchInterest) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }

      const html = `
        <h2>New MS/PhD Student Application</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;">
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f5f5f5;">Name</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f5f5f5;">Email</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f5f5f5;">Phone</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(phone || "N/A")}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f5f5f5;">Program</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(program)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f5f5f5;">University</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(university || "N/A")}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f5f5f5;">Research Interest</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(researchInterest)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f5f5f5;">Experience</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(experience || "N/A")}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f5f5f5;">Statement</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(statement || "N/A")}</td></tr>
        </table>
      `;

      await resend.emails.send({
        from: "IMC Applications <onboarding@resend.dev>",
        to: RECIPIENT,
        subject: `New MS/PhD Application - ${name}`,
        html,
        replyTo: email,
      });

      return NextResponse.json({ success: true });
    }

    if (type === "collaborator") {
      const { name, email, organization, researchArea, message } = body;

      if (!name || !email || !researchArea) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }

      const html = `
        <h2>New Collaborator Application</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;">
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f5f5f5;">Name</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f5f5f5;">Email</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f5f5f5;">Organization</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(organization || "N/A")}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f5f5f5;">Research Area</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(researchArea)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f5f5f5;">Message</td><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(message || "N/A")}</td></tr>
        </table>
      `;

      await resend.emails.send({
        from: "IMC Applications <onboarding@resend.dev>",
        to: RECIPIENT,
        subject: `New Collaborator Application - ${name}`,
        html,
        replyTo: email,
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  } catch (error) {
    console.error("Send application error:", error);
    return NextResponse.json({ error: "Failed to send application" }, { status: 500 });
  }
}
