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
  title: "Bruno Meireles | Portfolio",
  description: "Explore meu portfólio",
  keywords: ["Frontend", "Software Engineer", "React", "Next.js", "TypeScript", "Developer", "Portfolio"],
  openGraph: {
    title: "Bruno Meireles | Portfolio",
    description: "Explore meu portfólio",
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
    card: "summary",
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
