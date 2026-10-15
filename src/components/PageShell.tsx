"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CollectionProvider } from "@/lib/collection-store";

export function PageShell({
  children,
  totalMonuments,
}: {
  children: React.ReactNode;
  totalMonuments: number;
}) {
  return (
    <CollectionProvider totalMonuments={totalMonuments}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </CollectionProvider>
  );
}
