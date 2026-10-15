"use client";

import { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { PageShell } from "@/components/PageShell";
import { HeritageCard } from "@/components/HeritageCard";
import { monuments } from "@/data/monuments";
import { collections } from "@/data/collections";
import { useCollection } from "@/lib/collection-store";
import type { Rarity, MonumentCategory } from "@/types";
import { rarityOrder } from "@/lib/rarity";
import { Link } from "@/i18n/routing";

type SortOption = "name" | "date" | "recent";

export default function ExplorePage() {
  return (
    <PageShell totalMonuments={monuments.length}>
      <ExploreContent />
    </PageShell>
  );
}

function ExploreContent() {
  const t = useTranslations();
  const locale = useLocale() as "en" | "ar";
  const { collectedIds } = useCollection();
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState<string>("all");
  const [civilization, setCivilization] = useState<string>("all");
  const [period, setPeriod] = useState<string>("all");
  const [category, setCategory] = useState<string>("all");
  const [rarity, setRarity] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("recent");
  const [visible, setVisible] = useState(12);

  const countries = useMemo(
    () => Array.from(new Set(monuments.map((m) => m.country.name.en))).sort(),
    []
  );
  const civilizations = useMemo(
    () => Array.from(new Set(monuments.map((m) => m.civilization.en))).sort(),
    []
  );
  const periods = useMemo(
    () => Array.from(new Set(monuments.flatMap((m) => m.periods.map((p) => p.en)))).sort(),
    []
  );
  const categories = useMemo(
    () => Array.from(new Set(monuments.map((m) => m.category))).sort(),
    []
  );

  const filtered = useMemo(() => {
    let result = monuments.filter((m) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        m.names.official.en.toLowerCase().includes(q) ||
        m.names.official.ar.includes(query) ||
        m.names.alternatives.some(
          (a) =>
            a.en.toLowerCase().includes(q) || a.ar.includes(query)
        ) ||
        m.civilization.en.toLowerCase().includes(q);

      const matchesCountry = country === "all" || m.country.name.en === country;
      const matchesCiv = civilization === "all" || m.civilization.en === civilization;
      const matchesPeriod =
        period === "all" || m.periods.some((p) => p.en === period);
      const matchesCategory = category === "all" || m.category === category;
      const matchesRarity = rarity === "all" || m.rarity === rarity;

      return (
        matchesQuery &&
        matchesCountry &&
        matchesCiv &&
        matchesPeriod &&
        matchesCategory &&
        matchesRarity
      );
    });

    result = [...result].sort((a, b) => {
      if (sort === "name") return a.names.official.en.localeCompare(b.names.official.en);
      if (sort === "date") return (a.yearFrom ?? 0) - (b.yearFrom ?? 0);
      return b.addedAt.localeCompare(a.addedAt);
    });

    return result;
  }, [query, country, civilization, period, category, rarity, sort]);

  const visibleItems = filtered.slice(0, visible);

  const resetFilters = () => {
    setQuery("");
    setCountry("all");
    setCivilization("all");
    setPeriod("all");
    setCategory("all");
    setRarity("all");
    setSort("recent");
    setVisible(12);
  };

  const filterSelectClass =
    "w-full rounded-lg border border-gold-500/20 bg-ink-900/60 px-3 py-2 text-sm text-parchment focus:border-gold-500/50 focus:outline-none";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold text-parchment">
          {t("common.navExplore")}
        </h1>
        <p className="mt-2 text-parchment/60">
          {filtered.length} {t("common.monuments") || "monuments"}
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("common.search")}
          className="w-full rounded-xl border border-gold-500/20 bg-ink-900/60 px-5 py-3.5 text-parchment placeholder-parchment/40 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
        />
      </div>

      {/* Filters */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className={filterSelectClass}
        >
          <option value="all">{t("common.all")} {t("common.country")}</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          value={civilization}
          onChange={(e) => setCivilization(e.target.value)}
          className={filterSelectClass}
        >
          <option value="all">{t("common.all")} {t("common.civilization")}</option>
          {civilizations.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className={filterSelectClass}
        >
          <option value="all">{t("common.all")} {t("common.period")}</option>
          {periods.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={filterSelectClass}
        >
          <option value="all">{t("common.all")} {t("common.category")}</option>
          {categories.map((c) => (
            <option key={c} value={c}>{t(`category.${c}`)}</option>
          ))}
        </select>
        <select
          value={rarity}
          onChange={(e) => setRarity(e.target.value)}
          className={filterSelectClass}
        >
          <option value="all">{t("common.all")} {t("common.rarity")}</option>
          {rarityOrder.map((r) => (
            <option key={r} value={r}>{t(`rarity.${r}`)}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className={filterSelectClass}
        >
          <option value="recent">{t("common.recentlyAdded")}</option>
          <option value="name">{t("common.name")}</option>
          <option value="date">{t("common.oldest")}</option>
        </select>
      </div>

      <button
        onClick={resetFilters}
        className="mb-8 text-sm text-gold-400 hover:text-gold-300"
      >
        ↺ {t("common.reset")}
      </button>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gold-500/20 py-20">
          <p className="text-parchment/60">{t("common.noResults")}</p>
          <button
            onClick={resetFilters}
            className="mt-4 rounded-lg bg-gold-500/20 px-4 py-2 text-sm text-gold-300 hover:bg-gold-500/30"
          >
            {t("common.reset")}
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {visibleItems.map((m) => (
              <HeritageCard
                key={m.id}
                monument={m}
                locale={locale}
                inCollection={collectedIds.has(m.id)}
              />
            ))}
          </div>
          {visible < filtered.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisible((v) => v + 12)}
                className="rounded-lg border border-gold-500/30 px-8 py-3 text-sm font-semibold text-gold-300 transition-colors hover:bg-gold-500/10"
              >
                Load More ({filtered.length - visible} remaining)
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
