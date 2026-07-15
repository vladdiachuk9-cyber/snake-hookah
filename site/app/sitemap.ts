import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { products } from "@/lib/data/products";

// Set NEXT_PUBLIC_SITE_URL once the site has a real domain — example.com is
// a deliberate placeholder (IANA reserved), not a guessed real domain.
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const STATIC_PATHS = ["", "/catalog", "/about", "/production", "/b2b", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of STATIC_PATHS) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
    for (const product of products) {
      entries.push({
        url: `${BASE_URL}/${locale}/products/${product.slug}`,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
