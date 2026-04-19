import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";

export const metadata: Metadata = {
  title: "Version Zero",
  description: "Version Zero — terminal interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistMono.variable} ${GeistPixelSquare.variable} antialiased`}
    >
      <body className="scanlines">{children}</body>
    </html>
  );
}
