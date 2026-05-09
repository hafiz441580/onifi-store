import { PageHero } from "@/components/storefront";

export default function OrderTrackingPage() {
  return (
    <>
      <PageHero eyebrow="Order Tracking" title="Track shipments with a clean self-service flow." description="Customers can review order number, email address, and shipment progress without needing to contact support." />
      <section className="container-shell section-padding">
        <div className="mx-auto max-w-3xl glass-panel rounded-[2rem] p-8 md:p-10">
          <h2 className="text-2xl font-semibold">Find your order</h2>
          <div className="mt-6 grid gap-4">
            <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="Order number" />
            <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="Email address" />
            <button className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)]">Track Order</button>
          </div>
          <div className="mt-8 rounded-[1.5rem] bg-[var(--accent-soft)] px-5 py-5 text-sm leading-7 text-[var(--accent-strong)]">Sample tracking states: order confirmed, in fulfillment, shipped, out for delivery, delivered.</div>
        </div>
      </section>
    </>
  );
}
