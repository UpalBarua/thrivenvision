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
    <section>
      <ScrollShadow
        orientation="horizontal"
        visibility="both"
        size={25}
        hideScrollBar
        className="relative z-20 overflow-x-hidden"
      >
        <div className="flex max-w-full -translate-x-[200%] items-center justify-start">
          {categoryImages.map(({ id, categoryImage }, i) => (
            <motion.div
              key={id}
              className="flex min-w-full items-center justify-center px-10 lg:px-0"
              layout
              animate={i === 2 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, layout: { duration: 0.5 } }}
            >
              <Image
                className="object-fit aspect-square object-center md:w-[28rem]"
                alt="hero image"
                src={categoryImage}
                height={300}
                width={300}
                quality={95}
                priority
              />
            </motion.div>
          ))}
        </div>
      </ScrollShadow>
    </section>
  );
}
