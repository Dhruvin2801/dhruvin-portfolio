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
        sources = "--- SOURCES ---\\n" + "\\n".join([f"**Source {i+1} (Page: {n.metadata['page_number']})**:\\n
