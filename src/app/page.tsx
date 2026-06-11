import { Preloader } from "@/components/preloader";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import AboutSection from "@/sections/AboutSection";
import { FeaturedProject } from "@/components/featured-project";
import { WorkList } from "@/components/work-list";
import { TechStack } from "@/components/tech-stack";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative bg-background text-foreground overflow-x-clip">
      <Preloader />
      <Header />

      {/* ─── 1. HERO ─── */}
      <Hero />

      {/* ─── 2. ABOUT (Bento Grid) ─── */}
      <div id="about">
        <AboutSection />
      </div>

      {/* ─── 3. SELECTED WORK (Visual Project Showcase) ─── */}
      <section id="work">
        <FeaturedProject />
      </section>

      {/* ─── 4. EXPERIENCE (Card Grid) ─── */}
      <div id="experience">
        <WorkList />
      </div>

      {/* ─── 5. TECH STACK ─── */}
      <TechStack />

      {/* ─── 6. CONTACT / FOOTER ─── */}
      <Footer />
    </main>
  );
}
