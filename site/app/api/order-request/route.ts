import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isSpam } from "@/lib/honeypot";
import { sendLeadEmail } from "@/lib/mail";

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

// No payment provider or CRM is wired up yet — an email is sent to the
// business inbox on every valid submission (see lib/mail.ts).
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

  console.log("[order-request]", JSON.stringify(body));

  if (body.type === "cart") {
    const itemsSummary = body.items.map((i) => `${i.qty} × ${i.name} (${i.priceUah} ₴)`).join("; ");
    await sendLeadEmail("Нове замовлення — Snake Hookah", {
      "Ім'я": body.name,
      Телефон: body.phone,
      Email: body.email,
      Товари: itemsSummary,
      Коментар: body.comment,
    });
  } else {
    await sendLeadEmail("Заявка на оптову ціну — Snake Hookah", {
      "Ім'я": body.name,
      Телефон: body.phone,
      Товар: body.product,
      Компанія: body.company,
      Коментар: body.comment,
    });
  }

  return NextResponse.json({ ok: true });
}
