import { Button, Card, Input } from "@nextui-org/react";
import Image from "next/image";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export function Newsletter() {
  return (
    <Card
      isBlurred
      classNames={{
        base: [
          "dark:bg-background/60",
          "backdrop-blur-md",
          "backdrop-saturate-150",
          "border border-foreground/10",
          "gap-6 p-2 items-start !-mb-[14rem] relative z-50 lg:flex-row lg:items-center",
        ],
      }}
    >
      <Image
        src="/images/newsletter.webp"
        alt="newsletter image"
        quality={95}
        height={500}
        width={500}
        className="h-full w-full rounded-2xl object-cover object-center lg:w-auto"
      />
      <div className="space-y-2 p-2">
        <SectionHeading className="text-start">
          <span className="lg:text-4xl">Stay Ahead of the Curve </span>
          <br className="hidden lg:block" />
          Join Our Exclusive Newsletter!
        </SectionHeading>
        <SectionSubheading className="mx-0 max-w-full px-0 text-start">
          Dive into the latest trends, insights, and tips in the digital world
          with <span className="font-semibold">thrivenvision&apos;s </span>
          newsletter. Signing up is quick and easy! Just enter your email below,
          and let us bring the future of digital innovation straight to you.
        </SectionSubheading>
        <form className="lg:items-scenter flex flex-col gap-4 sm:flex-row sm:gap-2">
          <Input
            placeholder="example@email.com"
            classNames={{
              inputWrapper:
                "bg-background/40 border border-foreground/20 data-[hover=true]:bg-background/60 group-data-[focus=true]:bg-background/60",
              input: [
                "placeholder:text-foreground/60 focus-visible:outline-none",
                "data-[has-start-content=true]:ps-1.5",
                "data-[has-end-content=true]:pe-1.5",
              ],
            }}
          />
          <Button
            type="submit"
            size="lg"
            color="primary"
            className="text-base sm:h-auto"
          >
            Subscribe
          </Button>
        </form>
        <p className="pt-10 leading-relaxed text-foreground/60">
          Your privacy is paramount to us. We promise to keep your email safe
          and never spam. Unsubscribe at any time with just a click.
        </p>
      </div>
    </Card>
  );
}
