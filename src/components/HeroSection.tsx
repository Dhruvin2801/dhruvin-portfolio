import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin } from "lucide-react";

// Counts a number up once on load; shows the final value straight away if the user prefers reduced motion
const CountUp = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(to);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
};

export const HeroSection = () => {
  const [photoFailed, setPhotoFailed] = useState(false);

  const stats = [
    { value: <CountUp to={2} suffix=" yrs" />, label: "Product Manager, IT Techies" },
    { value: "CSPO", label: "Certified Scrum Product Owner" },
    { value: "Finalist", label: "National, AmEx Campus Challenge 2026" },
    { value: <CountUp to={5} />, label: "Research papers" },
  ];

  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      {/* Background */}
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7 animate-slide-up">
            <p className="text-sm font-medium text-primary mb-4">
              MBA Business Analytics · SBM NMIMS, Mumbai · 2025–27
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-gradient">Dhruvin Dungrani</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Ex-Product Manager turning data into product, pricing and go‑to‑market decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a href="#projects">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="/DhruvinDungrani-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-hero" size="lg" className="w-full sm:w-auto bg-background">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/dhruvin-dungrani-999819214/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-hero" size="lg" className="w-full sm:w-auto bg-background">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-xl md:text-2xl font-bold leading-tight" style={{ fontFamily: '"Schibsted Grotesk", Inter, sans-serif' }}>
                    {s.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="lg:col-span-5 order-first lg:order-last flex justify-center lg:justify-end">
            <div className="relative isolate w-44 sm:w-56 lg:w-[22rem] animate-slide-up">
              <div className="hero-glow absolute -inset-10 -z-10" aria-hidden="true" />

              {/* Offset outline frame */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border-2 border-primary/60"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-secondary border border-border shadow-[0_30px_60px_-30px_rgba(15,23,42,0.45)]">
                {!photoFailed ? (
                  <img
                    src="/profile.jpg"
                    alt="Dhruvin Dungrani"
                    className="w-full h-full object-cover"
                    onError={() => setPhotoFailed(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/15 to-secondary">
                    <span
                      className="text-6xl lg:text-8xl font-extrabold text-primary/80"
                      style={{ fontFamily: '"Schibsted Grotesk", Inter, sans-serif' }}
                    >
                      DD
                    </span>
                  </div>
                )}
              </div>

              {/* Floating availability tag */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 lg:-left-10 items-center gap-2 rounded-full bg-background border border-border px-4 py-2 shadow-lg animate-float">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="text-sm font-medium whitespace-nowrap">Open to PM, strategy & marketing roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
