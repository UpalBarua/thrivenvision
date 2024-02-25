import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Portfolios } from "@/components/portfolios";
import { PricingPackages } from "@/components/pricing-packages";
import { Services } from "@/components/services";
import { TrustedCompanies } from "@/components/trusted-companies";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function HomePage() {
  return (
    <main className="container relative z-10 mx-auto max-w-7xl space-y-10 px-2 sm:px-4">
      <Hero />
      {/* <Services /> */}
      {/* <PricingPackages /> */}
      {/* <WhyChooseUs /> */}
      {/* <TrustedCompanies /> */}
      {/* <Portfolios /> */}
      {/* <Newsletter /> */}
    </main>
  );
}
