"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeLabel, type Locale } from "@/lib/i18n";
import { setLocaleCookie } from "@/lib/locale-cookie";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    setLocaleCookie(next);
    const rest = pathname.split("/").slice(2).join("/");
    router.push(`/${next}${rest ? `/${rest}` : ""}`);
  }

  return (
    <div className="flex items-center gap-1.5 text-xs tracking-wide" aria-label="language">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => switchTo(l)}
            aria-current={l === locale}
            className="cursor-pointer transition-colors"
            style={{ color: l === locale ? "var(--gold)" : "var(--text-mute)" }}
          >
            {localeLabel[l]}
          </button>
          {i < locales.length - 1 && <span style={{ color: "var(--line)" }}>/</span>}
        </span>
      ))}
    </div>
  );
}
