import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { SITE_URL, SOCIAL_LINKS } from "@/constants";
import { translations } from "@/data/translations";

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;
const profilePageId = `${SITE_URL}/#profile-page`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Bruno Meireles",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/profile.png`,
      jobTitle: translations.pt["hero.label"],
      description: translations.pt["about.text1"],
      sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github],
      knowsAbout: [
        "Desenvolvimento Frontend",
        "React",
        "Next.js",
        "TypeScript",
        "Angular",
        "React Native",
      ],
      mainEntityOfPage: { "@id": profilePageId },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${SITE_URL}/`,
      name: "Bruno Meireles | Portfólio",
      description: translations.pt["hero.description"],
      inLanguage: "pt-BR",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": profilePageId,
      url: `${SITE_URL}/`,
      name: "Bruno Meireles | Desenvolvedor Frontend",
      description: translations.pt["about.text1"],
      inLanguage: "pt-BR",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Timeline />
        <About />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}
