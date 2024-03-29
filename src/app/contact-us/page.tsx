import { ContactUsForm } from "@/components/contact-us-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { socialLinks } from "@/config";
import { DynamicHeading } from "./dynamic-heading";

export default function ContactUs() {
  return (
    <main className="container relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 pt-[max(5dvw,1.5rem)] md:grid-cols-2 md:gap-28">
      <div>
        <DynamicHeading />
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
