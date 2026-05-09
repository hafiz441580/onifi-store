"use client";

import { useState } from "react";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileMenu } from "@/components/mobile-menu";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 -z-10 grid-overlay opacity-50" />
      <AnnouncementBar />
      <Header onOpenMenu={() => setMobileOpen(true)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
