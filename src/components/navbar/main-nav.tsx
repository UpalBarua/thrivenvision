import { navLinks } from "@/config";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { NavContainer } from "./nav-container";

export function MainNav() {
  console.log("fuck");
  return (
    <NavContainer>
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
    </NavContainer>
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
