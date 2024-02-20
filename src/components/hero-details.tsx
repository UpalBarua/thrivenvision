"use client";

import { services } from "@/config/services";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroDetails() {
  const [scrollX, setScrollX] = useState(40);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX((prev) => {
        if (prev >= services.length * 40) {
          return 0;
        } else {
          return prev + 40;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full w-full items-center gap-8 overflow-hidden rounded-2xl">
      {[...services, ...services, ...services].map(({ id, categoryImage }) => (
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
            className="object-fit rounded-2xl object-bottom"
            alt="NextUI hero Image with delay"
            src={categoryImage}
            fill
          />
        </motion.div>
      ))}
    </div>
  );
}
