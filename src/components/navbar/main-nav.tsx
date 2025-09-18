import { NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import { Button } from "@heroui/button";

import { LegalButton } from "./legal-button";
import { NavContainer } from "./nav-container";
import { navLinks } from "@/config";

export function MainNav() {
  return (
    <NavContainer>
      <NavbarContent className="hidden gap-3 md:flex" justify="end">
        {navLinks.map(({ label, href }) => (
          <NavbarItem key={href}>
            <Button
              variant="light"
              size="sm"
              className="text-foreground/80 text-base capitalize"
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
