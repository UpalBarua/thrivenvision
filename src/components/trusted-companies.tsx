import { getAllTrustedCompany } from "@/lib/services";
import { Button, Image } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export async function TrustedCompanies() {
  const companines = await getAllTrustedCompany();

  return (
    <section className="grid grid-cols-2 gap-8 py-20">
      <div className="flex flex-col items-start">
        <SectionHeading className="text-start">
          Trusted by 100 world-class <br></br> brands and organizations
        </SectionHeading>
        <SectionSubheading className="mx-0 w-full px-0 pb-6 text-start">
          We have earned the confidence of hundreds of brands and organizations,
          solidifying our reputation as a trusted and reliable partner in the
          industry.
        </SectionSubheading>
        <Button color="primary" size="lg" endContent={<ChevronRight />}>
          Lets Connect
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {companines?.map(({ imageUrl }) => (
          <Image
            key={imageUrl}
            isZoomed
            shadow="sm"
            radius="md"
            width="100%"
            alt=""
            className="h-[100px] w-full object-cover"
            src={imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
