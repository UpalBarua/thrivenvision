import { Button } from "@nextui-org/react";
import { HeroCategories } from "./hero-categories";
import { HeroImages } from "./hero-images";

export function Hero() {
  return (
    <section className="mb-28 grid h-[40rem] grid-cols-2 items-center justify-center gap-10">
      <div className="relative space-y-8">
        <svg
          className="absolute -left-8 -top-10 h-32 w-32 -rotate-[180deg] scale-x-[-1]"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 73 70"
        >
          <path
            d="M63.448 49.736C67.191 26.01 37.745 7.409 27.255 24.717C26.81 25.451 26.463 26.267 26.278 27.104C23.846 38.138 40.549 36.186 36.492 27.155C29.382 11.325 6.953 14.722 1.77 31.114"
            fill="transparent"
            strokeWidth="1.07"
            stroke="#ffffff"
            strokeMiterlimit="10"
          ></path>
        </svg>
        <h2 className="relative z-10 text-[5rem] leading-[5.5rem] tracking-wider">
          <span className="font-bold text-primary">thrive</span> towards your{" "}
          <span className="font-bold text-primary">envision.</span>
        </h2>
        <HeroCategories />
        <div className="flex items-center gap-x-4">
          <Button
            color="primary"
            className="gradient-btn h-14 px-6 text-xl font-semibold"
          >
            <span>Get a Quote</span>
          </Button>
          <Button className="h-14 border border-foreground/20 bg-background px-6 text-xl font-semibold text-foreground/80 shadow-md">
            Case Studies
          </Button>
        </div>
      </div>
      <HeroImages />
    </section>
  );
}
