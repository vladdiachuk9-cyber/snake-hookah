import "server-only";
import type { Locale } from "./i18n";
import type { Dictionary } from "./dictionaries/ua";

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  ua: () => import("./dictionaries/ua").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
  ru: () => import("./dictionaries/ru").then((m) => m.default),
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return loaders[locale]();
}
