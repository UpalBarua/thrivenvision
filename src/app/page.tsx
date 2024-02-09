import { PricingPackages } from "@/components/pricing-packages";
import { PricingPackageForm } from "@/components/pricing-package-form";
import { WhyChooseUs } from "@/components/why-choose-us";
import TrustedCompany from "@/components/trustedCompany";
import Services from "@/components/services";
import MailChimp from "@/components/mailChimp";
import Footer from "@/components/footer";
import AddTrustedCompany from "@/components/addTrustCompany";
import Portfolio from "@/components/portfolio";

export default function HomePage() {
  return (
    <main className="container relative z-10 mx-auto max-w-7xl px-2 sm:px-4">
      <PricingPackages />
      <WhyChooseUs />
      <TrustedCompany />
      {/* <AddTrustedCompany /> */}
      <Portfolio />
      {/* <Services /> */}
      {/* <Footer /> */}
    </main>
  );
}
