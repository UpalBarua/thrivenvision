import { services } from "@/config/services";
import { Card } from "@nextui-org/react";

type ServiceCardProps = (typeof services)[number]["services"][number]

export function ServiceCard({ name, serviceDescription }: ServiceCardProps) {
  return (
    <Card
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
      className="mb-5 dark:border dark:border-foreground/10 p-6 md:p-8 sm:break-inside-avoid"
    >
      <h3 className="pb-2 text-xl font-medium tracking-tight">{name}</h3>
      <p className="leading-relaxed text-foreground/60">{serviceDescription}</p>
    </Card>
  );
}
