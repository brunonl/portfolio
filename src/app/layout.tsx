import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bruno Meireles | Senior Software Engineer",
  description: "Portfólio de Bruno Meireles, Senior Software Engineer especializado em Frontend com React, Next.js e TypeScript.",
  keywords: ["Frontend", "Software Engineer", "React", "Next.js", "TypeScript", "Developer", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
