import type { Product } from "@/lib/data/products";
import type { Dictionary } from "@/lib/dictionaries/ua";

export function Specs({ product, dict }: { product: Product; dict: Dictionary }) {
  const rows: [string, string][] = [
    [dict.product.sku, product.sku],
    [dict.product.line, product.line],
    [dict.product.height, `${product.heightCm} см`],
    [dict.product.shaft, product.shaft],
    ...(product.wood ? ([[dict.product.wood, product.wood]] as [string, string][]) : []),
    [dict.product.finish, product.finish],
    [dict.product.hose, product.hose],
    [dict.product.weight, `${product.weightKg} кг`],
    [dict.product.countryOfOrigin, product.countryOfOrigin],
    [dict.product.warranty, dict.product.warrantyValue],
  ];

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label} style={{ borderTop: "1px solid var(--line-soft)" }}>
            <td style={{ padding: "12px 0", color: "var(--text-mute)", fontSize: "var(--t-sm)", width: "44%" }}>{label}</td>
            <td style={{ padding: "12px 0", color: "var(--text)", fontSize: "var(--t-sm)" }}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
