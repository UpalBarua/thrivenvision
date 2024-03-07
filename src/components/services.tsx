import { ServiceTabs } from "./service-tabs";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export function Services() {
  return (
    <section id="services" className="scroll-mt-[4rem]">
      <SectionHeading>Discover Our Offerings</SectionHeading>
      <SectionSubheading>
        Experience our extensive services to help your business reach new
        heights
        {/* Explore our comprehensive range of services */}
        {/* <br className="hidden sm:block" /> */}
        {/* designed to elevate your business to new heights */}
      </SectionSubheading>
      <ServiceTabs />
    </section>
  );
}
