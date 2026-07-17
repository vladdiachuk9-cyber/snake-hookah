import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { getProductBySlug, products, getRelatedProducts } from "@/lib/data/products";
import { formatUah, formatUsd } from "@/lib/format";
import { Gallery } from "@/components/product/Gallery";
import { AddToCart } from "@/components/product/AddToCart";
import { Specs } from "@/components/product/Specs";
import { Faq } from "@/components/product/Faq";
import { Related } from "@/components/product/Related";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/[locale]/products/[slug]">): Promise<Metadata> {
  const { locale, slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: { canonical: `/${locale}/products/${product.slug}` },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      images: product.images[0]
        ? [{ url: product.images[0].src, width: 1400, height: 2100, alt: product.name }, { url: "/og-image.jpg", width: 1200, height: 630, alt: "Snake Hookah" }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      images: product.images[0] ? [product.images[0].src] : ["/og-image.jpg"],
    },
  };
}

export default async function ProductPage(props: PageProps<"/[locale]/products/[slug]">) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) notFound();

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const dict = await getDictionary(locale);
  const related = getRelatedProducts(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.sku,
    description: product.seoDescription,
    brand: { "@type": "Brand", name: "Snake Hookah" },
    image: product.images.map((img) => img.src),
    offers: {
      "@type": "Offer",
      priceCurrency: "UAH",
      price: product.priceUah,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="wrap" style={{ paddingBlock: "var(--s-7)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "var(--s-8)" }}>
        <Reveal>
          <Gallery images={product.images} video={product.video} soonLabel={dict.product.soon} />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col">
          <span className="badge" style={{ width: "fit-content" }}>{product.line}</span>
          <h1 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{product.name}</h1>

          <div className="flex items-baseline" style={{ gap: "var(--s-3)", marginTop: "var(--s-4)" }}>
            <span className="price">
              {formatUah(product.priceUah)}
              <small>{formatUsd(product.priceUsd)}</small>
            </span>
          </div>

          <span className="stock" style={{ marginTop: "var(--s-2)" }}>{dict.product.inStock}</span>

          <p style={{ color: "var(--text-body)", marginTop: "var(--s-5)", maxWidth: 480 }}>{product.description[0]}</p>

          <div style={{ marginTop: "var(--s-6)" }}>
            <AddToCart
              sku={product.sku}
              slug={product.slug}
              name={product.name}
              priceUsd={product.priceUsd}
              priceUah={product.priceUah}
              image={product.images[0]?.src ?? "/images/brand/mark-light.webp"}
              dict={dict}
            />
          </div>

          <p style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)", marginTop: "var(--s-4)" }}>{dict.product.bowlNote}</p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]" style={{ gap: "var(--s-8)", marginTop: "var(--s-9)" }}>
        <Reveal>
          <h2 style={{ fontSize: "var(--t-h2)", marginBottom: "var(--s-4)" }}>{dict.product.description}</h2>
          <div className="flex flex-col" style={{ gap: "var(--s-4)" }}>
            {product.description.map((paragraph, i) => (
              <p key={i} style={{ color: "var(--text-body)" }}>{paragraph}</p>
            ))}
          </div>

          <h2 style={{ fontSize: "var(--t-h2)", marginTop: "var(--s-7)", marginBottom: "var(--s-4)" }}>{dict.product.complectation}</h2>
          <p style={{ color: "var(--text-body)" }}>{product.bundle}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 style={{ fontSize: "var(--t-h2)", marginBottom: "var(--s-4)" }}>{dict.product.specifications}</h2>
          <Specs product={product} dict={dict} />
        </Reveal>
      </div>

      <Reveal style={{ marginTop: "var(--s-9)" }}>
        <Faq dict={dict} />
      </Reveal>

      <Reveal style={{ marginTop: "var(--s-9)" }}>
        <Related products={related} locale={locale} dict={dict} />
      </Reveal>
    </div>
  );
}
