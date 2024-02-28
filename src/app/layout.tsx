import { Footer } from "@/components/footer";
import { MainNav } from "@/components/main-nav";
import { Providers } from "@/components/providers";
import { AuthContextProvider } from "@/context/auth-context";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
import { exo } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "thrivenvision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth dark"
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={cn(
          exo.className,
          "relative min-h-screen overflow-x-hidden  text-foreground/90 antialiased",
        )}
      >
        <Providers>
          <AuthContextProvider>
            <div className="flex min-h-screen flex-col">
              <div className="flex-1">
                <MainNav />
                {children}
              </div>
              <Footer />
            </div>
          </AuthContextProvider>
        </Providers>
        <div
          className="fixed inset-0 z-0 h-full w-full bg-[url('/bg-gradient.png')] 
          bg-cover bg-center opacity-40"
        />
      </body>
    </html>
  );
}
