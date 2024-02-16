import { Card, Image as UiImage } from "@nextui-org/react";
import { HeroCategories } from "./hero-categories";
import Image from "next/image";
import { HeroDetails } from "./hero-details";

export function Hero() {
  return (
    <section className="grid grid-cols-2 justify-center gap-10 py-12">
      <div>
        <div className="flex items-center gap-x-4 pb-10">
          <Image src="/logo.png" alt="hero logo" height={30} width={30} />
          <h2 className="text-4xl font-extrabold capitalize tracking-tight">
            Thrive toward your envision!
          </h2>
        </div>
        <HeroCategories />
      </div>
      <HeroDetails />
    </section>
  );
}
