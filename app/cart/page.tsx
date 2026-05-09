"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, TicketPercent, Truck } from "lucide-react";
import { PageHero } from "@/components/storefront";
import { useStore } from "@/components/store-provider";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { cart, cartSubtotal, updateQuantity, removeFromCart } = useStore();
  const shipping = cartSubtotal > 150 ? 0 : cart.length ? 18 : 0;
  const total = cartSubtotal + shipping;

  return (
    <>
      <PageHero eyebrow="Cart" title="A modern cart with trust cues and clear order math." description="Adjust quantities, review savings, watch the free-shipping threshold, and move into a premium checkout layout without clutter." />
      <section className="container-shell section-padding">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="glass-panel rounded-[1.6rem] p-4 text-sm"><ShieldCheck className="mb-3 h-5 w-5 text-[var(--accent)]" /> Secure checkout experience</div>
              <div className="glass-panel rounded-[1.6rem] p-4 text-sm"><Truck className="mb-3 h-5 w-5 text-[var(--accent)]" /> Free shipping over {formatPrice(150)}</div>
              <div className="glass-panel rounded-[1.6rem] p-4 text-sm"><TicketPercent className="mb-3 h-5 w-5 text-[var(--accent)]" /> Launch code: ONIFI10</div>
            </div>
            {cart.length === 0 && <div className="glass-panel rounded-[2rem] p-8 text-sm text-muted">Your cart is empty. Visit the shop to start building an order.</div>}
            {cart.map((item) => {
              const product = products.find((entry) => entry.id === item.productId);
              if (!product) return null;
              return (
                <div key={item.productId} className="glass-panel flex flex-col gap-5 rounded-[2rem] p-5 md:flex-row md:items-center">
                  <Image src={product.image} alt={product.name} width={240} height={240} className="h-28 w-28 rounded-[1.4rem] object-cover" />
                  <div className="flex-1">
                    <Link href={`/products/${product.slug}`} className="text-xl font-semibold">{product.name}</Link>
                    <p className="mt-2 text-sm text-muted">{product.category}</p>
                    <p className="mt-2 text-sm text-muted">{product.stock}</p>
                    <p className="mt-3 text-sm font-semibold">{formatPrice(product.price)}</p>
                  </div>
                  <div className="glass-panel flex items-center gap-3 rounded-full px-3 py-2">
                    <button onClick={() => updateQuantity(product.id, item.quantity - 1)} aria-label="Decrease quantity">-</button>
                    <span className="min-w-8 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(product.id, item.quantity + 1)} aria-label="Increase quantity">+</button>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">{formatPrice(product.price * item.quantity)}</div>
                    <button onClick={() => removeFromCart(product.id)} className="mt-3 text-sm font-semibold text-rose-500">Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="glass-panel h-fit rounded-[2rem] p-8">
            <h2 className="text-2xl font-semibold">Order Summary</h2>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between"><span className="text-muted">Subtotal</span><span>{formatPrice(cartSubtotal)}</span></div>
              <div className="flex items-center justify-between"><span className="text-muted">Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
              <div className="glass-panel rounded-2xl p-4">
                <div className="text-sm font-semibold">Promo code</div>
                <div className="mt-3 flex gap-3">
                  <input className="min-w-0 flex-1 bg-transparent outline-none" placeholder="Enter ONIFI10" aria-label="Promo code" />
                  <button className="rounded-full bg-[var(--foreground)] px-4 py-2 text-xs font-semibold text-[var(--background)]">Apply</button>
                </div>
              </div>
              <div className="rounded-2xl bg-[var(--accent-soft)] px-4 py-4 text-sm text-[var(--accent-strong)]">Spend {formatPrice(Math.max(0, 150 - cartSubtotal))} more to unlock free shipping.</div>
              <div className="flex items-center justify-between border-t border-[var(--line)] pt-4 text-base font-semibold"><span>Total</span><span>{formatPrice(total)}</span></div>
            </div>
            <Link href="/checkout" className="mt-6 inline-flex w-full justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)]">Proceed to Checkout</Link>
          </div>
        </div>
      </section>
    </>
  );
}
