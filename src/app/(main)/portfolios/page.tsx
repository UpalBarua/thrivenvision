import { PortfolioPost } from "@/components/portfolio-post";
import { portfolios } from "@/components/portfolios";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Portfolios() {
  return (
    <main className="container relative z-10 mx-auto max-w-7xl px-2 pt-10 sm:px-4">
      <SectionHeading className="!pb-[max(3.5dvw,_2rem)]">
        Portfolio Spotlight: Witness Our Impact
      </SectionHeading>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {portfolios?.map(({ url }, i) => (
          <PortfolioPost key={url + i} url={url} />
        ))}
      </div>
    </main>
  );
}
