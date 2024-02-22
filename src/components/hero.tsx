import Image from "next/image";
import { HeroCategories } from "./hero-categories";
import { HeroDetails } from "./hero-details";

export function Hero() {
  return (
    <section className="grid min-h-[40rem] grid-cols-2 items-center justify-center gap-10">
      <div className="space-y-8">
        <Image src="/logo.png" alt="hero logo" height={50} width={50} />
        <h2 className="text-[5rem] capitalize leading-[5.5rem] tracking-tight">
          <span className="font-bold">Thrive</span> towards your{" "}
          <span className="font-bold">envision</span>!
        </h2>
        <HeroCategories />
      </div>
      <HeroDetails />
    </section>
  );
}
