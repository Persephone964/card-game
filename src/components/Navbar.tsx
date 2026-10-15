"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  const navItems = [
    { href: "/", label: t("common.navHome") },
    { href: "/explore", label: t("common.navExplore") },
    { href: "/collection", label: t("common.navCollection") },
    { href: "/journeys", label: t("common.navJourneys") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/10 bg-ink-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-gold-400">
            ◆ WHC
          </span>
          <span className="hidden font-display text-sm text-parchment/70 sm:inline">
            {t("common.heroTitle")}
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                pathname === item.href ? "text-gold-400" : "text-parchment/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="rounded-full border border-gold-500/30 px-3 py-1.5 text-xs font-semibold text-gold-300 transition-colors hover:bg-gold-500/10"
            aria-label="Toggle language"
          >
            {locale === "en" ? "العربية" : "English"}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="text-parchment md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gold-500/10 bg-ink-950/95 md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm transition-colors hover:bg-ink-800 ${
                  pathname === item.href ? "text-gold-400" : "text-parchment/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
