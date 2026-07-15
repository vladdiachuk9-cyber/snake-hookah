import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import type { Product } from "@/lib/data/products";
import { ProductCard } from "./ProductCard";

export function Related({ products, locale, dict }: { products: Product[]; locale: Locale; dict: Dictionary }) {
  if (products.length === 0) return null;

  return (
    <div>
      <h2 style={{ fontSize: "var(--t-h2)", marginBottom: "var(--s-5)" }}>{dict.product.related}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3" style={{ gap: "var(--s-6)" }}>
        {products.map((product) => (
          <ProductCard
            key={product.sku}
            product={product}
            locale={locale}
            soonLabel={dict.product.soon}
            viewLabel={dict.product.viewProduct}
            compareLabel={dict.product.compare}
          />
        ))}
      </div>
    </div>
  );
}
