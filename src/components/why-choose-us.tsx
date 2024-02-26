import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUsData } from "@/config";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";

export function WhyChooseUs() {
  return (
    <section className="py-10">
      <SectionHeading>What Sets Us Apart</SectionHeading>

      <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 md:pt-10 lg:grid-cols-3">
        {whyChooseUsData.map((data) => (
          <ChooseUsCard key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
}

type ChooseUsCardProps = (typeof whyChooseUsData)[number];

function ChooseUsCard({ Icon, title, description }: ChooseUsCardProps) {
  return (
    <Card
      isHoverable
      classNames={{
        base: [
          "bg-background/40",
          "dark:bg-background/50",
          "data-[hover=true]:bg-background/80",
          "dark:data-[hover=true]:bg-background/80",
          "backdrop-blur-md",
          "backdrop-saturate-150",
        ],
      }}
      className="group p-3 dark:border dark:border-foreground/10 sm:p-4"
    >
      <CardHeader className="flex flex-col items-start">
        <div
          className="flex aspect-square items-center justify-center 
          rounded-full border bg-background/90 p-3.5 shadow-sm 
          transition-colors duration-1000 ease-soft-spring 
          group-hover:bg-primary/90 dark:border-foreground/10"
        >
          <Icon
            className="h-9 w-9 text-primary transition-colors
            duration-1000 ease-soft-spring group-hover:text-background"
          />
        </div>
      </CardHeader>
      <CardBody className="space-y-2">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="leading-relaxed text-foreground/80">
          {/* {description.slice(0, 100)} */}
          {description}
        </p>
      </CardBody>
    </Card>
  );
}
