import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, BarChart3, ShoppingCart, Users, Brain, FileText, Target, Activity, Box } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  // Color mapping for different categories
  const categoryColors = {
    "Corporate": "bg-blue-500/20 text-blue-400",
    "Publications": "bg-purple-500/20 text-purple-400",
    "Case Competition": "bg-amber-500/20 text-amber-400",
    "Academic": "bg-green-500/20 text-green-400",
  };

  const projects = [
    {
      id: 0,
      title: "AI-Powered Document Intelligence Pipeline",
      description: "End-to-end RAG pipeline for conversational Q&A on complex mortgage documents.",
      longDescription: "Engineered a full-stack Retrieval-Augmented Generation (RAG) pipeline in Python using LlamaIndex and Mistral-7B. The system integrates an OCR module (Tesseract, OpenCV) for PDF parsing, advanced chunking and embedding strategies for data processing, and optimized retrieval with query expansion and reranking to improve accuracy. Deployed a functional chatbot using Gradio for an interactive user experience.",
      icon: Brain,
      category: "Corporate",
      technologies: ["RAG", "Python", "LlamaIndex", "Mistral-7B", "OCR", "Gradio", "Vector DB"],
      metrics: [
        "Automated Document Segmentation",
        "Conversational Q&A Enabled",
        "Optimized Retrieval Accuracy",
        "Deployed Functional Chatbot"
      ],
      status: "Completed",
      code: `# code sample ...`,
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 1,
      title: "Diabetic Retinopathy Detection using Deep Learning",
      description: "Automated DR screening system using U-Net++ for segmentation and a VGG16-based CNN for classification.",
      longDescription: "Engineered an end-to-end automated DR screening system using U-Net++ for retinal vessel segmentation and a VGG16-based CNN for severity classification. Built a full-stack web platform for report generation and doctor consultation, integrating multiple retinal image datasets and advanced preprocessing techniques like CLAHE and gamma correction.",
      icon: Brain,
      category: "Publications",
      technologies: ["Deep Learning", "Python", "Tensorflow", "Keras", "OpenCV", "U-Net++", "VGG16"],
      metrics: [
        "94.46% Segmentation Accuracy",
        "91.72% Test Accuracy",
        "Full-Stack Web Platform",
        "Published in IEEE"
      ],
      status: "Completed",
      code: `# code sample ...`,
      links: {
        paper: "https://ieeexplore.ieee.org/document/10169720"
      }
    },
    {
      id: 2,
      title: "Price Modelling & Strategy for Breaking Games",
      description: "Dynamic pricing models to forecast revenue growth and optimize pricing strategy using PED and ETP analysis.",
      longDescription: "As a strategy consulting extern for Breaking Games, I modeled Price Elasticity of Demand (PED) and Expected Total Profit (ETP) across 4 flagship SKUs. This involved analyzing over 120 customer surveys to identify optimal price points, leading to recommendations for targeted pricing strategies projected to significantly increase revenue and profit margins.",
      icon: BarChart3,
      category: "Corporate",
      technologies: ["Pricing Strategy", "Python", "Pandas", "Statistical Modeling", "Market Research"],
      metrics: [
        "Projected 27–32% Revenue Uplift",
        "Projected 35–39% Margin Growth",
        "Analysis of 120+ Surveys",
        "Optimized Pricing Models"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAGzTMs-emg/7zO6xkhB5kmRG5FDSI3pkg/view?embed",
      links: {
        demo: "#"
      }
    },
    {
      id: 3,
      title: "Startup Due Diligence for IgniteXL Ventures",
      description: "Evaluated startup Popularium using AI-powered market research, TAM-SAM-SOM sizing, and CAC modeling.",
      longDescription: "Conducted a comprehensive evaluation of the startup Popularium for IgniteXL Ventures. My role involved using AI-powered market research tools integrated with TAM–SAM–SOM sizing, Customer Acquisition Cost (CAC) modeling, and competitive moat assessment. I delivered detailed due diligence reports and synergy analyses, highlighting market positioning and monetization potential to inform feasibility decisions.",
      icon: Target,
      category: "Corporate",
      technologies: ["Venture Capital", "Market Research", "Financial Modeling", "Due Diligence", "AI Tools"],
      metrics: [
        "TAM–SAM–SOM Sizing",
        "Customer Acquisition Cost (CAC) Modeling",
        "Competitive Moat Assessment",
        "Delivered Due Diligence Reports"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAGzTMs-emg/7zO6xkhB5kmRG5FDSI3pkg/view?embed",
      links: {
        demo: "#"
      }
    },
    {
      id: 4,
      title: "Go-to-Market Strategy for TryNow",
      description: "Designed the GTM strategy for a street-market B2B retail-tech startup, including STP and ROI modeling.",
      longDescription: "In this academic marketing project, I designed a comprehensive go-to-market strategy for 'TryNow,' a B2B retail-tech concept. The project involved conducting market research with over 120 shoppers, leading Segmentation, Targeting, and Positioning (STP) analysis, and creating detailed ROI models.",
      icon: ShoppingCart,
      category: "Academic", // changed from Case Competition
      technologies: ["Marketing Strategy", "STP", "ROI Modeling", "4P & PESTEL Analysis", "Market Research"],
      metrics: [
        "Vendor Breakeven in 31–48 days",
        "Achieved 33–35% Profit Margin",
        "Research with 120+ Shoppers",
        "B2B Go-to-Market Plan"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAGzTMs-emg/7zO6xkhB5kmRG5FDSI3pkg/view?embed",
      links: {
        demo: "#"
      }
    },
    {
      id: 5,
      title: "COVID-19 Contactless Delivery System",
      description: "IoT-enabled delivery container using NodeMCU for secure, remote door control via a web interface.",
      longDescription: "Designed and implemented an IoT-enabled delivery container using NodeMCU ESP8266, a servo motor, and a solenoid locking mechanism. This system achieved secure, remote door control via a responsive web-based interface, enabling contactless delivery.",
      icon: Box,
      category: "Publications",
      technologies: ["IoT", "NodeMCU", "HTML/CSS", "Hardware Integration", "Arduino"],
      metrics: [
        "Secure Remote-Controlled Access",
        "Responsive Web-Based UI",
        "Enhanced Delivery Safety",
        "Published in IETE-SF Journal"
      ],
      status: "Completed",
      links: {
        paper: "#"
      }
    },
    {
      id: 6,
      title: "Smart Posture Corrector",
      description: "IoT and ML-based system for real-time posture analytics and alerting.",
      longDescription: "Engineered a posture correction system using Arduino, flex sensors, and a buzzer, integrated with a responsive web interface. The system uses a Python-based logistic regression model (87% accuracy) for real-time posture analytics.",
      icon: Activity,
      category: "Publications",
      technologies: ["IoT", "Arduino", "Python", "Machine Learning", "JavaScript", "HTML/CSS"],
      metrics: [
        "87% Model Accuracy",
        "Real-Time Posture Analytics",
        "Smartphone-Based Monitoring",
        "Published in Journal"
      ],
      status: "Completed",
      links: {
        paper: "#"
      }
    },
    // New Marico HaloMist Project
    {
      id: 7,
      title: "Marico OWT – HaloMist Scalp-Tech Innovation",
      description: "Warm micro-mist clip-on device for Parachute oils making oiling clean, fast, and spa-like.",
      longDescription: "Conceptualized HaloMist, a premium scalp-tech innovation for Marico’s Parachute brand. Diversify into ‘scalp-tech’ with a warm micro-mist clip-on device offering clean hands, even scalp coverage, and a 5-minute spa-like ritual. GTM includes D2C, Amazon, salons, and creator-led campaigns with pilot demos and targeted MRP of ₹1,699.",
      icon: Brain,
      category: "Corporate",
      technologies: ["Product Innovation", "Scalp-Tech", "Consumer Research", "GTM Strategy", "Digital Campaigns"],
      metrics: [
        "Premium scalp-tech market entry",
        "Warm + clean + easy in one step",
        "Target MRP ₹1,699 with bundle pricing",
        "Salon demos + digital creator-led GTM"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAGxA1KOwrQ/nA9YYHgvXu1ldjvzpTWDYw/view?utm_content=DAGxA1KOwrQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3d6de7a082",
      links: {
        demo: "#"
      }
    }
  ];

  // categories
  const categories = [
    { id: "all", label: "All" },
    { id: "corporate", label: "Corporate" },
    { id: "publications", label: "Publications" },
    { id: "case-competition", label: "Case Competitions" },
    { id: "academic", label: "Academic" }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(project =>
    activeCategory === "all" ||
    project.category.toLowerCase().replace(/ /g, "-") === activeCategory
  );

  const currentProject = projects.find(p => p.id === selectedProject) || projects[0];

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
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-card/50 backdrop-blur-sm">
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
                        <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <project.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-sm leading-tight truncate">{project.title}</h3>
                            <Badge
                              variant="secondary"
                              className={`text-xs ml-2 flex-shrink-0 ${categoryColors[project.category] || 'bg-gray-500/20 text-gray-400'}`}
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
                              className={`text-sm ${categoryColors[currentProject.category]}`}
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

                    {/* Preview Area */}
                    <div className="mb-6">
                      {currentProject.presentationUrl ? (
                        <div className="w-full bg-background rounded-lg border border-primary/20 overflow-hidden">
                          <iframe
                            src={currentProject.presentationUrl}
                            className="w-full h-96 rounded-lg border border-border/30"
                            allowFullScreen
                            title="Project Presentation"
                          />
                        </div>
                      ) : currentProject.code ? (
                        <div className="w-full bg-gray-900 rounded-lg border border-primary/20 overflow-hidden">
                          <div className="p-0 h-80 overflow-auto">
                            <SyntaxHighlighter
                              language="python"
                              style={atomDark}
                              customStyle={{
                                background: '#1e1e1e',
                                padding: '1rem',
                                margin: 0,
                                fontSize: '14px',
                                lineHeight: '1.5',
                              }}
                              showLineNumbers={true}
                              lineNumberStyle={{
                                color: '#858585',
                                paddingRight: '1rem',
                              }}
                            >
                              {currentProject.code}
                            </SyntaxHighlighter>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20 flex items-center justify-center mb-4">
                          <div className="text-center">
                            <currentProject.icon className="w-16 h-16 text-primary mx-auto mb-2" />
                            <p className="text-muted-foreground text-sm">Demo Preview</p>
                          </div>
                        </div>
                      )}
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
                      {currentProject.links?.demo && (
                        <Button variant="outline-hero" className="flex-1 min-w-[120px]">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Demo
                        </Button>
                      )}
                      {currentProject.links?.github && (
                        <Button variant="ghost" className="flex-1 min-w-[120px]">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      )}
                      {currentProject.links?.paper && (
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
