import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { products } from "@/lib/data/products";
import { localizeProducts } from "@/lib/data/products-i18n";
import { CompareClient } from "@/components/catalog/CompareClient";

export async function generateMetadata(props: PageProps<"/[locale]/compare">): Promise<Metadata> {
  const { locale } = await props.params;
  const dict = await getDictionary(isLocale(locale) ? locale : "ua");
  return { title: dict.catalog.compareMetaTitle };
}

export default async function ComparePage(props: PageProps<"/[locale]/compare">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div className="wrap" style={{ paddingBlock: "var(--s-7)" }}>
      <h1 style={{ fontSize: "var(--t-h1)", marginBottom: "var(--s-7)" }}>{dict.catalog.compareBarTitle}</h1>
      <CompareClient products={localizeProducts(products, locale)} locale={locale} dict={dict} />
    </div>
  );
}
