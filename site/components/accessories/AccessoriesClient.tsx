"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import type { Accessory, AccessoryCategory } from "@/lib/data/accessories";
import { AccessoryCard } from "@/components/accessories/AccessoryCard";
import { Reveal } from "@/components/ui/Reveal";

export function AccessoriesClient({
  accessories,
  locale,
  dict,
}: {
  accessories: Accessory[];
  locale: Locale;
  dict: Dictionary;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<AccessoryCategory | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return accessories.filter((a) => {
      const matchesCategory = category === "all" || a.category === category;
      const matchesQuery = q.length === 0 || a.color.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [accessories, query, category]);

  const hasFilters = query.trim().length > 0 || category !== "all";

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between" style={{ gap: "var(--s-5)", marginBottom: "var(--s-7)" }}>
        <div className="flex flex-wrap items-center" style={{ gap: "var(--s-4)" }}>
          <div className="flex" style={{ gap: 6 }}>
            {(["all", "Leather Hose", "Snake Hose"] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={c === category ? "btn-primary" : "btn-secondary"}
                style={{ padding: "8px 16px", fontSize: "var(--t-xs)" }}
              >
                {c === "all" ? dict.accessories.categoryAll : c === "Leather Hose" ? dict.accessories.categoryLeather : dict.accessories.categorySnake}
              </button>
            ))}
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={dict.accessories.searchPlaceholder}
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
      </div>

      <p style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)", marginBottom: "var(--s-5)" }}>
        {filtered.length} {dict.accessories.resultsCount}
      </p>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-start" style={{ gap: "var(--s-4)" }}>
          <p style={{ color: "var(--text-mute)" }}>{dict.accessories.noResults}</p>
          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="btn btn-secondary"
            >
              {dict.accessories.reset}
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "var(--s-6)" }}>
          {filtered.map((accessory, i) => (
            <Reveal key={accessory.sku} delay={(i % 4) * 0.06}>
              <AccessoryCard accessory={accessory} locale={locale} dict={dict} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
