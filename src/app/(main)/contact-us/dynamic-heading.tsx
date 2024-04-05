"use client";

import { SectionSubheading } from "@/components/ui/section-subheading";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export function DynamicHeading() {
  const searchParams = useSearchParams();
  const pageFor = searchParams.get("for");

  return (
    <Suspense>
      <SectionSubheading className="mx-0 px-0 pb-2 text-start">
        {pageFor === "quote" ? "Get a Quote" : "Contact Us"}
      </SectionSubheading>
    </Suspense>
  );
}
