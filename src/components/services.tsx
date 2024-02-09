import { ServiceTabs } from "./service-tabs";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export function Services() {
  return (
    <section className="py-10">
      <SectionHeading>What We Offer</SectionHeading>
      <SectionSubheading>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cupidatat.
      </SectionSubheading>
      <ServiceTabs />
    </section>
  );
}
