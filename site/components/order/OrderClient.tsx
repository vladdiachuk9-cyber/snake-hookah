"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { useCartStore, cartTotals } from "@/lib/cart-store";
import { useHydratedCartItems } from "@/lib/use-cart-items";
import { formatUah } from "@/lib/format";
import { Honeypot } from "@/components/ui/Honeypot";
import { HONEYPOT_FIELD } from "@/lib/honeypot";

export function OrderClient({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items = useHydratedCartItems();
  const clear = useCartStore((s) => s.clear);
  const totals = cartTotals(items);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/order-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "cart",
          name: form.get("name"),
          phone: form.get("phone"),
          email: form.get("email"),
          comment: form.get("comment"),
          items: items.map((i) => ({ sku: i.sku, name: i.name, qty: i.qty, priceUah: i.priceUah })),
          [HONEYPOT_FIELD]: form.get(HONEYPOT_FIELD),
        }),
      });
      if (res.ok) {
        setStatus("done");
        clear();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="wrap-narrow" style={{ paddingBlock: "var(--s-9)", textAlign: "center" }}>
        <h1 style={{ fontSize: "var(--t-h1)" }}>{dict.order.title}</h1>
        <p style={{ color: "var(--ok)", marginTop: "var(--s-4)" }}>{dict.order.success}</p>
        <Link href={`/${locale}`} className="btn btn-secondary" style={{ marginTop: "var(--s-6)" }}>
          {dict.nav.home}
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="wrap-narrow" style={{ paddingBlock: "var(--s-9)", textAlign: "center" }}>
        <h1 style={{ fontSize: "var(--t-h1)" }}>{dict.order.title}</h1>
        <p style={{ color: "var(--text-mute)", marginTop: "var(--s-4)" }}>{dict.cart.empty}</p>
        <Link href={`/${locale}/catalog`} className="btn btn-secondary" style={{ marginTop: "var(--s-6)" }}>
          {dict.cart.emptyCta}
        </Link>
      </div>
    );
  }

  return (
    <div className="wrap" style={{ paddingBlock: "var(--s-9)" }}>
      <h1 style={{ fontSize: "var(--t-h1)", marginBottom: "var(--s-3)" }}>{dict.order.title}</h1>
      <p style={{ color: "var(--text-body)", maxWidth: 560, marginBottom: "var(--s-7)" }}>{dict.order.intro}</p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr]" style={{ gap: "var(--s-8)" }}>
        <div>
          <ul className="flex flex-col" style={{ gap: "var(--s-4)" }}>
            {items.map((item) => (
              <li key={item.sku} className="flex items-center" style={{ gap: "var(--s-4)" }}>
                <div className="gallery shrink-0" style={{ padding: 6, width: 64, height: 64 }}>
                  <Image src={item.image} alt={item.name} width={64} height={64} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                </div>
                <div className="flex-1">
                  <p style={{ fontSize: "var(--t-sm)", color: "var(--text)" }}>{item.name}</p>
                  <p style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)" }}>{item.qty} × {formatUah(item.priceUah)}</p>
                </div>
                <span style={{ fontFamily: "var(--font-num)", color: "var(--gold)", fontSize: "var(--t-sm)" }}>
                  {formatUah(item.priceUah * item.qty)}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between" style={{ marginTop: "var(--s-5)", paddingTop: "var(--s-4)", borderTop: "1px solid var(--line)" }}>
            <span style={{ color: "var(--text-body)" }}>{dict.cart.subtotal}</span>
            <span className="price" style={{ fontSize: 22 }}>{formatUah(totals.uah)}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: "var(--s-4)" }}>
          <Honeypot />
          <Field name="name" label={dict.order.name} required />
          <Field name="phone" label={dict.order.phone} required type="tel" />
          <Field name="email" label={dict.order.email} type="email" />
          <TextArea name="comment" label={dict.order.comment} />
          {status === "error" && <p style={{ color: "var(--err)", fontSize: "var(--t-xs)" }}>{dict.order.error}</p>}
          <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
            {status === "submitting" ? dict.order.submitting : dict.order.submit}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ name, label, required, type = "text" }: { name: string; label: string; required?: boolean; type?: string }) {
  return (
    <label className="flex flex-col" style={{ gap: 6, fontSize: "var(--t-xs)", color: "var(--text-mute)" }}>
      {label}{required && " *"}
      <input
        name={name}
        type={type}
        required={required}
        style={{ background: "var(--ink-2)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", padding: "12px 14px", color: "var(--text)", fontSize: "var(--t-sm)" }}
      />
    </label>
  );
}

function TextArea({ name, label }: { name: string; label: string }) {
  return (
    <label className="flex flex-col" style={{ gap: 6, fontSize: "var(--t-xs)", color: "var(--text-mute)" }}>
      {label}
      <textarea
        name={name}
        rows={4}
        style={{ background: "var(--ink-2)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", padding: "12px 14px", color: "var(--text)", fontSize: "var(--t-sm)", resize: "vertical" }}
      />
    </label>
  );
}
