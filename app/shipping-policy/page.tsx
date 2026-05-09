import { PageHero } from "@/components/storefront";

function PolicyPage({ eyebrow, title, sections }: { eyebrow: string; title: string; sections: { heading: string; body: string }[] }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description="Clear policies improve trust, reduce support friction, and support conversion for first-time customers." />
      <section className="container-shell section-padding">
        <div className="glass-panel rounded-[2rem] p-8 md:p-10">
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
                <p className="mt-4 text-sm leading-8 text-muted">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function ShippingPolicyPage() {
  return <PolicyPage eyebrow="Shipping" title="Shipping Policy" sections={[
    { heading: "Processing times", body: "Most in-stock orders are prepared within one business day. Peak launches or limited collections may require additional processing time." },
    { heading: "Delivery coverage", body: "This storefront is positioned for the U.S. market with domestic shipping methods and order tracking support." },
    { heading: "Tracking and support", body: "Customers receive order status updates by email and may also use the order tracking page to review shipment progress." }
  ]} />;
}
