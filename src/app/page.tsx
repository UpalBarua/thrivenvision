import Portfolio from "@/components/portfolio";
import { PricingPackages } from "@/components/pricing-packages";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import TrustedCompany from "@/components/trustedCompany";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function HomePage() {
  return (
    <main className="container relative z-10 space-y-10 mx-auto max-w-7xl px-2 sm:px-4">
      <Services />
      <PricingPackages />
      <WhyChooseUs />
      <TrustedCompany />
      <Portfolio />
      <Testimonials />
    </main>
  );
}
