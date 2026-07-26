import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { accessories, getAccessoryBySlug, getRelatedAccessories } from "@/lib/data/accessories";
import { localizeAccessory, localizeAccessories } from "@/lib/data/accessories-i18n";
import { formatUah, formatUsd } from "@/lib/format";
import { Gallery } from "@/components/product/Gallery";
import { AddToCart } from "@/components/product/AddToCart";
import { AccessoryCard } from "@/components/accessories/AccessoryCard";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return accessories.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/[locale]/accessories/[slug]">): Promise<Metadata> {
  const { locale, slug } = await props.params;
  const raw = getAccessoryBySlug(slug);
  if (!raw) return {};
  const accessory = localizeAccessory(raw, isLocale(locale) ? locale : "ua");
  return {
    title: accessory.seoTitle,
    description: accessory.seoDescription,
    alternates: { canonical: `/${locale}/accessories/${accessory.slug}` },
    openGraph: {
      title: accessory.seoTitle,
      description: accessory.seoDescription,
      images: accessory.images[0]
        ? [{ url: accessory.images[0].src, width: 1200, height: 1500, alt: accessory.name }, { url: "/og-image.jpg", width: 1200, height: 630, alt: "Snake Hookah" }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      images: accessory.images[0] ? [accessory.images[0].src] : ["/og-image.jpg"],
    },
  };
}

export default async function AccessoryPage(props: PageProps<"/[locale]/accessories/[slug]">) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) notFound();

  const raw = getAccessoryBySlug(slug);
  if (!raw) notFound();
  const accessory = localizeAccessory(raw, locale);

  const dict = await getDictionary(locale);
  const related = localizeAccessories(getRelatedAccessories(raw), locale);
  const categoryLabel = accessory.category === "Leather Hose" ? dict.accessories.categoryLeather : dict.accessories.categorySnake;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: accessory.name,
    sku: accessory.sku,
    description: accessory.seoDescription,
    brand: { "@type": "Brand", name: "Snake Hookah" },
    image: accessory.images.map((img) => img.src),
    offers: {
      "@type": "Offer",
      priceCurrency: "UAH",
      price: accessory.priceUah,
      availability: "https://schema.org/InStock",
    },
  };

  const specRows: [string, string][] = [
    [dict.product.sku, accessory.sku],
    [dict.accessories.color, accessory.color],
    [dict.accessories.length, `${accessory.lengthCm} ${dict.product.unitCm}`],
    [dict.accessories.material, accessory.material],
    [dict.accessories.connector, accessory.connector],
  ];

  return (
    <div className="wrap" style={{ paddingBlock: "var(--s-7)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "var(--s-8)" }}>
        <Reveal>
          <Gallery images={accessory.images} soonLabel={dict.product.soon} />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col">
          <span className="badge" style={{ width: "fit-content" }}>{categoryLabel}</span>
          <h1 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{accessory.name}</h1>

          <div className="flex items-baseline" style={{ gap: "var(--s-3)", marginTop: "var(--s-4)" }}>
            <span className="price">
              {formatUah(accessory.priceUah)}
              <small>{formatUsd(accessory.priceUsd)}</small>
            </span>
          </div>

          <span className="stock" style={{ marginTop: "var(--s-2)" }}>{dict.product.inStock}</span>

          <p style={{ color: "var(--text-body)", marginTop: "var(--s-5)", maxWidth: 480 }}>{accessory.description[0]}</p>

          <div style={{ marginTop: "var(--s-6)" }}>
            <AddToCart
              sku={accessory.sku}
              slug={accessory.slug}
              name={accessory.name}
              priceUsd={accessory.priceUsd}
              priceUah={accessory.priceUah}
              image={accessory.images[0]?.src ?? "/images/brand/mark-light.webp"}
              dict={dict}
              kind="accessory"
            />
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]" style={{ gap: "var(--s-8)", marginTop: "var(--s-9)" }}>
        <Reveal>
          <h2 style={{ fontSize: "var(--t-h2)", marginBottom: "var(--s-4)" }}>{dict.product.description}</h2>
          <div className="flex flex-col" style={{ gap: "var(--s-4)" }}>
            {accessory.description.map((paragraph, i) => (
              <p key={i} style={{ color: "var(--text-body)" }}>{paragraph}</p>
            ))}
          </div>

          <ul style={{ marginTop: "var(--s-6)", display: "flex", flexDirection: "column", gap: 8 }}>
            {accessory.features.map((feature) => (
              <li key={feature} className="flex items-start" style={{ gap: 8, color: "var(--text-body)", fontSize: "var(--t-sm)" }}>
                <span style={{ color: "var(--gold)" }}>—</span>
                {feature}
              </li>
            ))}
          </ul>

          <h2 style={{ fontSize: "var(--t-h2)", marginTop: "var(--s-7)", marginBottom: "var(--s-4)" }}>{dict.accessories.care}</h2>
          <p style={{ color: "var(--text-body)" }}>{accessory.care}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 style={{ fontSize: "var(--t-h2)", marginBottom: "var(--s-4)" }}>{dict.product.specifications}</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {specRows.map(([label, value]) => (
                <tr key={label} style={{ borderTop: "1px solid var(--line-soft)" }}>
                  <td style={{ padding: "12px 0", color: "var(--text-mute)", fontSize: "var(--t-sm)", width: "44%" }}>{label}</td>
                  <td style={{ padding: "12px 0", color: "var(--text)", fontSize: "var(--t-sm)" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>

      {related.length > 0 && (
        <Reveal style={{ marginTop: "var(--s-9)" }}>
          <h2 style={{ fontSize: "var(--t-h2)", marginBottom: "var(--s-5)" }}>{dict.accessories.related}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3" style={{ gap: "var(--s-6)" }}>
            {related.map((a) => (
              <AccessoryCard key={a.sku} accessory={a} locale={locale} dict={dict} />
            ))}
          </div>
        </Reveal>
      )}
    </div>
  );
}
