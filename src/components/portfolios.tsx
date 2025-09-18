import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { PortfolioCards } from "./portfolio-cards";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export async function Portfolios() {
  return (
    <section className="bg-primary relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[2.5em] py-12">
      <SectionHeading className="text-background/90">
        Portfolio Spotlight: Witness Our Impact
      </SectionHeading>
      <SectionSubheading className="text-background/80 max-w-3xl">
        Our accomplishments speak for themselves. Explore our portfolio to learn
        how we helped customers accomplish goals and exceed expectations
      </SectionSubheading>
      <PortfolioCards />
      <Link
        href="/portfolios"
        className="text-background hover:text-background/60 mt-10 flex items-center gap-x-2 text-xl font-medium transition-colors"
      >
        <span>View All</span>
        <ChevronRight />
      </Link>
    </section>
  );
}
