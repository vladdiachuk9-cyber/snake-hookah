import "server-only";
import { Resend } from "resend";

const LEADS_EMAIL = "snakehookah.business@gmail.com";

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function sendLeadEmail(subject: string, fields: Record<string, string | number | undefined>): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[mail] RESEND_API_KEY not set — skipping email, lead logged to console only.");
    return;
  }

  const rows = Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([key, value]) => `<tr><td style="padding:4px 12px 4px 0;color:#6f6d6a;vertical-align:top">${escapeHtml(key)}</td><td style="padding:4px 0">${escapeHtml(String(value))}</td></tr>`)
    .join("");

  const resend = new Resend(apiKey);
  try {
    await resend.emails.send({
      from: "Snake Hookah <orders@snakehookah.com>",
      to: LEADS_EMAIL,
      subject,
      html: `<table style="font-family:sans-serif;font-size:14px;color:#111">${rows}</table>`,
    });
  } catch (err) {
    console.error("[mail] failed to send lead email", err);
  }
}
