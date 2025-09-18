import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3, ShoppingCart, Users, Brain } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Analytics Dashboard",
      description: "Comprehensive analytics platform for tracking customer behavior, sales performance, and inventory optimization. Built with real-time data processing and predictive analytics capabilities.",
      icon: ShoppingCart,
      technologies: ["Python", "Tableau", "SQL", "Machine Learning"],
      metrics: [
        "25% increase in conversion rate",
        "30% reduction in inventory costs",
        "Real-time data processing"
      ],
      status: "Completed",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Customer Segmentation Analysis", 
      description: "Advanced clustering analysis to identify customer segments and personalize marketing strategies. Implemented RFM analysis and machine learning models for customer lifetime value prediction.",
      icon: Users,
      technologies: ["Python", "R", "Scikit-learn", "Power BI"],
      metrics: [
        "Identified 5 distinct customer segments",
        "18% improvement in marketing ROI",
        "85% prediction accuracy"
      ],
      status: "Completed",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Product Recommendation Engine",
      description: "AI-powered recommendation system using collaborative and content-based filtering. Deployed machine learning models to enhance user experience and increase cross-selling opportunities.",
      icon: Brain,
      technologies: ["Python", "TensorFlow", "MongoDB", "Flask"],
      metrics: [
        "40% increase in cross-selling",
        "35% improvement in user engagement",
        "Sub-100ms response time"
      ],
      status: "In Progress",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Market Analysis Platform",
      description: "Comprehensive market research and competitive analysis platform. Features automated data collection, sentiment analysis, and trend forecasting for strategic business decisions.",
      icon: BarChart3,
      technologies: ["Python", "Beautiful Soup", "NLP", "D3.js"],
      metrics: [
        "Analyzed 10,000+ market data points",
        "90% accuracy in trend prediction",
        "50% reduction in research time"
      ],
      status: "Completed",
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of data-driven projects that demonstrate my expertise in 
              analytics, product management, and business intelligence.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-colors">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${
                            project.status === 'Completed' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 text-sm text-primary">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.metrics.map((metric, metricIndex) => (
                        <li 
                          key={metricIndex} 
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs bg-background/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline-hero" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
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