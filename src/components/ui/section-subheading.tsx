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
        "mx-auto px-2 pb-[max(3.5dvw,_2rem)] text-center leading-relaxed text-foreground/80 md:text-[1.25rem]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
