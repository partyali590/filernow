import type { Metadata } from "next";
import "./globals.css";

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
    <html
      lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
