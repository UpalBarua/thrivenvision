"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
        <Toaster />
      </ThemeProvider>
    </HeroUIProvider>
  );
}
