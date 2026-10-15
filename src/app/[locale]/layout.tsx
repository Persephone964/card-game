import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Heritage Cards",
  description:
    "A digital museum of collectible heritage cards. Discover the world's historical monuments through beautifully designed cards.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const isRtl = locale === "ar";
  const lang = locale;
  const dir = isRtl ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <body
        className={`min-h-screen bg-ink-950 text-parchment antialiased ${
          isRtl ? "font-arabic" : "font-sans"
        }`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
