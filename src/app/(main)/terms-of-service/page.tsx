import { SectionHeading } from "@/components/ui/section-heading";
import { termsOfServices } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Vectus Labs",
  description:
    "Digital experience secured. Learn about responsible use and user agreements for a secure Vectus Labs experience.",
};

export default function TermsOfServices() {
  return (
    <section className="relative z-10 container mx-auto max-w-[80ch] scroll-m-20 px-4 pt-[max(3dvw,1.5rem)]">
      <SectionHeading className="text-start normal-case">
        Terms of Service
      </SectionHeading>
      <p className="text-foregournd/80 pb-14 text-[1.25rem]">
        By accessing and using the services provided by{" "}
        <span className="font-bold">Vectus Labs</span>, you agree to the
        following terms and conditions:
      </p>
      <div className="space-y-8">
        {termsOfServices.map((termOfServices) => (
          <TermOfService key={termOfServices.term} {...termOfServices} />
        ))}
      </div>
    </section>
  );
}

type TermOfServiceProps = (typeof termsOfServices)[number];

function TermOfService({ term, description }: TermOfServiceProps) {
  return (
    <p className="text-foreground/80 text-[1.25rem] leading-relaxed">
      <span className="text-primary font-semibold">{term}</span> - {description}
    </p>
  );
}
