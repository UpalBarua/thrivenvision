import { pricingPackages } from "@/config";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { Check } from "lucide-react";
import { Chip } from "@nextui-org/react";

type PricingPackageCardProps = (typeof pricingPackages)[number];

// type PricingPackageCardProps = {
//   _id: string;
//   name: string;
//   description: string;
//   price: "Free" | number;
//   keyPoints: string[];
//   isPopular: boolean;
// };

export function PricingPackageCard({
  _id,
  description,
  isPopular,
  name,
  price,
  keyPoints,
}: PricingPackageCardProps) {
  return (
    <Card
      isBlurred
      isHoverable
      className="space-y-2 p-4"
      classNames={{
        base: [
          "data-[hover=true]:bg-background/80",
          "dark:data-[hover=true]:bg-background/80",
          "bg-background/40",
          "dark:bg-background/40",
          "backdrop-blur-md",
          "backdrop-saturate-150",
        ],
      }}
    >
      <CardHeader className="flex-col items-start space-y-2 pb-6">
        <div className="flex w-full items-center justify-between">
          <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
          {isPopular && (
            <Chip color="primary" variant="dot" size="sm">
              Popular
            </Chip>
          )}
        </div>
        <p className="leading-relaxed text-foreground/60">{description}</p>
        <div className="pt-2 font-bold">
          <span className="text-4xl tracking-tight">
            {price === "Free" ? "Free" : `$${price}`}
          </span>
          <span className="text-foreground/50"> / month</span>
        </div>
      </CardHeader>
      <Divider className="opacity-25" />
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
        <Button color="default" fullWidth size="lg">
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
