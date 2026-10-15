"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { PageShell } from "@/components/PageShell";
import { journeys } from "@/data/journeys";
import { monuments } from "@/data/monuments";
import { HeritageCard } from "@/components/HeritageCard";
import { Link } from "@/i18n/routing";

export default function JourneysPage() {
  return (
    <PageShell totalMonuments={monuments.length}>
      <JourneysContent />
    </PageShell>
  );
}

function JourneysContent() {
  const t = useTranslations();
  const locale = useLocale() as "en" | "ar";
  const [activeJourney, setActiveJourney] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const journey = journeys.find((j) => j.slug === activeJourney);

  if (journey) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <button
          onClick={() => {
            setActiveJourney(null);
            setShowResults(false);
            setQuizAnswers({});
          }}
          className="mb-6 text-sm text-parchment/60 hover:text-gold-400"
        >
          ← {t("common.back")}
        </button>

        <div
          className="rounded-2xl border p-8"
          style={{
            borderColor: `${journey.accentColor}30`,
            background: `linear-gradient(135deg, ${journey.accentColor}08, transparent)`,
          }}
        >
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
            style={{ backgroundColor: `${journey.accentColor}20`, color: journey.accentColor }}
          >
            Learning Journey
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-parchment">
            {journey.title[locale]}
          </h1>
          <p className="mt-2 text-lg text-parchment/60">{journey.subtitle[locale]}</p>
          <p className="mt-4 text-parchment/70">{journey.description[locale]}</p>
        </div>

        {/* Steps */}
        <div className="mt-10 space-y-6">
          {journey.steps.map((step, i) => {
            const monument = monuments.find((m) => m.id === step.monumentId);
            if (!monument) return null;
            return (
              <div key={step.monumentId} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-ink-950"
                    style={{ backgroundColor: journey.accentColor }}
                  >
                    {i + 1}
                  </div>
                  {i < journey.steps.length - 1 && (
                    <div className="w-px flex-1 bg-gold-500/20" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-sm leading-relaxed text-parchment/80">
                    {step.narration[locale]}
                  </p>
                  <div className="mt-4 max-w-xs">
                    <HeritageCard monument={monument} locale={locale} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiz */}
        {journey.quiz && journey.quiz.length > 0 && (
          <div className="mt-10 rounded-2xl border border-gold-500/20 bg-ink-900/50 p-8">
            <h2 className="font-display text-2xl font-bold text-parchment">
              Quiz
            </h2>
            <div className="mt-6 space-y-8">
              {journey.quiz.map((q, qi) => (
                <div key={qi}>
                  <p className="font-semibold text-parchment">{q.question[locale]}</p>
                  <div className="mt-3 space-y-2">
                    {q.options.map((opt, oi) => {
                      const selected = quizAnswers[`${qi}`] === oi;
                      const isCorrect = showResults && oi === q.correctIndex;
                      const isWrong = showResults && selected && oi !== q.correctIndex;
                      return (
                        <button
                          key={oi}
                          onClick={() =>
                            setQuizAnswers((prev) => ({ ...prev, [`${qi}`]: oi }))
                          }
                          disabled={showResults}
                          className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                            isCorrect
                              ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-300"
                              : isWrong
                              ? "border-rose-500/50 bg-rose-500/10 text-rose-300"
                              : selected
                              ? "border-gold-500/50 bg-gold-500/10 text-gold-300"
                              : "border-gold-500/10 bg-ink-800/50 text-parchment/70 hover:border-gold-500/30"
                          }`}
                        >
                          {opt[locale]}
                        </button>
                      );
                    })}
                  </div>
                  {showResults && (
                    <p className="mt-2 text-sm text-parchment/60">
                      {q.explanation[locale]}
                    </p>
                  )}
                </div>
              ))}
            </div>
            {!showResults ? (
              <button
                onClick={() => setShowResults(true)}
                className="mt-6 rounded-lg bg-gold-500 px-6 py-2.5 text-sm font-semibold text-ink-950 hover:bg-gold-400"
              >
                Check Answers
              </button>
            ) : (
              <p className="mt-6 text-sm text-parchment/60">
                You got{" "}
                {journey.quiz.filter(
                  (q, i) => quizAnswers[`${i}`] === q.correctIndex
                ).length}{" "}
                / {journey.quiz.length} correct!
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold text-parchment">
          {t("common.navJourneys")}
        </h1>
        <p className="mt-2 text-parchment/60">
          Curated educational paths through world heritage
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {journeys.map((j) => (
          <button
            key={j.id}
            onClick={() => setActiveJourney(j.slug)}
            className="group relative overflow-hidden rounded-2xl border border-gold-500/10 bg-ink-900/50 p-6 text-left transition-all hover:border-gold-500/30 hover:shadow-lg"
            style={{ boxShadow: `inset 0 1px 0 ${j.accentColor}20` }}
          >
            <div
              className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at top right, ${j.accentColor}15, transparent 60%)`,
              }}
            />
            <div className="relative">
              <span
                className="inline-block h-2 w-8 rounded-full"
                style={{ backgroundColor: j.accentColor }}
              />
              <h3 className="mt-4 font-display text-xl font-bold text-parchment">
                {j.title.en}
              </h3>
              <p className="mt-2 text-sm text-parchment/60">
                {j.subtitle.en}
              </p>
              <p className="mt-3 text-xs text-parchment/40">
                {j.steps.length} monuments
                {j.quiz ? ` · ${j.quiz.length} quiz questions` : ""}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
