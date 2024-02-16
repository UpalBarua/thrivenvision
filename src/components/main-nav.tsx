"use client";

import { navLinks } from "@/config";
import {
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeSwitcher } from "./theme-switcher";

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      height="3.5rem"
      maxWidth="full"
      classNames={{
        wrapper: "px-2 sm:px-4",
        item: ["data-[active=true]:text-red-400"],
      }}
    >
      <Link href="/">
        <Image src="/named-logo.png" alt="logo" height={80} width={160} />
      </Link>
      <NavbarContent className="hidden gap-6 sm:flex" justify="end">
        {navLinks.map(({ label, href }) => (
          <NavbarItem key={href} isActive={pathname.startsWith(href)}>
            <Link color="foreground" href={href}>
              {label}
            </Link>
          </NavbarItem>
        ))}
        <ThemeSwitcher />
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu>
        {navLinks.map(({ label, href }) => (
          <NavbarMenuItem key={href} isActive={pathname.startsWith(href)}>
            <Link className="w-full" color="foreground" href={href} size="lg">
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
