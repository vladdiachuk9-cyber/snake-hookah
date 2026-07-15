import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CartDrawer } from "@/components/cart/CartDrawer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export async function generateMetadata(props: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: "Snake Hookah — кальяни ручної роботи",
      template: "%s | Snake Hookah",
    },
    description:
      "Snake Hookah — київська майстерня кальянів ручної роботи з 2020 року. Цільна дерев'яна спіраль, натуральна шкіра, нержавіюча сталь.",
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      type: "website",
      siteName: "Snake Hookah",
      locale,
    },
    other: { "current-locale": locale },
  };
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Snake Hookah",
  foundingDate: "2020",
  address: { "@type": "PostalAddress", addressLocality: "Київ", addressCountry: "UA" },
  numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
  sameAs: ["https://www.instagram.com/snake.hookah"],
  description: "Українська майстерня кальянів ручної роботи. Київ, з 2020 року.",
};

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <SmoothScroll>
          <Header locale={locale} dict={dict} />
          <main className="flex-1">{props.children}</main>
          <Footer locale={locale} dict={dict} />
          <CartDrawer locale={locale} dict={dict} />
        </SmoothScroll>
      </body>
    </html>
  );
}
