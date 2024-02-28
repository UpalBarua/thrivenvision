import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Portfolios } from "@/components/portfolios";
import { PricingPackages } from "@/components/pricing-packages";
import { Services } from "@/components/services";
import { TrustedCompanies } from "@/components/trusted-companies";
import { WhyChooseUs } from "@/components/why-choose-us";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="container relative z-10 mx-auto max-w-7xl px-2 sm:px-4">
      <Hero />
      <Services />
      <PricingPackages />
      <WhyChooseUs />
      <TrustedCompanies />
      <Portfolios />
      <section className="translate-y-[50%]">
        <Newsletter />
      </section>
      <Image
        className="object-fit absolute right-0 top-[5rem] h-[30rem] opacity-30"
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
