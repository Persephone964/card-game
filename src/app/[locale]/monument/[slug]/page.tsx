import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/PageShell";
import { HeritageCard } from "@/components/HeritageCard";
import { monuments, getMonumentBySlug } from "@/data/monuments";
import { Link } from "@/i18n/routing";
import type { Claim, ClaimType, Locale } from "@/types";

interface PageProps {
  params: Promise<{ slug: string; locale: Locale }>;
}

export async function generateStaticParams() {
  return monuments.flatMap((m) =>
    ["en", "ar"].map((locale) => ({ slug: m.slug, locale }))
  );
}

export default async function MonumentDetailPage({ params }: PageProps) {
  const { slug, locale } = await params;
  const monument = getMonumentBySlug(slug);

  if (!monument) {
    notFound();
  }

  const t = await getTranslations("common");

  return (
    <PageShell totalMonuments={monuments.length}>
      <DetailContent monument={monument} t={t} locale={locale} />
    </PageShell>
  );
}

const claimTypeStyles: Record<ClaimType, { label: string; bg: string; text: string; border: string }> = {
  fact: { label: "Established Fact", bg: "bg-emerald-500/10", text: "text-emerald-300", border: "border-emerald-500/30" },
  interpretation: { label: "Scholarly Interpretation", bg: "bg-sky-500/10", text: "text-sky-300", border: "border-sky-500/30" },
  tradition: { label: "Historical Tradition", bg: "bg-amber-500/10", text: "text-amber-300", border: "border-amber-500/30" },
  debate: { label: "Unresolved Debate", bg: "bg-rose-500/10", text: "text-rose-300", border: "border-rose-500/30" },
};

