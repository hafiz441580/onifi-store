import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-shell section-padding">
      <div className="glass-panel rounded-[2.5rem] px-6 py-16 text-center md:px-10">
        <div className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">404</div>
        <h1 className="mt-5 font-[var(--font-serif)] text-5xl tracking-[-0.05em] md:text-7xl">This page drifted off course.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted">The link may be outdated or the product may have moved. Use the storefront navigation to continue browsing ONIFI collections.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Return Home</Button>
          <Button href="/shop" variant="secondary">Shop Products</Button>
        </div>
      </div>
    </section>
  );
}
