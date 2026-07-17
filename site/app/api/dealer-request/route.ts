import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isSpam } from "@/lib/honeypot";
import { sendLeadEmail } from "@/lib/mail";

interface DealerPayload {
  name: string;
  phone: string;
  company?: string;
  volume?: string;
  comment?: string;
}

function isValid(body: unknown): body is DealerPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return typeof b.name === "string" && b.name.trim().length > 0 && typeof b.phone === "string" && b.phone.trim().length > 0;
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

  console.log("[dealer-request]", JSON.stringify(body));

  await sendLeadEmail("Заявка дилера — Snake Hookah", {
    "Ім'я": body.name,
    Телефон: body.phone,
    Компанія: body.company,
    Обсяг: body.volume,
    Коментар: body.comment,
  });

  return NextResponse.json({ ok: true });
}
