import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Dhruvin";

  useEffect(() => {
    let index = 0;
    const typingTimer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingTimer);
        // Start cursor blinking after typing is done
        const cursorTimer = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorTimer);
      }
    }, 150);

    return () => clearInterval(typingTimer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Galaxy and Stars Background */}
      <div className="fixed inset-0 -z-10">
        <div className="galaxy w-full h-full"></div>
        <div className="stars w-full h-full"></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with Typing Animation */}
          <div className="animate-fade-in mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-gradient">
                {displayedText}
                <span className={`inline-block w-1 h-16 md:h-20 bg-primary ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
              MBA Business Analytics Student & Product Manager
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Driving data-driven product decisions and business transformation
              through strategic analytics and innovative product management.
            </p>
          </div>

          {/* About Section Block */}
          <div className="mb-16 p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4 text-gradient">About Me</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about transforming complex data into actionable business insights. 
              With expertise in product management and business analytics, I bridge the gap between 
              technical capabilities and strategic business objectives.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mb-16">
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
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-4 font-medium">Scroll to explore</span>
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
