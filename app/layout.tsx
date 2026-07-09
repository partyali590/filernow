import type { Metadata } from "next";
import "./globals.css";
import { inter, plusJakarta } from "./fonts";

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
      <body className="min-h-full flex flex-col font-inter">{children}</body>
    </html>
  );
}
