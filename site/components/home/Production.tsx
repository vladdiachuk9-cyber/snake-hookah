import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { Reveal } from "@/components/ui/Reveal";

export function Production({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="production" style={{ background: "var(--sec-coffee)", paddingBlock: "var(--s-9)" }}>
      <div className="wrap-narrow">
        <Reveal>
          <span className="badge">{dict.home.productionKicker}</span>
          <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{dict.home.productionTitle}</h2>
          <p style={{ fontSize: 18, color: "var(--text-body)", marginTop: "var(--s-4)" }}>{dict.home.productionBody}</p>
          <Link href={`/${locale}/production`} className="btn btn-secondary" style={{ marginTop: "var(--s-5)" }}>
            {dict.nav.production} →
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--s-5)", marginTop: "var(--s-7)" }}>
          <Reveal delay={0.05} style={{ borderTop: "1px solid var(--gold)", paddingTop: "var(--s-4)" }}>
            <h3 style={{ fontSize: "var(--t-h3)" }}>Spiral</h3>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              {dict.home.productionSpiralNote}
            </p>
          </Reveal>
          <Reveal delay={0.12} style={{ borderTop: "1px solid var(--gold)", paddingTop: "var(--s-4)" }}>
            <h3 style={{ fontSize: "var(--t-h3)" }}>Wild Collection</h3>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              {dict.home.productionWildNote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
