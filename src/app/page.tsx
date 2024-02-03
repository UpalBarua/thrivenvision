import { PricingPackages } from "@/components/pricing-packages";
import { PricingPackageForm } from "@/components/pricing-package-form";

export default function HomePage() {
  return (
    <main className="container relative z-10 mx-auto max-w-7xl px-2 sm:px-4">
      {/* <PricingPackages /> */}
      <PricingPackageForm />
    </main>
  );
}
