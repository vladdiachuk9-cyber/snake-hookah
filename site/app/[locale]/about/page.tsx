import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { Reveal } from "@/components/ui/Reveal";

export async function generateMetadata(props: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await props.params;
  const dict = await getDictionary(isLocale(locale) ? locale : "ua");
  return {
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
    alternates: { canonical: `/${locale}/about` },
  };
}

export default async function AboutPage(props: PageProps<"/[locale]/about">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const a = dict.about;

  return (
    <div>
      <section className="wrap-narrow" style={{ paddingBlock: "var(--s-9)" }}>
        <Reveal>
          <span className="badge">{a.heroKicker}</span>
          <h1 style={{ fontSize: "var(--t-hero)", marginTop: "var(--s-5)", lineHeight: 1.15 }}>
            {a.heroTitle}
          </h1>
          <p style={{ fontSize: 19, color: "var(--text-body)", marginTop: "var(--s-5)", maxWidth: 620 }}>
            {a.heroLede}
          </p>
        </Reveal>

        <Reveal delay={0.05} style={{ marginTop: "var(--s-7)" }}>
          <p style={{ color: "var(--text-body)" }}>{a.introP1}</p>
          <p style={{ color: "var(--text-body)", marginTop: "var(--s-4)" }}>{a.introP2}</p>
        </Reveal>
      </section>

      <section style={{ background: "var(--sec-graphite)", paddingBlock: "var(--s-8)" }}>
        <div className="wrap-narrow grid grid-cols-2 md:grid-cols-4" style={{ gap: 1, background: "var(--line)" }}>
          {dict.home.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} style={{ background: "var(--ink-2)", padding: "var(--s-6) var(--s-3)", textAlign: "center" }}>
              <b style={{ display: "block", fontSize: 30, color: "var(--gold)", fontWeight: 600 }}>{stat.value}</b>
              <span style={{ fontSize: "var(--t-label)", color: "var(--text-mute)", textTransform: "uppercase", letterSpacing: "0.09em" }}>
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap-narrow" style={{ paddingBlock: "var(--s-9)" }}>
        <Reveal>
          <span className="badge">{a.section2Kicker}</span>
          <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{a.section2Title}</h2>
        </Reveal>
        <Reveal delay={0.06} style={{ marginTop: "var(--s-5)" }}>
          <p style={{ color: "var(--text-body)" }}>{a.section2P1}</p>
          <p style={{ color: "var(--text-body)", marginTop: "var(--s-4)" }}>{a.section2P2}</p>
        </Reveal>
      </section>

      <section style={{ paddingBlock: "var(--s-9)" }}>
        <div className="wrap">
          <Reveal>
            <span className="badge">{a.lessonsKicker}</span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--s-6)", marginTop: "var(--s-6)" }}>
            {a.lessons.map((lesson, i) => (
              <Reveal key={lesson.title} delay={i * 0.07} style={{ borderTop: "1px solid var(--gold)", paddingTop: "var(--s-4)" }}>
                <h3 style={{ fontSize: "var(--t-h3)" }}>{lesson.title}</h3>
                <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>{lesson.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--sec-forest)", paddingBlock: "var(--s-9)" }}>
        <div className="wrap grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--s-6)" }}>
          <Reveal style={{ background: "var(--ink-2)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)", padding: "var(--s-6)" }}>
            <h3 style={{ fontSize: "var(--t-h3)", color: "var(--gold)" }}>Spiral</h3>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-3)" }}>
              {a.linesSpiralBody}
            </p>
            <p style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)", marginTop: "var(--s-4)", borderTop: "1px solid var(--line)", paddingTop: "var(--s-3)" }}>
              {a.linesSpiralMeta}
            </p>
          </Reveal>
          <Reveal delay={0.08} style={{ background: "var(--ink-2)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)", padding: "var(--s-6)" }}>
            <h3 style={{ fontSize: "var(--t-h3)", color: "var(--gold)" }}>Wild Collection</h3>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-3)" }}>
              {a.linesWildBody}
            </p>
            <p style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)", marginTop: "var(--s-4)", borderTop: "1px solid var(--line)", paddingTop: "var(--s-3)" }}>
              {a.linesWildMeta}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="wrap-narrow" style={{ paddingBlock: "var(--s-9)" }}>
        <Reveal>
          <span className="badge">{a.teamKicker}</span>
          <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{a.teamTitle}</h2>
          <p style={{ color: "var(--text-body)", marginTop: "var(--s-4)" }}>{a.teamBody}</p>
        </Reveal>

        <Reveal delay={0.08} style={{ marginTop: "var(--s-7)" }}>
          <span className="badge">{a.geoKicker}</span>
          <p style={{ color: "var(--text-body)", marginTop: "var(--s-4)" }}>{a.geoBody}</p>
        </Reveal>

        <Reveal delay={0.14} style={{ marginTop: "var(--s-7)", borderLeft: "2px solid var(--gold)", paddingLeft: "var(--s-5)" }}>
          <p style={{ fontSize: 20, color: "var(--text)", lineHeight: 1.5 }}>{a.pullQuote}</p>
        </Reveal>

        <Reveal delay={0.2} style={{ marginTop: "var(--s-7)" }}>
          <span className="badge">{a.warrantyKicker}</span>
          <p style={{ color: "var(--text-body)", marginTop: "var(--s-4)" }}>{a.warrantyBody}</p>
        </Reveal>
      </section>

      <section style={{ background: "var(--ink-2)", borderTop: "1px solid var(--line)", paddingBlock: "var(--s-8)" }}>
        <Reveal className="wrap flex items-center gap-4" style={{ gap: "var(--s-5)" }}>
          <Image src="/images/brand/mark-light.webp" alt="" width={40} height={40} style={{ width: 32, height: 32 }} />
          <p style={{ fontSize: "var(--t-sm)", color: "var(--text-mute)" }}>
            {dict.footer.madeIn}
          </p>
        </Reveal>
      </section>
    </div>
  );
}