function DetailContent({ monument, t, locale }: { monument: any; t: any; locale: Locale }) {
  const relatedMonuments = monument.relatedMonumentIds
    .map((id: string) => monuments.find((m) => m.id === id))
    .filter(Boolean);

  return (
    <article>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src={monument.images[0]?.url}
          alt={monument.images[0]?.alt[locale] || monument.names.official[locale]}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/30" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-5xl px-4 pb-10 sm:px-6">
            <Link
              href="/explore"
              className="mb-6 inline-flex items-center gap-1 text-sm text-parchment/60 hover:text-gold-400"
            >
              ← {t("back")}
            </Link>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="font-display text-4xl font-bold text-parchment sm:text-6xl">
                  {monument.names.official[locale]}
                </h1>
                {monument.names.alternatives.length > 0 && (
                  <p className="mt-2 text-parchment/60">
                    {monument.names.alternatives.map((a: any) => a[locale]).join(" · ")}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="rounded-full bg-gold-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-300 border border-gold-500/40">
                  {t(`rarity.${monument.rarity}`)}
                </span>
                <span className="font-mono text-xs text-parchment/40">
                  {monument.cardNumber}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        {/* Quick facts */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <QuickFact label={t("country")} value={monument.country.name[locale]} />
          <QuickFact label={t("location")} value={monument.region[locale]} />
          <QuickFact label={t("civilization")} value={monument.civilization[locale]} />
          <QuickFact label={t("date")} value={monument.approximateDate[locale]} />
        </div>

        {monument.coordinates && (
          <div className="mb-12 rounded-xl border border-gold-500/10 bg-ink-900/50 p-4">
            <p className="text-sm text-parchment/60">
              <span className="text-parchment/40">{t("coordinates")}: </span>
              {monument.coordinates.lat.toFixed(4)}, {monument.coordinates.lng.toFixed(4)}
            </p>
          </div>
        )}

        {/* UNESCO */}
        {monument.unesco?.inscribed && (
          <div className="mb-12 rounded-xl border border-gold-500/30 bg-gold-500/5 p-5">
            <p className="font-display text-sm font-bold text-gold-300">
              🏛️ UNESCO World Heritage Site
            </p>
            <p className="mt-1 text-sm text-parchment/70">
              Inscribed in {monument.unesco.year}
              {monument.unesco.criteria && (
                <span className="text-parchment/50">
                  {" "}· Criteria: {monument.unesco.criteria.join(", ")}
                </span>
              )}
            </p>
          </div>
        )}

        {/* Overview */}
        <Section title={t("overview")}>
          <ClaimsList claims={monument.overview} t={t} locale={locale} />
        </Section>

        {/* Architecture */}
        <Section title={t("architecture")}>
          <ClaimsList claims={monument.architecture} t={t} locale={locale} />
        </Section>

        {/* Significance */}
        <Section title={t("significance")}>
          <ClaimsList claims={monument.significance} t={t} locale={locale} />
        </Section>

        {/* Preservation */}
        {monument.preservation?.length > 0 && (
          <Section title={t("preservation")}>
            <ClaimsList claims={monument.preservation} t={t} locale={locale} />
          </Section>
        )}

        {/* Condition */}
        {monument.condition?.length > 0 && (
          <Section title={t("condition")}>
            <ClaimsList claims={monument.condition} t={t} locale={locale} />
          </Section>
        )}

        {/* Timeline */}
        {monument.timeline.length > 0 && (
          <Section title={t("timeline")}>
            <div className="relative border-l-2 border-gold-500/20 pl-6">
              {monument.timeline.map((event: any, i: number) => (
                <div key={i} className="mb-8 relative">
                  <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-gold-500 bg-ink-950" />
                  <p className="font-display text-sm font-bold text-gold-400">
                    {event.year}
                  </p>
                  <p className="mt-1 text-parchment/80">{event.title[locale]}</p>
                  {event.description && (
                    <p className="mt-1 text-sm text-parchment/50">{event.description[locale]}</p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Gallery */}
        {monument.images.length > 0 && (
          <Section title={t("gallery")}>
            <div className="grid gap-4 sm:grid-cols-2">
              {monument.images.map((img: any) => (
                <figure key={img.id} className="overflow-hidden rounded-xl">
                  <img
                    src={img.url}
                    alt={img.alt[locale]}
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                  />
                  {img.attribution && (
                    <figcaption className="mt-2 text-xs text-parchment/40">
                      {img.attribution[locale]}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </Section>
        )}

        {/* Related monuments */}
        {relatedMonuments.length > 0 && (
          <Section title={t("related")}>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {relatedMonuments.map((m: any) => (
                <HeritageCard key={m.id} monument={m} locale={locale} />
              ))}
            </div>
          </Section>
        )}

        {/* References */}
        {monument.sources.length > 0 && (
          <Section title={t("references")}>
            <ul className="space-y-3">
              {monument.sources.map((source: any) => (
                <li key={source.id} className="rounded-lg border border-gold-500/10 bg-ink-900/40 p-4">
                  <p className="font-medium text-parchment/90">{source.title[locale]}</p>
                  {source.institution && (
                    <p className="text-sm text-parchment/50">{source.institution[locale]}</p>
                  )}
                  {source.author && (
                    <p className="text-sm text-parchment/50">{source.author[locale]}</p>
                  )}
                  {source.url && (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm text-gold-400 hover:text-gold-300"
                    >
                      {source.url} ↗
                    </a>
                  )}
                  {source.notes && (
                    <p className="mt-2 text-xs text-parchment/40">{source.notes[locale]}</p>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>
    </article>
  );
}

function QuickFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gold-500/10 bg-ink-900/50 p-4">
      <p className="text-xs uppercase tracking-wider text-parchment/40">{label}</p>
      <p className="mt-1 text-sm font-semibold text-parchment">{value}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-5 font-display text-2xl font-bold text-parchment">
        {title}
      </h2>
      <div className="h-px w-16 bg-gold-500/30 mb-6" />
      {children}
    </section>
  );
}

function ClaimsList({ claims, t, locale }: { claims: Claim[]; t: any; locale: Locale }) {
  return (
    <div className="space-y-4">
      {claims.map((claim, i) => {
        const style = claimTypeStyles[claim.type];
        return (
          <div
            key={i}
            className={`rounded-xl border ${style.border} ${style.bg} p-4`}
          >
            <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${style.text} border ${style.border}`}>
              {style.label}
            </span>
            <p className="mt-2 leading-relaxed text-parchment/90">
              {claim.text[locale]}
            </p>
            {claim.sourceIds && claim.sourceIds.length > 0 && (
              <p className="mt-2 text-xs text-parchment/40">
                Sources: {claim.sourceIds.join(", ")}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
