# Annamneedi Suresh Kumar — AI/ML & Software Engineer Portfolio

A premium, dark-themed developer portfolio built on **Astro**, **Three.js**, and **TypeScript**, showcasing machine learning architectures, edge model compression benchmarks, and scalable software systems.

---

## 👤 About

**Annamneedi Suresh Kumar**
- **GitHub**: [@suresh4330](https://github.com/suresh4330)
- **Email**: annamneedisuresh003@gmail.com
- **Mobile**: +91-9121104330
- **LinkedIn**: [linkedin.com/in/annamneedi-suresh-kumar](https://linkedin.com/in/annamneedi-suresh-kumar)
- **Title**: AI/ML Engineer | Generative AI Developer | Software Engineer
- **Education**: 
  - **B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning)**, Lovely Professional University (2023 – 2027) | **CGPA: 8.32**
  - **Intermediate (MPC)**, Sri Shiridi Sai Jr College, Rajahmundry (2021 – 2023) | **87.8%**
  - **Secondary School (SSC)**, Vignan School, Malikipuram (2019 – 2021) | **81%**
- **Official Certifications**:
  - Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate (Oracle University)
  - Principles of Generative AI (Infosys Springboard)
  - Master Generative AI & Tools (Udemy)
- **Specializations**: Mixture of Experts (MoE), Edge Model Compression (Pruning, INT8 Quantization, Distillation), Generative AI / LLMs, Vector Search (ChromaDB, FAISS, CLIP), and Scalable Full-Stack Engineering.

---

## 🚀 Discovered & Verified Projects

1. **[IntelliMoE](https://github.com/suresh4330/IntelliMoE) — Mixture of Experts AI Assistant**
   - Production-grade Mixture-of-Experts (MoE) AI Assistant featuring dynamic semantic routing, multi-model orchestration with Gemini, Groq, and OpenAI, Answer Quality Engine, voice AI, and live web search.
   - *Stack*: Python, PyTorch, Transformers, Gemini API, Groq, OpenAI API, FastAPI, MongoDB, Docker.

2. **[Edge Model Compression Benchmark](https://github.com/suresh4330/edge-model-compression-benchmark) (EDGE-BENCH)**
   - Empirical deep learning optimization benchmark evaluating ResNet-18 on CIFAR-100 across Structured Pruning, Post-Training INT8 Quantization (PTQ), Quantization-Aware Training (QAT), and Knowledge Distillation from ResNet-50.
   - *Live Demo*: [edge-model-compression-benchmark.vercel.app](https://edge-model-compression-benchmark.vercel.app)
   - *Stack*: Python, PyTorch, TorchVision, ONNX Runtime, Matplotlib, NumPy.

3. **[TailorTalk](https://github.com/suresh4330/Tailortalk) — Multimodal AI Reasoning & Vector Retrieval Engine**
   - Multimodal visual search agent powered by OpenAI CLIP (ViT-B/32), FAISS `IndexFlatIP` indexing achieving sub-15ms vector retrieval, and LangChain conversational memory.
   - *Stack*: Python, OpenAI CLIP, FAISS, LangChain, Feature Engineering, HSV Reranking, REST APIs.

4. **[CareerAI](https://github.com/suresh4330/Career-ai) — Machine Learning Career Recommender**
   - Full-stack machine learning web application evaluating user performance and aptitude vectors to recommend top 5 career paths with confidence percentages using Gradient Boosting.
   - *Stack*: Python, scikit-learn (Gradient Boosting), Flask, Pandas, NumPy, HTML5, CSS3, JavaScript.

5. **[StockFlow](https://github.com/suresh4330/stockFlow) — Inventory Management & DevOps**
   - Full-stack, DevOps-focused enterprise inventory tracking and order dispatch system featuring FastAPI, React 18, PostgreSQL, Docker, and Prometheus & Grafana monitoring.
   - *Stack*: FastAPI (Python), React 18, PostgreSQL, Docker, Docker Compose, Prometheus, Grafana, JWT.

6. **[IP-SAKTI Sahayak (SIH26045)](https://github.com/suresh4330) — Regulatory AI Assistant**
   - Multilingual, source-cited assistant for intellectual property and regulatory compliance in traditional formulations, engineered for the Smart India Hackathon.
   - *Stack*: Python, FastAPI, Source-Cited RAG, PostgreSQL, Knowledge Graphs, Docker.

7. **[Medical Appointment Management System](https://github.com/suresh4330/Medical-Appointment)**
   - Full-stack healthcare scheduling platform featuring Role-Based Access Control (RBAC) across patient, physician, and admin dashboards with secure JWT sessions.
   - *Stack*: React, Node.js, Express, JavaScript, JWT, REST APIs, HTML5, CSS3.

8. **[Movie Booking System](https://github.com/suresh4330/Movie-Booking-System)**
   - Interactive cinema discovery and ticket booking web application integrating TMDB API for live film metadata and OpenStreetMap for geospatial cinema filtering.
   - *Stack*: JavaScript, TMDB API, OpenStreetMap, HTML5, CSS3, localStorage.

---

## 🛠️ Technical Stack & Skills

- **Programming**: Python, Java, C, C++, JavaScript, TypeScript, SQL
- **AI/ML**: Machine Learning, Deep Learning, NLP, Generative AI, LLMs, Transformers, RAG, AI Agents, Model Evaluation
- **Frameworks & Libraries**: PyTorch, scikit-learn, Pandas, NumPy, FastAPI, Flask, React, Node.js, Express
- **Tools & Platforms**: Git, GitHub, Docker, Linux, VS Code, Antigravity
- **DevOps & Cloud**: Docker, Docker Compose, CI/CD, GitHub Actions, Terraform, Ansible, Cloud fundamentals

---

## 💻 Running the Portfolio Locally

### Prerequisites
- **Node.js**: v22+
- **npm**: v10+

### Setup & Launch

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

By default, the site will be accessible at:
```
http://localhost:4321/Portfolio/
```

> **Note**: To serve at the root domain (`http://localhost:4321/`), set `ASTRO_BASE=/` in your environment or update `astro.config.mjs`.

---

## 📁 Repository Structure

```
├── public/                 # Static assets, SVG diagrams & favicon
│   └── projects/           # Architectural SVG diagrams for all 8 projects
├── src/
│   ├── components/         # Modular Astro components
│   │   ├── AboutSection.astro    # Narrative bio, focus pillars & education spotlight
│   │   ├── BlogCard.astro        # Article preview card
│   │   ├── ContactSection.astro  # Interactive form with validation & channels
│   │   ├── EducationSection.astro# Academic foundation & coursework
│   │   ├── Footer.astro          # Site footer with branding & links
│   │   ├── Hero.astro            # Hero banner, status badge & CTAs
│   │   ├── LearningJourney.astro # Milestone timeline (CS to GenAI & DevOps)
│   │   ├── Navigation.astro      # Floating glassmorphic navbar & mobile drawer
│   │   ├── ProjectCard.astro     # Interactive card with preview diagram, problem & metrics
│   │   ├── ProjectsSection.astro # Featured project showcase with category filters
│   │   ├── Skills.astro          # Categorized technical competencies
│   │   └── ThreeBackground.astro # 3D particle canvas with reduced-motion support
│   ├── content/
│   │   ├── blog/                 # Deep architectural writeups (MoE, Edge AI, RAG)
│   │   └── projects/             # Markdown project files with structured schemas
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Root layout, SEO, Google Fonts & cursor follower
│   │   └── BlogPostLayout.astro  # Article reading layout
│   ├── pages/
│   │   ├── about.astro           # Dedicated profile page
│   │   ├── index.astro           # Comprehensive single-page portfolio
│   │   ├── projects.astro        # Dedicated full project showcase
│   │   └── blog/                 # Technical articles listing & dynamic slug routes
│   └── styles/
│       └── global.css            # Dark obsidian theme tokens & glassmorphism
├── astro.config.mjs        # Astro configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 📄 License

MIT License. Designed and maintained by Annamneedi Suresh Kumar.
