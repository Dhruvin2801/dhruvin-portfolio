import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <Reveal>
        <ProjectsSection />
      </Reveal>
      <Reveal>
        <ExperienceSection />
      </Reveal>
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
      <Footer />
    </div>
  );
};

export default Index;
