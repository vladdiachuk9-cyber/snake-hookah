export const locales = ["ua", "en", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ua";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** A string that exists for sure in `ua` and may be translated later. */
export type Localized = { ua: string; en?: string; ru?: string };

export function pick(value: Localized, locale: Locale): string {
  return value[locale] ?? value.ua;
}

export const localeLabel: Record<Locale, string> = {
  ua: "UA",
  en: "EN",
  ru: "RU",
};
