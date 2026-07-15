import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { OrderClient } from "@/components/order/OrderClient";

export const metadata = { title: "Заявка на замовлення" };

export default async function OrderPage(props: PageProps<"/[locale]/order">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return <OrderClient locale={locale} dict={dict} />;
}
