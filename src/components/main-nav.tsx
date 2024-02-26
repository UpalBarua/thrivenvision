"use client";

import { navLinks } from "@/config";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
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
        <Image src="/named-logo.png" alt="logo" height={80} width={160} />
      </Link>
      <NavbarContent className="hidden gap-6 sm:flex" justify="end">
        {navLinks.map(({ label, href }) => (
          <NavbarItem key={href} isActive={pathname.startsWith(href)}>
            <div>
              <Link color="foreground" href={href}>
                {label}
              </Link>
            </div>
          </NavbarItem>
        ))}
        <NavbarItem className="-ml-4">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="text-base"
                endContent={<ChevronDown />}
              >
                Legal
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="edit">
                <Link className="text-white" href="teams-of-service">
                  Terms Of Service
                </Link>
              </DropdownItem>
              <DropdownItem key="copy">
                <Link className="text-white" href="privacy-policy">
                  Privacy policy
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {/* <Button className="text-white" color="primary" variant="flat"> */}
          {/*   Get a Quote */}
          {/* </Button> */}
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
            <Link className="w-full" color="foreground" href={href} size="lg">
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
