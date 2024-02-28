"use client";

import { services } from "@/config/services";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const initialCategoryImages = services.map(({ id, categoryImage }) => ({
  id,
  categoryImage,
}));

export function HeroImages() {
  const [categoryImages, setCategoryImages] = useState(initialCategoryImages);

  useEffect(() => {
    let tempCategoryImage = {};

    const interval = setInterval(() => {
      setCategoryImages((prev) => {
        tempCategoryImage = prev[0];
        return [...prev.slice(1)];
      });

      setTimeout(() => {
        setCategoryImages((prev) => {
          return [...prev, tempCategoryImage] as typeof initialCategoryImages;
        });
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollShadow
      orientation="horizontal"
      visibility="both"
      size={25}
      hideScrollBar
      className="relative z-20"
    >
      <div className="flex max-w-full -translate-x-[200%] items-center justify-start">
        {categoryImages.map(({ id, categoryImage }, i) => (
          <motion.div
            key={id}
            className="flex min-w-full items-center justify-center"
            layout
            animate={i === 2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, layout: { duration: 0.5 } }}
          >
            <img
              className="object-fit object-center"
              alt="hero image"
              src={categoryImage}
              height={450}
              width={450}
            />
          </motion.div>
        ))}
      </div>
    </ScrollShadow>
  );
}
