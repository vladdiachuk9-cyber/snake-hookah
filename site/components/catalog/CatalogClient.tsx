"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import type { Product, ProductLine } from "@/lib/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/ui/Reveal";

type Sort = "default" | "price-asc" | "price-desc" | "name";

export function CatalogClient({
  products,
  locale,
  dict,
}: {
  products: Product[];
  locale: Locale;
  dict: Dictionary;
}) {
  const [query, setQuery] = useState("");
  const [line, setLine] = useState<ProductLine | "all">("all");
  const [sort, setSort] = useState<Sort>("default");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter((p) => {
      const matchesLine = line === "all" || p.line === line;
      const matchesQuery =
        q.length === 0 ||
        p.name.toLowerCase().includes(q) ||
        (p.wood ?? "").toLowerCase().includes(q) ||
        p.finish.toLowerCase().includes(q);
      return matchesLine && matchesQuery;
    });

    list = [...list];
    if (sort === "price-asc") list.sort((a, b) => a.priceUah - b.priceUah);
    if (sort === "price-desc") list.sort((a, b) => b.priceUah - a.priceUah);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    // "default": photographed products first, keep catalog order otherwise
    if (sort === "default") list.sort((a, b) => Number(b.images.length > 0) - Number(a.images.length > 0));

    return list;
  }, [products, query, line, sort]);

  const hasFilters = query.trim().length > 0 || line !== "all";

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between" style={{ gap: "var(--s-5)", marginBottom: "var(--s-7)" }}>
        <div className="flex flex-wrap items-center" style={{ gap: "var(--s-4)" }}>
          <div className="flex" style={{ gap: 6 }}>
            {(["all", "Spiral", "Wild Collection"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLine(l)}
                className={l === line ? "btn-primary" : "btn-secondary"}
                style={{ padding: "8px 16px", fontSize: "var(--t-xs)" }}
              >
                {l === "all" ? dict.catalog.allLines : l}
              </button>
            ))}
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={dict.catalog.searchPlaceholder}
            style={{
              background: "var(--ink-2)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-md)",
              padding: "10px 14px",
              color: "var(--text)",
              fontSize: "var(--t-sm)",
              minWidth: 220,
            }}
          />
        </div>

        <label className="flex items-center" style={{ gap: 8, fontSize: "var(--t-xs)", color: "var(--text-mute)" }}>
          {dict.catalog.sortLabel}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            style={{
              background: "var(--ink-2)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-md)",
              padding: "8px 10px",
              color: "var(--text)",
              fontSize: "var(--t-sm)",
            }}
          >
            <option value="default">{dict.catalog.sortDefault}</option>
            <option value="price-asc">{dict.catalog.sortPriceAsc}</option>
            <option value="price-desc">{dict.catalog.sortPriceDesc}</option>
            <option value="name">{dict.catalog.sortName}</option>
          </select>
        </label>
      </div>

      <p style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)", marginBottom: "var(--s-5)" }}>
        {filtered.length} {dict.catalog.resultsCount}
      </p>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-start" style={{ gap: "var(--s-4)" }}>
          <p style={{ color: "var(--text-mute)" }}>{dict.catalog.noResults}</p>
          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setLine("all");
              }}
              className="btn btn-secondary"
            >
              {dict.catalog.reset}
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "var(--s-6)" }}>
          {filtered.map((product, i) => (
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
      )}
    </div>
  );
}
