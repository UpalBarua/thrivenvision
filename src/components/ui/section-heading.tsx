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
        "pb-2 text-center text-2xl font-semibold capitalize tracking-tight sm:text-3xl md:pb-6 md:text-[2.8125rem] md:leading-[1.125]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
