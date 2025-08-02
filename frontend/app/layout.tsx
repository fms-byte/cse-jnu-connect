import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <body className={`${roboto.className} antialiased`}>
        <nav className="h-[70px] p-5 cursor-pointer shadow-sm bg-[#f5f5f5] shadow-gray-600 flex items-center justify-between">
          <span className="font-bold  text-orange-600">CSE JnU Connect</span>
          <ul className="flex gap-2">
            <li>home</li>
            <li>Achievements</li>
            <li>Contributors</li>
          </ul>
          <div className="flex gap-2">
            <Button variant={"outline"} className="cursor-pointer">Sign In</Button>
            <Button
              variant={"default"}
              color="#f5f5f5"
              className="cursor-pointer"
            >
              Register
            </Button>
          </div>
          <p className="  text-gray-600">
            <Menu />
          </p>
        </nav>

        {children}
      </body>
    </html>
  );
}
