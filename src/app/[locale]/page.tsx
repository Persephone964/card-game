import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/PageShell";
import { CardCarousel } from "@/components/CardCarousel";
import { HeritageCard } from "@/components/HeritageCard";
import { monuments } from "@/data/monuments";
import { collections } from "@/data/collections";
import { Link } from "@/i18n/routing";
import type { Locale } from "@/types";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("common");

  const featured = monuments.slice(0, 6);
  const recentlyAdded = [...monuments]
    .sort((a, b) => b.addedAt.localeCompare(a.addedAt))
    .slice(0, 6);

  const civilizations = Array.from(
    new Set(monuments.map((m) => m.civilization[locale]))
  ).slice(0, 4);

  return (
    <PageShell totalMonuments={monuments.length}>
      <HomeContent
        t={t}
        locale={locale}
        featured={featured}
        recentlyAdded={recentlyAdded}
        civilizations={civilizations}
        collections={collections}
        monuments={monuments}
      />
    </PageShell>
  );
}

function HomeContent({
  t,
  locale,
  featured,
  recentlyAdded,
  civilizations,
  collections,
  monuments,
}: {
  t: any;
  locale: Locale;
  featured: typeof monuments;
  recentlyAdded: typeof monuments;
  civilizations: string[];
  collections: typeof import("@/data/collections").collections;
  monuments: typeof import("@/data/monuments").monuments;
}) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${featured[0].images[0].url})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/80 to-ink-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
              {t("featuredCivilizations")}
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-parchment sm:text-7xl">
              <span className="text-gold-gradient">{t("heroTitle")}</span>
            </h1>
            <p className="mt-6 text-lg text-parchment/70 sm:text-xl">
              {t("heroDesc")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/explore"
                className="group inline-flex items-center gap-2 rounded-lg bg-gold-500 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/30"
              >
                {t("explore")}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/journeys"
                className="inline-flex items-center gap-2 rounded-lg border border-gold-500/30 px-7 py-3.5 text-sm font-semibold text-gold-300 transition-colors hover:bg-gold-500/10"
              >
                {t("journeys")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-parchment">
            {t("featuredMonuments")}
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </div>
        <CardCarousel monuments={featured} locale={locale} />
      </section>

      {/* Recently Added */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-parchment">
              {t("recentlyAddedMonuments")}
            </h2>
            <div className="mt-4 h-px w-24 bg-gradient-to-r from-gold-500 to-transparent" />
          </div>
          <Link
            href="/explore"
            className="hidden text-sm font-semibold text-gold-400 hover:text-gold-300 sm:inline"
          >
            {t("navExplore")} →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {recentlyAdded.map((m) => (
            <HeritageCard key={m.id} monument={m} locale={locale} />
          ))}
        </div>
      </section>

      {/* Featured Civilizations */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-parchment">
            {t("featuredCivilizations")}
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {civilizations.map((civ) => (
            <div
              key={civ}
              className="rounded-xl border border-gold-500/10 bg-ink-900/50 p-6 text-center transition-colors hover:border-gold-500/30"
            >
              <p className="font-display text-lg font-semibold text-parchment">
                {civ}
              </p>
              <p className="mt-2 text-xs text-parchment/50">
                {monuments.filter((m) => m.civilization[locale] === civ).length} {t("monuments") || "monuments"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Curated Collections */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-parchment">
            {t("curatedCollections")}
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.slice(0, 6).map((col) => (
            <Link
              key={col.id}
              href={`/explore?collection=${col.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gold-500/10 bg-ink-900/50 p-6 transition-all hover:border-gold-500/30 hover:shadow-lg"
              style={{ boxShadow: `inset 0 1px 0 ${col.accentColor}20` }}
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at top right, ${col.accentColor}15, transparent 60%)`,
                }}
              />
              <div className="relative">
                <span
                  className="inline-block h-2 w-8 rounded-full"
                  style={{ backgroundColor: col.accentColor }}
                />
                <h3 className="mt-4 font-display text-xl font-bold text-parchment">
                  {col.name[locale]}
                </h3>
                <p className="mt-2 text-sm text-parchment/60">
                  {col.description[locale]}
                </p>
                <p className="mt-4 text-xs text-parchment/40">
                  {col.monumentIds.length} {t("monuments") || "monuments"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
