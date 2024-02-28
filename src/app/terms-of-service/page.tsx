import { termsOfServices } from "@/config";
import { SectionHeading } from "@/components/ui/section-heading";

export default function TermsOfServices() {
  return (
    <section className="mx-auto mt-14 max-w-6xl">
      <SectionHeading className="text-start">Terms of Service</SectionHeading>
      <p className="text-foregournd/80 pb-14 text-[1.25rem]">
        By accessing and using the services provided by{" "}
        <span className="font-bold">thrivenvision</span>, you agree to the
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
    <p className="text-[1.25rem] leading-relaxed text-foreground/80">
      <span className="font-semibold text-primary">{term}</span> - {description}
    </p>
  );
}
