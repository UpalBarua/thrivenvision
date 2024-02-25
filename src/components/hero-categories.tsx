"use client";

import { services } from "@/config/services";
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
    <ScrollShadow hideScrollBar visibility="both" size={25}>
      <div className="h-full max-h-[calc(3.5rem*3)] px-2 text-2xl text-foreground/60">
        {serviceCategories.map(({ id, category, Icon }, i) => (
          <motion.div
            key={id}
            className={"flex min-h-[3.5rem] items-center gap-x-3"}
            layout
            initial={{ fontSize: "1.5rem" }}
            animate={
              i === 1
                ? { fontSize: "1.875rem", color: "rgba(255,255,255, 0.9)" }
                : { fontSize: "1.5rem", color: "rgba(255,255,255, 0.6)" }
            }
            transition={{ duration: 0.75, layout: { duration: 0.5 } }}
          >
            <Icon className="h-7 w-7 text-primary" />
            <p>{category}</p>
          </motion.div>
        ))}
      </div>
    </ScrollShadow>
  );
}
