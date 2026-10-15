import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="mt-24 border-t border-gold-500/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-display text-lg font-bold text-gold-400">
              ◆ {t("common.heroTitle")}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-parchment/60">
              {t("common.footerAbout")}
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-parchment/80">
              {t("common.navExplore")}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-parchment/50">
              <li><Link href="/explore" className="hover:text-gold-400">{t("common.navExplore")}</Link></li>
              <li><Link href="/collection" className="hover:text-gold-400">{t("common.navCollection")}</Link></li>
              <li><Link href="/journeys" className="hover:text-gold-400">{t("common.navJourneys")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-parchment/80">
              {t("common.about")}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-parchment/50">
              <li className="hover:text-gold-400">UNESCO World Heritage</li>
              <li className="hover:text-gold-400">Iraqi Heritage</li>
              <li className="hover:text-gold-400">Academic Sources</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gold-500/10 pt-6 text-center text-xs text-parchment/40">
          © {new Date().getFullYear()} World Heritage Cards. Educational platform.
        </div>
      </div>
    </footer>
  );
}
