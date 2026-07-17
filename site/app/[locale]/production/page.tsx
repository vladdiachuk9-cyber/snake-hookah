import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { Reveal } from "@/components/ui/Reveal";

export async function generateMetadata(props: PageProps<"/[locale]/production">): Promise<Metadata> {
  const { locale } = await props.params;
  const dict = await getDictionary(isLocale(locale) ? locale : "ua");
  return {
    title: dict.production.metaTitle,
    description: dict.production.metaDescription,
    alternates: { canonical: `/${locale}/production` },
  };
}

export default async function ProductionPage(props: PageProps<"/[locale]/production">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const p = dict.production;

  return (
    <div>
      <section className="wrap-narrow" style={{ paddingBlock: "var(--s-9)" }}>
        <Reveal>
          <span className="badge">{p.heroKicker}</span>
          <h1 style={{ fontSize: "var(--t-hero)", marginTop: "var(--s-5)", lineHeight: 1.15 }}>
            {p.heroTitle}
          </h1>
          <p style={{ fontSize: 19, color: "var(--text-body)", marginTop: "var(--s-5)", maxWidth: 600 }}>
            {p.heroLede}
          </p>
        </Reveal>
      </section>

      <section style={{ paddingBlock: "var(--s-8)" }}>
        <div className="wrap grid grid-cols-1 md:grid-cols-3" style={{ gap: "var(--s-6)" }}>
          <Reveal style={{ borderTop: "1px solid var(--gold)", paddingTop: "var(--s-4)" }}>
            <h3 style={{ fontSize: "var(--t-h3)" }}>{p.step1Title}</h3>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              {p.step1Body}
            </p>
          </Reveal>
          <Reveal delay={0.08} style={{ borderTop: "1px solid var(--gold)", paddingTop: "var(--s-4)" }}>
            <h3 style={{ fontSize: "var(--t-h3)" }}>{p.step2Title}</h3>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              {p.step2Body}
            </p>
          </Reveal>
          <Reveal delay={0.16} style={{ borderTop: "1px solid var(--gold)", paddingTop: "var(--s-4)" }}>
            <h3 style={{ fontSize: "var(--t-h3)" }}>{p.step3Title}</h3>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              {p.step3Body}
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--sec-coffee)", paddingBlock: "var(--s-9)" }}>
        <div className="wrap-narrow">
          <Reveal>
            <span className="badge">{p.durationKicker}</span>
            <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>
              {p.durationTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.06} style={{ marginTop: "var(--s-5)" }}>
            <p style={{ color: "var(--text-body)" }}>{p.durationP1}</p>
            <p style={{ color: "var(--text-body)", marginTop: "var(--s-4)" }}>
              {p.durationP2Prefix}
              <strong style={{ color: "var(--text)" }}>{p.durationP2Strong}</strong>
              {p.durationP2Suffix}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="wrap-narrow" style={{ paddingBlock: "var(--s-9)" }}>
        <Reveal>
          <span className="badge">{p.materialsKicker}</span>
          <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{p.materialsTitle}</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "var(--s-5)", marginTop: "var(--s-6)" }}>
          <Reveal delay={0.04}>
            <h4 style={{ color: "var(--text)", fontWeight: 600 }}>{p.woodTitle}</h4>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              {p.woodBody}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h4 style={{ color: "var(--text)", fontWeight: 600 }}>{p.leatherTitle}</h4>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              {p.leatherBody}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <h4 style={{ color: "var(--text)", fontWeight: 600 }}>{p.steelTitle}</h4>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              {p.steelBody}
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
