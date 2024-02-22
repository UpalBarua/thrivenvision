import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";
import { getPricingPackagesFromDB } from "@/lib/services";
import { PricingPackageCard } from "./pricing-package-card";

export async function PricingPackages() {
  const pricingPackages = await getPricingPackagesFromDB();

  return (
    <section className="pt-20">
      <SectionHeading>Our Pricing Packages</SectionHeading>
      <SectionSubheading>
        Explore our affordable pricing packages
      </SectionSubheading>
      <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 md:grid-cols-4">
        {pricingPackages?.map((pricingPackage) => (
          <PricingPackageCard key={pricingPackage.id} {...pricingPackage} />
        ))}
      </div>
    </section>
  );
}
