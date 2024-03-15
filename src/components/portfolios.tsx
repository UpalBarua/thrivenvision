import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { PortfolioPost } from "./portfolio-post";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export const portfolios = [
  {
    url: "https://www.instagram.com/p/C4CrIBFrzuV",
  },
  {
    url: "https://www.instagram.com/p/C4YVxmTpBnr",
  },
  {
    url: "https://www.instagram.com/p/C33ZtCQO0Tu",
  },
  {
    url: "https://www.instagram.com/p/C4WIvETS-C_",
  },
];

export function Portfolios() {
  return (
    <section className="portfolio | relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[2.5em] py-12">
      <SectionHeading className="text-white/90">
        Portfolio Spotlight: Witness Our Impact
      </SectionHeading>
      <SectionSubheading className="max-w-3xl text-white/80">
        Our accomplishments speak for themselves. Explore our portfolio to learn
        how we helped customers accomplish goals and exceed expectations
      </SectionSubheading>
      <div className="grid grid-cols-1 gap-4 px-0 pt-4 md:grid-cols-2 lg:grid-cols-3 lg:px-4">
        {portfolios.slice(0, 3).map(({ url }, i) => (
          <PortfolioPost key={url + i} url={url} />
        ))}
      </div>
      <Link
        href="/portfolios"
        className="mt-10 flex items-center gap-x-2 text-xl font-medium text-white
        transition-colors hover:text-white/60"
      >
        <span>View All</span>
        <ChevronRight />
      </Link>
    </section>
  );
}
