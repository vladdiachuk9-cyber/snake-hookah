import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer style={{ background: "var(--ink-2)", borderTop: "1px solid var(--line)" }}>
      <div className="wrap grid grid-cols-1 md:grid-cols-4" style={{ paddingBlock: "var(--s-8)", gap: "var(--s-7)" }}>
        <div className="flex flex-col" style={{ gap: "var(--s-4)" }}>
          <Image
            src="/images/brand/logo-light.webp"
            alt="Snake Hookah"
            width={160}
            height={54}
            style={{ height: 28, width: "auto", alignSelf: "flex-start" }}
          />
          <p style={{ fontSize: "var(--t-sm)", color: "var(--text-mute)" }}>{dict.footer.madeIn}</p>
        </div>

        <div className="flex flex-col" style={{ gap: "var(--s-3)" }}>
          <span className="badge" style={{ width: "fit-content" }}>{dict.footer.navTitle}</span>
          <Link href={`/${locale}/catalog`} style={{ fontSize: "var(--t-sm)", color: "var(--text-body)" }}>{dict.nav.catalog}</Link>
          <Link href={`/${locale}/about`} style={{ fontSize: "var(--t-sm)", color: "var(--text-body)" }}>{dict.nav.about}</Link>
          <Link href={`/${locale}/production`} style={{ fontSize: "var(--t-sm)", color: "var(--text-body)" }}>{dict.nav.production}</Link>
          <Link href={`/${locale}/b2b`} style={{ fontSize: "var(--t-sm)", color: "var(--text-body)" }}>B2B</Link>
        </div>

        <div className="flex flex-col" style={{ gap: "var(--s-3)" }}>
          <span className="badge" style={{ width: "fit-content" }}>{dict.footer.contactsTitle}</span>
          <Link href={`/${locale}/contact`} style={{ fontSize: "var(--t-sm)", color: "var(--text-body)" }}>{dict.contact.formTitle}</Link>
          <span style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)" }}>{dict.contact.address}</span>
        </div>

        <div className="flex flex-col" style={{ gap: "var(--s-3)" }}>
          <span className="badge" style={{ width: "fit-content" }}>{dict.footer.socialTitle}</span>
          <a
            href="https://www.instagram.com/snake.hookah"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "var(--t-sm)", color: "var(--text-body)" }}
          >
            @snake.hookah
          </a>
        </div>
      </div>

      <div className="wrap flex items-center justify-between" style={{ paddingBlock: "var(--s-5)", borderTop: "1px solid var(--line-soft)", fontSize: "var(--t-xs)", color: "var(--text-mute)" }}>
        <span>Snake Hookah © {new Date().getFullYear()}. {dict.footer.rights}</span>
      </div>
    </footer>
  );
}
