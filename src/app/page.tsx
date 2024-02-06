import { PricingPackages } from "@/components/pricing-packages";
import { PricingPackageForm } from "@/components/pricing-package-form";
import ChooseUs from "@/components/choose-us";
import TrustedCompany from "@/components/trustedCompany";
import Services from "@/components/services";
import MailChimp from "@/components/mailChimp";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="container relative z-10 mx-auto max-w-7xl px-2 sm:px-4">
      <PricingPackages />
      <ChooseUs />
      <TrustedCompany />
      <Services />
      {/* <MailChimp /> */}
      <Footer />
      {/* <PricingPackageForm /> */}
    </main>
  );
}
