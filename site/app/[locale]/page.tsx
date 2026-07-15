import type { Metadata } from "next";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";
import { Hero } from "@/components/home/Hero";
import { Advantages } from "@/components/home/Advantages";
import { Categories } from "@/components/home/Categories";
import { PopularProducts } from "@/components/home/PopularProducts";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { Production } from "@/components/home/Production";
import { Materials } from "@/components/home/Materials";
import { GeoReviews } from "@/components/home/GeoReviews";
import { InstagramCta } from "@/components/home/InstagramCta";
import { FinalCta } from "@/components/home/FinalCta";

export async function generateMetadata(props: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    title: "Кальяни ручної роботи з Києва",
    alternates: { canonical: `/${locale}` },
  };
}

export default async function HomePage(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Advantages dict={dict} />
      <Categories locale={locale} dict={dict} />
      <PopularProducts locale={locale} dict={dict} />
      <AboutSnippet locale={locale} dict={dict} />
      <Production locale={locale} dict={dict} />
      <Materials dict={dict} />
      <GeoReviews dict={dict} />
      <InstagramCta dict={dict} />
      <FinalCta locale={locale} dict={dict} />
    </>
  );
}
