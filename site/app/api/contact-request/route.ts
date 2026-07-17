import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isSpam } from "@/lib/honeypot";
import { sendLeadEmail } from "@/lib/mail";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValid(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    b.email.trim().length > 0 &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!isValid(body)) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  if (isSpam(body)) {
    return NextResponse.json({ ok: true });
  }

  console.log("[contact-request]", JSON.stringify(body));

  await sendLeadEmail("Нове повідомлення з форми контактів — Snake Hookah", {
    "Ім'я": body.name,
    Email: body.email,
    Повідомлення: body.message,
  });

  return NextResponse.json({ ok: true });
}
