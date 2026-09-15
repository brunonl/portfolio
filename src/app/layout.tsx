import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.scss";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SITE_URL } from "@/constants";

const siteTitle = "Bruno Meireles | Desenvolvedor Frontend";
const siteDescription = "Portfólio de Bruno Meireles, desenvolvedor frontend com mais de 10 anos de experiência criando experiências digitais com React, Next.js e TypeScript.";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: "%s | Bruno Meireles",
  },
  description: siteDescription,
  authors: [{ name: "Bruno Meireles", url: SITE_URL }],
  creator: "Bruno Meireles",
  keywords: ["Front-end", "Desenvolvedor Frontend", "Frontend Developer", "React", "Next.js", "TypeScript", "Developer", "Portfolio"],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: `${SITE_URL}/`,
    siteName: "Bruno Meireles",
    images: [
      {
        url: "/images/projects/portfolio/portfolio.png",
        width: 1920,
        height: 1080,
        alt: "Portfólio de Bruno Meireles",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/projects/portfolio/portfolio.png"],
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
