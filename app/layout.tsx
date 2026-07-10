import type { Metadata } from "next";
import "./globals.css";
import { inter, plusJakarta } from "./fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "FilerNow",
  description: "Income Tax Return, NTN Registration, Sales Tax Registration, and other services in Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className={`${inter.variable} ${plusJakarta.variable}`}
    >
      <body className="min-h-full flex flex-col font-inter text-text-primary">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
