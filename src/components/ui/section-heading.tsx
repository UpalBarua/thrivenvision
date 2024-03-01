import * as React from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "pb-2 text-center text-[clamp(1.5rem,_3.5vw+1rem,_2.8125rem)] font-semibold capitalize tracking-tight md:pb-4",
        className,
      )}
    >
      {children}
    </h2>
  );
}
