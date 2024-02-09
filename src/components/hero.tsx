import { services } from "@/config/services";
import { cn } from "@/lib/cn";
import { Card, Image as UIImage } from "@nextui-org/react";
import Image from "next/image";
import { SectionHeading } from "./ui/section-heading";

export function Hero() {
  return (
    <section className="grid grid-cols-2 justify-center gap-10 py-12">
      <div className="flex flex-col items-start gap-4">
        <Image src="/named-logo.png" alt="hero-log" height={80} width={180} />
        <SectionHeading className="text-start lg:text-6xl lg:leading-[1.15]">
          Empowering Your Vision with Simplified IT Solutions
        </SectionHeading>
        <div className="grid grid-cols-3 gap-4">
          {services.map(({ category, Icon }, i) => (
            <Card
              isPressable
              isHoverable
              key={category + i}
              classNames={{
                base: [
                  "bg-background/40",
                  "dark:bg-background/50",
                  "data-[hover=true]:bg-primary/80",
                  "dark:data-[hover=true]:bg-background/80",
                  "backdrop-blur-md",
                  "backdrop-saturate-150",
                ],
              }}
              className={cn(
                "flex-col items-center justify-center gap-3 gap-x-2 p-6 dark:border dark:border-foreground/10",
              )}
            >
              <Icon className="h-12 w-12" />
              <h4 className="text-lg font-medium tracking-tight">{category}</h4>
            </Card>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <UIImage alt="NextUI hero Image with delay" src="/hero.jpg" />
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
          className="break-inside-avoid flex-col items-center justify-center gap-3 gap-x-2
              p-6 dark:border dark:border-foreground/10"
        >
          <p className="text-lg leading-relaxed text-foreground/80">
            Optimize your ad campaigns with our Advertising Management
            expertise.We maximize your ROI across various advertising platforms.
          </p>
        </Card>
      </div>
    </section>
  );
}
