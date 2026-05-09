import { PageHero } from "@/components/storefront";
import { company } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Support built for premium customer service." description="Use the contact form for order questions, product support, or general business inquiries. Address, support details, and a map placeholder are included for trust and accessibility." />
      <section className="container-shell section-padding">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="glass-panel rounded-[2rem] p-8">
            <h2 className="text-2xl font-semibold">Send a message</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="First name" />
              <input className="glass-panel rounded-2xl px-4 py-4 outline-none" placeholder="Last name" />
              <input className="glass-panel rounded-2xl px-4 py-4 outline-none md:col-span-2" placeholder="Email address" />
              <input className="glass-panel rounded-2xl px-4 py-4 outline-none md:col-span-2" placeholder="Subject" />
              <textarea className="glass-panel min-h-40 rounded-2xl px-4 py-4 outline-none md:col-span-2" placeholder="How can we help?" />
              <button className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] md:col-span-2">Submit Inquiry</button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass-panel rounded-[2rem] p-8">
              <h3 className="text-xl font-semibold">Customer support</h3>
              <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
                <p>Email: {company.email}</p>
                <p>Phone: {company.phone}</p>
                <p>Support availability: 7 days a week</p>
                <p>FAQ shortcut: Visit the FAQ page for shipping, tracking, and returns.</p>
              </div>
            </div>
            <div className="glass-panel rounded-[2rem] p-8">
              <h3 className="text-xl font-semibold">Business address</h3>
              <div className="mt-5 space-y-2 text-sm leading-7 text-muted">
                <p>{company.name}</p>
                <p>{company.addressLine1}</p>
                <p>{company.cityStateZip}</p>
                <p>{company.country}</p>
              </div>
            </div>
            <div className="glass-panel rounded-[2rem] p-0 overflow-hidden">
              <div className="flex h-72 items-center justify-center bg-[radial-gradient(circle_at_top,rgba(126,182,255,0.18),transparent_55%),linear-gradient(135deg,#111827,#475569)] text-center text-sm uppercase tracking-[0.25em] text-white/80">Google Maps Placeholder</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
