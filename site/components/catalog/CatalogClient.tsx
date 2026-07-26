"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import type { Product, ProductLine } from "@/lib/data/products";
import type { Accessory, AccessoryCategory } from "@/lib/data/accessories";
import { ProductCard } from "@/components/product/ProductCard";
import { AccessoryCard } from "@/components/accessories/AccessoryCard";
import { Reveal } from "@/components/ui/Reveal";

type Sort = "default" | "price-asc" | "price-desc" | "name";
type Category = ProductLine | AccessoryCategory | "all";

type CatalogItem = { kind: "product"; data: Product } | { kind: "accessory"; data: Accessory };

export function CatalogClient({
  products,
  accessories,
  locale,
  dict,
}: {
  products: Product[];
  accessories: Accessory[];
  locale: Locale;
  dict: Dictionary;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [sort, setSort] = useState<Sort>("default");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const matchedProducts: CatalogItem[] =
      category === "Leather Hose" || category === "Snake Hose"
        ? []
        : products
            .filter((p) => category === "all" || p.line === category)
            .filter((p) => {
              if (q.length === 0) return true;
              return (
                p.name.toLowerCase().includes(q) ||
                (p.wood ?? "").toLowerCase().includes(q) ||
                p.finish.toLowerCase().includes(q)
              );
            })
            .map((data) => ({ kind: "product" as const, data }));

    const matchedAccessories: CatalogItem[] =
      category === "Spiral" || category === "Wild Collection"
        ? []
        : accessories
            .filter((a) => category === "all" || a.category === category)
            .filter((a) => q.length === 0 || a.color.toLowerCase().includes(q))
            .map((data) => ({ kind: "accessory" as const, data }));

    const list = [...matchedProducts, ...matchedAccessories];

    if (sort === "price-asc") list.sort((a, b) => a.data.priceUah - b.data.priceUah);
    if (sort === "price-desc") list.sort((a, b) => b.data.priceUah - a.data.priceUah);
    if (sort === "name") list.sort((a, b) => a.data.name.localeCompare(b.data.name));
    if (sort === "default")
      list.sort((a, b) => Number(b.data.images.length > 0) - Number(a.data.images.length > 0));

    return list;
  }, [products, accessories, query, category, sort]);

  const hasFilters = query.trim().length > 0 || category !== "all";

  const categories: Category[] = ["all", "Spiral", "Wild Collection", "Leather Hose", "Snake Hose"];
  const categoryLabel = (c: Category) => {
    if (c === "all") return dict.catalog.allLines;
    if (c === "Leather Hose") return dict.accessories.categoryLeather;
    if (c === "Snake Hose") return dict.accessories.categorySnake;
    return c;
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between" style={{ gap: "var(--s-5)", marginBottom: "var(--s-7)" }}>
        <div className="flex flex-wrap items-center" style={{ gap: "var(--s-4)" }}>
          <div className="flex flex-wrap" style={{ gap: 6 }}>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={c === category ? "btn-primary" : "btn-secondary"}
                style={{ padding: "8px 16px", fontSize: "var(--t-xs)" }}
              >
                {categoryLabel(c)}
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
                setCategory("all");
              }}
              className="btn btn-secondary"
            >
              {dict.catalog.reset}
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "var(--s-6)" }}>
          {filtered.map((item, i) => (
            <Reveal key={item.data.sku} delay={(i % 4) * 0.06}>
              {item.kind === "product" ? (
                <ProductCard
                  product={item.data}
                  locale={locale}
                  soonLabel={dict.product.soon}
                  viewLabel={dict.product.viewProduct}
                  compareLabel={dict.product.compare}
                />
              ) : (
                <AccessoryCard accessory={item.data} locale={locale} dict={dict} />
              )}
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
