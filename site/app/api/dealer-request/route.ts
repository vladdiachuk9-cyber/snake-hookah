import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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

// Same story as /api/order-request: no CRM wired up yet, just logs so the
// lead isn't lost. Swap for a real notification once one is chosen.
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

  console.log("[dealer-request]", JSON.stringify(body));

  return NextResponse.json({ ok: true });
}
