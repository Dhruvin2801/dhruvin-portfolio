import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Github, BarChart3, ShoppingCart, Users, Brain, FileText, Target, Activity, Box, Database, Sigma } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  // Color mapping for different categories
  const categoryColors = {
    "Corporate": "bg-blue-500/20 text-blue-400",
    "Publications": "bg-purple-500/20 text-purple-400",
    "Competition": "bg-amber-500/20 text-amber-400",
    "Academic": "bg-green-500/20 text-green-400",
    "Product Portfolio": "bg-teal-500/20 text-teal-400", // New Category Color
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
      code: `...`, // Code hidden for brevity
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
      code: `...`, // Code hidden for brevity
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
      presentationUrl: "https://www.canva.com/design/DAGzTMs-emg/7zO6xkhB5kmRG5FDSI3pkg/view?embed",
      links: {
        demo: "#"
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
      presentationUrl: "https://www.canva.com/design/DAGv1eIjgec/0vwxtIM0GYp1ko_xKHgNmA/view?embed", // UPDATED LINK
      links: {
        demo: "#"
      }
    },
    {
        id: 8,
        title: "Marico OWT: HaloMist Scalp-Tech",
        description: "Proposed 'HaloMist', a warm micro-mist clip-on for Parachute oils, to modernize the hair oiling ritual for urban consumers.",
        longDescription: "As a National Finalist in the Marico Over The Wall Challenge, my team developed 'HaloMist,' a novel 'scalp-tech' device to address key consumer pain points like messy and time-consuming hair oiling. The solution is a USB-C powered, clip-on micro-mist warmer for Parachute oil bottles, designed to create a clean, 5-minute, spa-like ritual. Our Go-to-Market strategy focused on D2C, e-commerce, and in-salon demonstrations to target time-pressed urban professionals, with detailed unit economics projecting a positive contribution margin.",
        icon: Target,
        category: "Product Portfolio",
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
        title: "Saregama: Launching a Non-Film Superstar",
        description: "Developed a 360° digital-first launch strategy to create India's next non-film music superstar, focusing on short-form content and community building.",
        longDescription: "Crafted a comprehensive Go-to-Market strategy for Saregama to launch a 'glocal' alt-pop artist. The digital-first plan centers on creating a 'Fusion Innovator' archetype, using short-form video hooks (Reels/Shorts) for discovery and YouTube for deeper engagement. The strategy includes a 12-week phased rollout, seeding content with 100-300 micro-creators, and building a fan community via a 'Street Team' to achieve the North Star Metric of Monthly Active Fans.",
        icon: Target,
        category: "Product Portfolio",
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
        title: "IIM Ahmedabad: TrashDNA",
        description: "Pitched 'TrashDNA,' an AI-powered mobile app to solve India's urban waste crisis by gamifying recycling at the source.",
        longDescription: "For IIM Ahmedabad's Masterplan competition, I developed and pitched 'TrashDNA,' a venture tackling India's urban waste crisis. The solution is an AI-powered app that identifies waste materials from a photo, directs users to the correct bin, and rewards them, gamifying the sorting process. The business model targets municipalities (B2G), housing societies (B2B), and brands (EPR data), tapping into a $13-15B market. The venture is designed for high social impact—formalizing jobs and diverting waste from landfills—and scalability through a low-cost, modular, AI-first approach.",
        icon: Brain,
        category: "Product Portfolio",
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
    { id: "product-portfolio", label: "Product Portfolio" }, // NEW CATEGORY
    { id: "competition", label: "Competition" }, // RENAMED CATEGORY
    { id: "academic", label: "Academic" }
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === "all" || 
    project.category.toLowerCase().replace(/ /g, "-") === activeCategory
  );

  useEffect(() => {
    if (filteredProjects.length > 0) {
      setSelectedProject(filteredProjects[0].id);
    }
  }, [activeCategory]);

  const currentProject = projects.find(p => p.id === selectedProject) || filteredProjects[0] || projects[0];

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
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 bg-card/50 backdrop-blur-sm">
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

          {/* ... The rest of your component's JSX remains the same ... */}
          
        </div>
      </div>
    </section>
  );
};
