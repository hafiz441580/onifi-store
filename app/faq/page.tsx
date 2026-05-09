import { FAQList, PageHero } from "@/components/storefront";
import { faqItems } from "@/lib/data";

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Answers that reduce hesitation before purchase." description="Shipping, returns, tracking, and trust questions are surfaced clearly so customers can move through checkout with confidence." />
      <section className="container-shell section-padding">
        <FAQList items={faqItems} />
      </section>
    </>
  );
}
