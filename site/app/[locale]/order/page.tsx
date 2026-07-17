import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { OrderClient } from "@/components/order/OrderClient";

export async function generateMetadata(props: PageProps<"/[locale]/order">): Promise<Metadata> {
  const { locale } = await props.params;
  const dict = await getDictionary(isLocale(locale) ? locale : "ua");
  return { title: dict.order.title };
}

export default async function OrderPage(props: PageProps<"/[locale]/order">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return <OrderClient locale={locale} dict={dict} />;
}
