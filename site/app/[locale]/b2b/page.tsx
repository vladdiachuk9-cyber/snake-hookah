import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { Reveal } from "@/components/ui/Reveal";
import { B2BForm } from "@/components/pages/B2BForm";

export async function generateMetadata(props: PageProps<"/[locale]/b2b">): Promise<Metadata> {
  const { locale } = await props.params;
  const dict = await getDictionary(isLocale(locale) ? locale : "ua");
  return { title: dict.b2b.metaTitle, alternates: { canonical: `/${locale}/b2b` } };
}

export default async function B2BPage(props: PageProps<"/[locale]/b2b">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div>
      <section className="wrap-narrow" style={{ paddingBlock: "var(--s-9)" }}>
        <Reveal>
          <span className="badge">{dict.b2b.kicker}</span>
          <h1 style={{ fontSize: "var(--t-hero)", marginTop: "var(--s-5)", lineHeight: 1.15 }}>{dict.b2b.title}</h1>
          <p style={{ fontSize: 19, color: "var(--text-body)", marginTop: "var(--s-5)", maxWidth: 600 }}>{dict.b2b.lede}</p>
        </Reveal>
      </section>

      <section style={{ paddingBlock: "var(--s-8)" }}>
        <div className="wrap">
          <Reveal>
            <span className="badge">{dict.b2b.perksTitle}</span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "var(--s-6)", marginTop: "var(--s-6)" }}>
            {dict.b2b.perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 0.07} style={{ borderTop: "1px solid var(--gold)", paddingTop: "var(--s-4)" }}>
                <h3 style={{ fontSize: "var(--t-h3)" }}>{perk.title}</h3>
                <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>{perk.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--sec-forest)", paddingBlock: "var(--s-9)" }}>
        <div className="wrap-narrow">
          <Reveal>
            <h2 style={{ fontSize: "var(--t-h1)", marginBottom: "var(--s-6)" }}>{dict.b2b.formTitle}</h2>
            <B2BForm dict={dict} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
