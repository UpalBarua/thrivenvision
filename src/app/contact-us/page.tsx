import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";
import { socialLinks } from "@/config";
import { ContactUsForm } from "@/components/contact-us-form";

export default function ContactUs() {
  return (
    <main className="container relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-28 py-20">
      <div>
        <SectionSubheading className="mx-0 px-0 pb-2 text-start">
          Contact Us
        </SectionSubheading>
        <SectionHeading className="text-start">
          Reach our Customer service!
        </SectionHeading>
        <p className="leading-relaxed text-foreground/60">
          Our team try to communicate you as soon as possible. please mail us
          and try to know us a good. Welcome in our company. We always try to
          give you a great service.
        </p>
        <div className="flex items-center gap-x-4 pt-8">
          {socialLinks.map(({ link, Icon }) => (
            <a
              href={link}
              key={link}
              target="_blank"
              className="cursor-pointer rounded-full border border-foreground/10
              bg-background/80 p-3 text-foreground/60 hover:bg-primary"
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
