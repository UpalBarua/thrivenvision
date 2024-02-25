"use client";

import { services } from "@/config/services";
import { ScrollShadow } from "@nextui-org/react";
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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollShadow
      orientation="horizontal"
      hideScrollBar
      visibility="both"
      size={160}
      className="flex h-full items-center justify-start gap-8"
    >
      {[...services, ...services, ...services].map(
        ({ id, categoryImage, category }) => (
          <motion.div
            className="flex aspect-square min-w-[38rem] items-center justify-center"
            key={id}
            animate={{ x: `-${scrollX}rem` }}
            transition={{
              ease: "linear",
              duration: 0.5,
            }}
          >
            <Image
              className="object-fit object-center"
              alt="NextUI hero Image with delay"
              src={categoryImage}
              height={450}
              width={450}
            />
          </motion.div>
        ),
      )}
    </ScrollShadow>
  );
}
