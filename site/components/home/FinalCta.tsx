import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section style={{ background: "var(--sec-forest)", paddingBlock: "var(--s-9)" }}>
      <Reveal className="wrap flex flex-col items-center text-center">
        <h2 style={{ fontSize: "var(--t-h1)", maxWidth: 560 }}>{dict.home.ctaTitle}</h2>
        <p style={{ fontSize: 16, color: "var(--text-body)", marginTop: "var(--s-3)", maxWidth: 480 }}>{dict.home.ctaBody}</p>
        <Link href={`/${locale}/catalog`} className="btn btn-primary" style={{ marginTop: "var(--s-6)" }}>
          {dict.home.ctaButton}
        </Link>
      </Reveal>
    </section>
  );
}
