import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { accessories } from "@/lib/data/accessories";
import { localizeAccessories } from "@/lib/data/accessories-i18n";
import { AccessoryCard } from "@/components/accessories/AccessoryCard";
import { Reveal } from "@/components/ui/Reveal";

// One pick per accessory line for the Home teaser — the full set lives on
// /catalog behind the Leather Hose / Snake Hose / Bowl filter tabs.
const FEATURED_SKUS = ["SNK-ACC-LEA-GRN", "SNK-ACC-SNK-GLD", "SNK-ACC-BWL-CGN"];

export function AccessoriesTeaser({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const localized = localizeAccessories(accessories, locale);
  const shown = FEATURED_SKUS.map((sku) => localized.find((a) => a.sku === sku)).filter(
    (a): a is (typeof localized)[number] => Boolean(a),
  );

  return (
    <section style={{ paddingBlock: "var(--s-9)" }}>
      <div className="wrap">
        <Reveal className="flex items-end justify-between flex-wrap" style={{ gap: "var(--s-4)" }}>
          <div>
            <span className="badge">{dict.home.accessoriesKicker}</span>
            <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{dict.home.accessoriesTitle}</h2>
          </div>
          <Link href={`/${locale}/catalog`} className="btn btn-secondary">
            {dict.home.popularCta}
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3" style={{ gap: "var(--s-6)", marginTop: "var(--s-8)" }}>
          {shown.map((accessory, i) => (
            <Reveal key={accessory.sku} delay={(i % 3) * 0.08}>
              <AccessoryCard accessory={accessory} locale={locale} dict={dict} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
