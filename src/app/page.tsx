import { Hero } from "@/components/hero";
import Portfolio from "@/components/portfolio";
import { PricingPackages } from "@/components/pricing-packages";
import { Services } from "@/components/services";
import TrustedCompany from "@/components/trustedCompany";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function HomePage() {
  return (
    <main className="container relative z-10 mx-auto max-w-7xl space-y-10 px-2 sm:px-4">
      <Hero />
      <Services />
      <PricingPackages />
      <WhyChooseUs />
      <TrustedCompany />
      <Portfolio />
    </main>
  );
}
