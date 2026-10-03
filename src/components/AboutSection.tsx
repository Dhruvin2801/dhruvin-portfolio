import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, BookOpen, Trophy, ExternalLink } from "lucide-react";

export const AboutSection = () => {
  const achievements = [
    {
      title: "National Finalist, American Express Campus Challenge 2026",
      detail: "Household-pooling and work-spend capture strategy sized at ₹6,973 Cr incremental spend within a ₹20K/card cost cap; 0.943 score on the Round 1 profitability-ranking model.",
    },
    {
      title: "Certified Scrum Product Owner (CSPO)",
      detail: "Scrum Alliance",
    },
  ];

  const education = [
    { degree: "MBA, Business Analytics", school: "SBM NMIMS, Mumbai", year: "2025–27", score: "8.10 / 10" },
    { degree: "B.Tech, Electronics & Telecommunication", school: "Dwarkadas J. Sanghvi College of Engineering", year: "2019–23", score: "9.21 / 10" },
  ];

  const publications = [
    {
      title: "Forecasting Crude Oil Volatility in the Era of Geopolitical Shocks",
      year: "2026",
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6573600",
    },
    {
      title: "EV Market Resilience Under Uncertainty and Regime Shifts",
      year: "2026",
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6568778",
    },
    {
      title: "Detection and Classification of Diabetic Retinopathy using Deep Learning",
      year: "2023",
      url: "https://ieeexplore.ieee.org/document/10146626",
    },
    {
      title: "Smart, Wearable Posture Corrector",
      year: "2021",
      url: "",
    },
    {
      title: "Covid-19 Contactless Delivery System",
      year: "2020",
      url: "",
    },
  ];

  const skills = [
    "Product Development", "Agile / Scrum", "GTM Strategy", "User Research", "Market Research",
    "Excel", "Power BI", "Tableau", "SQL", "Python", "Machine Learning", "Statistical Analysis",
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
                  <Trophy className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Achievements & Certification</h3>
                </div>
                <div className="space-y-4">
                  {achievements.map((a) => (
                    <div key={a.title}>
                      <p className="font-medium">{a.title}</p>
                      <p className="text-sm text-muted-foreground">{a.detail}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

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
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Research Papers</h3>
                </div>
                <ol className="divide-y divide-border">
                  {publications.map((p, i) => (
                    <li key={p.title} className="grid grid-cols-[1.5rem_1fr_auto] items-baseline gap-3 py-3 first:pt-0 last:pb-0">
                      <span className="text-sm text-muted-foreground">{i + 1}.</span>
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {p.title}
                          <ExternalLink className="inline-block w-3.5 h-3.5 ml-1.5 -mt-0.5" />
                        </a>
                      ) : (
                        <span className="font-medium">{p.title}</span>
                      )}
                      <span className="text-sm text-muted-foreground tabular-nums">{p.year}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
