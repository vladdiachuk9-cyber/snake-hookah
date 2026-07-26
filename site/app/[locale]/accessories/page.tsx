import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { accessories } from "@/lib/data/accessories";
import { localizeAccessories } from "@/lib/data/accessories-i18n";
import { AccessoriesClient } from "@/components/accessories/AccessoriesClient";

export async function generateMetadata(props: PageProps<"/[locale]/accessories">): Promise<Metadata> {
  const { locale } = await props.params;
  const dict = await getDictionary(isLocale(locale) ? locale : "ua");
  return {
    title: dict.accessories.metaTitle,
    alternates: { canonical: `/${locale}/accessories` },
  };
}

export default async function AccessoriesPage(props: PageProps<"/[locale]/accessories">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div className="wrap" style={{ paddingBlock: "var(--s-7)" }}>
      <span className="badge">{dict.accessories.kicker}</span>
      <h1 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{dict.accessories.title}</h1>
      <p style={{ color: "var(--text-body)", maxWidth: 560, marginTop: "var(--s-3)", marginBottom: "var(--s-8)" }}>
        {dict.accessories.lede}
      </p>

      <AccessoriesClient accessories={localizeAccessories(accessories, locale)} locale={locale} dict={dict} />
    </div>
  );
}
