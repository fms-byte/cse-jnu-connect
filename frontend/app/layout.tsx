import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto ,Inter} from "next/font/google";
import "./globals.css";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeaderSection from "@/components/shared/HeaderSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const interFont = Inter({
   subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "CSE JNU Connect",
  description: "A community platform for CSE-JNU students!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} antialiased`}>
        <HeaderSection />
        {children}
      </body>
    </html>
  );
}
