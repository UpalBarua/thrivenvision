"use client";

import { services } from "@/config/services";
import { cn } from "@/lib/cn";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const serviceCategoryIds = services.map((service) => service.id);

export function HeroCategories() {
  const [scrollY, setScrollY] = useState(0);
  const [focusedService, setFocusedService] = useState<
    (typeof serviceCategoryIds)[number]
  >(serviceCategoryIds[1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusedService((prevService) => {
        const currentServiceIdIndex = serviceCategoryIds.indexOf(prevService);
        const nextServiceIdIndex =
          currentServiceIdIndex === 5 ? 0 : currentServiceIdIndex + 1;
        return serviceCategoryIds[nextServiceIdIndex];
      });

      setScrollY((prev) => {
        if (prev >= services.length * 3.5) {
          setFocusedService(serviceCategoryIds[1]);
          return 0;
        } else {
          return prev + 3.5;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollShadow
      hideScrollBar
      size={140}
      className="h-[calc(4*3.5rem)] overflow-hidden px-2 text-2xl text-foreground/60"
    >
      {[...services, ...services].map(({ id, category, Icon }) => (
        <motion.div
          className={cn(
            "flex min-h-[3.5rem] items-center gap-x-3 transition-all duration-[0.8] ease-in-out",
            id === focusedService && "min-h-[4rem] text-3xl text-foreground/90",
          )}
          key={id}
          animate={{ y: `-${scrollY}rem` }}
          transition={{ type: "spring", duration: 0.5, stiffness: 50 }}
        >
          <Icon className="h-7 w-7 text-primary" />
          <p>{category}</p>
        </motion.div>
      ))}
    </ScrollShadow>
  );
}
