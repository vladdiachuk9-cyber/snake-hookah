"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import type { Product } from "@/lib/data/products";
import { useWishlistStore } from "@/lib/wishlist-store";
import { useHydratedStore } from "@/lib/use-hydrated-store";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/ui/Reveal";

const EMPTY: string[] = [];

export function WishlistClient({ products, locale, dict }: { products: Product[]; locale: Locale; dict: Dictionary }) {
  const skus = useHydratedStore(useWishlistStore, (s) => s.skus, EMPTY);
  const selected = products.filter((p) => skus.includes(p.sku));

  if (selected.length === 0) {
    return (
      <div style={{ textAlign: "center", paddingBlock: "var(--s-8)" }}>
        <p style={{ color: "var(--text-mute)" }}>{dict.catalog.wishlistEmpty}</p>
        <Link href={`/${locale}/catalog`} className="btn btn-secondary" style={{ marginTop: "var(--s-5)" }}>
          {dict.catalog.title}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "var(--s-6)" }}>
      {selected.map((product, i) => (
        <Reveal key={product.sku} delay={(i % 4) * 0.06}>
          <ProductCard
            product={product}
            locale={locale}
            soonLabel={dict.product.soon}
            viewLabel={dict.product.viewProduct}
            compareLabel={dict.product.compare}
          />
        </Reveal>
      ))}
    </div>
  );
}
