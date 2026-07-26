import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Accessory } from "@/lib/data/accessories";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { formatUah, formatUsd } from "@/lib/format";

export function AccessoryCard({
  accessory,
  locale,
  dict,
}: {
  accessory: Accessory;
  locale: Locale;
  dict: Dictionary;
}) {
  const image = accessory.images[0];
  const categoryLabel =
    accessory.category === "Leather Hose"
      ? dict.accessories.categoryLeather
      : accessory.category === "Snake Hose"
        ? dict.accessories.categorySnake
        : dict.accessories.categoryBowl;

  return (
    <Link href={`/${locale}/accessories/${accessory.slug}`} className="flex flex-col">
      <div className="gallery" style={{ aspectRatio: "2 / 3", padding: "var(--s-4)" }}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col" style={{ gap: 6, paddingTop: "var(--s-3)" }}>
        <span className="badge" style={{ width: "fit-content" }}>{categoryLabel}</span>
        <h3 style={{ fontSize: "var(--t-body)", fontWeight: 600 }}>{accessory.color}</h3>
        <div className="flex items-center justify-between">
          <span style={{ fontFamily: "var(--font-num)" }}>
            <span style={{ color: "var(--gold)", fontSize: "var(--t-sm)" }}>{formatUah(accessory.priceUah)}</span>{" "}
            <span style={{ color: "var(--text-mute)", fontSize: "var(--t-xs)" }}>{formatUsd(accessory.priceUsd)}</span>
          </span>
          <span style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)" }}>{dict.product.viewProduct} →</span>
        </div>
      </div>
    </Link>
  );
}
