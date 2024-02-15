import Portfolio from "@/components/portfolio";
import { PricingPackages } from "@/components/pricing-packages";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import TrustedCompany from "@/components/trustedCompany";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Hero } from "@/components/hero";
import { PortfolioForm } from "@/components/portfolio-form";
import AdminAllPortfolio from "@/dashboard/Admin-all-portfolio";

export default function HomePage() {
  return (
    <main className="container relative z-10 mx-auto max-w-7xl space-y-10 px-2 sm:px-4">
      <Hero />
      <Services />
      <PricingPackages />
      <WhyChooseUs />
      <TrustedCompany />
      <Portfolio />
      {/* <AdminAllPortfolio /> */}
      {/* <PortfolioForm /> */}

      <Testimonials />
    </main>
  );
}
