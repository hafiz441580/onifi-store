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

export default function TermsPage() {
  return <PolicyPage eyebrow="Terms" title="Terms & Conditions" sections={[
    { heading: "Website use", body: "Use of this storefront is subject to lawful behavior, respectful platform use, and acceptance of displayed product, pricing, and policy information." },
    { heading: "Orders and fulfillment", body: "Orders are subject to availability, payment verification, and operational review. ONIFI reserves the right to update catalog information, product details, and policies as needed." },
    { heading: "Limitation notes", body: "All storefront content, branding, and product presentation are provided for commerce use and may not be reproduced without permission." }
  ]} />;
}
