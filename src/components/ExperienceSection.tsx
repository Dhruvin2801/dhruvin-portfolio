import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, TrendingUp } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Product Manager",
      company: "ItTechies Services Pvt Ltd",
      location: "Mumbai, India",
      duration: "June 2023 - May 2025",
      description: "Led the implementation of an in-house HRMS, refined client ITSM/ITAM workflows, and managed the product roadmap for a mobile CRM application, driving significant improvements in operational efficiency and automation.",
      achievements: [
        "Reduced HR administrative workload by 40% by implementing a cloud-based HRMS platform.",
        "Improved task closure efficiency by 40% through the development of a mobile CRM app for field engineers.",
        "Cut client onboarding time by 40% and lowered helpdesk tickets by 25% by refining ITSM and ITAM workflows.",
        "Automated the bulk quotation process using VBA, handling 150-200 requests daily in under 30 minutes."
      ],
      technologies: ["HRMS", "ITSM", "ITAM", "VBA Automation", "CRM", "Freshdesk"]
    },
    {
      title: "Strategy & AI Extern",
      company: "Extern",
      location: "Remote",
      duration: "January 2025 – August 2025",
      description: "Completed four distinct, project-based externships focused on AI, people analytics, pricing strategy, and venture capital. Delivered data-driven recommendations and functional prototypes for companies including Amazon, Outamation, and IgniteXL Ventures.",
      achievements: [
        "Engineered a full-stack RAG pipeline (LlamaIndex, Mistral-7B) to enable conversational Q&A on complex mortgage documents for Outamation.",
        "Analyzed 500+ employee feedback entries for an Amazon Fulfilment Center using thematic coding and sentiment scoring to identify attrition drivers.",
        "Modeled Price Elasticity of Demand (PED) for Breaking Games, identifying price points projected to deliver a 27-32% revenue uplift.",
        "Conducted due diligence on a startup for IgniteXL Ventures using TAM–SAM–SOM sizing and CAC modeling to assess market feasibility."
      ],
      technologies: ["RAG", "LlamaIndex", "People Analytics", "Pricing Strategy", "Venture Capital", "Due Diligence"]
    },
    {
      title: "Python Developer Intern",
      company: "ePayLater",
      location: "Mumbai, India",
      duration: "June 2021 - August 2021",
      description: "Performed in-depth data analysis on large datasets to identify key trends and patterns. Designed and developed interactive visualizations to present performance metrics and analytical insights to stakeholders.",
      achievements: [
        "Performed Exploratory Data Analysis (EDA) using Python (Pandas, NumPy), including data cleaning and feature engineering.",
        "Developed interactive data visualizations with Matplotlib and Seaborn to illustrate KPIs and correlations.",
        "Enabled stakeholders to make data-driven decisions through clear presentation of analytical insights."
      ],
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building expertise through hands-on experience in product management, 
              business analytics, and data-driven decision making.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-slide-in hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Job Details */}
                    <div className="lg:col-span-1">
                      <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-primary font-medium mb-4">{exp.company}</h4>
                      
                      <div className="space-y-2 text-muted-foreground mb-6">
                        <div className="flex items-center">
                          <CalendarDays className="w-4 h-4 mr-2" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="text-xs bg-secondary/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Description & Achievements */}
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h5 className="font-semibold mb-3 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex} 
                              className="flex items-start text-muted-foreground"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
