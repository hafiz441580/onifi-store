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

export default function PrivacyPolicyPage() {
  return <PolicyPage eyebrow="Privacy" title="Privacy Policy" sections={[
    { heading: "Information we collect", body: "This demo storefront is structured to collect standard commerce information such as contact details, shipping data, and order activity needed to operate an online store in the United States." },
    { heading: "How information is used", body: "Customer information is used to process orders, provide support, deliver shipping updates, and improve the shopping experience. Data handling should remain aligned with applicable U.S. privacy standards." },
    { heading: "Security", body: "Secure checkout messaging, account protection, and internal access controls are presented as part of a trust-focused commerce experience." }
  ]} />;
}
