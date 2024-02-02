import { pricingPackages } from "@/config";
import { PricingPackageCard } from "./pricing-package-card";

export function PricingPackages() {
  return (
    <section className="pt-20">
      <header className="space-y-2 sm:space-y-4">
        <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:text-5xl">
          Our Pricing Packages
        </h2>
        <p className="mx-auto px-4 text-center text-foreground/80">
          Explore our affordable pricing packages
        </p>
      </header>
      <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 md:grid-cols-4">
        {pricingPackages.map((pricingPackage) => (
          <PricingPackageCard key={pricingPackage._id} {...pricingPackage} />
        ))}
      </div>
    </section>
  );
}
