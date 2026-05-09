import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Truck } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductGrid, RatingStars } from "@/components/storefront";
import { AddToCartPanel } from "@/components/storefront-actions";
import { findProduct, productStructuredData, products, relatedProducts } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image]
    }
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();
  const related = relatedProducts(product.category, product.slug);

  return (
    <>
      <section className="container-shell section-padding pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 md:grid-cols-[1fr_4fr]">
            <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
              {product.gallery.map((image) => (
                <Image key={image} src={image} alt={product.name} width={400} height={400} className="h-24 w-full rounded-[1.2rem] object-cover" />
              ))}
            </div>
            <div className="glass-panel overflow-hidden rounded-[2rem] p-3">
              <Image src={product.image} alt={product.name} width={1100} height={1100} className="h-full min-h-[32rem] w-full rounded-[1.5rem] object-cover" priority />
            </div>
          </div>
          <div className="glass-panel rounded-[2rem] p-8">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted">
              <span>{product.category}</span>
              <span>•</span>
              <span>{product.sku}</span>
            </div>
            <h1 className="mt-4 font-[var(--font-serif)] text-5xl leading-none tracking-[-0.05em]">{product.name}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <RatingStars rating={product.rating} />
              <span className="text-sm text-muted">{product.rating} rating • {product.reviews} verified reviews</span>
              <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">{product.stock}</span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-3xl font-semibold">{formatPrice(product.price)}</span>
              {product.originalPrice && <span className="text-lg text-muted line-through">{formatPrice(product.originalPrice)}</span>}
            </div>
            <p className="mt-6 text-sm leading-8 text-muted">{product.longDescription}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[var(--line)] px-3 py-2 text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8"><AddToCartPanel productId={product.id} productName={product.name} /></div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature} className="glass-panel rounded-[1.2rem] px-4 py-3 text-sm">
                  {feature}
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-3 border-t border-[var(--line)] pt-6">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-muted">{spec.label}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="glass-panel rounded-[1.4rem] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold"><Truck className="h-4 w-4 text-[var(--accent)]" /> Shipping</div>
                <p className="mt-2 text-sm leading-7 text-muted">Most in-stock orders dispatch within 1 business day from the U.S.</p>
              </div>
              <div className="glass-panel rounded-[1.4rem] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold"><ShieldCheck className="h-4 w-4 text-[var(--accent)]" /> Purchase confidence</div>
                <p className="mt-2 text-sm leading-7 text-muted">Secure checkout, tracked delivery, and a 30-day return window on eligible items.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-shell section-padding">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="glass-panel rounded-[2rem] p-6">
            <div className="eyebrow">Featured Review</div>
            <div className="mt-4"><RatingStars rating={product.featuredReview.rating} /></div>
            <p className="mt-5 text-lg leading-8">“{product.featuredReview.quote}”</p>
            <div className="mt-5">
              <div className="font-semibold">{product.featuredReview.name}</div>
              <div className="text-sm text-muted">{product.featuredReview.title}</div>
            </div>
          </div>
          <div className="glass-panel rounded-[2rem] p-6">
            <div className="eyebrow">About This Product</div>
            <p className="mt-4 text-sm leading-8 text-muted">{product.description} The product page combines detailed specifications, review proof, stock visibility, and direct purchase controls so the customer has enough context to convert without friction.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <span key={color} className="rounded-full bg-[var(--accent-soft)] px-3 py-2 text-xs font-semibold text-[var(--accent-strong)]">
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container-shell section-padding">
        <div className="mb-8">
          <div className="eyebrow">Related Products</div>
          <h2 className="section-title mt-4 font-semibold">More from {product.category}.</h2>
        </div>
        <ProductGrid items={related} />
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData(product)) }} />
    </>
  );
}
