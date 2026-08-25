import { Header } from "@/components/layout/Header";
import { Community } from "@/components/sections/Community";
import { Hero } from "@/components/sections/Hero";
import { HemophiliaIntro } from "@/components/sections/HemophiliaIntro";
import { QuickLinks } from "@/components/sections/QuickLinks";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <Community />
        <HemophiliaIntro />
      </main>
    </div>
  );
}
