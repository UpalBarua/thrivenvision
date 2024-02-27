import { termsOfServices } from "@/config";
export default function TermsOfServices() {
  return (
    <section className="mx-auto mt-14 max-w-full lg:max-w-6xl">
      <div className="p-4 lg:p-0">
        <h1 className="pb-6 text-5xl font-bold ">Terms of Service</h1>
        <p className="pb-4 text-[20px]">
          By accessing and using the services provided by{" "}
          <span className="font-bold">thrivenvision</span>, you agree to the
          following terms and conditions
        </p>
      </div>
      <div>
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
    <div className="pb-4" key={term}>
      <p className="p-4 text-[20px] lg:p-0">
        <span className="font-semibold text-primary">{term}</span>:{" "}
        {description}
      </p>
    </div>
  );
}
