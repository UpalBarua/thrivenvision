"use client";

import { Navbar } from "@heroui/navbar";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { MobileNav } from "./mobile-nav";
import { FlaskConicalIcon } from "lucide-react";

type NavContainerProps = {
  children: ReactNode;
};

export function NavContainer({ children }: Readonly<NavContainerProps>) {
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
      <Link href="/" onClick={() => setIsMenuOpen(false)}>
        <Image src="logo.svg" alt="logo" height={250} width={180} priority />
      </Link>
      {children}
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </Navbar>
  );
}
