import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/pages/ContactForm";

export async function generateMetadata(props: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await props.params;
  const dict = await getDictionary(isLocale(locale) ? locale : "ua");
  return { title: dict.contact.metaTitle, alternates: { canonical: `/${locale}/contact` } };
}

export default async function ContactPage(props: PageProps<"/[locale]/contact">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div className="wrap" style={{ paddingBlock: "var(--s-9)" }}>
      <Reveal>
        <span className="badge">{dict.contact.kicker}</span>
        <h1 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{dict.contact.title}</h1>
        <p style={{ color: "var(--text-body)", maxWidth: 520, marginTop: "var(--s-3)" }}>{dict.contact.lede}</p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "var(--s-8)", marginTop: "var(--s-8)" }}>
        <Reveal>
          <h2 style={{ fontSize: "var(--t-h3)", marginBottom: "var(--s-4)" }}>{dict.contact.formTitle}</h2>
          <ContactForm dict={dict} />

          <div style={{ marginTop: "var(--s-8)", display: "flex", flexDirection: "column", gap: "var(--s-5)" }}>
            <div>
              <span className="badge" style={{ marginBottom: "var(--s-2)" }}>{dict.contact.addressTitle}</span>
              <p style={{ color: "var(--text-body)", fontSize: "var(--t-sm)" }}>{dict.contact.address}</p>
            </div>
            <div>
              <span className="badge" style={{ marginBottom: "var(--s-2)" }}>{dict.contact.hoursTitle}</span>
              <p style={{ color: "var(--text-body)", fontSize: "var(--t-sm)" }}>{dict.contact.hours}</p>
            </div>
            <div>
              <span className="badge" style={{ marginBottom: "var(--s-2)" }}>{dict.footer.socialTitle}</span>
              <p style={{ fontSize: "var(--t-sm)" }}>
                <a
                  href="https://www.instagram.com/snake.hookah"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--gold)" }}
                >
                  @snake.hookah
                </a>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="gallery" style={{ padding: 0, overflow: "hidden", minHeight: 420 }}>
          <iframe
            title="Kyiv, Ukraine"
            src="https://www.openstreetmap.org/export/embed.html?bbox=30.3427%2C50.3800%2C30.6310%2C50.5300&layer=mapnik&marker=50.4501%2C30.5234"
            style={{ width: "100%", height: "100%", minHeight: 420, border: 0, filter: "grayscale(0.4) invert(0.92) contrast(0.9)" }}
            loading="lazy"
          />
        </Reveal>
      </div>
    </div>
  );
}
