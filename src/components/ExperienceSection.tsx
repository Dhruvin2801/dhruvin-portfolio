import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, TrendingUp } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Product Manager Intern",
      company: "Tech Startup",
      location: "Remote",
      duration: "Jun 2024 - Present",
      description: "Led product discovery initiatives and managed cross-functional teams to deliver data-driven product features. Conducted user research and market analysis to identify growth opportunities.",
      achievements: [
        "Increased user engagement by 25% through feature optimization",
        "Led agile development process for 3 product releases",
        "Analyzed user behavior data to improve product-market fit"
      ],
      technologies: ["Product Analytics", "A/B Testing", "User Research", "Agile"]
    },
    {
      title: "Business Analyst",
      company: "Consulting Firm",
      location: "Mumbai, India",
      duration: "Jan 2024 - May 2024",
      description: "Provided strategic business insights through comprehensive data analysis and market research. Developed analytical frameworks to support client decision-making processes.",
      achievements: [
        "Delivered strategic recommendations for 5+ client projects",
        "Created automated reporting dashboards saving 20 hours/week",
        "Conducted competitive analysis for market entry strategies"
      ],
      technologies: ["SQL", "Python", "Tableau", "Excel"]
    },
    {
      title: "Data Analytics Intern",
      company: "E-commerce Platform",
      location: "Bangalore, India", 
      duration: "Sep 2023 - Dec 2023",
      description: "Analyzed customer behavior patterns and sales data to optimize marketing campaigns and improve conversion rates. Built predictive models for demand forecasting.",
      achievements: [
        "Improved marketing ROI by 18% through targeted campaigns",
        "Built predictive models with 85% accuracy for demand forecasting",
        "Optimized inventory management reducing costs by 12%"
      ],
      technologies: ["Python", "R", "Machine Learning", "Statistics"]
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
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-slide-in"
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