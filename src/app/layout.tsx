import type { Metadata } from "next";
import { Inter_Tight, Roboto_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-primary",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zimpyl | Dette er Zimpyl",
  description: "Professionel og lynhurtig one-page hjemmeside for Zimpyl.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${interTight.variable} ${robotoMono.variable}`}>
      <body className="theme-dark">{children}</body>
    </html>
  );
}
