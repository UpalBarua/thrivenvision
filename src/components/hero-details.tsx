"use client";

import { services } from "@/config/services";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ServiceCategoryIds = services.map((service) => service.id);

export function HeroDetails() {
  const [scrollX, setScrollX] = useState(80);

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

      setScrollX((prev) => {
        if (prev >= services.length * 40) {
          setFocusedService(ServiceCategoryIds[2]);
          return 0;
        } else {
          return prev + 40;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full items-center gap-8 overflow-hidden rounded-2xl">
      {[...services, ...services, ...services].map(
        ({ id, categoryImage, category }) => (
          <motion.div
            className={cn(
              "relative h-full min-w-[38rem] transition-all duration-[0.8] ease-in-out",
            )}
            key={id}
            animate={{ x: `-${scrollX}rem` }}
            transition={{
              type: "spring",
              duration: 0.5,
              stiffness: 40,
            }}
          >
            <Image
              className="rounded-2xl object-cover object-center shadow-md"
              alt="NextUI hero Image with delay"
              src={categoryImage}
              fill
            />
            <span className="absolute inset-0  text-2xl font-bold text-red-500">
              {category}
            </span>
          </motion.div>
        ),
      )}
    </div>
  );
}
