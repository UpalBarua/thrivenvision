import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
import { lexend } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vectus Labs",
  description:
    "Vectus Labs: Building your brand with tailored web development, stunning graphic design, and expert SEO. We craft digital paths that lead to growth",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          lexend.className,
          "relative min-h-screen overflow-x-hidden !scroll-smooth antialiased",
        )}
      >
        <Providers>{children}</Providers>
        <div className="fixed inset-0 bg-[url('/images/bg-gradient.webp')] bg-cover bg-center opacity-50" />
      </body>
    </html>
  );
}
