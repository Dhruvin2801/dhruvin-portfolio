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
      description: "Analyzed 500+ employee feedback entries to identify attrition drivers.",
      longDescription: `Applied thematic coding and sentiment scoring to quantify attrition and role-specific challenges. Built segmented cohort profiles and translated insights into exec-ready decks.`,
      icon: ShoppingCart,
      category: "Corporate",
      technologies: ["Python", "Tableau", "NLP"],
      metrics: ["500+ feedback analyzed", "Identified 3 attrition drivers"],
      status: "Completed",
      links: {},
      embed: {}
    },
    {
      id: 1,
      title: "IgniteXL Ventures — Startup Analysis",
      description: "Conducted TAM-SAM-SOM modelling and startup benchmarking.",
      longDescription: `Analyzed 10+ startups for TAM-SAM-SOM, competitive benchmarking, and investor due diligence.`,
      icon: BarChart3,
      category: "Corporate",
      technologies: ["Excel", "Market Research"],
      metrics: ["10+ startups evaluated", "Due diligence reports delivered"],
      status: "Completed",
      links: {},
      embed: {}
    },
    {
      id: 2,
      title: "Diabetic Retinopathy Detection (IEEE Publication)",
      description: "Deep learning pipeline using U-Net + VGG16.",
      longDescription: `U-Net for vessel segmentation (94.46%) and VGG16 CNN for classification (91.72%). Published in IEEE Xplore.`,
      icon: Brain,
      category: "Publications",
      technologies: ["TensorFlow", "Keras", "OpenCV"],
      metrics: ["Segmentation accuracy: 94.46%", "Classification: 91.72%"],
      status: "Completed",
      links: { paper: "https://ieeexplore.ieee.org/document/10146626" },
      embed: {
        code: `# Example: U-Net model\ninputs = Input((128,128,3))`
      }
    },
    {
      id: 3,
      title: "MBA Capstone — Fintech GTM",
      description: "Market sizing + GTM for a fintech startup.",
      longDescription: `Designed go-to-market strategy and 3-year financial projections ($50M projected).`,
      icon: Target,
      category: "Academic",
      technologies: ["Business Strategy", "Financial Modelling"],
      metrics: ["$2.5B TAM", "$50M projection"],
      status: "Completed",
      links: {},
      embed: {}
    }
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "corporate", label: "Corporate" },
    { id: "academic", label: "Academic" },
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
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 bg-card/50 backdrop-blur-sm">
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
                {filteredProjects.map((project) => (
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
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                          <project.icon className="w-6 h-6 text-primary" />
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

            {/* Right Column */}
            <div className="lg:w-[65%] w-full">
              <Card className="h-full bg-card/50 border-border/50">
                <CardContent className="p-8 h-full overflow-y-auto">
                  <h3 className="text-2xl font-bold mb-4">{currentProject.title}</h3>

                  {/* Tabs for Preview */}
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
                        <pre className="bg-gray-900 text-gray-400 p-4 rounded-lg text-sm overflow-x-auto">
                          <code>// Sample code preview\nconsole.log("Hello World");</code>
                        </pre>
                      )}
                    </TabsContent>

                    <TabsContent value="demo">
                      {currentProject.embed?.demo ? (
                        <iframe src={currentProject.embed.demo} className="w-full h-64 rounded-lg border" />
                      ) : (
                        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg border">
                          <span className="text-gray-500">[ Demo Preview Placeholder ]</span>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="ppt">
                      {currentProject.embed?.ppt ? (
                        <iframe src={currentProject.embed.ppt} className="w-full h-64 rounded-lg border" allowFullScreen />
                      ) : (
                        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg border">
                          <span className="text-gray-500">[ Slides Preview Placeholder ]</span>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
