import type { Locale } from "./i18n";

// Kept outside any component/hook so the React Compiler's static analysis
// doesn't see this as a component mutating an external variable.
export function setLocaleCookie(locale: Locale) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
}
