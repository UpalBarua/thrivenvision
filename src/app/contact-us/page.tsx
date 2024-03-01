"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";
import { socialLinks } from "@/config";
import { ContactUsForm } from "@/components/contact-us-form";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function ContactUs() {
  return (
    <main className="container relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-10 px-2 pt-[max(5dvw,1.5rem)] sm:px-4 md:grid-cols-2 md:gap-28">
      <div>
        <Suspense>
          <PageHeading />
        </Suspense>
        <SectionHeading className="text-start">
          Reach our Customer service!
        </SectionHeading>
        <p className="leading-relaxed text-foreground/60">
          We value your connection with us. Our dedicated team is committed to
          providing exceptional service and prompt communication. Whether you
          have questions, feedback, or simply want to get to know us better,
          we’re here for you.
        </p>
        <div className="flex items-center gap-x-4 pt-8">
          {socialLinks.map(({ link, Icon }) => (
            <a
              href={link}
              key={link}
              target="_blank"
              className="cursor-pointer rounded-full border border-foreground/10
              bg-background/80 p-3 text-foreground/60 transition-colors hover:bg-primary hover:text-foreground"
            >
              <Icon size={26} />
            </a>
          ))}
        </div>
      </div>
      <ContactUsForm />
    </main>
  );
}

function PageHeading() {
  const searchParams = useSearchParams();
  const pageFor = searchParams.get("for");

  return (
    <SectionSubheading className="mx-0 px-0 pb-2 text-start">
      {pageFor === "quote" ? "Get a Quote" : "Contact Us"}
    </SectionSubheading>
  );
}
