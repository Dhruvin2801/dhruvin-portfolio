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
        "Built a demand forecasting pipeline on 13.5K+ monthly sales observations at Brand × Region × Channel level; benchmarked 9 ML models and selected CatBoost at 8.39% test WMAPE, a 31.5% improvement over the seasonal baseline.",
        "Built a 90-day Supplier Risk Early Warning Engine from supplier, operational and quality data, engineering 81 features from 166 raw variables and achieving 76.54% Precision@Top10%.",
        "Used SHAP to explain the models and generated 829 supplier-material risk predictions, 72 supplier-level summaries and 1,428 alternate-supplier recommendations for a Power BI dashboard.",
        "Combined demand forecasts with supplier-risk scores into risk-adjusted inventory planning, alternate sourcing and prioritisation of supply-constrained brands.",
        "Authored BRDs and model-validation documentation; built VBA automation for SAP Material Master uploads across 25 enterprise templates.",
      ],
      tags: ["Demand Forecasting", "CatBoost", "SHAP", "Supplier Risk", "Power BI"],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            <span className="text-gradient">Experience</span>
          </h2>

          <ol className="relative border-l-2 border-border ml-2 md:ml-3">
            {experiences.map((exp) => (
              <li key={exp.company} className="relative pl-7 md:pl-10 pb-8 last:pb-0">
                {/* Timeline dot */}
                <span
                  className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-background border-[3px] border-primary"
                  aria-hidden="true"
                />

                <Card className="bg-card border-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]">
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
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
