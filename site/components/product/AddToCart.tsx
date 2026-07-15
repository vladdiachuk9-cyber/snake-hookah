"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/cart-store";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { WholesaleModalPortal } from "./WholesaleModal";

export function AddToCart({
  sku,
  slug,
  name,
  priceUsd,
  priceUah,
  image,
  dict,
}: {
  sku: string;
  slug: string;
  name: string;
  priceUsd: number;
  priceUah: number;
  image: string;
  dict: Dictionary;
}) {
  const [qty, setQty] = useState(1);
  const [wholesaleOpen, setWholesaleOpen] = useState(false);
  const add = useCartStore((s) => s.add);

  return (
    <div className="flex flex-col" style={{ gap: "var(--s-4)" }}>
      <div className="flex items-center" style={{ gap: "var(--s-4)" }}>
        <div className="flex items-center" style={{ gap: 10 }}>
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="btn-secondary"
            style={{ width: 36, height: 36, padding: 0, borderRadius: "var(--r-md)" }}
            aria-label="-"
          >
            −
          </button>
          <span style={{ minWidth: 20, textAlign: "center", fontFamily: "var(--font-num)" }}>{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            className="btn-secondary"
            style={{ width: 36, height: 36, padding: 0, borderRadius: "var(--r-md)" }}
            aria-label="+"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={() => add({ sku, slug, name, priceUsd, priceUah, image }, qty)}
          className="btn btn-primary"
          style={{ flex: 1 }}
        >
          {dict.product.addToCart}
        </button>
      </div>

      <button type="button" onClick={() => setWholesaleOpen(true)} className="btn btn-secondary">
        {dict.product.requestWholesale}
      </button>

      <WholesaleModalPortal productName={name} dict={dict} open={wholesaleOpen} onClose={() => setWholesaleOpen(false)} />
    </div>
  );
}
