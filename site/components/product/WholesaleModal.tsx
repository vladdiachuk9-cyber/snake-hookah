"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Dictionary } from "@/lib/dictionaries/ua";

export function WholesaleModal({
  productName,
  dict,
  onClose,
}: {
  productName: string;
  dict: Dictionary;
  onClose: () => void;
}) {
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
          type: "wholesale",
          product: productName,
          name: form.get("name"),
          phone: form.get("phone"),
          company: form.get("company"),
          comment: form.get("comment"),
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.65)", padding: "var(--s-5)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{ background: "var(--ink-2)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)", padding: "var(--s-6)", width: "min(440px, 100%)" }}
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex items-start justify-between" style={{ marginBottom: "var(--s-4)" }}>
          <div>
            <h3 style={{ fontSize: "var(--t-h3)" }}>{dict.order.wholesaleTitle}</h3>
            <p style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)", marginTop: 4 }}>{productName}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="close" style={{ color: "var(--text-mute)" }}>✕</button>
        </div>

        {status === "done" ? (
          <p style={{ color: "var(--ok)", fontSize: "var(--t-sm)" }}>{dict.order.success}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: "var(--s-3)" }}>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)" }}>{dict.order.wholesaleIntro}</p>
            <Field name="name" label={dict.order.name} required />
            <Field name="phone" label={dict.order.phone} required type="tel" />
            <Field name="company" label={dict.order.company} />
            <TextArea name="comment" label={dict.order.comment} />
            {status === "error" && <p style={{ color: "var(--err)", fontSize: "var(--t-xs)" }}>{dict.order.error}</p>}
            <button type="submit" className="btn btn-primary" disabled={status === "submitting"} style={{ marginTop: "var(--s-2)" }}>
              {status === "submitting" ? dict.order.submitting : dict.order.submit}
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
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
        style={{ background: "var(--ink)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", padding: "10px 12px", color: "var(--text)", fontSize: "var(--t-sm)" }}
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
        style={{ background: "var(--ink)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", padding: "10px 12px", color: "var(--text)", fontSize: "var(--t-sm)", resize: "vertical" }}
      />
    </label>
  );
}

export function WholesaleModalPortal(props: { productName: string; dict: Dictionary; open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {props.open && <WholesaleModal productName={props.productName} dict={props.dict} onClose={props.onClose} />}
    </AnimatePresence>
  );
}
