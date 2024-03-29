import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUsData } from "@/config";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

export function WhyChooseUs() {
  return (
    <section>
      <SectionHeading className="!pb-[max(3.5dvw,_2rem)]">
        What Sets Us Apart
      </SectionHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUsData.map((data) => (
          <ChooseUsCard key={data.title} {...data} />
        ))}
      </div>
    </section>
  );
}

type ChooseUsCardProps = (typeof whyChooseUsData)[number];

function ChooseUsCard({ Icon, title, description }: ChooseUsCardProps) {
  return (
    <Card
      isBlurred
      isHoverable
      classNames={{
        base: [
          "dark:bg-background/60",
          "dark:data-[hover=true]:bg-background/80",
          "backdrop-blur-md",
          "backdrop-saturate-150",
          "group p-2 border border-foreground/10 sm:p-4",
        ],
      }}
    >
      <CardHeader className="flex flex-col items-start">
        <div
          className="flex aspect-square items-center justify-center 
          rounded-full border border-foreground/10 bg-background p-3.5 transition-colors
          duration-1000 ease-soft-spring group-hover:bg-primary"
        >
          <Icon
            className="h-9 w-9 text-primary transition-colors
            duration-1000 ease-soft-spring group-hover:text-background"
          />
        </div>
      </CardHeader>
      <CardBody className="space-y-2">
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="leading-relaxed text-foreground/80">{description}</p>
      </CardBody>
    </Card>
  );
}
