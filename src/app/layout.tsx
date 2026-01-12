import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.scss";
import { LanguageProvider } from "@/contexts/LanguageContext";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-primary',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bruno Meireles | Senior Frontend Engineer",
  description: "Portfólio de Bruno Meireles, Senior Frontend Engineer com mais de 10 anos de experiência em React, Next.js e TypeScript.",
  keywords: ["Frontend", "Software Engineer", "React", "Next.js", "TypeScript", "Developer", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jetbrainsMono.variable} ${outfit.variable}`}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
