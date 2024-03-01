import { Button } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export async function TrustedCompanies() {
  // const companines = await getAllTrustedCompany();

  const companines = [
    "/images/brands/logo-0.webp",
    "/images/brands/logo-1.webp",
    "/images/brands/logo-2.webp",
    "/images/brands/logo-3.webp",
    "/images/brands/logo-4.webp",
    "/images/brands/logo-5.webp",
    "/images/brands/logo-6.webp",
    "/images/brands/logo-7.webp",
    "/images/brands/logo-8.webp",
  ];

  return (
    <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <div className="order-last flex flex-col items-start lg:order-first">
        <SectionHeading className="text-start">
          Partnering with
          <br />
          Industry Leaders
        </SectionHeading>
        <SectionSubheading className="px-0 pb-8 text-start">
          Our agency is a hub for elite partnerships, trusted by over a hundred
          leading brands to deliver impactful and innovative collaborations.
          Discover the synergy of creativity and strategy in our portfolio of
          successful projects.
        </SectionSubheading>
        <Button
          color="primary"
          size="lg"
          endContent={<ChevronRight />}
          className="gradient-btn text-base font-semibold"
        >
          <span>Lets Connect</span>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-8 lg:gap-4">
        {companines?.map((company) => (
          <div
            key={company}
            className="flex place-content-center rounded-xl border border-foreground/10 p-0 sm:bg-background/80 lg:p-6"
          >
            <Image
              src={company}
              alt="trusted company"
              height={80}
              width={200}
              className="object-fit object-center"
              quality={95}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
