import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <TechStack />
      <Timeline />
      <About />
      <Contact />
    </main>
  );
}
