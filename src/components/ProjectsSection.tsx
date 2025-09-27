import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Github, BarChart3, ShoppingCart, Users, Brain, FileText, Target, Activity, Box, Database, Sigma } from "lucide-react";
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
      code: `from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.core.retrievers import HybridRetriever
from llama_index.llms.mistral_ai import MistralAI
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.core.node_parser import SemanticSplitterNodeParser
import gradio as gr

# 1. Load and Process Documents
documents = SimpleDirectoryReader("./mortgage_docs").load_data()
splitter = SemanticSplitterNodeParser(
    buffer_size=1, breakpoint_percentile_threshold=95, embed_model=HuggingFaceEmbedding()
)
nodes = splitter.get_nodes_from_documents(documents)

# 2. Setup RAG Components
llm = MistralAI(model="mistral-large-latest")
embed_model = HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")
index = VectorStoreIndex(nodes, embed_model=embed_model)

# 3. Configure Hybrid Retriever for Optimized Search
vector_retriever = index.as_retriever(similarity_top_k=5)
bm25_retriever = index.as_retriever(retriever_mode="bm25", similarity_top_k=5)
retriever = HybridRetriever(vector_retriever, bm25_retriever)

# 4. Create Query Engine
query_engine = index.as_query_engine(
    retriever=retriever,
    llm=llm,
    node_postprocessors=[...], # Rerankers
)

# 5. Deploy with Gradio UI
def chatbot_interface(message, history):
    response = query_engine.query(message)
    return str(response)

iface = gr.ChatInterface(chatbot_interface)
iface.launch()`,
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
      code: `import tensorflow as tf
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Conv2D, MaxPooling2D, UpSampling2D, concatenate
from tensorflow.keras.applications import VGG16

def build_unet_model(input_shape):
    # U-Net++ architecture for segmentation
    inputs = Input(input_shape)
    # ... complex U-Net++ layers ...
    outputs = Conv2D(1, 1, activation='sigmoid')(conv9)
    model = Model(inputs=[inputs], outputs=[outputs])
    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
    return model

def build_vgg16_classifier(input_shape, num_classes):
    # VGG16 base for classification
    base_model = VGG16(weights='imagenet', include_top=False, input_shape=input_shape)
    x = base_model.output
    x = tf.keras.layers.GlobalAveragePooling2D()(x)
    x = tf.keras.layers.Dense(1024, activation='relu')(x)
    predictions = tf.keras.layers.Dense(num_classes, activation='softmax')(x)
    model = Model(inputs=base_model.input, outputs=predictions)
    
    # Freeze initial layers
    for layer in base_model.layers[:15]:
        layer.trainable = False
        
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    return model
`
,
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
      presentationUrl: "https://www.canva.com/design/DAGzTMs-emg/7zO6xkhB5kmRG5FDSI3pkg/view?embed",
      links: {
        demo: "#"
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
        title: "BI & Product Analytics at Amazon",
        description: "Developed BI dashboards and performed product analytics to drive strategic decisions for Amazon's IN-books division.",
        longDescription: "As a Business Intelligence Analyst at Amazon, I was responsible for the IN-books division's data analytics. My role involved writing complex SQL queries on AWS Redshift to extract and manipulate large datasets, building and automating insightful Tableau dashboards for stakeholder reporting, and conducting in-depth product analysis to identify key business trends and opportunities. My work directly supported strategic decision-making and performance tracking.",
        icon: Database,
        category: "Corporate",
        technologies: ["SQL", "AWS Redshift", "Tableau", "Python", "Excel", "Product Analytics"],
        metrics: [
          "Automated Reporting Pipelines",
          "Delivered 10+ Stakeholder Dashboards",
          "Analyzed Key Product Metrics (PPM)",
          "Provided Data-Driven Recommendations"
        ],
        status: "Completed",
        links: {}
    },
    {
        id: 8,
        title: "Marico OWT Challenge: HaloMist Scalp-Tech",
        [cite_start]description: "Proposed 'HaloMist', a warm micro-mist clip-on for Parachute oils, to modernize the hair oiling ritual for urban consumers. [cite: 1, 17, 68]",
        [cite_start]longDescription: "As a National Finalist in the Marico Over The Wall Challenge, my team developed 'HaloMist,' a novel 'scalp-tech' device to address key consumer pain points like messy and time-consuming hair oiling. [cite: 1, 11, 18] [cite_start]The solution is a USB-C powered, clip-on micro-mist warmer for Parachute oil bottles, designed to create a clean, 5-minute, spa-like ritual. [cite: 17, 65, 68, 80] [cite_start]Our Go-to-Market strategy focused on D2C, e-commerce, and in-salon demonstrations to target time-pressed urban professionals, with detailed unit economics projecting a positive contribution margin. [cite: 111, 127, 214]",
        icon: Target,
        category: "Case Competition",
        technologies: ["Go-to-Market Strategy", "Product Design", "Market Sizing", "Consumer Segmentation", "Unit Economics", "D2C Marketing"],
        metrics: [
          "Achieved National Finalist Position",
          [cite_start]"Pitched for the ₹3,000 Cr Premium Haircare Market [cite: 4]",
          [cite_start]"GTM plan to reach 10-15M high-intent users [cite: 241]",
          [cite_start]"Projected 60,000+ pilot salon demos [cite: 155]",
          [cite_start]"Calculated contribution of ₹140 per device [cite: 214, 218]"
        ],
        status: "Completed",
        presentationUrl: "https://www.canva.com/design/DAGxA1KOwrQ/nA9YYHgvXu1ldjvzpTWDYw/view?embed",
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

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(project => 
    activeCategory === "all" || 
    project.category.toLowerCase().replace(/ /g, "-") === active-category
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
