import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { products } from "@/lib/data/products";
import { localizeProducts } from "@/lib/data/products-i18n";
import { CatalogClient } from "@/components/catalog/CatalogClient";
import { CompareBar } from "@/components/catalog/CompareBar";

export async function generateMetadata(props: PageProps<"/[locale]/catalog">): Promise<Metadata> {
  const { locale } = await props.params;
  const dict = await getDictionary(isLocale(locale) ? locale : "ua");
  return {
    title: dict.catalog.metaTitle,
    alternates: { canonical: `/${locale}/catalog` },
  };
}

export default async function CatalogPage(props: PageProps<"/[locale]/catalog">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div className="wrap" style={{ paddingBlock: "var(--s-7)" }}>
      <span className="badge">{dict.catalog.kicker}</span>
      <h1 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{dict.catalog.title}</h1>
      <p style={{ color: "var(--text-body)", maxWidth: 560, marginTop: "var(--s-3)", marginBottom: "var(--s-8)" }}>
        {dict.catalog.lede}
      </p>

      <CatalogClient products={localizeProducts(products, locale)} locale={locale} dict={dict} />
      <CompareBar locale={locale} dict={dict} />
    </div>
  );
}
