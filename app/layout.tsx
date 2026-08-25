import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/myui/Header";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/myui/Footer";
import Providers from "@/Providers";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "Best USA eSIM Plans For Locals & Travelers | Phonico",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "Poppins",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <SessionProvider>
          <Providers>
            <TooltipProvider>
              <NextTopLoader color="red" />
              <Header />
              <div className="mt-20 w-full ">
                {children}
              </div>
              <Footer />
            </TooltipProvider>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
