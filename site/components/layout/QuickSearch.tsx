"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { products } from "@/lib/data/products";
import { localizeProducts } from "@/lib/data/products-i18n";
import { formatUah } from "@/lib/format";

export function QuickSearch({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const localized = useMemo(() => localizeProducts(products, locale), [locale]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) return [];
    return localized
      .filter((p) => p.name.toLowerCase().includes(q) || (p.wood ?? "").toLowerCase().includes(q) || p.finish.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query, localized]);

  function close() {
    setOpen(false);
    setQuery("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="search"
        className="flex items-center justify-center cursor-pointer"
        style={{ width: 32, height: 32, color: "var(--text)" }}
      >
        <SearchIcon />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center"
            style={{ background: "rgba(0,0,0,0.7)", paddingTop: "10vh" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              style={{ width: "min(560px, 92vw)", background: "var(--ink-2)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)", overflow: "hidden" }}
            >
              <div className="flex items-center" style={{ padding: "var(--s-4)", borderBottom: "1px solid var(--line)", gap: "var(--s-3)" }}>
                <SearchIcon />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={dict.catalog.searchPlaceholder}
                  style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "var(--text)", fontSize: "var(--t-body)" }}
                />
                <button type="button" onClick={close} style={{ color: "var(--text-mute)" }}>✕</button>
              </div>

              {results.length > 0 && (
                <ul style={{ maxHeight: "50vh", overflowY: "auto" }}>
                  {results.map((p) => (
                    <li key={p.sku} style={{ borderTop: "1px solid var(--line-soft)" }}>
                      <Link
                        href={`/${locale}/products/${p.slug}`}
                        onClick={close}
                        className="flex items-center"
                        style={{ gap: "var(--s-4)", padding: "var(--s-3) var(--s-4)" }}
                      >
                        <div className="gallery" style={{ width: 48, height: 48, padding: 4, flexShrink: 0 }}>
                          {p.images[0] && (
                            <Image src={p.images[0].src} alt={p.images[0].alt} width={40} height={40} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                          )}
                        </div>
                        <span style={{ fontSize: "var(--t-sm)", color: "var(--text)", flex: 1 }}>{p.name.replace("Snake Hookah ", "")}</span>
                        <span style={{ fontSize: "var(--t-xs)", color: "var(--gold)" }}>{formatUah(p.priceUah)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {query.trim().length > 0 && results.length === 0 && (
                <p style={{ padding: "var(--s-5)", fontSize: "var(--t-sm)", color: "var(--text-mute)" }}>{dict.catalog.noResults}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}
