import { TPricingPackage } from "@/types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import { Check } from "lucide-react";

export function PricingPackageCard({
  description,
  isPopular,
  name,
  keyPoints,
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
      className="space-y-2 p-4 dark:border dark:border-foreground/10"
    >
      <CardHeader className="flex-col items-start space-y-2">
        <div className="flex w-full items-center justify-between">
          <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
          {isPopular && (
            <Chip color="primary" variant="dot" size="sm">
              Popular
            </Chip>
          )}
        </div>
        <p className="leading-relaxed text-foreground/60">{description}</p>
      </CardHeader>
      <CardBody>
        <ul className="space-y-2 leading-relaxed">
          {keyPoints.map((point) => (
            <li key={point} className="flex items-center gap-x-3">
              <Check size={14} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter>
        <Button color="primary" variant="solid" fullWidth size="lg">
          Get Qoute
        </Button>
      </CardFooter>
    </Card>
  );
}
