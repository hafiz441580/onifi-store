"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, CheckCircle2, ChevronDown, Heart, Minus, Plus, Search, ShieldCheck, ShoppingBag, Sparkles, Star, Truck, WandSparkles, Zap } from "lucide-react";
import { bestSellers, categories, faqItems, featuredProducts, products, testimonials, trendingProducts, type Product } from "@/lib/data";
import { cn, formatPrice, slugify } from "@/lib/utils";
import { Button, SectionIntro } from "@/components/ui";
import { useStore } from "@/components/store-provider";
import { useToast } from "@/components/toast-provider";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay }
  };
}

export function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`h-4 w-4 ${index < Math.round(rating) ? "fill-current text-amber-400" : "text-slate-300 dark:text-slate-600"}`} />
      ))}
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const { showToast } = useToast();
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <motion.article {...fadeUp()} className="glass-panel group overflow-hidden rounded-[2rem]">
        <div className="relative overflow-hidden">
          <Image src={product.image} alt={product.name} width={900} height={900} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {product.badge && <span className="rounded-full bg-white/88 px-3 py-1 text-xs font-semibold text-slate-900">{product.badge}</span>}
            <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">{product.stock}</span>
          </div>
          <button onClick={() => toggleWishlist(product.id)} className="absolute right-4 top-4 rounded-full bg-black/40 p-2 text-white backdrop-blur-md" aria-label="Toggle wishlist">
            <Heart className={`h-4 w-4 ${isWishlisted(product.id) ? "fill-current" : ""}`} />
          </button>
        </div>
        <div className="p-5">
          <div className="mb-2 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.24em] text-muted">
            <span>{product.category}</span>
            <span>{product.reviews} reviews</span>
          </div>
          <Link href={`/products/${product.slug}`} className="text-xl font-semibold leading-tight transition hover:text-[var(--accent-strong)]">{product.name}</Link>
          <p className="mt-3 text-sm leading-7 text-muted">{product.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-medium text-muted">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold">{formatPrice(product.price)}</span>
                {product.originalPrice && <span className="text-sm text-muted line-through">{formatPrice(product.originalPrice)}</span>}
              </div>
              <div className="mt-2 flex items-center gap-2">
                <RatingStars rating={product.rating} />
                <span className="text-sm text-muted">{product.rating}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setPreviewOpen(true)} className="glass-panel rounded-full px-4 py-3 text-sm font-semibold transition hover:border-[var(--accent)]">
                Preview
              </button>
              <button
                onClick={() => {
                  addToCart(product.id);
                  showToast(`${product.name} added to cart`);
                }}
                className="rounded-full bg-[var(--foreground)] px-4 py-3 text-sm font-semibold text-[var(--background)] transition hover:scale-[1.02]"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingBag className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.article>
      <QuickPreview product={product} open={previewOpen} onClose={() => setPreviewOpen(false)} />
    </>
  );
}

