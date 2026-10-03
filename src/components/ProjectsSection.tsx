import { useState, useEffect } from "react";
import type { ElementType } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Github, BarChart3, ShoppingCart, Users, Brain, FileText, Target, Activity, Box, Database, Sigma, Ticket, Sprout, GraduationCap, LineChart, Trophy, Plane, Newspaper, Globe, Zap, LayoutDashboard } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: ElementType;
  category: string;
  tracks: string[];
  technologies: string[];
  metrics: string[];
  status: string;
  presentationUrl?: string;
  code?: string;
  links: { demo?: string; github?: string; paper?: string; dashboard?: string };
};

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(12);
  const [activeCategory, setActiveCategory] = useState("all");

  // Color mapping for different categories
  const categoryColors = {
    "Corporate": "bg-blue-100 text-blue-700",
    "Research": "bg-purple-100 text-purple-700",
    "Case Competition": "bg-amber-100 text-amber-800",
    "Academic": "bg-green-100 text-green-700",
  };

  const projects: Project[] = [
    {
      id: 12,
      title: "District Pass: Product & GTM Strategy for Eternal",
      description: "Product and go-to-market strategy for District Pass, the membership on Eternal's (Zomato's) going-out app District.",
      longDescription: "Group strategic review (Group C-1). District has strong discovery traffic but episodic usage and low repeat purchase, and users read the Pass as a movie coupon rather than a membership. We reframed the north-star metric from transactions per user to share of wallet and recommended an access-first pivot: priority access to high-demand events, always-on dining credits and scarcity mechanics, with Intro, Core and Premium tiers. The GTM plan covered student vs professional segments, credit-card bundles, Zomato cross-sells and occasion bundles like date-night packs, with a growth flywheel targeting $3B NOV at ~5% EBITDA by FY30.",
      icon: Ticket,
      category: "Academic",
      tracks: ["product", "marketing"],
      technologies: ["Product Strategy", "North-Star Metric", "Pricing & Tiering", "Go-to-Market", "Competitive Analysis", "BCG / Ansoff"],
      metrics: [
        "North-star reframed: transactions per user to share of wallet",
        "Access-first pivot: priority access, credits, scarcity",
        "3-tier membership: Intro, Core, Premium",
        "Growth flywheel targeting $3B NOV at ~5% EBITDA by FY30"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAHCJaOeJpA/zyvCx7XOphJDOdt2EXAXXg/view?embed",
      links: {
        demo: "https://canva.link/6du4lvcm68vdqzm"
      }
    },
    {
      id: 13,
      title: "Post-Harvest Supply Chain: Where Cold Storage Pays",
      description: "Investment-prioritisation framework for cold-chain capital across 6 southern states, built on 1.42M government market records.",
      longDescription: "Group project (Supply Chain Management, Group C-1). Using 1,421,838 AGMARKNET market-day records (2,347 markets, 167 districts, 19 commodities, 6 southern states, 25 months), we valued ₹8,860 Cr of post-harvest loss and showed the constraint is where cold-chain capacity sits, not how much exists. Cold-chain viability tracks crop mix rather than district size: all 17 failing districts had near-zero perishable volume. Monte Carlo testing showed crop-mix screening beats uniform allocation in 98.6% of 10,000 simulated futures. We also found perishable price shocks take 3–5 days to move between markets, longer than the crops' shelf life, and published corrections when our own audit overturned two earlier findings.",
      icon: Sprout,
      category: "Academic",
      tracks: ["consulting", "analytics"],
      technologies: ["Supply Chain", "Capital Allocation", "Monte Carlo", "Cointegration", "Linear Programming", "Streamlit"],
      metrics: [
        "1.42M market records, 2,347 markets, 19 crops",
        "₹8,860 Cr post-harvest loss valued (6 states, 25 months)",
        "Crop-mix screening wins in 98.6% of 10,000 simulations",
        "₹286 Cr of ₹1,411 Cr redirected; median payback 1.55 yrs",
        "Price shocks take 3–5 days to transmit, longer than shelf life",
        "795,327 t CO2e a year embedded in lost produce"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAHUTDIewyw/9fZ-xTzDAwhHCzoMAWLgFw/view?embed",
      links: {
        demo: "https://canva.link/ycwfyh0e8d4frhk",
        dashboard: "https://coldlens.streamlit.app"
      }
    },
    {
      id: 14,
      title: "CBSE Class XII Examination Intelligence",
      description: "Governed big-data platform turning 1,530 exam documents into traceable evidence and 202 approved aggregates served via a live API.",
      longDescription: "Group project (Big Data Analytics, Group C-1). Built a Medallion lakehouse (Bronze, Silver, Gold, Serve) on Databricks across 21 notebooks, processing 1,530 examination PDFs, 229 of them recovered through OCR. A four-class evidence framework keeps official results, media commentary, analytical proxies and synthetic test data from ever merging into one claim. A ≈20 percentage-point spread in pass rates across 17 CBSE regions is framed as a signal for human review, not as evidence of bias, because candidate-level data was not available. 202 approved aggregates are served through a Cassandra-compatible API at zero infrastructure cost.",
      icon: GraduationCap,
      category: "Academic",
      tracks: ["analytics"],
      technologies: ["Databricks", "Spark", "Delta Lake", "OCR", "TF-IDF / LDA", "Astra DB API"],
      metrics: [
        "1,530 PDFs processed, 229 recovered via OCR",
        "Medallion lakehouse across 21 notebooks",
        "4-class evidence separation framework",
        "≈20 pp regional pass-rate spread flagged for review",
        "202 approved aggregates served via live API",
        "Zero infrastructure cost"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAHU-BtvaJk/f1RSwtOO1Qiwpb_1s5D3TA/view?embed",
      links: {
        demo: "https://canva.link/21d886vqxtmqh7v"
      }
    },
    {
      id: 15,
      title: "Forecasting Crude Oil Volatility with News and Regimes",
      description: "Regime-aware ML model combining FinBERT sentiment on 45,000+ headlines with Markov-switching regimes to forecast oil volatility.",
      longDescription: "Industry GARCH-style models badly underestimate crisis spikes such as 2020. We confirmed structural breaks in oil volatility (2014 shale, 2020 COVID), used a two-regime Markov-switching model that found the same geopolitical shock about 14× stronger in crisis than in calm markets, scored 45,000+ headlines with FinBERT, and used PCA to remove multicollinearity before a Random Forest. Evaluated on a strict 2021–2025 temporal holdout. Written up as a research paper.",
      icon: LineChart,
      category: "Research",
      tracks: ["research", "analytics"],
      technologies: ["FinBERT", "Markov Switching", "PCA", "Random Forest", "Time Series", "Econometrics"],
      metrics: [
        "69.1% directional accuracy (walk-forward)",
        "88.4% precision on volatility up-spikes",
        "Out-of-sample R² 20.1% vs 0.75% for GARCH",
        "Same shock ~14× stronger in crisis regime",
        "45,000+ news headlines scored with FinBERT",
        "Strict 2021–2025 temporal holdout"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAHBXYz5EIs/uWJYsMvxJu2D1v4nbWGs9w/view?embed",
      links: {
        demo: "https://canva.link/iradrve9bvxeq9c",
        paper: "#" // TODO: paste the preprint link here
      }
    },
    {
      id: 16,
      title: "Seeing Relegation Coming: Deep Learning on Football Data",
      description: "Weekly promotion and relegation risk scores from GRU sequence models trained on 190,807 matches.",
      longDescription: "Group project (Deep Learning, Group C-1). Built 22 leakage-free features per club per matchweek from 190,807 matches across 22 divisions and 26 seasons, and trained 48 networks (MLP, SimpleRNN, GRU and LSTM across 3 history windows and 4 seeds) with time-aware validation. Recurrent models beat the MLP significantly at 10 and 20 matchweeks of history. In the test season the model flagged Southampton in matchweek 14, five matchweeks before the January window; they still spent heavily in January and were relegated. We rejected a transfer dataset after its own documentation showed the fees were generated, and report an inconclusive shuffle-ablation test as a limitation.",
      icon: Trophy,
      category: "Academic",
      tracks: ["analytics"],
      technologies: ["Deep Learning", "GRU / LSTM", "Sequence Modelling", "Feature Engineering", "Time-Aware Validation", "Python"],
      metrics: [
        "190,807 matches, 22 divisions, 26 seasons",
        "48 networks: 4 architectures × 3 windows × 4 seeds",
        "GRU beats MLP at 10 and 20 matchweeks (98% win rate)",
        "Southampton flagged 5 matchweeks before January",
        "COVID home-advantage drop (57%) modelled, not deleted"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAHT-OnoMAI/mGzI8CsfjwpeyMZpgcCQXg/view?embed",
      links: {
        demo: "https://canva.link/f71on2o9i8u1nti"
      }
    },
    {
      id: 17,
      title: "Airline Revenue Management: Seat Inventory Optimisation",
      description: "Linear programming model allocating 294 seats across 8 fare classes against 392 forecast bookings.",
      longDescription: "Group project (Operations Management, Group C1). Formulated a deterministic linear programme solved with Simplex to allocate the 294 seats of a Boeing 777-300ER across 8 fare classes in four cabins, against 392 forecast seat requests and a 15-seat corporate commitment. Post-optimality sensitivity analysis showed the full-aircraft capacity constraint was binding, with each additional seat worth a $350 shadow price, while extra Economy capacity added $0 of marginal value, supporting a recommendation to protect premium seats.",
      icon: Plane,
      category: "Academic",
      tracks: ["consulting", "analytics"],
      technologies: ["Linear Programming", "Simplex", "Revenue Management", "Sensitivity Analysis", "Excel Solver"],
      metrics: [
        "294 seats, 8 fare classes, 392 seat requests",
        "15-seat corporate commitment honoured",
        "$350 shadow price per additional seat",
        "Extra Economy capacity: $0 marginal value"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAG5QaVYCr4/CrD7IKvQ03ZQ85RuKwd0Qg/view?embed",
      links: {
        demo: "https://canva.link/8cqp476fudbleyh"
      }
    },
    {
      id: 18,
      title: "Decoding Paytm's Strategic Pivot with NLP",
      description: "Text analytics on Paytm's FY2021–FY2025 annual reports to trace the shift from 'growth at all costs' to 'governance first'.",
      longDescription: "Analysed the Chairman's letter, Directors' Report and MD&A across five Paytm annual reports (FY2021–FY2025) using sentiment analysis, LDA topic modelling, Gunning Fog readability, cosine similarity, named entity recognition and bigrams. Roughly 45% of strategic content was rewritten in the year after the IPO, then stabilised with year-on-year similarity above 0.90 from 2023. Growth vocabulary was overtaken by profit and compliance terms, the reports became 19% harder to read as the RBI crisis hit, and regulators such as SEBI moved to the centre of the narrative.",
      icon: Newspaper,
      category: "Academic",
      tracks: ["analytics", "product"],
      technologies: ["NLP", "Sentiment Analysis", "LDA Topic Modelling", "Readability (Fog)", "Cosine Similarity", "NER"],
      metrics: [
        "~45% of strategic text rewritten post-IPO",
        "Year-on-year similarity back above 0.90 from 2023",
        "Reports 19% harder to read (Fog Index up to 20.0)",
        "Growth vocabulary overtaken by compliance terms",
        "Narrative shifts from the company to its regulators"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAHBxjtE7H8/FoCIso9geIfyjiiWedeLaw/view?embed",
      links: {
        demo: "https://canva.link/298erpc3lx5mtzi"
      }
    },
    {
      id: 19,
      title: "Global Disasters 2000–2024: Storytelling with Data",
      description: "Tableau and Power BI data story on EM-DAT disaster records: where disasters hit, what they cost and who is exposed.",
      longDescription: "Group project (Storytelling with Data, Group C1). Cleaned and standardised EM-DAT (CRED) records for 2000–2024 and built a descriptive visual story. Storms drive the largest economic losses, floods affect the most people, flash floods are the deadliest per event while riverine floods build the largest cumulative losses, and Japan, India and China show three distinct risk profiles. The analysis stays descriptive on purpose, so every insight can be read straight off the data.",
      icon: Globe,
      category: "Academic",
      tracks: ["analytics"],
      technologies: ["Tableau", "Power BI", "Data Storytelling", "Data Cleaning", "EM-DAT"],
      metrics: [
        "EM-DAT records, 2000–2024",
        "Storms: largest economic losses",
        "Floods: most people affected",
        "Flash floods: deadliest per event",
        "Japan vs India vs China risk profiles"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAG5Bo411o4/qYf5uEMj8XWtktzzGiiIOg/view?embed",
      links: {
        demo: "https://canva.link/7ufn3giffifha2v"
      }
    },
    {
      id: 20,
      title: "EV Market Resilience: $100M Capital Allocation",
      description: "Regime-aware ML on a 630 country-year panel to rank EV markets for a $100M deployment thesis.",
      longDescription: "Group project (Group C-1), written up as a research paper. Built a regime-aware ML pipeline on a 630 country-year panel covering 50+ countries (2011–2024), combining FinBERT and VADER sentiment with HMM-GMM regime detection that confirmed a 2024 structural break (p < 0.001). Calibrating the decision threshold to 78% lifted Random Forest accuracy from 54% to 67.7% under regime shift, and a Risk-Adjusted Resilience Index ranked 31 markets for a $100M capital-allocation framework.",
      icon: Zap,
      category: "Research",
      tracks: ["research", "analytics"],
      technologies: ["Random Forest", "HMM-GMM Regimes", "FinBERT / VADER", "Threshold Calibration", "Streamlit"],
      metrics: [
        "630 country-years, 50+ countries, 2011–2024",
        "2024 structural break confirmed (p < 0.001)",
        "Accuracy 54% to 67.7% with a calibrated 78% threshold",
        "31 markets ranked for a $100M allocation"
      ],
      status: "Completed",
      presentationUrl: "https://www.canva.com/design/DAHBHsxuCQ4/1YnMUr-U6cQoIOngP_2lHw/view?embed",
      links: {
        demo: "https://canva.link/dw8c3b4fcha4nqv",
        dashboard: "https://globalcharge-ev-strategy-kdswp7ekwz96qczzz5lrne.streamlit.app/",
        paper: "#" // TODO: paste the preprint link here
      }
    },
    {
      id: 11,
      title: "Indian Telecom: Customer Trust & Digital Experience",
      description: "Social media analytics on 45,896 public posts and reviews to test whether customer backlash or regulation changes operator behaviour.",
      longDescription: "Group project (Social Media Analytics, MBA BA). We collected 45,896 public items from YouTube, Play Store, Reddit, X and Google Trends about Jio, Airtel, Vi and BSNL. Public outrage after tariff hikes faded below baseline within six months, while complaints directed at the regulator rose from roughly 2% to about a third of mentions. We benchmarked operators' published service and ESG claims against the data, audited all four operators' recharge journeys and websites, and closed with nine recommendations ranked by impact per unit of effort.",
      icon: BarChart3,
      category: "Academic",
      tracks: ["marketing", "analytics"],
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
        id: 8,
        title: "Marico OWT Challenge: HaloMist Scalp-Tech",
        description: "Proposed 'HaloMist', a warm micro-mist clip-on for Parachute oils, to modernize the hair oiling ritual for urban consumers.",
        longDescription: "As a National Finalist in the Marico Over The Wall Challenge, my team developed 'HaloMist,' a novel 'scalp-tech' device to address key consumer pain points like messy and time-consuming hair oiling. The solution is a USB-C powered, clip-on micro-mist warmer for Parachute oil bottles, designed to create a clean, 5-minute, spa-like ritual. Our Go-to-Market strategy focused on D2C, e-commerce, and in-salon demonstrations to target time-pressed urban professionals, with detailed unit economics projecting a positive contribution margin.",
        icon: Target,
        category: "Case Competition",
        tracks: ["product", "marketing"],
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
        tracks: ["marketing"],
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
      id: 2,
      title: "Strategic Pricing Play for Breaking Games",
      description: "Developed a hybrid pricing strategy using WTP and elasticity analysis to project a 27-32% revenue uplift.",
      longDescription: "As a Strategy Extern for Breaking Games, I conducted a comprehensive market analysis to overhaul their pricing model. The project involved competitive benchmarking, customer WTP (Willingness-to-Pay) surveys, and elasticity modeling. I proposed a hybrid strategy combining value-based, tiered, and dynamic pricing for four key SKUs—Dwellings of Eldervale, King's Abbey, We're Doomed!, and Keep Calm!—projecting a 27-32% revenue increase and 35-39% margin growth.",
      icon: BarChart3,
      category: "Corporate",
      tracks: ["consulting", "marketing"],
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
      id: 4,
      title: "Go-to-Market Strategy for TryNow",
      description: "Designed the GTM strategy for a street-market B2B retail-tech startup, including STP and ROI modeling.",
      longDescription: "In this academic marketing project, I designed a comprehensive go-to-market strategy for 'TryNow,' a B2B retail-tech concept. The project involved conducting market research with over 120 shoppers, leading Segmentation, Targeting, and Positioning (STP) analysis, and creating detailed ROI models. I also applied 4P and PESTEL frameworks to set a pricing strategy that enabled vendor breakeven within 31-48 days.",
      icon: ShoppingCart,
      category: "Academic",
      tracks: ["marketing", "product"],
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
      id: 3,
      title: "Startup Due Diligence for IgniteXL Ventures",
      description: "Evaluated startup Popularium using AI-powered market research, TAM-SAM-SOM sizing, and CAC modeling.",
      longDescription: "Conducted a comprehensive evaluation of the startup Popularium for IgniteXL Ventures. My role involved using AI-powered market research tools (ChatGPT, Perplexity) integrated with TAM–SAM–SOM sizing, Customer Acquisition Cost (CAC) modeling, and competitive moat assessment. I delivered detailed due diligence reports and synergy analyses, highlighting market positioning and monetization potential to inform feasibility decisions.",
      icon: Target,
      category: "Corporate",
      tracks: ["product", "consulting"],
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
        id: 10,
        title: "IIM Ahmedabad Masterplan: TrashDNA",
        description: "Pitched 'TrashDNA,' an AI-powered mobile app to solve India's urban waste crisis by gamifying recycling at the source.",
        longDescription: "For IIM Ahmedabad's Masterplan competition, I developed and pitched 'TrashDNA,' a venture tackling India's urban waste crisis. The solution is an AI-powered app that identifies waste materials from a photo, directs users to the correct bin, and rewards them, gamifying the sorting process. The business model targets municipalities (B2G), housing societies (B2B), and brands (EPR data), tapping into a $13-15B market. The venture is designed for high social impact—formalizing jobs and diverting waste from landfills—and scalability through a low-cost, modular, AI-first approach.",
        icon: Brain,
        category: "Case Competition",
        tracks: ["product", "marketing"],
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
    },
    {
      id: 1,
      title: "Diabetic Retinopathy Detection using Deep Learning",
      description: "Automated DR screening system using U-Net++ for segmentation and a VGG16-based CNN for classification.",
      longDescription: "Engineered an end-to-end automated DR screening system using U-Net++ for retinal vessel segmentation and a VGG16-based CNN for severity classification. Built a full-stack web platform for report generation and doctor consultation, integrating multiple retinal image datasets and advanced preprocessing techniques like CLAHE and gamma correction.",
      icon: Brain,
      category: "Research",
      tracks: ["research", "analytics"],
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
    }
  ];

  // Tabs filter by the kind of work; the badge on each card shows where it was done
  const categories = [
    { id: "all", label: "All" },
    { id: "product", label: "Product & Strategy" },
    { id: "marketing", label: "Marketing & GTM" },
    { id: "consulting", label: "Consulting & Ops" },
    { id: "analytics", label: "Analytics & ML" },
    { id: "research", label: "Research" }
  ];

  // Display order under "All"
  const featuredOrder = [12, 13, 11, 8, 2, 15, 14, 16, 17, 4, 18, 9, 3, 20, 19, 10, 1];

  const filteredProjects = projects
    .filter(project =>
      activeCategory === "all" ||
      project.tracks.includes(activeCategory)
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
              Use the tabs to filter by the kind of work. Click a project to see details.
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="grid w-full h-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 bg-card/50 backdrop-blur-sm">
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
                          <h3 className="font-semibold text-sm leading-snug mb-1.5">{project.title}</h3>
                          <Badge
                            variant="secondary"
                            className={`text-xs mb-2 ${categoryColors[project.category] || 'bg-gray-100 text-gray-700'}`}
                          >
                            {project.category}
                          </Badge>
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
                      {isRealLink(currentProject.links.dashboard) && (
                        <a href={currentProject.links.dashboard} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px]">
                          <Button variant="outline-hero" className="w-full">
                            <LayoutDashboard className="w-4 h-4 mr-2" />
                            Live Dashboard
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
