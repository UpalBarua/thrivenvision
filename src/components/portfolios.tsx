import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { PortfolioPost } from "./portfolio-post";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

const portfolios = [
  {
    url: "https://www.instagram.com/p/C2sWPScP0qD/",
  },
  {
    url: "https://www.instagram.com/p/C2sWPScP0qD/",
  },
  {
    url: "https://www.instagram.com/p/C2sWPScP0qD/",
  },
];

export function Portfolios() {
  return (
    <section className="portfolio | relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[2.5em] py-12">
      <SectionHeading className="text-white/90">
        Portfolio Spotlight: Witness Our Impact
      </SectionHeading>
      <SectionSubheading className="max-w-3xl text-white/80">
        Our achievements speak for themselves. Explore our portfolio to see how
        we have helped clients achievetheir goals and surpass their
        expectations.
      </SectionSubheading>
      <div className="grid grid-cols-1 gap-4 px-4 pt-4 md:grid-cols-2 lg:grid-cols-3">
        {portfolios?.map(({ url }, i) => (
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
