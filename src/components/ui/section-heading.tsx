import * as React from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: React.ClassAttributes<HTMLHeadingElement>;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "pb-2 text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:pb-6 md:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
