import { jetBrainsMono } from "@/app/fonts";
import { socialLinks } from "@/config";
import { services } from "@/config/services";
import { cn } from "@/lib/cn";
import { Button } from "@heroui/button";
import { FlaskConicalIcon, Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import { FooterContainer } from "./footer-container";

export function Footer() {
  return (
    <FooterContainer>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p
            className={cn(
              jetBrainsMono.className,
              "text-foreground pb-6 text-lg leading-relaxed italic",
            )}
          >
            A new idea, a bold creation. <br />
            We are the architects of your digital elevation.
          </p>
          <Link href="/get-quote">
            <Button color="primary" size="lg" className="gradient-btn">
              <span>Hire us now</span>
            </Button>
          </Link>
        </div>
        <div>
          <h3 className="text-foreground pb-4 text-2xl font-semibold">
            Our Services
          </h3>
          <ul className="grid gap-2 lg:grid-cols-2">
            {services.map(({ category }) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-foreground pb-4 text-2xl font-semibold">
            Contact Us
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="tel:+8801891625145"
                className="flex items-center gap-x-2.5"
              >
                <PhoneCall className="h-5 w-5" />
                <span>+8801891625145</span>
              </a>
            </li>
            <li className="flex items-center gap-x-2.5">
              <Mail className="h-5 w-5" />
              <span>contact.vectuslabs@gmail.com</span>
            </li>
          </ul>
        </div>
        {/* <div> */}
        {/*   <h1 className="text-foreground pb-4 text-2xl font-semibold"> */}
        {/*     Office Address */}
        {/*   </h1> */}
        {/*   <ul className="flex items-center gap-x-2.5"> */}
        {/*     <MapPin className="h-5 w-5" /> */}
        {/*     <ul> */}
        {/*       <li>27/20A, Babor Road, Block #F,</li> */}
        {/*       <li>Mohammadpur, Dhaka, BD.</li> */}
        {/*     </ul> */}
        {/*   </ul> */}
        {/* </div> */}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 lg:flex-row lg:gap-0">
        {/* TODO: Change the logo */}
        {/* <Image */}
        {/*   src="/images/named-logo.webp" */}
        {/*   alt="logo" */}
        {/*   height={80} */}
        {/*   width={160} */}
        {/*   priority */}
        {/*    */}
        {/* /> */}
        <h1 className="text-foreground flex items-center gap-0.5 text-2xl font-bold tracking-tight">
          <FlaskConicalIcon className="text-primary size-6" />
          Vectus Labs
        </h1>

        <p>Copyright © {new Date().getFullYear()} Vectus Labs Co.</p>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <div className="flex flex-col items-center gap-1 sm:flex-row md:gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-foreground underline-offset-2 transition-colors hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-foreground underline-offset-2 transition-colors hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-foreground underline-offset-2 transition-colors hover:underline"
            >
              Support
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ Icon, link }) => (
              <a
                href={link}
                key={link}
                target="_blank"
                className="border-foreground/10 bg-background hover:text-foreground rounded-full border p-3 transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
