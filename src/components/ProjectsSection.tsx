import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Github, FileText, Brain, Target, Users, BarChart3, ShoppingCart } from "lucide-react";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "Amazon — People Analytics Externship",
      description: "Analyzed 500+ unstructured employee feedback entries to identify attrition drivers and productivity bottlenecks.",
      longDescription: `Applied thematic coding and sentiment scoring to quantify attrition and role-specific challenges. Built segmented cohort profiles with weighted retention/engagement metrics, and translated insights into stakeholder-ready decks.`,
      icon: ShoppingCart,
      category: "Corporate",
      technologies: ["Python", "Tableau", "NLP", "Analytics"],
      metrics: [
        "500+ feedback entries analyzed",
        "Identified top 3 attrition drivers",
        "Delivered exec-ready intervention roadmap"
      ],
      status: "Completed",
      links: { ppt: "#", github: "#", demo: "#" },
      embed: {
        code: `# Example: Sentiment scoring
from textblob import TextBlob
sentiments = [TextBlob(f).sentiment.polarity for f in feedback_list]`,
        ppt: "https://docs.google.com/presentation/d/XXXX/embed",
        demo: "#"
      }
    },
    {
      id: 1,
      title: "Breaking Games — Price Modelling & Strategy",
      description: "Modeled PED & ETP across 4 flagship SKUs, optimizing price strategy with projected revenue uplift.",
      longDescription: `Built demand elasticity and effective price thresholds, identifying optimal price points that projected 27–32% revenue uplift and 35–39% margin growth. Delivered final strategy deck to management.`,
      icon: BarChart3,
      category: "Corporate",
      technologies: ["Excel", "Python", "Consulting Frameworks"],
      metrics: [
        "Revenue uplift: 27–32%",
        "Margin growth: 35–39%",
        "Survey base: 120+ customers"
      ],
      status: "Completed",
      links: { ppt: "#", github: "#", demo: "#" },
      embed: {
        code: `# Example: Price Elasticity
import numpy as np
elasticity = (np.diff(Q)/Q[:-1]) / (np.diff(P)/P[:-1])`,
        ppt: "https://docs.google.com/presentation/d/XXXX/embed",
        demo: "#"
      }
    },
    {
      id: 2,
      title: "IgniteXL Ventures — Startup Analysis",
      description: "Conducted market sizing, startup evaluation, and TAM-SAM-SOM modelling for early-stage ventures.",
      longDescription: `Led competitive benchmarking and TAM-SAM-SOM analysis for early-stage startups in consumer, retail, and sustainability. Delivered due diligence reports for investment decision-making.`,
      icon: BarChart3,
      category: "Corporate",
      technologies: ["Excel", "Market Research", "Consulting"],
      metrics: [
        "10+ startups analyzed",
        "TAM-SAM-SOM frameworks delivered",
        "Investor due diligence reports"
      ],
      status: "Completed",
      links: { ppt: "#", github: "#", demo: "#" },
      embed: {
        code: `# Example: TAM-SAM-SOM calculator
TAM = total_market_size
SAM = TAM * target_region_share
SOM = SAM * achievable_share`,
        ppt: "https://docs.google.com/presentation/d/XXXX/embed",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "Diabetic Retinopathy Detection (IEEE Publication)",
      description: "Deep learning pipeline using U-Net and VGG16 for DR screening and severity classification.",
      longDescription: `Engineered U-Net for retinal vessel segmentation (94.46% accuracy) and VGG16-based CNN for severity classification (91.72% accuracy). Published in IEEE Xplore.`,
      icon: Brain,
      category: "Publications",
      technologies: ["TensorFlow", "Keras", "OpenCV", "CNN"],
      metrics: [
        "Segmentation accuracy: 94.46%",
        "Classification accuracy: 91.72%",
        "Dataset: DRIVE, STARE, 200+ images"
      ],
      status: "Completed",
      links: { paper: "https://ieeexplore.ieee.org/document/10146626", github: "#", demo: "#" },
      embed: {
        code: `# Example: U-Net model
inputs = Input((128,128,3))
c1 = Conv2D(64, (3,3), activation='relu', padding='same')(inputs)`,
        ppt: "https://docs.google.com/presentation/d/XXXX/embed",
        demo: "https://retinopathy-demo.streamlit.app/"
      }
    },
    {
      id: 4,
      title: "Smart Posture Corrector",
      description: "Arduino + ML posture correction system with 87% classification accuracy.",
      longDescription: `Built posture detection using flex sensors + logistic regression (87% accuracy). Integrated gyroscope APIs for smartphone-based correction module.`,
      icon: Users,
      category: "Academic",
      technologies: ["Arduino", "Python", "JavaScript", "ML"],
      metrics: ["87% classification accuracy", "Hardware + mobile integration"],
      status: "Completed",
      links: { github: "#", demo: "#", ppt: "#" },
      embed: {
        code: `# Example: Logistic Regression
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression().fit(X_train, y_train)`,
        ppt: "https://docs.google.com/presentation/d/XXXX/embed",
        demo: "#"
      }
    },
    {
      id: 5,
      title: "COVID-19 Contactless Delivery System",
      description: "IoT-enabled secure delivery box with NodeMCU + solenoid lock.",
      longDescription: `Developed IoT delivery box with NodeMCU ESP8266, servo motor, and solenoid-based lock. Remote-controlled via web interface for safe, contactless delivery.`,
      icon: FileText,
      category: "Academic",
      technologies: ["IoT", "ESP8266", "Web Dev"],
      metrics: ["Contactless grocery delivery", "Secure solenoid lock"],
      status: "Completed",
      links: { github: "#", demo: "#", ppt: "#" },
      embed: {
        code: `// Example: NodeMCU servo
servo.write(90); // unlock position`,
        ppt: "https://docs.google.com/presentation/d/XXXX/embed",
        demo: "#"
      }
    },
    {
      id: 6,
      title: "MBA Capstone Project — Fintech GTM Strategy",
      description: "Designed GTM strategy and financial projections for fintech startup.",
      longDescription: `Developed end-to-end business strategy for a digital payments product: market sizing, competitor analysis, financial modelling, and launch roadmap.`,
      icon: Target,
      category: "Academic",
      technologies: ["Business Strategy", "Financial Modelling", "Market Research"],
      metrics: [
        "3-year revenue projection: $50M",
        "Market opportunity: $2.5B TAM",
        "Presented to executive leadership"
      ],
      status: "Completed",
      links: { ppt: "#", demo: "#", github: "#" },
      embed: {
        ppt: "https://docs.google.com/presentation/d/XXXX/embed",
        demo: "#",
        code: "# No code for strategy projects"
      }
    },
    {
      id: 7,
      title: "Personal Finance Tracker",
      description: "Mobile-first app with ML-based auto-expense categorization.",
      longDescription: `Built expense tracker with ML categorization, budget alerts, bill reminders, and data visualizations. 500+ active users and 4.8/5 app rating.`,
      icon: FileText,
      category: "Personal",
      technologies: ["React Native", "Node.js", "PostgreSQL", "ML"],
      metrics: ["500+ users", "95% categorization accuracy", "4.8/5 rating"],
      status: "Completed",
      links: { github: "#", demo: "#", ppt: "#" },
      embed: {
        code: `// Example: Expense categorization
if (transaction.includes("Uber")) category = "Transport";`,
        ppt: "https://docs.google.com/presentation/d/XXXX/embed",
        demo: "#"
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
  const filteredProjects = projects.filter(
    project =>
      activeCategory === "all" ||
      project.category.toLowerCase().replace(" ", "-") === activeCategory
  );
  const currentProject = projects[selectedProject];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my corporate, academic, publication, and personal projects.
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

          <div className="flex flex-col lg:flex-row gap-8 h-[800px]">
            {/* Left Column */}
            <div className="lg:w-[35%] w-full">
              <div className="space-y-4 max-h-full overflow-y-auto pr-2">
                {filteredProjects.map((project, index) => (
                  <Card 
                    key={project.id}
                    onClick={() => setSelectedProject(project.id)}
                    className={`cursor-pointer transition-all duration-300 hover:border-primary/50 ${
                      selectedProject === project.id 
                        ? 'border-primary bg-primary/10 shadow-lg' 
                        : 'bg-card/50 border-border/50'
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center">
                          <project.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm truncate">{project.title}</h3>
                          <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                          <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{project.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="lg:w-[65%] w-full">
              <Card className="h-full bg-card/50 border-border/50">
                <CardContent className="p-8 h-full overflow-y-auto">
                  <h3 className="text-2xl font-bold mb-4">{currentProject.title}</h3>
                  
                  {/* Tabs for Overview | Code | Demo | Slides */}
                  <Tabs defaultValue="overview">
                    <TabsList className="mb-4">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="code">Code</TabsTrigger>
                      <TabsTrigger value="demo">Demo</TabsTrigger>
                      <TabsTrigger value="ppt">Slides</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview">
                      <p className="text-muted-foreground mb-4">{currentProject.longDescription}</p>
                      <h4 className="font-semibold mb-2">Key Results</h4>
                      <ul className="list-disc list-inside text-sm">
                        {currentProject.metrics.map((m, i) => <li key={i}>{m}</li>)}
                      </ul>
                    </TabsContent>

                    <TabsContent value="code">
                      {currentProject.embed?.code ? (
                        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
                          <code>{currentProject.embed.code}</code>
                        </pre>
                      ) : (
                        <p>No code snippet available</p>
                      )}
                    </TabsContent>

                    <TabsContent value="demo">
                      {currentProject.embed?.demo ? (
                        <iframe src={currentProject.embed.demo} className="w-full h-64 rounded-lg border" />
                      ) : (
                        <p>No demo available</p>
                      )}
                    </TabsContent>

                    <TabsContent value="ppt">
                      {currentProject.embed?.ppt ? (
                        <iframe src={currentProject.embed.ppt} className="w-full h-64 rounded-lg border" allowFullScreen />
                      ) : (
                        <p>No slides uploaded</p>
                      )}
                    </TabsContent>
                  </Tabs>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    {currentProject.links.demo && <Button><ExternalLink className="w-4 h-4 mr-2" /> View Demo</Button>}
                    {currentProject.links.github && <Button variant="ghost"><Github className="w-4 h-4 mr-2" /> Source Code</Button>}
                    {currentProject.links.paper && <Button variant="outline"><FileText className="w-4 h-4 mr-2" /> Research Paper</Button>}
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
