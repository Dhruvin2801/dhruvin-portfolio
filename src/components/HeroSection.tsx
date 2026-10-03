import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin } from "lucide-react";

export const HeroSection = () => {
  const stats = [
    { value: "2 yrs", label: "Product Manager, IT Techies" },
    { value: "CSPO", label: "Certified Scrum Product Owner" },
    { value: "Finalist", label: "National, AmEx Campus Challenge 2026" },
    { value: "5", label: "Research papers" },
  ];

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl animate-slide-up">
          <p className="text-sm font-medium text-primary mb-4">
            MBA Business Analytics · SBM NMIMS, Mumbai · 2025–27
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-gradient">Dhruvin Dungrani</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            Ex-Product Manager turning data into product, pricing and go-to-market decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a href="#projects">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="/DhruvinDungrani-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline-hero" size="lg" className="w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/dhruvin-dungrani-999819214/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-hero" size="lg" className="w-full sm:w-auto">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl md:text-2xl font-bold leading-tight">{s.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
