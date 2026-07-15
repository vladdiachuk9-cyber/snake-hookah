import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { products } from "@/lib/data/products";
import { CompareClient } from "@/components/catalog/CompareClient";

export const metadata = { title: "Порівняння моделей" };

export default async function ComparePage(props: PageProps<"/[locale]/compare">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div className="wrap" style={{ paddingBlock: "var(--s-7)" }}>
      <h1 style={{ fontSize: "var(--t-h1)", marginBottom: "var(--s-7)" }}>{dict.catalog.compareBarTitle}</h1>
      <CompareClient products={products} locale={locale} dict={dict} />
    </div>
  );
}
