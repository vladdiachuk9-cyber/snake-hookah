"use client";

import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import type { Product } from "@/lib/data/products";
import { useCompareStore } from "@/lib/compare-store";
import { useHydratedStore } from "@/lib/use-hydrated-store";
import { formatUah } from "@/lib/format";

const EMPTY: string[] = [];

export function CompareClient({ products, locale, dict }: { products: Product[]; locale: Locale; dict: Dictionary }) {
  const skus = useHydratedStore(useCompareStore, (s) => s.skus, EMPTY);
  const toggle = useCompareStore((s) => s.toggle);
  const clear = useCompareStore((s) => s.clear);

  const selected = skus.map((sku) => products.find((p) => p.sku === sku)).filter((p): p is Product => Boolean(p));

  if (selected.length === 0) {
    return (
      <div style={{ textAlign: "center", paddingBlock: "var(--s-8)" }}>
        <p style={{ color: "var(--text-mute)" }}>{dict.catalog.compareEmpty}</p>
        <Link href={`/${locale}/catalog`} className="btn btn-secondary" style={{ marginTop: "var(--s-5)" }}>
          {dict.catalog.title}
        </Link>
      </div>
    );
  }

  const rows: { label: string; value: (p: Product) => string }[] = [
    { label: dict.product.line, value: (p) => p.line },
    { label: dict.product.height, value: (p) => `${p.heightCm} ${dict.product.unitCm}` },
    { label: dict.product.shaft, value: (p) => p.shaft },
    { label: dict.product.wood, value: (p) => p.wood ?? "—" },
    { label: dict.product.finish, value: (p) => p.finish },
    { label: dict.product.hose, value: (p) => p.hose },
    { label: dict.product.weight, value: (p) => `${p.weightKg} ${dict.product.unitKg}` },
    { label: dict.product.sku, value: (p) => p.sku },
  ];

  return (
    <div>
      <div className="flex items-center justify-between" style={{ marginBottom: "var(--s-6)" }}>
        <span style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)" }}>{selected.length} / 4</span>
        <button type="button" onClick={clear} className="btn btn-secondary" style={{ padding: "8px 16px" }}>
          {dict.catalog.compareClear}
        </button>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
          <thead>
            <tr>
              <td style={{ width: 160 }} />
              {selected.map((p) => (
                <td key={p.sku} style={{ padding: "0 var(--s-4) var(--s-4)", verticalAlign: "top", minWidth: 180 }}>
                  <div className="gallery" style={{ aspectRatio: "1 / 1", padding: "var(--s-3)", marginBottom: "var(--s-3)" }}>
                    {p.images[0] ? (
                      <Image src={p.images[0].src} alt={p.images[0].alt} width={200} height={200} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    ) : (
                      <div className="flex items-center justify-center h-full" style={{ color: "var(--text-mute)", fontSize: "var(--t-xs)" }}>
                        {dict.product.soon}
                      </div>
                    )}
                  </div>
                  <Link href={`/${locale}/products/${p.slug}`} style={{ fontSize: "var(--t-sm)", color: "var(--text)", fontWeight: 600 }}>
                    {p.name.replace("Snake Hookah ", "")}
                  </Link>
                  <div style={{ fontFamily: "var(--font-num)", color: "var(--gold)", fontSize: "var(--t-sm)", marginTop: 4 }}>
                    {formatUah(p.priceUah)}
                  </div>
                  <button
                    type="button"
                    onClick={() => toggle(p.sku)}
                    style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)", marginTop: 6 }}
                  >
                    {dict.cart.remove}
                  </button>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} style={{ borderTop: "1px solid var(--line-soft)" }}>
                <td style={{ padding: "12px var(--s-4) 12px 0", color: "var(--text-mute)", fontSize: "var(--t-sm)", whiteSpace: "nowrap" }}>
                  {row.label}
                </td>
                {selected.map((p) => (
                  <td key={p.sku} style={{ padding: "12px var(--s-4)", color: "var(--text)", fontSize: "var(--t-sm)" }}>
                    {row.value(p)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
