"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { useCartStore, cartTotals } from "@/lib/cart-store";
import { useHydratedCartItems } from "@/lib/use-cart-items";
import { formatUah } from "@/lib/format";

export function CartDrawer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const isOpen = useCartStore((s) => s.isOpen);
  const close = useCartStore((s) => s.close);
  const remove = useCartStore((s) => s.remove);
  const setQty = useCartStore((s) => s.setQty);
  const items = useHydratedCartItems();
  const totals = cartTotals(items);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50"
            style={{ background: "rgba(0,0,0,0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 h-full flex flex-col"
            style={{ width: "min(420px, 100vw)", background: "var(--ink-2)", borderLeft: "1px solid var(--line)" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-center justify-between" style={{ padding: "var(--s-5)", borderBottom: "1px solid var(--line)" }}>
              <h2 style={{ fontSize: "var(--t-h3)" }}>{dict.cart.title}</h2>
              <button type="button" onClick={close} aria-label={dict.cart.close} style={{ color: "var(--text-mute)" }}>
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto" style={{ padding: "var(--s-5)" }}>
              {items.length === 0 ? (
                <div className="flex flex-col items-center text-center" style={{ paddingTop: "var(--s-8)", gap: "var(--s-4)" }}>
                  <p style={{ color: "var(--text-mute)" }}>{dict.cart.empty}</p>
                  <Link href={`/${locale}/catalog`} onClick={close} className="btn btn-secondary">
                    {dict.cart.emptyCta}
                  </Link>
                </div>
              ) : (
                <ul className="flex flex-col" style={{ gap: "var(--s-5)" }}>
                  {items.map((item) => (
                    <li key={item.sku} className="flex" style={{ gap: "var(--s-4)" }}>
                      <div className="gallery shrink-0" style={{ padding: 6, width: 72, height: 72 }}>
                        <Image src={item.image} alt={item.name} width={72} height={72} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                      </div>
                      <div className="flex-1 flex flex-col" style={{ gap: 6 }}>
                        <Link href={`/${locale}/products/${item.slug}`} onClick={close} className="text-sm" style={{ color: "var(--text)" }}>
                          {item.name}
                        </Link>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center" style={{ gap: 8 }}>
                            <button
                              type="button"
                              onClick={() => setQty(item.sku, item.qty - 1)}
                              className="btn-secondary"
                              style={{ width: 24, height: 24, padding: 0, borderRadius: "var(--r-sm)", fontSize: 14 }}
                            >
                              −
                            </button>
                            <span style={{ fontSize: "var(--t-sm)", minWidth: 16, textAlign: "center" }}>{item.qty}</span>
                            <button
                              type="button"
                              onClick={() => setQty(item.sku, item.qty + 1)}
                              className="btn-secondary"
                              style={{ width: 24, height: 24, padding: 0, borderRadius: "var(--r-sm)", fontSize: 14 }}
                            >
                              +
                            </button>
                          </div>
                          <span style={{ fontFamily: "var(--font-num)", color: "var(--gold)", fontSize: "var(--t-sm)" }}>
                            {formatUah(item.priceUah * item.qty)}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(item.sku)}
                          className="text-left"
                          style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)" }}
                        >
                          {dict.cart.remove}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div style={{ padding: "var(--s-5)", borderTop: "1px solid var(--line)" }}>
                <div className="flex items-center justify-between" style={{ marginBottom: "var(--s-4)" }}>
                  <span style={{ color: "var(--text-body)" }}>{dict.cart.subtotal}</span>
                  <span className="price" style={{ fontSize: 22 }}>{formatUah(totals.uah)}</span>
                </div>
                <Link href={`/${locale}/order`} onClick={close} className="btn btn-primary" style={{ width: "100%" }}>
                  {dict.cart.checkout}
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
