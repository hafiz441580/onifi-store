import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/storefront";
import { categoryStats } from "@/lib/data";

export default function CategoriesPage() {
  const items = categoryStats();

  return (
    <>
      <PageHero eyebrow="Categories" title="Premium category pages built around how customers shop." description="Each collection has its own landing page, visual identity, product count, and direct path into filtered shopping." />
      <section className="container-shell section-padding">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`} className="glass-panel group overflow-hidden rounded-[2rem] transition hover:-translate-y-1">
              <Image src={category.image} alt={category.name} width={900} height={900} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold">{category.name}</h2>
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">{category.productCount} products</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">{category.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-medium text-muted">
                      {highlight}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]">
                  View collection <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
