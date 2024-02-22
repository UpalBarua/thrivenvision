import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { getAllTrustedCompany } from "@/lib/services";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";
import { ChevronRight } from "lucide-react";

const TrustedCompany = async () => {
  const fetchedCompany = await getAllTrustedCompany();
  console.log(fetchedCompany);

  return (
    <section className="mb-4 mt-20">
      <div className="flex flex-col gap-14  lg:flex-row">
        <div className="flex flex-1 flex-col items-start p-4 lg:p-2">
          <SectionHeading className="text-start">
            Trusted by 100 world-class <br></br> brands and organizations
          </SectionHeading>
          <SectionSubheading className="mx-0 w-full px-0 pb-6 text-start">
            We have earned the confidence of hundreds of brands and
            organizations, solidifying our reputation as a trusted and reliable
            partner in the industry.
          </SectionSubheading>
          <Button color="primary" size="lg" endContent={<ChevronRight />}>
            Lets Connect
          </Button>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3">
          {fetchedCompany.map((item, index) => (
            <Card shadow="sm" key={index}>
              <CardBody className="overflow-visible p-0">
                <Image
                  isZoomed
                  shadow="sm"
                  radius="md"
                  width="100%"
                  alt=""
                  className="h-[100px] w-full object-cover"
                  src={item?.imageUrl}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompany;
