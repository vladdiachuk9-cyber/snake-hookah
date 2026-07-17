"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { useCartStore, cartTotals } from "@/lib/cart-store";
import { useWishlistStore } from "@/lib/wishlist-store";
import { useHydratedCartItems } from "@/lib/use-cart-items";
import { useHydratedStore } from "@/lib/use-hydrated-store";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { QuickSearch } from "@/components/layout/QuickSearch";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = useHydratedCartItems();
  const openCart = useCartStore((s) => s.open);
  const count = cartTotals(items).qty;
  const wishlistCount = useHydratedStore(useWishlistStore, (s) => s.skus.length, 0);

  const nav = [
    { href: `/${locale}/catalog`, label: dict.nav.catalog, mega: true },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/production`, label: dict.nav.production },
    { href: `/${locale}/b2b`, label: "B2B" },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md relative"
      style={{ background: "color-mix(in srgb, var(--ink) 88%, transparent)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap flex items-center justify-between" style={{ height: 76 }}>
        <Link href={`/${locale}`} className="flex items-center gap-2 shrink-0" aria-label="Snake Hookah">
          <Image src="/images/brand/logo-light.webp" alt="Snake Hookah" width={160} height={54} priority style={{ height: 30, width: "auto" }} />
        </Link>

        <nav className="hidden md:flex items-center" style={{ gap: "var(--s-6)" }}>
          {nav.map((item) =>
            item.mega ? (
              <div key={item.href} className="group">
                <Link href={item.href} className="text-sm transition-colors" style={{ color: "var(--text-body)" }}>
                  {item.label}
                </Link>
                <MegaMenu locale={locale} dict={dict} />
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="text-sm transition-colors" style={{ color: "var(--text-body)" }}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center" style={{ gap: "var(--s-4)" }}>
          <QuickSearch locale={locale} dict={dict} />
          <LanguageSwitcher locale={locale} />

          <Link
            href={`/${locale}/wishlist`}
            aria-label={dict.catalog.wishlistTitle}
            className="relative hidden sm:flex items-center justify-center"
            style={{ width: 32, height: 32, color: "var(--text)" }}
          >
            <HeartIcon />
            {wishlistCount > 0 && <Badge>{wishlistCount}</Badge>}
          </Link>

          <button
            type="button"
            onClick={openCart}
            aria-label={dict.header.cart}
            className="relative flex items-center justify-center cursor-pointer"
            style={{ width: 32, height: 32, color: "var(--text)" }}
          >
            <CartIcon />
            {count > 0 && <Badge>{count}</Badge>}
          </button>
          <button
            type="button"
            className="md:hidden flex items-center justify-center"
            style={{ width: 32, height: 32, color: "var(--text)" }}
            aria-label={dict.header.menu}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden wrap flex flex-col" style={{ gap: "var(--s-4)", paddingBottom: "var(--s-5)" }}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm"
              style={{ color: "var(--text-body)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="absolute -top-1 -right-1 flex items-center justify-center rounded-full"
      style={{ background: "var(--gold)", color: "var(--ink)", fontSize: 10, fontWeight: 700, width: 16, height: 16 }}
    >
      {children}
    </span>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 20.5s-7.5-4.6-10-9.3C.4 7.6 2.3 4 5.8 4c2 0 3.6 1.1 4.5 2.7L12 8.3l1.7-1.6C14.6 5.1 16.2 4 18.2 4c3.5 0 5.4 3.6 3.8 7.2-2.5 4.7-10 9.3-10 9.3Z" strokeLinejoin="round" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 6h2l2.4 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="21.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="21.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
      )}
    </svg>
  );
}
