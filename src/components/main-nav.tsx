"use client";

import { navLinks } from "@/config";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  // Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      height="4rem"
      maxWidth="xl"
      classNames={{
        wrapper: "px-2 sm:px-4",
        item: ["data-[active=true]:text-red-400"],
      }}
    >
      <Link href="/">
        <Image
          src="/images/named-logo.png"
          alt="logo"
          height={80}
          width={160}
        />
      </Link>
      <NavbarContent className="hidden gap-2 sm:flex" justify="end">
        {navLinks.map(({ label, href }) => (
          <NavbarItem key={href} isActive={pathname.startsWith(href)}>
            <Button variant="light" className="text-base">
              <Link color="foreground" href={href} scroll={false}>
                {label}
              </Link>
            </Button>
          </NavbarItem>
        ))}
        <NavbarItem>
          <LegalButton />
        </NavbarItem>
        {/* <ThemeSwitcher /> */}
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu>
        {navLinks.map(({ label, href }) => (
          <NavbarMenuItem key={href} isActive={pathname.startsWith(href)}>
            <Link className="w-full" color="foreground" href={href}>
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

function LegalButton() {
  return (
    <Dropdown className="mt-2 border border-foreground/10 bg-background/80 backdrop-blur-md backdrop-saturate-150">
      <DropdownTrigger>
        <Button variant="light" className="text-base">
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
            className="w-full text-base"
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
