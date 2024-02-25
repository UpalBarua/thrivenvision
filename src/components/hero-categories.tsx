"use client";

import { services } from "@/config/services";
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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollShadow
      visibility="both"
      hideScrollBar
      size={25}
      className="h-[calc(3*3.5rem)] px-2 text-2xl text-foreground/60"
    >
      {[...services, ...services, ...services].map(({ id, category, Icon }) => (
        <motion.div
          className={"flex min-h-[3.5rem] items-center gap-x-3"}
          key={id}
          animate={{
            y: `-${scrollY}rem`,
            fontSize: id === focusedService ? "1.875rem" : "1.5rem",
            color:
              id === focusedService
                ? "rgba(255,255,255, 0.9)"
                : "rgba(255,255,255, 0.6)",
          }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <Icon className="h-7 w-7 text-primary" />
          <p>{category}</p>
        </motion.div>
      ))}
    </ScrollShadow>
  );
}
