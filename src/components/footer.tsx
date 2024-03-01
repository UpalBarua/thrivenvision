"use client";

import { kaushanScript } from "@/app/fonts";
import { services } from "@/config/services";
import { cn } from "@/lib/cn";
import { Button } from "@nextui-org/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={cn(
        "relative z-10 mt-auto space-y-14 border-t border-foreground/10 bg-background/60 pb-6 text-foreground/60 backdrop-blur-md backdrop-saturate-150",
        pathname === "/" ? "pt-[20rem]" : "mt-10",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className={cn(kaushanScript.className, "text-[1.8125rem]")}>
            Embrace the unknown,
          </h3>
          <h4 className="pb-6 text-xl capitalize text-foreground">
            let your dreams take flight.
          </h4>
          <Button
            color="primary"
            size="lg"
            className="gradient-btn !text-xl font-semibold capitalize"
          >
            <span>Hire us now</span>
          </Button>
        </div>
        <div>
          <h3 className="pb-4 text-2xl font-semibold text-foreground">
            Services
          </h3>
          <div className="flex flex-col gap-y-2">
            {services.map(({ category }) => (
              <Link
                key={category}
                href="#"
                className="underline-offset-2 transition-colors hover:text-foreground/80 hover:underline"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="pb-4 text-2xl font-semibold text-foreground">
            Contacts
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-x-2.5">
              <PhoneCall className="h-5 w-5" />
              <span>+8801686113364</span>
            </li>
            <li className="flex items-center gap-x-2.5">
              <Mail className="h-5 w-5" />
              <span>contact@thrivenvision.studio</span>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="pb-4 text-2xl font-semibold text-foreground">
            Office Address
          </h1>
          <ul className="flex items-center gap-x-2.5">
            <MapPin className="h-5 w-5" />
            <ul>
              <li>27/20A, Babor Road, Block #F,</li>
              <li>Mohammadpur, Dhaka, BD.</li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 lg:flex-row lg:gap-0">
        <Image
          src="/images/named-logo.webp"
          alt="logo"
          height={80}
          width={160}
          className="pb-6 pt-8 lg:p-0"
        />
        <p>Copyright © 2024 thrivenvision.studio</p>
        <ul className="flex flex-wrap items-center justify-center gap-4 capitalize">
          <Link href="/privacy-policy">privacy policy</Link>
          <Link href="/terms-of-service">terms of service</Link>
          <Link href="/privacy-policy">support</Link>
          <Link href="/privacy-policy">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="/privacy-policy">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="/privacy-policy">
            <Linkedin className="h-5 w-5" />
          </Link>
        </ul>
      </div>
    </footer>
  );
}