export function QuickPreview({ product, open, onClose }: { product: Product; open: boolean; onClose: () => void }) {
  const { addToCart } = useStore();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[70] bg-black/45" aria-label="Close preview" />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} className="fixed inset-x-4 top-1/2 z-[80] mx-auto grid max-w-4xl -translate-y-1/2 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel-strong)] shadow-[var(--shadow-lg)] md:grid-cols-2">
            <Image src={product.image} alt={product.name} width={900} height={900} className="h-full min-h-80 w-full object-cover" />
            <div className="p-6 md:p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-muted">Quick Preview</div>
              <h3 className="mt-3 text-3xl font-semibold">{product.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{product.longDescription}</p>
              <div className="mt-5 flex items-center gap-3">
                <RatingStars rating={product.rating} />
                <span className="text-sm text-muted">{product.rating} • {product.reviews} reviews</span>
              </div>
              <div className="mt-5 text-2xl font-semibold">{formatPrice(product.price)}</div>
              <div className="mt-6 flex items-center gap-3">
                <div className="glass-panel flex items-center gap-3 rounded-full px-3 py-2">
                  <button onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-8 text-center">{quantity}</span>
                  <button onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button
                  className="flex-1"
                  onClick={() => {
                    addToCart(product.id, quantity);
                    showToast(`${product.name} added to cart`);
                    onClose();
                  }}
                >
                  Add to Cart
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span key={feature} className="rounded-full bg-[var(--accent-soft)] px-3 py-2 text-xs font-semibold text-[var(--accent-strong)]">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  if (items.length === 0) {
    return <div className="glass-panel rounded-[2rem] p-8 text-sm text-muted">No matching products were found. Try another category, collection, or search term.</div>;
  }
  return <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{items.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}

export function HomeSections() {
  const launchProducts = products.slice(0, 4);

  return (
    <>
      <section className="container-shell section-padding pt-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.18fr_0.82fr]">
          <motion.div {...fadeUp()} className="relative overflow-hidden rounded-[2.6rem] border border-[var(--line)] bg-[color:var(--panel-strong)] p-8 shadow-[var(--shadow-lg)] md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,181,116,0.22),transparent_28%),radial-gradient(circle_at_left,rgba(126,182,255,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_55%)]" />
            <div className="relative max-w-2xl">
              <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Premium U.S. eCommerce</span>
              <h1 className="mt-6 font-[var(--font-serif)] text-5xl leading-[0.94] tracking-[-0.05em] md:text-7xl">Beauty, baby, toys, and home essentials with a polished retail finish.</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">ONIFI curates realistic everyday products with premium merchandising, fast U.S. shipping cues, trust-first support, and a storefront experience optimized for conversion on every screen size.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/shop">Shop All Products <ArrowRight className="h-4 w-4" /></Button>
                <Button href="#products" variant="secondary" className="text-black">Shop Now</Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["21", "Curated demo products"],
                  ["4.7/5", "Average review rating"],
                  ["30 days", "Return window"]
                ].map(([value, label]) => (
                  <div key={label} className="glass-panel rounded-[1.5rem] p-4">
                    <div className="text-2xl font-semibold">{value}</div>
                    <div className="mt-1 text-sm text-muted">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="grid gap-4">
            <div className="glass-panel overflow-hidden rounded-[2rem] p-4">
              <Image src={launchProducts[0].image} alt={launchProducts[0].name} width={900} height={900} className="h-72 w-full rounded-[1.4rem] object-cover" priority />
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-muted">Launch Favorite</div>
                  <div className="mt-1 text-xl font-semibold">{launchProducts[0].name}</div>
                </div>
                <div className="text-lg font-semibold">{formatPrice(launchProducts[0].price)}</div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-[2rem] p-5">
                <div className="text-sm uppercase tracking-[0.22em] text-muted">Trust Badges</div>
                <div className="mt-3 text-2xl font-semibold">Secure checkout and clear support signals.</div>
                <div className="mt-4 flex items-center gap-3 text-sm text-muted"><ShieldCheck className="h-5 w-5 text-[var(--accent)]" /> SSL-ready storefront, order tracking, and visible return policies.</div>
              </div>
              <div className="glass-panel rounded-[2rem] p-5">
                <div className="text-sm uppercase tracking-[0.22em] text-muted">Responsive Merchandising</div>
                <div className="mt-3 text-2xl font-semibold">Shopify-style layouts built for mobile conversion.</div>
                <div className="mt-4 flex items-center gap-3 text-sm text-muted"><WandSparkles className="h-5 w-5 text-[var(--accent)]" /> Smooth hover states, faster browsing, and strong category discovery.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-shell section-padding">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            [ShieldCheck, "Secure Checkout", "Encrypted cart and checkout UX designed to reduce drop-off."],
            [Truck, "Fast U.S. Fulfillment", "Clear delivery messaging and free-shipping threshold cues."],
            [BadgeCheck, "Verified Reviews", "Ratings, stock states, and social proof displayed prominently."],
            [Zap, "Quick Discovery", "Search, category filters, and featured merchandising improve product findability."]
          ].map(([Icon, title, body], index) => (
            <motion.div key={title as string} {...fadeUp(index * 0.06)} className="glass-panel rounded-[2rem] p-6">
              <Icon className="h-6 w-6 text-[var(--accent)]" />
              <h2 className="mt-5 text-2xl font-semibold">{title as string}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{body as string}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="products" className="container-shell section-padding">
        <SectionIntro eyebrow="Featured Products" title="Premium cards with realistic commerce detail." description="Every product includes pricing, sale states, star ratings, stock visibility, tags, and direct add-to-cart entry points." />
        <ProductGrid items={featuredProducts} />
      </section>

      <section className="container-shell section-padding">
        <SectionIntro eyebrow="Categories" title="Clear category architecture for faster browsing." description="Dedicated category pages give each assortment its own hero, product count, and curated visual presentation." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div key={category.slug} {...fadeUp(index * 0.08)} className="glass-panel overflow-hidden rounded-[2rem]">
              <Image src={category.image} alt={category.name} width={900} height={900} className="h-72 w-full object-cover" />
              <div className="p-5">
                <div className="text-xl font-semibold">{category.name}</div>
                <p className="mt-3 text-sm leading-7 text-muted">{category.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.highlights.slice(0, 2).map((highlight) => (
                    <span key={highlight} className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                      {highlight}
                    </span>
                  ))}
                </div>
                <Link href={`/categories/${category.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]">
                  Explore category <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-shell section-padding">
        <SectionIntro eyebrow="Trending Now" title="High-interest products customers are watching." description="The trending collection keeps the storefront feeling active and helps surface premium-looking demo inventory." />
        <ProductGrid items={trendingProducts} />
      </section>

      <section className="container-shell section-padding">
        <SectionIntro eyebrow="Best Sellers" title="Repeat-purchase and gift-friendly winners." description="Best sellers add credibility to the shopping journey and provide strong cross-selling opportunities from the home page." />
        <ProductGrid items={bestSellers} />
      </section>

      <section className="container-shell section-padding">
        <div className="glass-panel overflow-hidden rounded-[2.5rem] p-8 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="eyebrow">Launch Offer</span>
              <h2 className="section-title mt-5 font-semibold">Conversion-focused bundles, savings callouts, and a cleaner path to checkout.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-muted">Use code <span className="font-semibold text-[var(--foreground)]">ONIFI10</span> for 10% off your first order. The cart and checkout flows include modern summary panels, trust badges, and mobile-friendly spacing throughout.</p>
              <div className="mt-8"><Button href="/checkout">Start Checkout</Button></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {products.slice(6, 10).map((product) => (
                <div key={product.id} className="glass-panel rounded-[1.6rem] p-3">
                  <Image src={product.image} alt={product.name} width={600} height={600} className="h-36 w-full rounded-[1.2rem] object-cover" />
                  <div className="mt-3 text-sm font-semibold">{product.name}</div>
                  <div className="mt-1 text-sm text-muted">{formatPrice(product.price)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell section-padding">
        <SectionIntro eyebrow="Verified Reviews" title="Trust-building content designed into the storefront." description="Premium visuals matter more when the review layer, policies, and support language look equally credible." />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div key={item.name} {...fadeUp(index * 0.1)} className="glass-panel rounded-[2rem] p-6">
              <RatingStars rating={item.rating} />
              <p className="mt-5 text-lg leading-8">“{item.quote}”</p>
              <div className="mt-6">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-muted">{item.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-shell section-padding">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel rounded-[2rem] p-8">
            <span className="eyebrow">Newsletter</span>
            <h2 className="mt-5 text-3xl font-semibold">Stay ahead of new arrivals and featured deals.</h2>
            <p className="mt-4 text-sm leading-7 text-muted">Receive collection drops, product highlights, and campaign offers in a clean commerce-ready signup section.</p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input className="glass-panel flex-1 rounded-full px-5 py-3 outline-none" placeholder="Enter your email" aria-label="Email address" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className="glass-panel overflow-hidden rounded-[1.6rem]">
                <Image src={product.image} alt={product.name} width={500} height={500} className="h-40 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell section-padding">
        <SectionIntro eyebrow="FAQ Preview" title="Clear answers remove friction before checkout." description="Fulfillment, returns, and domain-readiness details are already positioned to support launch trust." />
        <FAQList items={faqItems.slice(0, 4)} />
      </section>

      <section className="container-shell pb-20">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            [ShieldCheck, "Secure Checkout"],
            [Truck, "Fast U.S. Shipping"],
            [CheckCircle2, "Satisfaction Guarantee"],
            [BadgeCheck, "Verified Reviews"]
          ].map(([Icon, label]) => (
            <div key={label as string} className="glass-panel flex items-center justify-center gap-3 rounded-[1.5rem] px-4 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              <Icon className="h-5 w-5 text-[var(--accent)]" /> {label as string}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function FAQList({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(items[0]?.question ?? "");
  return (
    <div className="space-y-4">
      {items.map((item) => {
        const active = open === item.question;
        return (
          <div key={item.question} className="glass-panel rounded-[1.5rem] px-5 py-4">
            <button className="flex w-full items-center justify-between gap-4 text-left" onClick={() => setOpen(active ? "" : item.question)}>
              <span className="text-lg font-semibold">{item.question}</span>
              <ChevronDown className={`h-5 w-5 transition ${active ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {active && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden pt-4 text-sm leading-7 text-muted">
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="container-shell pt-10">
      <div className="glass-panel rounded-[2.5rem] px-6 py-10 md:px-10 md:py-14">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 font-[var(--font-serif)] text-4xl leading-none tracking-[-0.05em] md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-muted">{description}</p>
      </div>
    </section>
  );
}

export function CategoryCollectionStrip({ activeCategory = "all" }: { activeCategory?: string }) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      <Link href="/shop" className={cn("glass-panel rounded-full px-4 py-3 text-sm font-medium transition hover:border-[var(--accent)]", activeCategory === "all" && "border-[var(--accent)] text-[var(--accent-strong)]")}>
        All Products
      </Link>
      {categories.map((category) => (
        <Link key={category.slug} href={`/shop?category=${category.slug}`} className={cn("glass-panel rounded-full px-4 py-3 text-sm font-medium transition hover:border-[var(--accent)]", activeCategory === category.slug && "border-[var(--accent)] text-[var(--accent-strong)]")}>
          {category.name}
        </Link>
      ))}
    </div>
  );
}

export function ShopFilters({
  selectedCategory,
  selectedCollection,
  selectedSort,
  searchValue,
  onCategoryChange,
  onCollectionChange,
  onSortChange,
  onSearchChange
}: {
  selectedCategory: string;
  selectedCollection: string;
  selectedSort: string;
  searchValue: string;
  onCategoryChange: (value: string) => void;
  onCollectionChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}) {
  return (
    <div className="mb-8 grid gap-4 lg:grid-cols-[1.2fr_1fr_14rem_14rem]">
      <label className="glass-panel flex items-center gap-3 rounded-full px-5 py-4 text-sm text-muted">
        <Search className="h-4 w-4" />
        <input value={searchValue} onChange={(event) => onSearchChange(event.target.value)} className="w-full bg-transparent outline-none placeholder:text-muted" placeholder="Search products, tags, or categories" aria-label="Search products" />
      </label>
      <select value={selectedCategory} onChange={(event) => onCategoryChange(event.target.value)} className="glass-panel rounded-full px-5 py-4 text-sm outline-none">
        <option value="all">All categories</option>
        {categories.map((category) => <option key={category.slug} value={category.slug}>{category.name}</option>)}
      </select>
      <select value={selectedCollection} onChange={(event) => onCollectionChange(event.target.value)} className="glass-panel rounded-full px-5 py-4 text-sm outline-none">
        <option value="all">All collections</option>
        <option value="featured">Featured</option>
        <option value="best-seller">Best Seller</option>
        <option value="trending">Trending</option>
      </select>
      <select value={selectedSort} onChange={(event) => onSortChange(event.target.value)} className="glass-panel rounded-full px-5 py-4 text-sm outline-none">
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </div>
  );
}

export function useFilteredProducts(initialCategory = "all", initialSearch = "", initialCollection = "all") {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedCollection, setSelectedCollection] = useState(initialCollection);
  const [selectedSort, setSelectedSort] = useState("featured");
  const [searchValue, setSearchValue] = useState(initialSearch);

  const filtered = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    const categoryFiltered = selectedCategory === "all" ? products : products.filter((product) => slugify(product.category) === selectedCategory);
    const collectionFiltered = selectedCollection === "all" ? categoryFiltered : categoryFiltered.filter((product) => slugify(product.collection) === selectedCollection);
    const searched = query
      ? collectionFiltered.filter((product) => {
        const haystack = [product.name, product.category, product.description, product.longDescription, ...product.tags].join(" ").toLowerCase();
        return haystack.includes(query);
      })
      : collectionFiltered;
    const sorted = [...searched];
    if (selectedSort === "price-low") sorted.sort((a, b) => a.price - b.price);
    if (selectedSort === "price-high") sorted.sort((a, b) => b.price - a.price);
    if (selectedSort === "rating") sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, [searchValue, selectedCategory, selectedCollection, selectedSort]);

  return {
    filtered,
    searchValue,
    selectedCategory,
    selectedCollection,
    selectedSort,
    setSearchValue,
    setSelectedCategory,
    setSelectedCollection,
    setSelectedSort
  };
}

export function ShopExperience({ initialCategory = "all", initialSearch = "", initialCollection = "all" }: { initialCategory?: string; initialSearch?: string; initialCollection?: string }) {
  const { filtered, searchValue, selectedCategory, selectedCollection, selectedSort, setSearchValue, setSelectedCategory, setSelectedCollection, setSelectedSort } = useFilteredProducts(initialCategory, initialSearch, initialCollection);

  return (
    <>
      <PageHero eyebrow="Shop" title="A premium catalog with real category depth." description="Search by product name, filter by category or collection, compare prices, and move directly into polished product pages, cart, and checkout flows." />
      <section className="container-shell section-padding">
        <CategoryCollectionStrip activeCategory={selectedCategory} />
        <ShopFilters
          selectedCategory={selectedCategory}
          selectedCollection={selectedCollection}
          selectedSort={selectedSort}
          searchValue={searchValue}
          onCategoryChange={setSelectedCategory}
          onCollectionChange={setSelectedCollection}
          onSortChange={setSelectedSort}
          onSearchChange={setSearchValue}
        />
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <span>{filtered.length} products matched</span>
          <span>Free shipping on orders over {formatPrice(150)}</span>
        </div>
        <ProductGrid items={filtered} />
      </section>
    </>
  );
}
