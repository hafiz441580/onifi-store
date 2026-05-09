"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Button({ children, className, href, variant = "primary", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; className?: string; href?: string; variant?: "primary" | "secondary" | "ghost"; }) {
  const baseClassName = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
    variant === "primary" && "bg-[var(--foreground)] text-[var(--background)] shadow-[0_16px_32px_rgba(10,13,20,0.16)] hover:-translate-y-0.5",
    variant === "secondary" && "glass-panel text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent-strong)]",
    variant === "ghost" && "text-[var(--foreground)] hover:bg-[var(--accent-soft)]",
    className
  );

  if (href) {
    return <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}><Link href={href} className={baseClassName}>{children}</Link></motion.div>;
  }

  return <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}><button className={baseClassName} {...props}>{children}</button></motion.div>;
}

export function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string; }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title mt-4 font-semibold">{title}</h2>
      </div>
      <p className="max-w-xl text-sm leading-7 text-muted">{description}</p>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="glass-panel animate-pulse rounded-[1.75rem] p-4">
      <div className="h-64 rounded-[1.25rem] bg-white/20 dark:bg-white/5" />
      <div className="mt-4 h-4 w-24 rounded-full bg-white/20 dark:bg-white/5" />
      <div className="mt-3 h-6 w-2/3 rounded-full bg-white/20 dark:bg-white/5" />
      <div className="mt-3 h-4 w-full rounded-full bg-white/20 dark:bg-white/5" />
      <div className="mt-2 h-4 w-4/5 rounded-full bg-white/20 dark:bg-white/5" />
    </div>
  );
}
