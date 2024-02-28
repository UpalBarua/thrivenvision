import { Button, Card, Input } from "@nextui-org/react";
import Image from "next/image";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export function Newsletter() {
  return (
    <Card
      classNames={{
        base: [
          "bg-background/40",
          "dark:bg-background/50",
          "data-[hover=true]:bg-background/80",
          "dark:data-[hover=true]:bg-background/80",
          "backdrop-blur-md",
          "backdrop-saturate-150",
          "border border-foreground/10",
        ],
      }}
      className="flex-row items-center gap-10 p-6"
    >
      <Image
        src="/images/newsletter.png"
        alt="newsletter image"
        quality={95}
        height={500}
        width={500}
        className="h-full rounded-2xl object-cover object-center"
      />
      <div>
        <SectionHeading className="md:text-start">
          <span className="text-4xl">Stay Ahead of the Curve</span>
          <br />
          Join Our Exclusive Newsletter!
        </SectionHeading>
        <SectionSubheading className="mx-0 max-w-full px-0 md:text-start">
          Dive into the latest trends, insights, and tips in the digital world
          with <span className="font-semibold">thrivenvision&apos;s </span>
          newsletter. Signing up is quick and easy! Just enter your email below,
          and let us bring the future of digital innovation straight to you.
        </SectionSubheading>
        <form className="flex gap-x-2 pt-8">
          <Input
            placeholder="example@email.com"
            classNames={{
              inputWrapper: "bg-background/40 border border-foreground/20",
            }}
          />
          <Button
            type="submit"
            size="lg"
            color="primary"
            className="!h-auto text-base"
          >
            Subscribe
          </Button>
        </form>
        <p className="pt-16 leading-relaxed text-foreground/60">
          Your privacy is paramount to us. We promise to keep your email safe
          and never spam. Unsubscribe at any time with just a click.
        </p>
      </div>
    </Card>
  );
}
