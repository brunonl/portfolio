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
  metadataBase: new URL("https://brunomeireles.vercel.app"),
  title: "Bruno Meireles | Senior Frontend Engineer",
  description: "Portfólio de Bruno Meireles, Senior Frontend Engineer com mais de 10 anos de experiência em React, Next.js e TypeScript.",
  keywords: ["Frontend", "Software Engineer", "React", "Next.js", "TypeScript", "Developer", "Portfolio"],
  openGraph: {
    title: "Bruno Meireles | Portfolio",
    description: "Explore meu portfólio com projetos em React, Next.js e TypeScript.",
    url: "https://brunomeireles.vercel.app",
    siteName: "Bruno Meireles",
    images: [
      {
        url: "/images/projects/audicenterbh/audicenterbh.png",
        width: 1200,
        height: 630,
        alt: "Bruno Meireles Portfolio Cover",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Meireles | Portfolio",
    description: "Explore meu portfólio com projetos em React, Next.js e TypeScript.",
    images: ["/images/projects/audicenterbh/audicenterbh.png"],
  },
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
