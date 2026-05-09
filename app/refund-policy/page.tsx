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

export default function RefundPolicyPage() {
  return <PolicyPage eyebrow="Refunds" title="Refund Policy" sections={[
    { heading: "Return window", body: "Eligible products may be returned within 30 days of confirmed delivery when items are unused and returned in original condition." },
    { heading: "Refund processing", body: "Approved refunds are typically issued to the original payment method after inspection. Shipping fees may be non-refundable unless otherwise stated." },
    { heading: "Exclusions", body: "Final-sale items, damaged returns caused after delivery, or incomplete returned items may not qualify for a full refund." }
  ]} />;
}
