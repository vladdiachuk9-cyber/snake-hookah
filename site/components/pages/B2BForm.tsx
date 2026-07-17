"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { Honeypot } from "@/components/ui/Honeypot";
import { HONEYPOT_FIELD } from "@/lib/honeypot";

export function B2BForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/dealer-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          phone: form.get("phone"),
          company: form.get("company"),
          volume: form.get("volume"),
          comment: form.get("comment"),
          [HONEYPOT_FIELD]: form.get(HONEYPOT_FIELD),
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return <p style={{ color: "var(--ok)" }}>{dict.order.success}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: "var(--s-4)" }}>
      <Honeypot />
      <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)" }}>{dict.b2b.formIntro}</p>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--s-4)" }}>
        <Field name="name" label={dict.order.name} required />
        <Field name="phone" label={dict.order.phone} required type="tel" />
        <Field name="company" label={dict.order.company} />
        <Field name="volume" label={dict.b2b.volume} />
      </div>
      <TextArea name="comment" label={dict.order.comment} />
      {status === "error" && <p style={{ color: "var(--err)", fontSize: "var(--t-xs)" }}>{dict.order.error}</p>}
      <button type="submit" className="btn btn-primary" disabled={status === "submitting"} style={{ width: "fit-content" }}>
        {status === "submitting" ? dict.order.submitting : dict.b2b.submit}
      </button>
    </form>
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
        style={{ background: "var(--ink)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", padding: "12px 14px", color: "var(--text)", fontSize: "var(--t-sm)" }}
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
        rows={3}
        style={{ background: "var(--ink)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", padding: "12px 14px", color: "var(--text)", fontSize: "var(--t-sm)", resize: "vertical" }}
      />
    </label>
  );
}
