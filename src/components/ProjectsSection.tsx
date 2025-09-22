import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Github, BarChart3, ShoppingCart, Users, Brain, FileText, Target } from "lucide-react";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "Amazon — Operational Strategy & People Analytics Extern",
      description: " Applied thematic coding and sentiment scoring to 500+ unstructured employee feedback entries, quantifying attrition drivers, productivity 
bottlenecks, and role-specific challenges.",
      longDescription: "Built segmented cohort profiles with weighted retention and engagement metrics, translating insights into operational intervention roadmaps 
and stakeholder-ready decks",
      icon: ShoppingCart,
      category: "Corporate",
      thumbnail: "/api/placeholder/300/200",
      technologies: ["Python", "Tableau", "Machine Learning"],
      metrics: [
        "25% increase in conversion rate",
        "30% reduction in inventory costs",
        "Real-time data processing",
        "Processing 1M+ events daily"
      ],
      status: "Completed",
      links: {
        demo: "#",
        github: "#",
        paper: "#"
      }
    },
    {
      id: 1,
      title: "Customer Segmentation Analysis", 
      description: "Advanced clustering analysis to identify customer segments and personalize marketing strategies.",
      longDescription: "A sophisticated machine learning project that transforms customer data into actionable business intelligence. Using advanced clustering algorithms and RFM analysis, this system identifies distinct customer segments and predicts customer lifetime value with 85% accuracy. The insights drive personalized marketing campaigns and improve customer retention strategies.",
      icon: Users,
      category: "Academic",
      thumbnail: "/api/placeholder/300/200",
      technologies: ["Python", "R", "Scikit-learn", "Power BI"],
      metrics: [
        "Identified 5 distinct customer segments",
        "18% improvement in marketing ROI",
        "85% prediction accuracy",
        "Analyzed 50,000+ customer profiles"
      ],
      status: "Completed",
      links: {
        demo: "#",
        github: "#",
        paper: "#"
      }
    },
    {
      id: 2,
      title: "Product Recommendation Engine",
      description: "AI-powered recommendation system using collaborative and content-based filtering.",
      longDescription: "An intelligent recommendation system that enhances user experience through personalized product suggestions. Built with TensorFlow and deployed on a scalable Flask architecture, the system combines collaborative filtering with content-based algorithms to deliver highly relevant recommendations in under 100ms response time.",
      icon: Brain,
      category: "Product Management",
      thumbnail: "/api/placeholder/300/200",
      technologies: ["Python", "TensorFlow", "MongoDB", "Flask"],
      metrics: [
        "40% increase in cross-selling",
        "35% improvement in user engagement",
        "Sub-100ms response time",
        "Serving 10,000+ users daily"
      ],
      status: "In Progress",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "Market Analysis Platform",
      description: "Comprehensive market research and competitive analysis platform with automated data collection.",
      longDescription: "A comprehensive platform that automates market research and competitive analysis through advanced web scraping, natural language processing, and trend forecasting algorithms. The system continuously monitors market conditions, analyzes competitor strategies, and provides strategic insights for business decision-making.",
      icon: BarChart3,
      category: "Corporate",
      thumbnail: "/api/placeholder/300/200",
      technologies: ["Python", "Beautiful Soup", "NLP", "D3.js"],
      metrics: [
        "Analyzed 10,000+ market data points",
        "90% accuracy in trend prediction",
        "50% reduction in research time",
        "Monitoring 100+ competitors"
      ],
      status: "Completed",
      links: {
        demo: "#",
        github: "#",
        paper: "#"
      }
    },
    {
      id: 4,
      title: "MBA Capstone Project",
      description: "Strategic business analysis and product launch strategy for fintech startup.",
      longDescription: "Comprehensive business strategy development for a fintech startup entering the digital payments market. The project included market sizing, competitive analysis, go-to-market strategy, and financial projections. Presented recommendations to executive leadership resulting in successful product launch.",
      icon: Target,
      category: "Academic",
      thumbnail: "/api/placeholder/300/200",
      technologies: ["Business Strategy", "Financial Modeling", "Market Research"],
      metrics: [
        "3-year revenue projection: $50M",
        "Market opportunity: $2.5B TAM",
        "Go-to-market strategy",
        "Executive presentation"
      ],
      status: "Completed",
      links: {
        demo: "#",
        paper: "#"
      }
    },
    {
      id: 5,
      title: "Personal Finance Tracker",
      description: "Mobile-first personal finance application with automated expense categorization.",
      longDescription: "A user-friendly personal finance application that helps individuals track expenses, set budgets, and achieve financial goals. Features include automated expense categorization using machine learning, bill reminders, and detailed spending analytics with beautiful visualizations.",
      icon: FileText,
      category: "Personal",
      thumbnail: "/api/placeholder/300/200",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Machine Learning"],
      metrics: [
        "500+ active users",
        "95% expense categorization accuracy",
        "4.8/5 app store rating",
        "Tracking $1M+ in transactions"
      ],
      status: "Completed",
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "corporate", label: "Corporate" },
    { id: "academic", label: "Academic" }, 
    { id: "product-management", label: "Product Management" },
    { id: "personal", label: "Personal" },
    { id: "publications", label: "Publications" }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(project => 
    activeCategory === "all" || 
    project.category.toLowerCase().replace(" ", "-") === activeCategory
  );

  const currentProject = projects[selectedProject];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of data-driven projects that demonstrate my expertise in 
              analytics, product management, and business intelligence.
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-card/50 backdrop-blur-sm">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 h-[800px]">
            {/* Left Column - Project List */}
            <div className="lg:w-[35%] w-full">
              <div className="space-y-4 max-h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                {filteredProjects.map((project, index) => (
                  <Card 
                    key={project.id}
                    className={`cursor-pointer transition-all duration-300 animate-slide-in hover:border-primary/50 ${
                      selectedProject === project.id 
                        ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20' 
                        : 'bg-card/50 backdrop-blur-sm border-border/50'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        {/* Thumbnail */}
                        <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <project.icon className="w-8 h-8 text-primary" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-sm leading-tight truncate">{project.title}</h3>
                            <Badge 
                              variant="secondary" 
                              className="text-xs ml-2 flex-shrink-0"
                            >
                              {project.category}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {project.technologies.slice(0, 2).map((tech, techIndex) => (
                              <Badge 
                                key={techIndex} 
                                variant="outline" 
                                className="text-xs py-0 px-1 h-5"
                              >
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 2 && (
                              <Badge variant="outline" className="text-xs py-0 px-1 h-5">
                                +{project.technologies.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column - Project Preview */}
            <div className="lg:w-[65%] w-full">
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 h-full overflow-y-auto">
                  <div 
                    key={selectedProject} 
                    className="animate-fade-in"
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                          <currentProject.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
                          <div className="flex gap-2">
                            <Badge 
                              variant="secondary" 
                              className="text-sm"
                            >
                              {currentProject.category}
                            </Badge>
                            <Badge 
                              variant="secondary" 
                              className={`text-sm ${
                                currentProject.status === 'Completed' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-yellow-500/20 text-yellow-400'
                              }`}
                            >
                              {currentProject.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Demo Preview Area */}
                    <div className="mb-6">
                      <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20 flex items-center justify-center mb-4">
                        <div className="text-center">
                          <currentProject.icon className="w-16 h-16 text-primary mx-auto mb-2" />
                          <p className="text-muted-foreground text-sm">Demo Preview</p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary">Project Overview</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {currentProject.longDescription}
                      </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary">Key Results</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {currentProject.metrics.map((metric, metricIndex) => (
                          <div 
                            key={metricIndex} 
                            className="flex items-center p-3 bg-background/50 rounded-lg border border-border/50"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="bg-background/50 border-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {currentProject.links.demo && (
                        <Button variant="outline-hero" className="flex-1 min-w-[120px]">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Demo
                        </Button>
                      )}
                      {currentProject.links.github && (
                        <Button variant="ghost" className="flex-1 min-w-[120px]">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      )}
                      {currentProject.links.paper && (
                        <Button variant="outline" className="flex-1 min-w-[120px]">
                          <FileText className="w-4 h-4 mr-2" />
                          Research Paper
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
