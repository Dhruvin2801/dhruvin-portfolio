import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden harry-potter-bg">
      {/* Hogwarts Castle Silhouette */}
      <div className="hogwarts-silhouette"></div>
      
      {/* Magical Stars Background */}
      <div className="magical-stars">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
      </div>
      
      {/* Floating Candles */}
      <div className="floating-candles">
        <div className="candle candle-1"></div>
        <div className="candle candle-2"></div>
        <div className="candle candle-3"></div>
        <div className="candle candle-4"></div>
      </div>
      
      {/* Floating Spells */}
      <div className="floating-spells">
        <div className="spell spell-1">LUMOS⚡</div>
        <div className="spell spell-2">Expelliarmus</div>
        <div className="spell spell-3">Accio</div>
        <div className="spell spell-4">🦡</div>
      </div>
      
      {/* Marauder's Map Footprints */}
      <div className="marauders-footprints">
        <div className="footprint footprint-1">👣</div>
        <div className="footprint footprint-2">👣</div>
        <div className="footprint footprint-3">👣</div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">
                Dhruvin
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
              MBA Business Analytics Student & Product Manager
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Driving data-driven product decisions and business transformation through 
              strategic analytics and innovative product management.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button variant="hero" size="lg" className="group">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            
            <Button variant="outline-hero" size="lg" className="group">
              Let's Connect
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-muted-foreground">
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-0.5 h-6 bg-primary animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};