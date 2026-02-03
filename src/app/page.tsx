import { Preloader } from "@/components/preloader";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import AboutSection from "@/sections/AboutSection";
import { WorkList } from "@/components/work-list";
import { TechStack } from "@/components/tech-stack";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative bg-background text-foreground overflow-x-hidden">
      <Preloader />
      <Header />

      <Hero />
      <div id="about">
        <AboutSection />
      </div>
      <div id="works">
        <WorkList />
      </div>
      <TechStack />
      <Footer />
    </main>
  );
}
