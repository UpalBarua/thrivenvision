import * as React from "react";
import { cn } from "@/lib/cn";

type SectionSubheadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionSubheading({
  children,
  className,
}: SectionSubheadingProps) {
  return (
    <h2
      className={cn(
        "mx-auto max-w-[30rem] px-2 text-center text-[1.25rem] leading-relaxed text-foreground/80",
        className,
      )}
    >
      {children}
    </h2>
  );
}
