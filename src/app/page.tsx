import { PricingPackages } from "@/components/pricing-packages";
import { PricingPackageForm } from "@/components/pricing-package-form";
import { WhyChooseUs } from "@/components/why-choose-us";
import TrustedCompany from "@/components/trustedCompany";
import Services from "@/components/services";
import MailChimp from "@/components/mailChimp";
import Footer from "@/components/footer";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <main className="container relative z-10 mx-auto max-w-7xl px-2 sm:px-4">
      {/* <PricingPackages /> */}
      {/* <WhyChooseUs /> */}
      {/* <TrustedCompany /> */}
      {/* <Services /> */}
      {/* <Footer /> */}
      <Testimonials/>
    </main>
  );
}
