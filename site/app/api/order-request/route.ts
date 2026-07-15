import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface CartPayload {
  type: "cart";
  name: string;
  phone: string;
  email?: string;
  comment?: string;
  items: { sku: string; name: string; qty: number; priceUah: number }[];
}

interface WholesalePayload {
  type: "wholesale";
  product: string;
  name: string;
  phone: string;
  company?: string;
  comment?: string;
}

type OrderPayload = CartPayload | WholesalePayload;

function isValid(body: unknown): body is OrderPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  if (b.type === "cart") {
    return typeof b.name === "string" && b.name.trim().length > 0 && typeof b.phone === "string" && b.phone.trim().length > 0 && Array.isArray(b.items);
  }
  if (b.type === "wholesale") {
    return typeof b.name === "string" && b.name.trim().length > 0 && typeof b.phone === "string" && b.phone.trim().length > 0 && typeof b.product === "string";
  }
  return false;
}

// No payment provider or CRM is wired up yet — this just validates and logs
// the request server-side so nothing is lost. Swap the console.log for a
// real notification (email/Telegram bot/CRM webhook) once one is chosen.
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

  console.log("[order-request]", JSON.stringify(body));

  return NextResponse.json({ ok: true });
}
