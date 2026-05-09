import { PageHero } from "@/components/storefront";

export default function AccountPage() {
  return (
    <>
      <PageHero eyebrow="Account" title="Customer login and account hub." description="A premium account entry screen for sign-in, order lookup, saved wishlist access, and profile management patterns." />
      <section className="container-shell section-padding">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[2rem] p-8">
            <h2 className="text-2xl font-semibold">Sign in</h2>
            <div className="mt-6 space-y-4">
              <input className="glass-panel w-full rounded-2xl px-4 py-4 outline-none" placeholder="Email address" />
              <input type="password" className="glass-panel w-full rounded-2xl px-4 py-4 outline-none" placeholder="Password" />
              <button className="w-full rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)]">Login</button>
            </div>
          </div>
          <div className="glass-panel rounded-[2rem] p-8">
            <h2 className="text-2xl font-semibold">Create account</h2>
            <p className="mt-4 text-sm leading-7 text-muted">Save shipping details, manage wishlists, review order history, and track purchases from one account center.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="First name" />
              <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="Last name" />
              <input className="glass-panel rounded-2xl px-4 py-4 outline-none md:col-span-2" placeholder="Email address" />
              <input type="password" className="glass-panel rounded-2xl px-4 py-4 outline-none md:col-span-2" placeholder="Create password" />
              <button className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] md:col-span-2">Create Account</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
