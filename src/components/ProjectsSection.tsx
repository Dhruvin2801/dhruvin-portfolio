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
      code: `
# ==============================================================================
# FINAL CODE 
# ==============================================================================

# 1. Installations (gradio_pdf is no longer needed)
# ==============================================================================
print("⏳ Installing dependencies...")
!pip install --upgrade gradio gradio_client websockets -q
!pip install llama-index==0.10.34 pypdf==4.2.0 -q
!pip install llama-cpp-python==0.2.73 --extra-index-url https://abetlen.github.io/llama-cpp-python/whl/cu122 -q
!pip install llama-index-llms-llama-cpp==0.1.3 llama-index-embeddings-huggingface==0.2.0 -q
print("✅ Installations complete.")


# 2. Setup and Model Loading
# ==============================================================================
import gradio as gr
import os
import json
import time
from pypdf import PdfReader
from llama_index.core import Document, VectorStoreIndex, Settings
from llama_index.core.vector_stores import ExactMatchFilter, MetadataFilters
from llama_index.llms.llama_cpp import LlamaCPP
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from typing import List, Dict

# Download and load the open-source models
model_path = "/content/mistral-7b-instruct-v0.2.Q4_K_M.gguf"
if not os.path.exists(model_path):
    print("⏳ Downloading Mistral 7B model... (approx. 4.1 GB)")
    !wget https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.2-GGUF/resolve/main/mistral-7b-instruct-v0.2.Q4_K_M.gguf -O {model_path}

print("⏳ Loading LLM and Embedding Model...")
Settings.llm = LlamaCPP(
    model_path=model_path, temperature=0.1, max_new_tokens=512,
    context_window=3900, model_kwargs={"n_gpu_layers": 35}, verbose=False
)
Settings.embed_model = HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")
print("✅ Models loaded successfully.")


# 3. Backend Pipeline Logic
# ==============================================================================
class DocumentIntelligencePipeline:
    def __init__(self):
        self.index = None
        self.doc_types = ["Lender Fee Sheet", "Payslip", "Contract", "Other"]
        self.file_name = ""

    def segment_and_index_document(self, pdf_path: str):
        print(f"⏳ Processing {os.path.basename(pdf_path)}...")
        self.file_name = os.path.basename(pdf_path)
        reader = PdfReader(pdf_path)
        pages = [{"text": page.extract_text()} for page in reader.pages]
        if not pages: raise ValueError("Could not extract pages from PDF.")

        documents_to_index = []
        doc_types_found = set()
        for i, page in enumerate(pages):
            # Simplified segmentation for robustness
            doc_type = "Document"
            doc_types_found.add(doc_type)
            doc = Document(text=page['text'], metadata={"page_number": i + 1, "doc_type": doc_type})
            documents_to_index.append(doc)

        print("⏳ Creating vector index...")
        self.index = VectorStoreIndex.from_documents(documents_to_index)
        print("✅ Vector index created successfully.")
        return list(doc_types_found)

    def query(self, user_query: str, top_k: int):
        if not self.index: return {"answer": "Please process a document first.", "sources": ""}
        retriever = self.index.as_retriever(similarity_top_k=int(top_k))
        response_nodes = retriever.retrieve(user_query)
        context = "\\n\\n".join([node.get_text() for node in response_nodes])
        synthesis_prompt = f"[INST] Use the provided context to answer the question.\\n\\nContext:\\n{context}\\n\\nQuestion: {user_query} [/INST]"
        response = Settings.llm.complete(synthesis_prompt)
        sources = "--- SOURCES ---\\n" + "\\n".join([f"**Source {i+1} (Page: {n.metadata['page_number']})**:\\n\`\`\`{n.get_text()[:250].strip()}...\`\`\`" for i, n in enumerate(response_nodes)])
        return {"answer": response.text.strip(), "sources": sources}

pipeline = DocumentIntelligencePipeline()


# 4. Gradio UI and Event Handlers (with Workaround)
# ==============================================================================
def process_pdf_and_update_ui(file, progress=gr.Progress()):
    if file is None:
        return "⚠️ Please upload a PDF file.", gr.update(interactive=False)
    progress(0, desc="Starting...")
    try:
        file_path = file.name
        progress(0.1, desc="📄 Indexing PDF...")
        pipeline.segment_and_index_document(file_path)
        info_text = f"✅ **Ready to answer questions about:** {os.path.basename(file_path)}"
        progress(1.0, desc="✅ Ready.")
        return info_text, gr.update(interactive=True)
    except Exception as e:
        return f"❌ Error: {e}", gr.update(interactive=False)

def chat_handler(message, history, top_k):
    if not pipeline.index:
        history.append({"role": "user", "content": message})
        history.append({"role": "assistant", "content": "Please process a document before asking questions."})
        yield history, "", ""
        return

    history.append({"role": "user", "content": message})
    history.append({"role": "assistant", "content": "Thinking..."})
    yield history, "", ""

    result = pipeline.query(message, top_k)
    bot_response = result["answer"]
    history[-1]['content'] = bot_response
    yield history, result["sources"], ""

with gr.Blocks(theme=gr.themes.Soft(primary_hue="sky"), title="Document Q&A") as app:
    gr.Markdown("# 🚀 Document Q&A System")
    with gr.Row():
        with gr.Column(scale=2):
            # --- WORKAROUND: Replaced gr.PDF with gr.File ---
            file_uploader = gr.File(label="📄 Upload Your PDF File", file_types=[".pdf"])
            info_output = gr.Markdown(value="Please upload a PDF to begin.")
            chunks_to_retrieve = gr.Slider(minimum=1, maximum=10, value=3, step=1, label="📊 Chunks to Retrieve")

        with gr.Column(scale=3):
            chatbot = gr.Chatbot(label="Chat", height=600, type="messages", avatar_images=(None, "https://i.imgur.com/C7MMFf1.png"))
            msg_box = gr.Textbox(label="Your Question", placeholder="Ask a question...", interactive=False)
            source_display = gr.Markdown(label="Sources Used for Answer")

    # Event Handlers
    file_uploader.upload(
        process_pdf_and_update_ui,
        inputs=[file_uploader],
        outputs=[info_output, msg_box]
    )

    msg_box.submit(
        chat_handler,
        inputs=[msg_box, chatbot, chunks_to_retrieve],
        outputs=[chatbot, source_display, msg_box]
    )

# 5. Launch
# ==============================================================================
test_file_path = "/content/Test Blob File.pdf"
if not os.path.exists(test_file_path):
    print("⏳ Downloading test file 'Test Blob File.pdf'...")
    !wget -q https://storage.googleapis.com/generativeai-downloads/data/Test%20Blob%20File.pdf -O "/content/Test Blob File.pdf"
print("\\n🚀 Launching Gradio App... Please upload the 'Test Blob File.pdf' in the UI to begin.")
app.launch(debug=True, share=True)
`,
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
`,
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
      presentationUrl: "https://docs.google.com/presentation/d/e/2PACX-1vSmYERh4QZRA_M0VospvGFxitlmhBFFdYAWexDWNROwJaUowmVJX8OnwWYTjeGIqLpq3OlVP2z33E0A/pub?start=false&loop=false&delayms=3000",
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
      presentationUrl: "https://www.canva.com/design/DAGv1eIjgec/0vwxtIM0GYp1ko_xKHgNmA/view?utm_content=DAGv1eIjgec&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd523b116b0",
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

