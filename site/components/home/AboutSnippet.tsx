import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "2020", label: "рік заснування" },
  { value: "10", label: "людей у майстерні" },
  { value: "~1000", label: "кальянів зроблено" },
  { value: "4", label: "країни експорту" },
];

export function AboutSnippet({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="about" style={{ paddingBlock: "var(--s-9)" }}>
      <div className="wrap grid grid-cols-1 lg:grid-cols-2" style={{ gap: "var(--s-8)" }}>
        <Reveal>
          <span className="badge">{dict.home.aboutKicker}</span>
          <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{dict.home.aboutTitle}</h2>
          <p style={{ fontSize: 18, color: "var(--text-body)", marginTop: "var(--s-4)", maxWidth: 520 }}>
            {dict.home.aboutBody}
          </p>
          <Link href={`/${locale}/about`} className="btn btn-secondary" style={{ marginTop: "var(--s-6)" }}>
            {dict.home.aboutCta}
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2" style={{ gap: 1, background: "var(--line)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)", overflow: "hidden", alignSelf: "start" }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ background: "var(--ink-2)", padding: "var(--s-6)", textAlign: "center" }}>
              <b style={{ display: "block", fontSize: 30, color: "var(--gold)", fontWeight: 600 }}>{stat.value}</b>
              <span style={{ fontSize: "var(--t-label)", color: "var(--text-mute)", textTransform: "uppercase", letterSpacing: "0.09em" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
