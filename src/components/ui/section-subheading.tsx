import * as React from "react";
import { cn } from "@/lib/cn";

type SectionSubheadingProps = {
  children: React.ReactNode;
  className?: React.ClassAttributes<HTMLHeadingElement>;
};

export function SectionSubheading({
  children,
  className,
}: SectionSubheadingProps) {
  return (
    <h2
      className={cn("mx-auto px-4 max-w-[30rem] text-center text-foreground/80", className)}
    >
      {children}
    </h2>
  );
}
