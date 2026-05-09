import { PageHero } from "@/components/storefront";
import { company } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A premium commerce brand built around clarity and trust." description="ONIFI VENTURES LLC is structured to deliver a modern U.S. online shopping experience with elevated design, careful product curation, and customer-first support standards." />
      <section className="container-shell section-padding">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel rounded-[2rem] p-8">
            <h2 className="text-3xl font-semibold">Our mission</h2>
            <p className="mt-4 text-sm leading-8 text-muted">We build digital retail experiences that feel premium, direct, and dependable. Every collection, support touchpoint, and policy surface is designed to reduce friction and strengthen customer confidence.</p>
            <h3 className="mt-8 text-2xl font-semibold">Customer-first approach</h3>
            <p className="mt-4 text-sm leading-8 text-muted">ONIFI prioritizes transparent shipping, straightforward returns, secure checkout, and responsive support. The goal is a storefront that performs like a modern DTC brand while preserving trust and simplicity.</p>
            <h3 className="mt-8 text-2xl font-semibold">Modern eCommerce standards</h3>
            <p className="mt-4 text-sm leading-8 text-muted">Responsive design, fast page flows, accessible UI patterns, premium visual hierarchy, and SEO-conscious structure all work together to support launch readiness.</p>
          </div>
          <div className="space-y-6">
            <div className="glass-panel rounded-[2rem] p-8">
              <h3 className="text-xl font-semibold">Business details</h3>
              <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
                <p>{company.name}</p>
                <p>{company.businessType}</p>
                <p>Registered in {company.registeredState}</p>
                <p>{company.addressLine1}</p>
                <p>{company.cityStateZip}</p>
                <p>{company.country}</p>
              </div>
            </div>
            <div className="glass-panel rounded-[2rem] p-8">
              <h3 className="text-xl font-semibold">Registered agent</h3>
              <p className="mt-5 text-sm leading-7 text-muted">{company.registeredAgent}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{company.registeredAgentAddress}</p>
              <p className="mt-4 text-sm leading-7 text-muted">Business purpose: {company.purpose}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
