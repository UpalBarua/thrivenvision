"use client";

import { Button } from "@nextui-org/react";
import { HeroCategories } from "./hero-categories";
import { HeroImages } from "./hero-images";
import { ConsultantBookingModal } from "./consultant-booking-modal";

export function Hero() {
  return (
    <section className=" grid h-[40rem] grid-cols-1 items-start justify-center gap-0 md:grid-cols-2 lg:items-center">
      <div className="relative order-last flex flex-col justify-center space-y-2 lg:order-first lg:justify-start lg:space-y-8">
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
          />
        </svg>
        <h1 className="relative z-10 text-center text-[clamp(2.375rem,5vw+0.5rem,5rem)] leading-tight tracking-wider lg:text-start">
          <span className="font-bold text-primary">thrive</span> towards your{" "}
          <span className="font-bold text-primary">envision.</span>
        </h1>
        <HeroCategories />
        <div className="flex items-center justify-center gap-x-4 lg:justify-start">
          <ConsultantBookingModal />

          <Button className="h-10 border border-foreground/20 bg-background px-4 text-base font-semibold text-foreground/80 shadow-md lg:h-14 lg:px-6 lg:text-xl">
            Case Studies
          </Button>
        </div>
      </div>
      <HeroImages />
    </section>
  );
}
