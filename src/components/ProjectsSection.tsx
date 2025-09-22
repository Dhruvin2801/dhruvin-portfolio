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
      title: "Advanced RAG Pipeline with Vector Search & LLM Orchestration",
      description: "Production-grade Retrieval-Augmented Generation system with semantic chunking, hybrid search, and multi-agent workflows",
      longDescription: "Built a sophisticated RAG system combining vector databases with LLM orchestration for enhanced document retrieval and generation. Implements semantic chunking with RecursiveCharacterTextSplitter, hybrid search using Pinecone and Redis, and OpenAI embeddings for production-scale applications.",
      icon: Brain,
      category: "Corporate",
      thumbnail: "/api/placeholder/300/200",
      technologies: ["RAG", "Vector DB", "LangChain", "OpenAI", "Pinecone", "Redis"],
      metrics: [
        "95% retrieval accuracy",
        "Sub-200ms response time",
        "Processing 10K+ documents",
        "Multi-agent workflow"
      ],
      status: "Completed",
      code: `import { OpenAI } from "openai";
import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { createClient } from "redis";
import { z } from "zod";

interface RAGConfig {
  vectorStore: PineconeStore;
  llm: OpenAI;
  cache: ReturnType<typeof createClient>;
  embeddingModel: OpenAIEmbeddings;
}

const DocumentSchema = z.object({
  content: z.string(),
  metadata: z.object({
    source: z.string(),
    chunk_id: z.string(),
    timestamp: z.date(),
  }),
});

class AdvancedRAGPipeline {
  private config: RAGConfig;
  private textSplitter: RecursiveCharacterTextSplitter;

  constructor(config: RAGConfig) {
    this.config = config;
    this.textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
  }

  async processDocument(document: string, metadata: any) {
    // Semantic chunking with overlap
    const chunks = await this.textSplitter.splitText(document);
    
    // Generate embeddings for each chunk
    const embeddings = await this.config.embeddingModel.embedDocuments(chunks);
    
    // Store in vector database with metadata
    await this.config.vectorStore.addVectors(
      embeddings,
      chunks.map((chunk, index) => ({
        content: chunk,
        metadata: { ...metadata, chunk_id: index },
      }))
    );

    // Cache frequently accessed chunks in Redis
    await this.config.cache.setex(
      metadata.source,
      3600,
      JSON.stringify(chunks)
    );
  }

  async hybridSearch(query: string, limit: number = 5) {
    // Vector similarity search
    const vectorResults = await this.config.vectorStore.similaritySearch(
      query,
      limit
    );

    // Keyword search from cache
    const cachedResults = await this.config.cache.get(query);
    
    // Combine and rank results
    return this.rankResults([...vectorResults, ...JSON.parse(cachedResults || "[]")]);
  }

  private rankResults(results: any[]) {
    // Custom ranking algorithm combining vector similarity and keyword relevance
    return results
      .map(result => ({
        ...result,
        score: this.calculateRelevanceScore(result)
      }))
      .sort((a, b) => b.score - a.score);
  }
}`,
      links: {
        demo: "#",
        github: "#",
        paper: "#"
      }
    },
    {
      id: 1,
      title: "Distributed ML Training with Kubernetes & Ray", 
      description: "Scalable machine learning pipeline with distributed training, hyperparameter optimization, and model serving",
      longDescription: "A sophisticated distributed machine learning platform leveraging Kubernetes and Ray for scalable model training and deployment. Implements distributed training across multiple nodes, automated hyperparameter tuning, and real-time model serving with A/B testing capabilities.",
      icon: Users,
      category: "Corporate",
      thumbnail: "/api/placeholder/300/200",
      technologies: ["Python", "Kubernetes", "Ray", "TensorFlow", "MLflow", "Docker"],
      metrics: [
        "10x faster training time",
        "Auto-scaling across 50+ nodes",
        "95% model accuracy",
        "Processing 1TB+ datasets"
      ],
      status: "Completed",
      code: `import ray
from ray import train, tune
from ray.train import ScalingConfig
from ray.train.torch import TorchTrainer
import torch
import torch.nn as nn
from torch.utils.data import DataLoader, DistributedSampler
import mlflow
from kubernetes import client, config

@ray.remote
class DistributedTrainer:
    def __init__(self, model_config, data_config):
        self.model_config = model_config
        self.data_config = data_config
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

    def setup_distributed_training(self):
        # Initialize distributed training
        ray.init(address="ray://head-service:10001")
        
        # Configure Kubernetes autoscaling
        config.load_incluster_config()
        v1 = client.AppsV1Api()
        
        scaling_config = ScalingConfig(
            num_workers=4,
            use_gpu=True,
            resources_per_worker={"CPU": 4, "GPU": 1}
        )
        
        return scaling_config

    def create_model(self):
        class DistributedModel(nn.Module):
            def __init__(self, input_size, hidden_size, num_classes):
                super().__init__()
                self.backbone = nn.Sequential(
                    nn.Linear(input_size, hidden_size),
                    nn.ReLU(),
                    nn.Dropout(0.2),
                    nn.Linear(hidden_size, hidden_size // 2),
                    nn.ReLU(),
                    nn.Linear(hidden_size // 2, num_classes)
                )
                
            def forward(self, x):
                return self.backbone(x)
        
        return DistributedModel(**self.model_config)

    def train_fn(self, config):
        model = self.create_model()
        model = train.torch.prepare_model(model)
        
        # Distributed data loading
        train_dataset = self.load_dataset()
        train_sampler = DistributedSampler(train_dataset)
        train_loader = DataLoader(
            train_dataset, 
            batch_size=config["batch_size"],
            sampler=train_sampler
        )
        
        optimizer = torch.optim.Adam(model.parameters(), lr=config["lr"])
        criterion = nn.CrossEntropyLoss()
        
        for epoch in range(config["epochs"]):
            model.train()
            total_loss = 0
            
            for batch_idx, (data, target) in enumerate(train_loader):
                optimizer.zero_grad()
                output = model(data)
                loss = criterion(output, target)
                loss.backward()
                optimizer.step()
                total_loss += loss.item()
                
            # Report metrics for Ray Tune
            train.report({
                "loss": total_loss / len(train_loader),
                "epoch": epoch
            })
            
            # MLflow logging
            with mlflow.start_run():
                mlflow.log_metric("train_loss", total_loss / len(train_loader))
                mlflow.log_metric("epoch", epoch)

class HyperparameterTuning:
    def __init__(self, trainer):
        self.trainer = trainer
        
    def optimize(self):
        search_space = {
            "lr": tune.loguniform(1e-4, 1e-1),
            "batch_size": tune.choice([32, 64, 128, 256]),
            "epochs": tune.choice([10, 20, 30]),
            "hidden_size": tune.choice([128, 256, 512])
        }
        
        tuner = tune.Tuner(
            TorchTrainer(
                train_loop_per_worker=self.trainer.train_fn,
                scaling_config=self.trainer.setup_distributed_training()
            ),
            param_space=search_space,
            tune_config=tune.TuneConfig(
                metric="loss",
                mode="min",
                num_samples=20
            )
        )
        
        results = tuner.fit()
        return results.get_best_result()`,
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

                    {/* Code Preview Area */}
                    <div className="mb-6">
                      {currentProject.code ? (
                        <div className="w-full bg-gray-900 rounded-lg border border-primary/20 overflow-hidden">
                          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-gray-400 text-sm ml-2">{currentProject.title}.ts</span>
                          </div>
                          <div className="p-4 h-80 overflow-auto">
                            <pre className="text-sm text-gray-300 leading-relaxed">
                              <code dangerouslySetInnerHTML={{ 
                                __html: currentProject.code
                                  .replace(/import/g, '<span style="color: #c792ea">import</span>')
                                  .replace(/from/g, '<span style="color: #c792ea">from</span>')
                                  .replace(/interface|class|const|let|var/g, '<span style="color: #82aaff">$&</span>')
                                  .replace(/async|await|function/g, '<span style="color: #c792ea">$&</span>')
                                  .replace(/\/\/.*$/gm, '<span style="color: #546e7a">$&</span>')
                                  .replace(/"[^"]*"/g, '<span style="color: #c3e88d">$&</span>')
                                  .replace(/\b\d+\b/g, '<span style="color: #f78c6c">$&</span>')
                              }} />
                            </pre>
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
