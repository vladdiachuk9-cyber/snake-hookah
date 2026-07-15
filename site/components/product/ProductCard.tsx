"use client";

import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Product } from "@/lib/data/products";
import { formatUah } from "@/lib/format";
import { useWishlistStore } from "@/lib/wishlist-store";
import { useCompareStore, MAX_COMPARE } from "@/lib/compare-store";
import { useHydratedStore } from "@/lib/use-hydrated-store";

export function ProductCard({
  product,
  locale,
  soonLabel,
  viewLabel,
  compareLabel,
}: {
  product: Product;
  locale: Locale;
  soonLabel: string;
  viewLabel: string;
  compareLabel: string;
}) {
  const image = product.images[0];

  const wishlisted = useHydratedStore(useWishlistStore, (s) => s.skus.includes(product.sku), false);
  const toggleWishlist = useWishlistStore((s) => s.toggle);
  const compared = useHydratedStore(useCompareStore, (s) => s.skus.includes(product.sku), false);
  const compareCount = useHydratedStore(useCompareStore, (s) => s.skus.length, 0);
  const toggleCompare = useCompareStore((s) => s.toggle);
  const compareDisabled = !compared && compareCount >= MAX_COMPARE;

  return (
    <div className="relative flex flex-col group">
      <button
        type="button"
        onClick={() => toggleWishlist(product.sku)}
        aria-pressed={wishlisted}
        aria-label="wishlist"
        className="absolute z-10 flex items-center justify-center cursor-pointer"
        style={{
          top: "var(--s-3)",
          right: "var(--s-3)",
          width: 32,
          height: 32,
          borderRadius: "var(--r-pill)",
          background: "color-mix(in srgb, var(--ink) 70%, transparent)",
          color: wishlisted ? "var(--gold)" : "var(--text)",
        }}
      >
        <HeartIcon filled={wishlisted} />
      </button>

      <Link href={`/${locale}/products/${product.slug}`} className="flex flex-col">
        <div className="gallery" style={{ aspectRatio: "2 / 3", padding: "var(--s-4)" }}>
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          ) : (
            <div className="flex items-center justify-center h-full" style={{ color: "var(--text-mute)", fontSize: "var(--t-xs)" }}>
              {soonLabel}
            </div>
          )}
        </div>
        <div className="flex flex-col" style={{ gap: 6, paddingTop: "var(--s-3)" }}>
          <span className="badge" style={{ width: "fit-content" }}>{product.line}</span>
          <h3 style={{ fontSize: "var(--t-body)", fontWeight: 600 }}>{product.name.replace("Snake Hookah ", "")}</h3>
          <div className="flex items-center justify-between">
            <span style={{ fontFamily: "var(--font-num)", color: "var(--gold)", fontSize: "var(--t-sm)" }}>
              {formatUah(product.priceUah)}
            </span>
            <span style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)" }}>{viewLabel} →</span>
          </div>
        </div>
      </Link>

      <label
        className="flex items-center"
        style={{ gap: 6, marginTop: "var(--s-2)", fontSize: "var(--t-xs)", color: compareDisabled ? "var(--text-mute)" : "var(--text-body)" }}
      >
        <input
          type="checkbox"
          checked={compared}
          disabled={compareDisabled}
          onChange={() => toggleCompare(product.sku)}
          style={{ accentColor: "var(--gold)" }}
        />
        {compareLabel}
      </label>
    </div>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6">
      <path d="M12 20.5s-7.5-4.6-10-9.3C.4 7.6 2.3 4 5.8 4c2 0 3.6 1.1 4.5 2.7L12 8.3l1.7-1.6C14.6 5.1 16.2 4 18.2 4c3.5 0 5.4 3.6 3.8 7.2-2.5 4.7-10 9.3-10 9.3Z" strokeLinejoin="round" />
    </svg>
  );
}
