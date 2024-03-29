import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";
import { getPricingPackagesFromDB } from "@/lib/services";
import { PricingPackageCard } from "./pricing-package-card";

export async function PricingPackages() {
  const pricingPackages = await getPricingPackagesFromDB();

  return (
    <section id="packages" className="scroll-mt-[4rem]">
      <SectionHeading>Our Packages</SectionHeading>
      <SectionSubheading>
        Explore our customizable packages for your specific needs
        {/* Discover our customizable packages <br /> tailored to your needs. */}
      </SectionSubheading>
      <div className="flex flex-wrap place-content-center gap-6">
        {pricingPackages?.map((pricingPackage) => (
          <PricingPackageCard key={pricingPackage.id} {...pricingPackage} />
        ))}
      </div>
    </section>
  );
}
