import { HeroCategories } from "./hero-categories";
import { HeroDetails } from "./hero-details";

export function Hero() {
  return (
    <section className="grid h-[40rem] grid-cols-2 items-center justify-center gap-10">
      <div className="space-y-8">
        <h2 className="text-[5rem] leading-[5.5rem] tracking-wider">
          <span className="font-bold text-primary">thrive</span> towards your{" "}
          <span className="font-bold text-primary">envision.</span>
        </h2>
        <HeroCategories />
      </div>
      <HeroDetails />
    </section>
  );
}
