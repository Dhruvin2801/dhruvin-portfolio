import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-36 md:pt-40"
    >
      {/* Enhanced Galaxy and Stars Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="galaxy w-full h-full"></div>
        <div className="stars w-full h-full"></div>
        <div className="stars-layer-2 w-full h-full"></div>
        <div className="nebula w-full h-full"></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
        <div className="geometric-shape shape-4"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading (no typing animation, clean fade-in) */}
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              <span className="block text-white">Hi, I'm</span>
              <span className="block text-gradient">Dhruvin</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium animate-fade-in-delay-1">
              MBA Business Analytics Student & Product Manager
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
              Driving data-driven product decisions and business transformation
              through strategic analytics and innovative product management.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
            <Button variant="hero" size="lg" className="group hover-lift">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>

            <Button variant="outline-hero" size="lg" className="group hover-lift">
              Let's Connect
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex flex-col items-center text-muted-foreground animate-fade-in-delay-4">
            <span className="text-sm mb-4 font-medium animate-pulse">Scroll to explore</span>
            <div className="mouse-scroll">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
