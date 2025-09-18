export const dynamic = "force-dynamic";

import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Portfolios } from "@/components/portfolios";
import { PricingPackages } from "@/components/pricing-packages";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function HomePage() {
  return (
    <main className="relative z-20 container mx-auto max-w-7xl space-y-[min(10rem,25dvw)] px-2 sm:px-4">
      <Hero />
      <Services />
      <PricingPackages />
      <WhyChooseUs />
      {/* <TrustedCompanies /> */}
      <Portfolios />
      {/* <Testimonials /> */}
      <Newsletter />
    </main>
  );
}
