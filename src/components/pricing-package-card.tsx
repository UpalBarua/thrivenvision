import { TPricingPackage } from "@/types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { Check } from "lucide-react";

export function PricingPackageCard({
  name,
  services,
  features,
}: TPricingPackage) {
  return (
    <Card
      isBlurred
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
      className="p-6 dark:border dark:border-foreground/10"
    >
      <CardHeader>
        <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
      </CardHeader>
      <CardBody className="space-y-6">
        <div>
          <h4 className="pb-2 font-medium text-foreground/80">
            Services Included
          </h4>
          <ul className="space-y-2 leading-relaxed text-foreground/60">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-x-2">
                <Check size={14} />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="pb-2 font-medium text-foreground/80">Features</h4>
          <ul className="space-y-2 leading-relaxed text-foreground/60">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-x-2">
                <Check size={14} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardBody>
      <CardFooter>
        <Button color="primary" variant="solid" fullWidth size="lg">
          Get Qoute
        </Button>
      </CardFooter>
    </Card>
  );
}
