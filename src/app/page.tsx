import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Activities } from "@/components/sections/Activities";
import { Advocacy } from "@/components/sections/Advocacy";
import { Community } from "@/components/sections/Community";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { HemophiliaIntro } from "@/components/sections/HemophiliaIntro";
import { QuickLinks } from "@/components/sections/QuickLinks";
import { Reality } from "@/components/sections/Reality";
import { Voices } from "@/components/sections/Voices";

export default function Home() {
  return (
    <div className="site-shell">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <QuickLinks />
        <Community />
        <Reality />
        <Advocacy />
        <Voices />
        <HemophiliaIntro />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
