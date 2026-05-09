import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero, ProductGrid } from "@/components/storefront";
import { categories, findCategory, productsByCategory } from "@/lib/data";

export async function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = findCategory(slug);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: `${category.name} | ONIFI VENTURES LLC`,
      description: category.hero,
      images: [category.image]
    }
  };
}

export default async function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = findCategory(slug);
  if (!category) notFound();
  const items = productsByCategory(slug);

  return (
    <>
      <PageHero eyebrow="Category" title={category.name} description={category.hero} />
      <section className="container-shell section-padding">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="glass-panel overflow-hidden rounded-[2rem]">
            <Image src={category.image} alt={category.name} width={1200} height={1200} className="h-full min-h-[22rem] w-full object-cover" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {category.highlights.map((highlight) => (
              <div key={highlight} className="glass-panel rounded-[1.6rem] p-5">
                <div className="text-sm uppercase tracking-[0.22em] text-muted">Category Highlight</div>
                <div className="mt-3 text-xl font-semibold">{highlight}</div>
              </div>
            ))}
            <div className="glass-panel rounded-[1.6rem] p-5 sm:col-span-3">
              <div className="text-sm uppercase tracking-[0.22em] text-muted">Why it converts</div>
              <p className="mt-3 max-w-3xl text-sm leading-8 text-muted">{category.description} This category page is designed to support discovery, strong product scanning, and premium presentation on both desktop and mobile layouts.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-shell pb-20">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="eyebrow">Collection</div>
            <h2 className="section-title mt-4 font-semibold">{items.length} products in {category.name}.</h2>
          </div>
        </div>
        <ProductGrid items={items} />
      </section>
    </>
  );
}
