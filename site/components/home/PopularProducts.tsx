import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { products } from "@/lib/data/products";
import { localizeProducts } from "@/lib/data/products-i18n";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/ui/Reveal";

// A curated spread across both lines for the Home teaser — the full 11 live
// on /catalog.
const FEATURED_SKUS = [
  "SNK-SPR-WLN-GRN",
  "SNK-SPR-WNG",
  "SNK-SPR-TGR",
  "SNK-SPR-WLN-PRP",
  "SNK-WLD-CRC-GRN",
  "SNK-WLD-LEO",
];

export function PopularProducts({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const localized = localizeProducts(products, locale);
  const shown = FEATURED_SKUS.map((sku) => localized.find((p) => p.sku === sku)).filter(
    (p): p is (typeof localized)[number] => Boolean(p),
  );

  return (
    <section id="popular" style={{ paddingBlock: "var(--s-9)" }}>
      <div className="wrap">
        <Reveal className="flex items-end justify-between flex-wrap" style={{ gap: "var(--s-4)" }}>
          <div>
            <span className="badge">{dict.home.popularKicker}</span>
            <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{dict.home.popularTitle}</h2>
          </div>
          <Link href={`/${locale}/catalog`} className="btn btn-secondary">
            {dict.home.popularCta}
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3" style={{ gap: "var(--s-6)", marginTop: "var(--s-8)" }}>
          {shown.map((product, i) => (
            <Reveal key={product.sku} delay={(i % 3) * 0.08}>
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
      </div>
    </section>
  );
}
