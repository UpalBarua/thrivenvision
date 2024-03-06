"use client";

import { services } from "@/config/services";
import useMediaQuery from "@/hooks/use-media-query";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const initialServiceCategories = services.map(({ id, category, Icon }) => ({
  id,
  category,
  Icon,
}));

export function HeroCategories() {
  const [serviceCategories, setServiceCategories] = useState(
    initialServiceCategories,
  );

  const isLgScreen = useMediaQuery("(min-width:64em)");

  useEffect(() => {
    let tempCategory = {};

    const interval = setInterval(() => {
      setServiceCategories((prev) => {
        tempCategory = prev[0];
        return [...prev.slice(1)];
      });

      setTimeout(() => {
        setServiceCategories((prev) => {
          return [...prev, tempCategory] as typeof initialServiceCategories;
        });
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ScrollShadow hideScrollBar visibility="both" size={25}>
        <div className="-mt-[3.5rem] flex h-full max-h-[calc(3.5rem*4)] flex-col items-center overflow-hidden px-2 md:items-start">
          {serviceCategories.map(({ id, category, Icon }, i) => (
            <motion.div
              key={id}
              className="flex min-h-[3.5rem] items-center gap-x-3"
              layout
              initial={{ fontSize: "1.5rem" }}
              animate={
                i === 2
                  ? {
                      fontSize: isLgScreen ? "1.875rem" : "1.35rem",
                      color: "rgba(255,255,255, 0.9)",
                    }
                  : {
                      fontSize: isLgScreen ? "1.5rem" : "1.35rem",
                      color: "rgba(255,255,255, 0.6)",
                    }
              }
              transition={{ duration: 0.75, layout: { duration: 0.5 } }}
            >
              <Icon className="h-6 w-6 text-primary lg:h-7 lg:w-7" />
              <p>{category}</p>
            </motion.div>
          ))}
        </div>
      </ScrollShadow>
    </div>
  );
}
