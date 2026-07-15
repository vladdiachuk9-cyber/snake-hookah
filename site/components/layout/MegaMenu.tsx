import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { products } from "@/lib/data/products";

export function MegaMenu({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const spiral = products.filter((p) => p.line === "Spiral");
  const wild = products.filter((p) => p.line === "Wild Collection");
  const featured = products.find((p) => p.slug === "kalyan-snake-hookah-spiral-walnut-green")!;

  return (
    <div
      className="absolute left-0 right-0 hidden group-hover:block"
      style={{ top: "100%", background: "var(--ink-2)", borderBottom: "1px solid var(--line)", boxShadow: "0 24px 48px rgba(0,0,0,0.5)" }}
    >
      <div className="wrap grid grid-cols-3" style={{ gap: "var(--s-8)", paddingBlock: "var(--s-6)" }}>
        <div>
          <span style={{ fontSize: "var(--t-label)", color: "var(--text-mute)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Spiral</span>
          <ul style={{ marginTop: "var(--s-3)", display: "flex", flexDirection: "column", gap: 8 }}>
            {spiral.map((p) => (
              <li key={p.sku}>
                <Link href={`/${locale}/products/${p.slug}`} style={{ fontSize: "var(--t-sm)", color: "var(--text-body)" }}>
                  {p.wood ?? p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span style={{ fontSize: "var(--t-label)", color: "var(--text-mute)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Wild Collection</span>
          <ul style={{ marginTop: "var(--s-3)", display: "flex", flexDirection: "column", gap: 8 }}>
            {wild.map((p) => (
              <li key={p.sku}>
                <Link href={`/${locale}/products/${p.slug}`} style={{ fontSize: "var(--t-sm)", color: "var(--text-body)" }}>
                  {p.finish}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href={`/${locale}/products/${featured.slug}`} className="flex items-center" style={{ gap: "var(--s-4)" }}>
          <div className="gallery" style={{ width: 84, height: 84, padding: 8, flexShrink: 0 }}>
            <Image src={featured.images[0].src} alt={featured.images[0].alt} width={70} height={70} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text)" }}>{featured.name.replace("Snake Hookah ", "")}</p>
            <span style={{ fontSize: "var(--t-xs)", color: "var(--gold)" }}>{dict.nav.catalog} →</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
