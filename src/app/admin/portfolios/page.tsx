export const dynamic = "force-dynamic";

import { ConfirmationModal } from "@/components/confirmation-modal";
import { NewPortfolioModal } from "@/components/new-portfolio-modal";
import { PortfolioPost } from "@/components/portfolio-post";
import { SectionHeading } from "@/components/ui/section-heading";
import { deletePortfolioById, getAllPortfolios } from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolios | thrivenvision",
  description:
    "Explore thrivenvision's digital expertise! See our portfolio showcasing exceptional work across various services. ",
};

export default async function Portfolios() {
  const portfolios = await getAllPortfolios();

  return (
    <main>
      <div className="flex items-center justify-between">
        <SectionHeading>Portfolios</SectionHeading>
        <NewPortfolioModal />
      </div>
      <section>
        <div className="grid grid-cols-1 gap-8 px-0 pt-4 md:grid-cols-2 lg:grid-cols-3 lg:px-4">
          {portfolios.map(({ instagramURL, id }) => (
            <div key={id}>
              <PortfolioPost url={instagramURL} />
              <ConfirmationModal
                onConfirm={async () => {
                  "use server";
                  deletePortfolioById(id as string);
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
