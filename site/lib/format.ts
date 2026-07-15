export function formatUah(n: number): string {
  return new Intl.NumberFormat("uk-UA").format(n) + " грн";
}

export function formatUsd(n: number): string {
  return "$" + new Intl.NumberFormat("en-US").format(n);
}
