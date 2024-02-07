import { getPricingPackagesFromDB } from "@/lib/services";
import { PricingPackageCard } from "./pricing-package-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";

export async function PricingPackages() {
  const fetchedPricingPackages = await getPricingPackagesFromDB();

  return (
    <section className="pt-20">
      <SectionHeading>Our Pricing Packages</SectionHeading>
      <SectionSubheading>
        Explore our affordable pricing packages
      </SectionSubheading>
      <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 md:grid-cols-4">
        {fetchedPricingPackages.map((pricingPackage) => (
          <PricingPackageCard key={pricingPackage.id} {...pricingPackage} />
        ))}
      </div>
    </section>
  );
}
