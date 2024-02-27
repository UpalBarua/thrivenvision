import { getAllTrustedCompany } from "@/lib/services";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export async function TrustedCompanies() {
  const companines = await getAllTrustedCompany();

  return (
    <section className="grid grid-cols-2 items-start gap-8 pb-40">
      <div className="flex flex-col items-start">
        <SectionHeading className="text-start">
          Partnering with
          <br />
          Industry Leaders
        </SectionHeading>
        <SectionSubheading className="mx-0 w-full px-0 pb-6 text-start">
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
      <div className="grid grid-cols-3 gap-4">
        {companines?.map(({ imageUrl }) => (
          <Image
            key={imageUrl}
            src={imageUrl}
            alt="trusted company"
            height={200}
            width={200}
            quality={95}
            className="object-fit rounded-xl border border-foreground/10 bg-background/80 object-center p-6"
          />
        ))}
      </div>
    </section>
  );
}
