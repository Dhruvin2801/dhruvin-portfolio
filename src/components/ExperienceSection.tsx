import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Summer Intern",
      company: "Cipla Ltd",
      duration: "Apr 2026 – Jun 2026",
      location: "Mumbai",
      achievements: [
        "Developed demand forecasting solution across Brand–Region–Channel using 13.5K+ observations, achieving 8.39% WMAPE.",
        "Built a 90-day Supplier Risk Early Warning Engine integrating supplier, operational and quality data, achieving 76.54% Precision@Top10%.",
        "Translated forecasts and supplier-risk scores into risk-adjusted inventory, alternate sourcing and prioritization for supply-constrained brands.",
        "Developed Power BI dashboards on forecast accuracy, therapy performance, supplier risk and spend exposure for management.",
      ],
      tags: ["Demand Forecasting", "Supplier Risk", "Power BI"],
    },
    {
      title: "Product Manager",
      company: "IT Techies Services Pvt Ltd",
      duration: "Jun 2023 – May 2025",
      location: "Mumbai",
      achievements: [
        "Executed in-house HRMS implementation, automating HR and payroll and launching a self-service portal, cutting HR admin workload by 40%.",
        "Owned mobile CRM app for field engineers, replacing WhatsApp tracking with real-time updates, improving closure efficiency by 40%.",
        "Refined ITSM and ITAM workflows for clients, cutting onboarding time by 40%, helpdesk requests by 25%, and raising asset tracking by 35%.",
        "Built bulk quotation VBA automation processing 150–200 requests/day in under 30 minutes.",
        "Implemented Freshdesk ticketing, reducing ticket resolution time by 20%.",
      ],
      tags: ["Product Roadmap", "HRMS", "CRM", "ITSM / ITAM"],
    },
    {
      title: "Strategy & Analytics Extern",
      company: "Extern",
      duration: "Mar 2025 – Jul 2025",
      location: "Remote",
      achievements: [
        "Breaking Games: modelled PED, WTP and ETP across 4 SKUs, projecting 27–32% revenue uplift and 35–39% margin growth.",
        "IgniteXL Ventures: startup due diligence with TAM–SAM–SOM sizing, CAC modelling and moat analysis.",
        "Amazon: thematic coding and sentiment scoring on 500+ employee feedback entries to identify attrition drivers across Fulfilment Centers.",
      ],
      tags: ["Pricing", "Due Diligence", "People Analytics"],
    },
    {
      title: "Python Developer Intern",
      company: "ePayLater",
      duration: "Jun 2021 – Aug 2021",
      location: "Mumbai",
      achievements: [
        "EDA and feature engineering with Pandas and NumPy to identify trends.",
        "Built Matplotlib/Seaborn visualizations of performance metrics for stakeholders.",
      ],
      tags: ["Python", "EDA"],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-gradient">Experience</span>
          </h2>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <Card key={exp.company} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                    <h3 className="text-lg font-semibold">
                      {exp.title} <span className="text-primary">· {exp.company}</span>
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.duration} · {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
