import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { products } from "@/lib/data/products";
import { localizeProducts } from "@/lib/data/products-i18n";
import { WishlistClient } from "@/components/catalog/WishlistClient";

export async function generateMetadata(props: PageProps<"/[locale]/wishlist">): Promise<Metadata> {
  const { locale } = await props.params;
  const dict = await getDictionary(isLocale(locale) ? locale : "ua");
  return { title: dict.catalog.wishlistTitle };
}

export default async function WishlistPage(props: PageProps<"/[locale]/wishlist">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div className="wrap" style={{ paddingBlock: "var(--s-7)" }}>
      <h1 style={{ fontSize: "var(--t-h1)", marginBottom: "var(--s-7)" }}>{dict.catalog.wishlistTitle}</h1>
      <WishlistClient products={localizeProducts(products, locale)} locale={locale} dict={dict} />
    </div>
  );
}
