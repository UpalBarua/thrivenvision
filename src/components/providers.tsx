"use client";

import { AuthContextProvider } from "@/context/auth-context";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <AuthContextProvider>{children}</AuthContextProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
