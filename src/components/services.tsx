import { ServiceTabs } from "./service-tabs";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export function Services() {
  return (
    <section id="services" className="scroll-mt-10">
      <SectionHeading>Discover Our Offerings</SectionHeading>
      <SectionSubheading>
        Explore our comprehensive range of services
        <br className="hidden sm:block" />
        designed to elevate your business to new heights
      </SectionSubheading>
      <ServiceTabs />
    </section>
  );
}
