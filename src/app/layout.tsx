import Footer from "@/components/footer";
import { MainNav } from "@/components/main-nav";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const exo = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thrivenvision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          exo.className,
          "relative min-h-screen text-foreground/90 antialiased",
        )}
      >
        <Providers>
          <MainNav />
          {children}

          <Footer />
        </Providers>
        <div
          className="fixed inset-0 z-0 h-full w-full bg-[url('/bg-gradient.png')] 
          bg-cover bg-center opacity-40"
        />
      </body>
    </html>
  );
}
