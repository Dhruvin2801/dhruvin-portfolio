import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export const ContactSection = () => {
  const contacts = [
    { icon: Mail, label: "Email", value: "dhruvindungrani@gmail.com", href: "mailto:dhruvindungrani@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "dhruvin-dungrani", href: "https://www.linkedin.com/in/dhruvin-dungrani-999819214/" },
    { icon: Github, label: "GitHub", value: "Dhruvin2801", href: "https://github.com/Dhruvin2801" },
    { icon: MapPin, label: "Location", value: "Mumbai, India", href: "" },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Open to roles in product management, strategy, consulting and marketing.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.map((c) => {
              const inner = (
                <Card className="bg-card border-border h-full hover:border-primary transition-colors">
                  <CardContent className="p-5">
                    <c.icon className="w-5 h-5 text-primary mb-3" />
                    <p className="font-medium">{c.label}</p>
                    <p className="text-sm text-muted-foreground break-all">{c.value}</p>
                  </CardContent>
                </Card>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
