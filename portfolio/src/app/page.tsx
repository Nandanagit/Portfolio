'use client';
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen ">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>
      <main className="relative z-10 text-white">
        <Hero />
        <Projects />
        <ResumeSection />
        <Contact />
      </main>
    </div>
  );
}
