"use client";

import { services } from "@/config/services";
import { Card, Tab, Tabs } from "@nextui-org/react";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export function Services() {
  return (
    <section className="py-10">
      <SectionHeading>What We Offer</SectionHeading>
      <SectionSubheading>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cupidatat.
      </SectionSubheading>
      <Tabs
        aria-label="services"
        color="primary"
        size="lg"
        radius="full"
        classNames={{
          tabList: [
            "dark:border dark:border-foreground/10 border",
            "bg-background/40",
            "dark:bg-background/50",
            "backdrop-blur-md",
            "backdrop-saturate-150",
            "w-full justify-between",
            "text-foreground mb-2",
          ],
          tab: "max-w-fit h-12 px-4",
          tabContent:
            "group-data-[selected=true]:text-background dark:group-data-[selected=true]:text-foreground",
        }}
        className="pt-10"
      >
        {services.map(({ category, services, Icon }, i) => (
          <Tab
            key={category + i}
            title={
              <div className="flex items-center space-x-2">
                <Icon className="h-9 w-9" />
                <span>{category}</span>
              </div>
            }
          >
            <div className="gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3">
              {services.map((service) => (
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
                  key={service.name}
                  className="mb-5 p-8 sm:break-inside-avoid"
                >
                  <h3 className="pb-2 text-xl font-medium tracking-tight">
                    {service.name}
                  </h3>
                  <p className="leading-relaxed text-foreground/60">
                    {service.serviceDescription}
                  </p>
                </Card>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
}
