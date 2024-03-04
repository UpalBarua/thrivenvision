"use client";

import { navLinks } from "@/config";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      height="3.5rem"
      maxWidth="xl"
      classNames={{
        wrapper: "px-2 sm:px-4",
      }}
    >
      <Link href="/">
        <Image
          src="/images/named-logo.webp"
          alt="logo"
          height={80}
          width={160}
          priority
          quality={95}
        />
      </Link>
      <NavbarContent className="hidden gap-3 md:flex" justify="end">
        {navLinks.map(({ label, href }) => (
          <NavbarItem key={href}>
            <Button
              variant="light"
              size="sm"
              className="text-base capitalize text-foreground/80"
            >
              <Link href={href}>{label}</Link>
            </Button>
          </NavbarItem>
        ))}
        <NavbarItem>
          <LegalButton />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
      <NavbarMenu className="space-y-2 py-6">
        {navLinks.map(({ label, href }) => (
          <NavbarMenuItem key={href}>
            <Link href={href} className="w-full capitalize text-foreground/80">
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            className="w-full text-base"
            color="foreground"
            href="/terms-of-service"
          >
            Terms of Service
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-base"
            color="foreground"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

function LegalButton() {
  return (
    <Dropdown className="mt-2 border border-foreground/10 bg-background/80 backdrop-blur-md backdrop-saturate-150">
      <DropdownTrigger>
        <Button
          variant="light"
          size="sm"
          className="text-base text-foreground/80"
        >
          <span>Legal</span>
          <ChevronDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem className="hover:!bg-background">
          <Link
            className="w-full text-base"
            color="foreground"
            href="/terms-of-service"
          >
            Terms of Service
          </Link>
        </DropdownItem>
        <DropdownItem className="hover:!bg-background">
          <Link
            className="w-full text-base capitalize"
            color="foreground"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
