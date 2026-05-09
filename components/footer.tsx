import Link from "next/link";
import { Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { company, navigation } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] pt-16">
      <div className="container-shell">
        <div className="glass-panel rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
            <div className="space-y-5">
              <div>
                <div className="text-sm font-semibold tracking-[0.32em]">ONIFI VENTURES LLC</div>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted">A premium American-style ecommerce storefront for beauty, baby care, toys, and health and household essentials.</p>
              </div>
              <div className="space-y-3 text-sm text-muted">
                <p>{company.addressLine1}</p>
                <p>{company.cityStateZip}</p>
                <p>{company.country}</p>
              </div>
              <div className="flex gap-3 text-muted">
                <a href="#" className="glass-panel rounded-full p-3" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
                <a href="#" className="glass-panel rounded-full p-3" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em]">Quick Links</div>
              <div className="mt-5 flex flex-col gap-3 text-sm text-muted">
                {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
                <Link href="/order-tracking">Order Tracking</Link>
                <Link href="/checkout">Checkout</Link>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em]">Support</div>
              <div className="mt-5 flex flex-col gap-3 text-sm text-muted">
                <Link href="/faq">FAQ</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/shipping-policy">Shipping Policy</Link>
                <Link href="/refund-policy">Refund Policy</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms-conditions">Terms & Conditions</Link>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em]">Stay Connected</div>
              <p className="mt-5 text-sm leading-7 text-muted">Get launch offers, category updates, and future custom-domain brand announcements.</p>
              <div className="mt-4 space-y-3">
                <div className="glass-panel rounded-full px-4 py-3 text-sm text-muted">Email address</div>
                <Link href="/contact" className="inline-flex rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)]">Contact Support</Link>
              </div>
              <div className="mt-6 space-y-2 text-sm text-muted">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {company.email}</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {company.phone}</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Albuquerque, New Mexico</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-xs uppercase tracking-[0.18em] text-muted md:flex-row md:items-center md:justify-between">
            <p>© 2026 ONIFI VENTURES LLC. All rights reserved.</p>
            <p>{company.businessType} • Registered in {company.registeredState}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
