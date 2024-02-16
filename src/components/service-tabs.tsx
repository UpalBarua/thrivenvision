"use client";

import { ServiceCard } from "@/components/service-card";
import { services } from "@/config/services";
import { Tab, Tabs } from "@nextui-org/react";

export function ServiceTabs() {
  return (
    <Tabs
      aria-label="services"
      color="primary"
      size="lg"
      radius="full"
      fullWidth
      classNames={{
        tabList: [
          "dark:border dark:border-foreground/10 border",
          "bg-background/40",
          "dark:bg-background/50",
          "backdrop-blur-md",
          "backdrop-saturate-150",
          "overflow-x-scroll w-[calc(100dvw-1rem)] mx-auto",
          "md:w-full md:justify-between",
          "text-foreground mb-2",
        ],
        tab: "max-w-fit h-10 px-2 md:h-12 md:px-4",
        tabContent:
          "group-data-[selected=true]:text-background dark:group-data-[selected=true]:text-foreground",
      }}
      className="pt-10"
    >
      {services.map(({ category, Icon, services }, i) => (
        <Tab
          key={category + i}
          title={
            <div className="flex items-center space-x-2">
              <Icon className="hidden h-6 w-6 md:block" />
              <span>{category}</span>
            </div>
          }
        >
          <div className="gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3">
            {services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}
