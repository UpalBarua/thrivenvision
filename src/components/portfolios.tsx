import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { PortfolioPost } from "./portfolio-post";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

const portfolios = [
  {
    id: 1,
    url: "https://www.instagram.com/p/C2sWPScP0qD/",
  },
  {
    id: 1,
    url: "https://www.instagram.com/p/C2sWPScP0qD/",
  },
  {
    id: 1,
    url: "https://www.instagram.com/p/C2sWPScP0qD/",
  },
];

export function Portfolios() {
  return (
    <section className="portfolio | relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[2.5em] py-24">
      <SectionHeading className="text-white/90">
        Portfolio Spotlight: Witness Our Impact
      </SectionHeading>
      <SectionSubheading className="max-w-3xl text-white/80">
        Our achievements speak for themselves. Explore our portfolio to see how
        we have helped clients achievetheir goals and surpass their
        expectations.
      </SectionSubheading>
      <div className="grid grid-cols-3 gap-4 px-10 pt-8">
        {portfolios?.map(({ url }) => <PortfolioPost key={url} url={url} />)}
      </div>
      <Link
        href="all-portfolio"
        className="mt-10 flex items-center gap-x-2 text-2xl font-medium text-white
        transition-colors hover:text-white/60"
      >
        <span>View All</span>
        <ChevronRight />
      </Link>
    </section>
  );
}
