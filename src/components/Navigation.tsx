import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">DD</span>
            </div>
            <span className="font-semibold text-lg">Dhruvin Dungrani</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="/DhruvinDungrani-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm">Resume</Button>
            </a>
          </div>

          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`} />
              <div className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
              <div className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="/DhruvinDungrani-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="sm" className="w-fit">Resume</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
