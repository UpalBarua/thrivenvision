"use client";

import { services } from "@/config/services";
import { cn } from "@/lib/cn";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ServiceCategoryIds = services.map((service) => service.id);

export function HeroCategories() {
  const [scrollY, setScrollY] = useState(0);
  const [focusedService, setFocusedService] = useState<
    (typeof ServiceCategoryIds)[number]
  >(ServiceCategoryIds[2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusedService((prevService) => {
        const currentServiceIdIndex = ServiceCategoryIds.indexOf(prevService);
        const nextServiceIdIndex =
          currentServiceIdIndex === 5 ? 0 : currentServiceIdIndex + 1;
        return ServiceCategoryIds[nextServiceIdIndex];
      });

      setScrollY((prev) => {
        if (prev >= services.length * 4) {
          setFocusedService(ServiceCategoryIds[2]);
          return 0;
        } else {
          return prev + 4;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollShadow
      hideScrollBar
      size={150}
      className="h-[calc(6*4rem)] overflow-hidden text-3xl text-foreground/40"
    >
      {[...services, ...services, ...services].map(({ id, category, Icon }) => (
        <motion.div
          className={cn(
            "flex min-h-[4rem] items-center gap-x-4 transition-all duration-[0.8] ease-in-out",
            id === focusedService &&
            "min-h-[4.5rem] text-4xl text-foreground/90",
          )}
          key={id}
          animate={{ y: `-${scrollY}rem` }}
          transition={{ type: "spring", duration: 0.5, stiffness: 40 }}
        >
          <Icon className="h-8 w-8" />
          <p>{category}</p>
        </motion.div>
      ))}
    </ScrollShadow>
  );
}
