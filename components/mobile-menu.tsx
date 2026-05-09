"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { navigation } from "@/lib/data";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/35" onClick={onClose} aria-label="Close menu" />
          <motion.aside initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", stiffness: 220, damping: 26 }} className="fixed left-0 top-0 z-[60] flex h-full w-[20rem] max-w-[90vw] flex-col gap-6 border-r border-[var(--line)] bg-[color:var(--panel-strong)] p-6 backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold tracking-[0.28em]">ONIFI</div>
                <div className="text-xs text-muted">Premium Essentials Store</div>
              </div>
              <button onClick={onClose} className="glass-panel rounded-full p-2"><X className="h-5 w-5" /></button>
            </div>
            <form action="/shop" className="glass-panel flex items-center gap-3 rounded-full px-4 py-3">
              <input name="query" className="w-full bg-transparent text-sm outline-none placeholder:text-muted" placeholder="Search products" aria-label="Search products" />
            </form>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => <Link key={item.href} href={item.href} className="glass-panel rounded-2xl px-4 py-4 text-sm font-medium" onClick={onClose}>{item.label}</Link>)}
              <Link href="/cart" className="glass-panel rounded-2xl px-4 py-4 text-sm font-medium" onClick={onClose}>Cart</Link>
              <Link href="/wishlist" className="glass-panel rounded-2xl px-4 py-4 text-sm font-medium" onClick={onClose}>Wishlist</Link>
              <Link href="/account" className="glass-panel rounded-2xl px-4 py-4 text-sm font-medium" onClick={onClose}>Account</Link>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
