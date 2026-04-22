import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";

export const metadata: Metadata = {
  title: "Version Zero",
  description: "Version Zero — terminal interface",
  openGraph: {
    title: "Version Zero",
    description: "Version Zero — terminal interface",
    images: [{ url: "/OG.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Version Zero",
    description: "Version Zero — terminal interface",
    images: ["/OG.jpg"],
  },
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
      <body>{children}</body>
    </html>
  );
}
