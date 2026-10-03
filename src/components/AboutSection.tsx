import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

export const AboutSection = () => {
  const education = [
    { degree: "MBA, Business Analytics", school: "SBM NMIMS, Mumbai", year: "2025–27", score: "8.10 / 10" },
    { degree: "B.Tech, Electronics & Telecommunication", school: "Dwarkadas J. Sanghvi College of Engineering", year: "2019–23", score: "9.21 / 10" },
  ];

  const publications = [
    "Diabetic Retinopathy Detection and Classification using Deep Learning — IEEE, 2023",
    "Smart, Wearable Posture Corrector — IETE-SF DJ STRIKE, 2021",
    "Covid-19 Contactless Delivery System — IETE-SF DJ STRIKE, 2020",
  ];

  const skills = [
    "Product Development", "Agile / Scrum", "Market Research", "Pricing & GTM",
    "Excel", "PowerPoint", "SQL", "Python", "Power BI", "Statistical Analysis",
  ];

  return (
    <section id="about" className="py-16 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((e) => (
                    <div key={e.degree}>
                      <p className="font-medium">{e.degree}</p>
                      <p className="text-sm text-muted-foreground">
                        {e.school} · {e.year} · {e.score}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Skills & Certification</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Certified Scrum Product Owner (CSPO), Scrum Alliance
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Leadership</h3>
                </div>
                <p className="font-medium">
                  Strategic Insights & Global News Communications Head
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  International Business Cell, NMIMS Mumbai · Jul 2026 – Present
                </p>
                <p className="text-sm text-muted-foreground">
                  Leading a 20-member team publishing the quarterly newsletter Samanvaya
                  on emerging geopolitical themes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Publications</h3>
                </div>
                <ul className="space-y-2">
                  {publications.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground">{p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
