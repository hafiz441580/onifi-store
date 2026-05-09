"use client";

import { BadgeCheck, CreditCard, LockKeyhole, ShieldCheck, Truck } from "lucide-react";
import { PageHero } from "@/components/storefront";
import { useStore } from "@/components/store-provider";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const { cartSubtotal } = useStore();
  const shipping = cartSubtotal > 150 ? 0 : cartSubtotal ? 18 : 0;
  const tax = cartSubtotal * 0.08;
  const total = cartSubtotal + shipping + tax;

  return (
    <>
      <PageHero eyebrow="Checkout" title="Premium checkout UI built to feel credible and fast." description="The checkout flow includes stronger spacing, trust badges, cleaner form structure, and a responsive order summary optimized for mobile and desktop." />
      <section className="container-shell section-padding">
        <div className="mb-6 grid gap-4 md:grid-cols-4">
          {[
            [LockKeyhole, "SSL Protected"],
            [ShieldCheck, "Encrypted Payments"],
            [Truck, "Tracked Delivery"],
            [BadgeCheck, "30-Day Returns"]
          ].map(([Icon, label]) => (
            <div key={label as string} className="glass-panel rounded-[1.5rem] p-4 text-sm font-medium">
              <Icon className="mb-3 h-5 w-5 text-[var(--accent)]" />
              {label as string}
            </div>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="glass-panel rounded-[2rem] p-8">
              <h2 className="text-2xl font-semibold">Contact and shipping</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="First name" aria-label="First name" />
                <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="Last name" aria-label="Last name" />
                <input className="glass-panel rounded-2xl px-4 py-4 outline-none md:col-span-2" placeholder="Email address" aria-label="Email address" />
                <input className="glass-panel rounded-2xl px-4 py-4 outline-none md:col-span-2" placeholder="Street address" aria-label="Street address" />
                <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="City" aria-label="City" />
                <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="State" aria-label="State" />
                <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="ZIP code" aria-label="ZIP code" />
                <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="Phone" aria-label="Phone" />
              </div>
            </div>
            <div className="glass-panel rounded-[2rem] p-8">
              <h2 className="text-2xl font-semibold">Payment</h2>
              <div className="mt-6 grid gap-4">
                <label className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-4 text-sm text-muted">
                  <CreditCard className="h-4 w-4" />
                  <input className="w-full bg-transparent outline-none" placeholder="Card number" aria-label="Card number" />
                </label>
                <div className="grid gap-4 md:grid-cols-3">
                  <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="Expiry" aria-label="Expiry" />
                  <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="CVV" aria-label="CVV" />
                  <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="Name on card" aria-label="Name on card" />
                </div>
                <div className="rounded-2xl bg-[var(--accent-soft)] px-4 py-4 text-sm text-[var(--accent-strong)]">Secure payment area with card placeholder UI, encrypted transaction messaging, and space for future gateway integration.</div>
              </div>
            </div>
          </div>
          <div className="glass-panel h-fit rounded-[2rem] p-8">
            <h2 className="text-2xl font-semibold">Order summary</h2>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between"><span className="text-muted">Subtotal</span><span>{formatPrice(cartSubtotal)}</span></div>
              <div className="flex items-center justify-between"><span className="text-muted">Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
              <div className="flex items-center justify-between"><span className="text-muted">Estimated tax</span><span>{formatPrice(tax)}</span></div>
              <div className="glass-panel rounded-2xl p-4">
                <div className="text-sm font-semibold">Promo code</div>
                <div className="mt-3 flex gap-3">
                  <input className="min-w-0 flex-1 bg-transparent outline-none" placeholder="Enter ONIFI10" aria-label="Promo code" />
                  <button className="rounded-full bg-[var(--foreground)] px-4 py-2 text-xs font-semibold text-[var(--background)]">Apply</button>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-[var(--line)] pt-4 text-base font-semibold"><span>Total</span><span>{formatPrice(total)}</span></div>
            </div>
            <button className="mt-6 w-full rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)]">Place Order</button>
          </div>
        </div>
      </section>
    </>
  );
}
