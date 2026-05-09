"use client";

import Link from "next/link";
import { Menu, MoonStar, Search, ShoppingBag, UserRound, Heart, SunMedium } from "lucide-react";
import { navigation } from "@/lib/data";
import { useStore } from "@/components/store-provider";
import { useTheme } from "@/components/theme-provider";

export function Header({ onOpenMenu }: { onOpenMenu: () => void }) {
  const { cartCount, wishlist } = useStore();
  const { theme, mounted, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--panel-strong)]/90 backdrop-blur-2xl">
      <div className="container-shell flex items-center gap-4 py-4">
        <button className="glass-panel rounded-full p-3 md:hidden" onClick={onOpenMenu} aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--foreground)] text-sm font-bold tracking-[0.3em] text-[var(--background)]">O</div>
          <div>
            <div className="text-sm font-semibold tracking-[0.28em]">ONIFI</div>
            <div className="text-xs text-muted">Premium Essentials Store</div>
          </div>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-muted transition hover:text-[var(--foreground)]">{item.label}</Link>)}
        </nav>
        <div className="hidden flex-1 justify-end md:flex">
          <form action="/shop" className="glass-panel flex w-full max-w-sm items-center gap-3 rounded-full px-4 py-3">
            <Search className="h-4 w-4 text-muted" />
            <input name="query" className="w-full bg-transparent text-sm outline-none placeholder:text-muted" placeholder="Search beauty, baby, toys, household" aria-label="Search products" />
          </form>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="glass-panel rounded-full p-3" onClick={toggleTheme} aria-label="Toggle theme">
            {mounted && theme === "dark" ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
          </button>
          <Link href="/wishlist" className="glass-panel relative rounded-full p-3" aria-label="Wishlist">
            <Heart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--foreground)] px-1 text-[10px] text-[var(--background)]">{wishlist.length}</span>
          </Link>
          <Link href="/account" className="glass-panel rounded-full p-3" aria-label="Account"><UserRound className="h-5 w-5" /></Link>
          <Link href="/cart" className="glass-panel relative rounded-full p-3" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--foreground)] px-1 text-[10px] text-[var(--background)]">{cartCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
