import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Github, BarChart3, ShoppingCart, Users, Brain, FileText, Target, Activity, Box, Database, Sigma } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(11);
  const [activeCategory, setActiveCategory] = useState("all");

  // Color mapping for different categories
  const categoryColors = {
    "Corporate": "bg-blue-100 text-blue-700",
    "Publications": "bg-purple-100 text-purple-700",
    "Case Competition": "bg-amber-100 text-amber-800",
    "Academic": "bg-green-100 text-green-700",
  };

  const projects = [
    {
      id: 11,
      title: "Indian Telecom: Customer Trust & Digital Experience",
      description: "Social media analytics on 45,896 public posts and reviews to test whether customer backlash or regulation changes operator behaviour.",
      longDescription: "Group project (Social Media Analytics, MBA BA). We collected 45,896 public items from YouTube, Play Store, Reddit, X and Google Trends about Jio, Airtel, Vi and BSNL. Public outrage after tariff hikes faded below baseline within six months, while complaints directed at the regulator rose from roughly 2% to about a third of mentions. We benchmarked operators' published service and ESG claims against the data, audited all four operators' recharge journeys and websites, and closed with nine recommendations ranked by impact per unit of effort.",
      icon: BarChart3,
      category: "Academic",
      technologies: ["Consumer Insights", "Social Listening", "Sentiment Analysis", "Network Analysis", "Website Audit", "Prioritisation"],
      metrics: [
        "45,896 public items across 5 platforms",
        "Outrage faded below baseline within 6 months",
        "Regulator-directed complaints: ~2% to ~1/3 of mentions",
        "4 of 6 published operator claims contradicted by the data",
        "Every operator scored worse on mobile than desktop",
        "9 actions ranked by impact per unit of effort"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAHUyNo1YuY/un_8umqw6HwXcgIazavhEQ/view?embed",
      links: {
        demo: "https://canva.link/1bolj1d0mybgall"
      }
    },
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
      links: {
        paper: "https://ieeexplore.ieee.org/document/10169720"
      }
    },
    {
      id: 2,
      title: "Strategic Pricing Play for Breaking Games",
      description: "Developed a hybrid pricing strategy using WTP and elasticity analysis to project a 27-32% revenue uplift.",
      longDescription: "As a Strategy Extern for Breaking Games, I conducted a comprehensive market analysis to overhaul their pricing model. The project involved competitive benchmarking, customer WTP (Willingness-to-Pay) surveys, and elasticity modeling. I proposed a hybrid strategy combining value-based, tiered, and dynamic pricing for four key SKUs—Dwellings of Eldervale, King's Abbey, We're Doomed!, and Keep Calm!—projecting a 27-32% revenue increase and 35-39% margin growth.",
      icon: BarChart3,
      category: "Corporate",
      technologies: ["Pricing Strategy", "Competitive Analysis", "Market Research", "Statistical Modeling", "WTP Analysis", "Elasticity Modeling"],
      metrics: [
        "Projected 27–32% Revenue Uplift",
        "Projected 35–39% Margin Growth",
        "Analyzed Price Elasticity (b=1.19 to 1.82) for 4 SKUs",
        "Developed a Hybrid (Value, Tiered, Dynamic) Pricing Model"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAGmrCC5Bbo/BL2bmIq6_Ureo0WTbvuPjg/view?embed",
      links: {}
    },
    {
      id: 3,
      title: "Startup Due Diligence for IgniteXL Ventures",
      description: "Evaluated startup Popularium using AI-powered market research, TAM-SAM-SOM sizing, and CAC modeling.",
      longDescription: "Conducted a comprehensive evaluation of the startup Popularium for IgniteXL Ventures. My role involved using AI-powered market research tools (ChatGPT, Perplexity) integrated with TAM–SAM–SOM sizing, Customer Acquisition Cost (CAC) modeling, and competitive moat assessment. I delivered detailed due diligence reports and synergy analyses, highlighting market positioning and monetization potential to inform feasibility decisions.",
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
      presentationUrl: "https://www.canva.com/design/DAG0cO87ilU/s6YDyCV7iQWi1VWERVcFMQ/view?embed",
      links: {
        demo: "https://docs.google.com/presentation/d/e/2PACX-1vSmYERh4QZRA_M0VospvGFxitlmhBFFdYAWexDWNROwJaUowmVJX8OnwWYTjeGIqLpq3OlVP2z33E0A/pub?start=false&loop=false&delayms=3000"
      }
    },
    {
      id: 4,
      title: "Go-to-Market Strategy for TryNow",
      description: "Designed the GTM strategy for a street-market B2B retail-tech startup, including STP and ROI modeling.",
      longDescription: "In this academic marketing project, I designed a comprehensive go-to-market strategy for 'TryNow,' a B2B retail-tech concept. The project involved conducting market research with over 120 shoppers, leading Segmentation, Targeting, and Positioning (STP) analysis, and creating detailed ROI models. I also applied 4P and PESTEL frameworks to set a pricing strategy that enabled vendor breakeven within 31-48 days.",
      icon: ShoppingCart,
      category: "Academic",
      technologies: ["Marketing Strategy", "STP", "ROI Modeling", "4P & PESTEL Analysis", "Market Research"],
      metrics: [
        "Vendor Breakeven in 31–48 days",
        "Achieved 33–35% Profit Margin",
        "Research with 120+ Shoppers",
        "B2B Go-to-Market Plan"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAGv1eIjgec/0vwxtIM0GYp1ko_xKHgNmA/view?embed",
      links: {
        demo: "https://www.canva.com/design/DAGv1eIjgec/0vwxtIM0GYp1ko_xKHgNmA/view?utm_content=DAGv1eIjgec&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd523b116b0"
      }
    },
    {
      id: 5,
      title: "COVID-19 Contactless Delivery System",
      description: "IoT-enabled delivery container using NodeMCU for secure, remote door control via a web interface.",
      longDescription: "Designed and implemented an IoT-enabled delivery container using NodeMCU ESP8266, a servo motor, and a solenoid locking mechanism. This system achieved secure, remote door control via a responsive web-based interface (HTML/CSS), enabling contactless delivery of groceries and essentials to enhance safety during the pandemic.",
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
      presentationUrl: "https://www.canva.com/design/DAGzTMs-emg/7zO6xkhB5kmRG5FDSI3pkg/view?embed",
      links: {
        paper: "#"
      }
    },
    {
      id: 6,
      title: "Smart Posture Corrector",
      description: "IoT and ML-based system for real-time posture analytics and alerting.",
      longDescription: "Engineered a posture correction system using Arduino, flex sensors, and a buzzer, integrated with a responsive web interface. The system uses a Python-based logistic regression model (87% accuracy) for real-time posture analytics and features a smartphone module leveraging accelerometer and gyroscope APIs for portable monitoring.",
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
      code: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import joblib

# Load sensor data (flex sensor, accelerometer, gyroscope)
data = pd.read_csv('posture_data.csv')
X = data[['flex_angle', 'accel_x', 'accel_y', 'gyro_z']]
y = data['is_correct_posture'] # 0 for incorrect, 1 for correct

# Split data for training and testing
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Logistic Regression model
model = LogisticRegression()
model.fit(X_train, y_train)

# Evaluate the model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Save the trained model for deployment on a server
joblib.dump(model, 'posture_model.pkl')
`,
      links: {
        paper: "#"
      }
    },
    {
        id: 7,
        title: "Amazon Fulfilment Center: Attrition & People Analytics",
        description: "Extern project: thematic coding and sentiment scoring on 500+ employee feedback entries to find attrition drivers.",
        longDescription: "Extern project with Amazon (Operational Strategy & People Analytics). Ran qualitative thematic coding and sentiment scoring on 500+ unstructured employee feedback entries to quantify attrition drivers, productivity blockers and role-specific challenges. Segmented employee cohorts with weighted retention and engagement metrics, and turned them into intervention roadmaps and stakeholder decks.",
        icon: Users,
        category: "Corporate",
        technologies: ["People Analytics", "Thematic Coding", "Sentiment Analysis", "Cohort Segmentation", "Stakeholder Decks"],
        metrics: [
          "500+ feedback entries coded",
          "Attrition drivers quantified",
          "Role-specific cohort profiles",
          "Intervention roadmap delivered"
        ],
        status: "Completed",
        links: {}
    },
    {
        id: 8,
        title: "Marico OWT Challenge: HaloMist Scalp-Tech",
        description: "Proposed 'HaloMist', a warm micro-mist clip-on for Parachute oils, to modernize the hair oiling ritual for urban consumers.",
        longDescription: "As a National Finalist in the Marico Over The Wall Challenge, my team developed 'HaloMist,' a novel 'scalp-tech' device to address key consumer pain points like messy and time-consuming hair oiling. The solution is a USB-C powered, clip-on micro-mist warmer for Parachute oil bottles, designed to create a clean, 5-minute, spa-like ritual. Our Go-to-Market strategy focused on D2C, e-commerce, and in-salon demonstrations to target time-pressed urban professionals, with detailed unit economics projecting a positive contribution margin.",
        icon: Target,
        category: "Case Competition",
        technologies: ["Go-to-Market Strategy", "Product Design", "Market Sizing", "Consumer Segmentation", "Unit Economics", "D2C Marketing"],
        metrics: [
          "Achieved National Finalist Position",
          "Pitched for the ₹3,000 Cr Premium Haircare Market",
          "GTM plan to reach 10-15M high-intent users",
          "Projected 60,000+ pilot salon demos",
          "Calculated contribution of ₹140 per device"
        ],
        status: "Completed",
        presentationUrl: "https://www.canva.com/design/DAGxA1KOwrQ/nA9YYHgvXu1ldjvzpTWDYw/view?embed",
        links: {}
    },
    {
        id: 9,
        title: "Saregama Case Comp: Launching a Non-Film Superstar",
        description: "Developed a 360° digital-first launch strategy to create India's next non-film music superstar, focusing on short-form content and community building.",
        longDescription: "Crafted a comprehensive Go-to-Market strategy for Saregama to launch a 'glocal' alt-pop artist. The digital-first plan centers on creating a 'Fusion Innovator' archetype, using short-form video hooks (Reels/Shorts) for discovery and YouTube for deeper engagement. The strategy includes a 12-week phased rollout, seeding content with 100-300 micro-creators, and building a fan community via a 'Street Team' to achieve the North Star Metric of Monthly Active Fans.",
        icon: Target,
        category: "Case Competition",
        technologies: ["Go-to-Market Strategy", "Digital Marketing", "Creator Economy", "Community Building", "Monetization Strategy", "Market Research"],
        metrics: [
          "Proposed a digital-first 360° GTM strategy",
          "Targeted 1-1.5M Monthly Active Fans in 12 months",
          "Projected 3-5 Cr revenue from diversified streams",
          "Outlined seeding content to 100-300 micro-creators",
          "Designed a phased 12-week launch campaign"
        ],
        status: "Completed",
        presentationUrl: "https://www.canva.com/design/DAGxYNtLnWc/u-eptGA54qv44F44nBRGwQ/view?embed",
        links: {}
    },
    {
        id: 10,
        title: "IIM Ahmedabad Masterplan: TrashDNA",
        description: "Pitched 'TrashDNA,' an AI-powered mobile app to solve India's urban waste crisis by gamifying recycling at the source.",
        longDescription: "For IIM Ahmedabad's Masterplan competition, I developed and pitched 'TrashDNA,' a venture tackling India's urban waste crisis. The solution is an AI-powered app that identifies waste materials from a photo, directs users to the correct bin, and rewards them, gamifying the sorting process. The business model targets municipalities (B2G), housing societies (B2B), and brands (EPR data), tapping into a $13-15B market. The venture is designed for high social impact—formalizing jobs and diverting waste from landfills—and scalability through a low-cost, modular, AI-first approach.",
        icon: Brain,
        category: "Case Competition",
        technologies: ["Venture Design", "AI/ML Concepts", "Business Strategy", "Go-to-Market Strategy", "Financial Modeling", "Social Impact"],
        metrics: [
          "Pitched an AI solution for India's 62M tonnes/yr waste problem.",
          "Targeted the $13-15B Indian waste management market.",
          "Designed a scalable B2B/B2G SaaS revenue model.",
          "Projected diversion of 2,000+ tonnes of waste from landfills annually.",
          "Aimed to support 1,000+ safer, formalized jobs in recycling."
        ],
        status: "Completed",
        links: {}
    }
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "corporate", label: "Corporate" },
    { id: "publications", label: "Publications" },
    { id: "case-competition", label: "Case Competitions" },
    { id: "academic", label: "Academic" }
  ];

  // Display order: newest and strongest first
  const featuredOrder = [11, 8, 9, 2, 4, 3, 10, 7, 1, 6, 5, 0];

  const filteredProjects = projects
    .filter(project =>
      activeCategory === "all" ||
      project.category.toLowerCase().replace(/ /g, "-") === activeCategory
    )
    .sort((a, b) => featuredOrder.indexOf(a.id) - featuredOrder.indexOf(b.id));

  const isRealLink = (url?: string) => !!url && url !== "#";

  useEffect(() => {
    if (filteredProjects.length > 0) {
      setSelectedProject(filteredProjects[0].id);
    }
  }, [activeCategory]);

  const currentProject = projects.find(p => p.id === selectedProject) || filteredProjects[0] || projects[0];

  return (
    <section id="projects" className="py-16 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground">
              Case competitions, corporate projects and research. Click a project to see details.
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
          <div className="flex flex-col lg:flex-row gap-6 lg:h-[720px]">
            {/* Left Column - Project List */}
            <div className="lg:w-[35%] w-full">
              <div className="space-y-3 max-h-[340px] lg:max-h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
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
                              className={`text-xs ml-2 flex-shrink-0 ${categoryColors[project.category] || 'bg-gray-100 text-gray-700'}`}
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
                 {currentProject && (
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
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-yellow-100 text-yellow-800'
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
                          <div className="bg-card px-4 py-2 border-b border-border/50 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-muted-foreground text-sm ml-2">presentation.canva</span>
                          </div>
                          <div className="p-4">
                            <iframe
                              src={currentProject.presentationUrl}
                              className="w-full h-96 rounded-lg border border-border/30"
                              allowFullScreen
                              title="Project Presentation"
                            />
                          </div>
                        </div>
                      ) : currentProject.code ? (
                        <div className="w-full bg-gray-900 rounded-lg border border-primary/20 overflow-hidden">
                          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-gray-400 text-sm ml-2">{currentProject.title.replace(/ /g, "_")}.py</span>
                          </div>
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
                      ) : null}
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
                            <span className="text-sm" dangerouslySetInnerHTML={{ __html: metric }} />
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
                      {isRealLink(currentProject.links.demo) && (
                        <a href={currentProject.links.demo} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px]">
                          <Button variant="outline-hero" className="w-full">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Deck
                          </Button>
                        </a>
                      )}
                      {isRealLink(currentProject.links.github) && (
                        <a href={currentProject.links.github} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px]">
                          <Button variant="outline-hero" className="w-full">
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </Button>
                        </a>
                      )}
                      {isRealLink(currentProject.links.paper) && (
                        <a href={currentProject.links.paper} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px]">
                          <Button variant="outline-hero" className="w-full">
                            <FileText className="w-4 h-4 mr-2" />
                            Research Paper
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                 )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
