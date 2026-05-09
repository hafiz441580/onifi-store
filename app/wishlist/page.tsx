"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/storefront";
import { useStore } from "@/components/store-provider";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function WishlistPage() {
  const { wishlist } = useStore();
  const items = products.filter((product) => wishlist.includes(product.id));

  return (
    <>
      <PageHero eyebrow="Wishlist" title="Saved items ready when the customer is." description="Wishlist support provides a premium shopping loop for return visitors and higher-intent customers." />
      <section className="container-shell section-padding">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.length === 0 && <div className="glass-panel rounded-[2rem] p-8 text-sm text-muted">No saved items yet. Add products to your wishlist from the shop or product pages.</div>}
          {items.map((product) => (
            <div key={product.id} className="glass-panel overflow-hidden rounded-[2rem]">
              <Image src={product.image} alt={product.name} width={900} height={900} className="h-72 w-full object-cover" />
              <div className="p-5">
                <Link href={`/products/${product.slug}`} className="text-xl font-semibold">{product.name}</Link>
                <div className="mt-3 text-sm text-muted">{product.category}</div>
                <div className="mt-3 text-lg font-semibold">{formatPrice(product.price)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
