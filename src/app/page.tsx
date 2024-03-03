import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Portfolios } from "@/components/portfolios";
import { PricingPackages } from "@/components/pricing-packages";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { TrustedCompanies } from "@/components/trusted-companies";
import { WhyChooseUs } from "@/components/why-choose-us";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="container relative z-20 mx-auto max-w-7xl space-y-[min(10rem,25dvw)] px-2 sm:px-4">
      <Hero />
      <Services />
      <PricingPackages />
      <WhyChooseUs />
      <TrustedCompanies />
      <Portfolios />
      <Testimonials />
      <Newsletter />
      <Image
        className="object-fit absolute -top-[22dvw] right-0 h-[15rem] opacity-30 lg:-top-[4dvw] lg:h-[30rem]"
        src={"/images/hero-bg-logo.webp"}
        alt="hero bg image"
        height="600"
        width="600"
        quality={95}
        priority
      />
    </main>
  );
}
