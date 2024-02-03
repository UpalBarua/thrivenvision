import { MainNav } from "@/components/main-nav";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thrivenvision",
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
          inter.className,
          "relative min-h-screen text-foreground/90 antialiased",
        )}
      >
        <Providers>
          <MainNav />
          {children}
        </Providers>
        <div className="fixed inset-0 z-0 h-full w-full bg-[url('/bg-gradient.png')] bg-cover bg-center opacity-80" />
      </body>
    </html>
  );
}
