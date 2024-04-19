import * as React from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h1
      className={cn(
        "pb-2 text-center text-[clamp(1.5rem,_3.5vw+1rem,_2.8125rem)] font-semibold capitalize leading-snug tracking-tight md:pb-4",
        className,
      )}
    >
      {children}
    </h1>
  );
}
