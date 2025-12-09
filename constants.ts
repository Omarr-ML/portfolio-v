import { Experience, Project, SkillCategory } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/0mer-Ashraf-ML",
  linkedin: "https://www.linkedin.com/in/omar-ashraf-711b91242/",
  email: "omarrashraf001@gmail.com",
  phone: "+92 304 608 7338"
};

export const SKILLS: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    skills: ["LLMs (GPT-4, Llama-2, Mistral)", "RAG", "Computer Vision (YOLO, U-Net)", "NLP (BERT, Transformers)", "LangChain", "LlamaIndex", "HuggingFace", "PyTorch", "TensorFlow"]
  },
  {
    name: "Backend & MLOps",
    skills: ["Python", "FastAPI", "Django", "Docker", "AWS (EC2, S3, SageMaker)", "Pinecone", "Supabase", "Redis", "Celery", "CI/CD"]
  },
  {
    name: "Data & Tools",
    skills: ["PostgreSQL", "MongoDB", "Git", "Seaborn", "Scikit-learn", "OpenCV", "Pandas", "NumPy"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "solgenci",
    company: "Solgenci",
    role: "Senior AI/ML Engineer",
    period: "2023 - Present",
    description: [
      "Specializing in developing advanced, scalable AI-driven solutions using OpenAI, LangChain, and RAG pipelines.",
      "Designed modular architectures for chatbots and white-label AI solutions, reducing deployment time significantly.",
      "Optimized performance for LLM-based applications, ensuring high throughput and low latency."
    ],
    tech: ["OpenAI", "LangChain", "FastAPI", "AWS", "RAG"]
  },
  {
    id: "senarios",
    company: "Senarios",
    role: "Data Scientist",
    period: "2021 - 2023",
    description: [
      "Developed scalable Python code for complex AI applications, improving maintainability by 30%.",
      "Built end-to-end AI pipelines for edge deployment on Android/iOS using TensorFlow Lite and ONNX.",
      "Achieved ~98% accuracy in face recognition and anti-spoofing systems using advanced CV techniques."
    ],
    tech: ["TensorFlow", "PyTorch", "Mobile AI", "Face Recognition"]
  },
  {
    id: "ml1",
    company: "Machine Learning 1",
    role: "Junior Data Scientist",
    period: "2019 - 2021",
    description: [
      "Led the development of a customer support Voicebot reducing latency to 3-4 seconds.",
      "Worked on Text-to-Image models (Stable Diffusion) for website design automation.",
      "Built Document Understanding Transformers for automated invoice processing."
    ],
    tech: ["Voice AI", "Stable Diffusion", "OCR", "Twilio"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "structural-learning",
    title: "AI-Powered Structural Learning Platform",
    role: "Lead GenAI Engineer",
    shortDescription: "An automated lesson planning backend using RAG, GPT-4, and the Structural Learning Framework.",
    fullDescription: "Designed and implemented a production-ready microservice that automatically generates curriculum-aligned lesson plans. The system utilizes a Retrieval-Augmented Generation (RAG) pipeline to ground GPT-4 in real educational content, ensuring factual accuracy and adherence to the '33 thinking skills' framework.",
    tags: ["GenAI", "RAG", "FastAPI", "Education"],
    techStack: ["Python", "FastAPI", "GPT-4", "Pinecone", "Supabase", "AWS S3", "Docker", "AsyncIO"],
    features: [
      "Multi-step lesson generation based on cognitive complexity (Green/Blue/Red skills).",
      "Advanced RAG pipeline with metadata filtering (Subject, Grade) in Pinecone.",
      "Asynchronous architecture handling concurrent skill selection, retrieval, and generation.",
      "Strict JSON output validation using Pydantic and auto-retries."
    ],
    challenges: [
      "Ensuring GPT-4 followed strict JSON schemas for frontend integration.",
      "Balancing latency vs. quality (optimized to <5s generation).",
      "Preventing hallucinations by grounding the model in 1000+ curriculum PDFs."
    ],
    results: [
      "Reduced lesson planning time from hours to seconds.",
      "Achieved <$0.10 cost per lesson via token optimization.",
      "Production deployment handling concurrent user requests with zero downtime."
    ],
    imageUrl: "/structural-learning.png"
  },
  {
    id: "id-fraud-detection",
    title: "ID Document Processing & Fraud Detection",
    role: "ML Engineer",
    shortDescription: "End-to-end CV pipeline for ID segmentation, OCR, and forensic fraud detection.",
    fullDescription: "Built a comprehensive computer vision pipeline to automate identity verification. The system detects ID cards, corrects perspective, extracts fields via OCR, and performs forensic analysis to detect tampering (face swaps, screen replays, photocopies).",
    tags: ["Computer Vision", "Fraud Detection", "OCR", "Deep Learning"],
    techStack: ["PyTorch", "TensorFlow", "U-Net", "YOLOv5", "Google Vision OCR", "OpenCV", "FastAPI"],
    features: [
      "U-Net based semantic segmentation for precise ID card localization.",
      "YOLOv5 for detecting specific fields (Name, DOB, Photo) on the card.",
      "Custom CNNs for detecting 'face paste' attacks and screen-replay (moire pattern) attacks.",
      "Heuristic algorithms for orientation correction and perspective warping."
    ],
    challenges: [
      "Handling varied lighting, glares, and background clutter.",
      "Detecting high-quality digital forgeries that are invisible to the human eye.",
      "Orchestrating multiple heavy models (Segmentation -> Detection -> OCR -> Fraud) within acceptable latency."
    ],
    results: [
      "99.5% segmentation accuracy and 95% mAP on field detection.",
      "Robust detection of screen-replay attacks and printed copies.",
      "Successfully containerized complex mixed-framework (TF + PyTorch) environment."
    ],
    imageUrl: "/id-fraud-detection.png"
  },
  {
    id: "convirza-ai",
    title: "Convirza AI Conversation Analytics",
    role: "ML Engineer",
    shortDescription: "Scalable call tracking and analytics platform processing terabytes of audio.",
    fullDescription: "Developed the AI engine for a call tracking platform that transcribes and analyzes phone calls in real-time. The system detects sentiment, sales outcomes, lead quality, and specific 'pain points' to help businesses optimize sales strategies.",
    tags: ["NLP", "Audio Processing", "MLOps", "Analytics"],
    techStack: ["BERT", "TorchServe", "OpenAI Whisper", "AssemblyAI", "Deepgram", "Kubernetes", "Redis"],
    features: [
      "Hybrid ASR strategy using AssemblyAI (accuracy), Deepgram (speed), and local Whisper (privacy).",
      "Fine-tuned BERT models for sentiment analysis and intent classification.",
      "Modular pipeline allowing client-specific model fine-tuning.",
      "Real-time processing capability for live agent coaching."
    ],
    challenges: [
      "Processing terabytes of audio data efficiently.",
      "Handling domain-specific jargon across different industries (Healthcare vs. Automotive).",
      "Ensuring HIPAA and GDPR compliance with on-premise model deployment options."
    ],
    results: [
      "Processed millions of call minutes monthly.",
      "Improved sentiment analysis accuracy to ~90%.",
      "Enabled clients to increase sales revenue by automated lead scoring."
    ],
    imageUrl: "/convirza-ai.png"
  },
  {
    id: "startup-ideation",
    title: "Persona-Driven Startup Ideation",
    role: "AI Engineer",
    shortDescription: "AI platform that validates startup ideas by simulating customer personas and scraping live data.",
    fullDescription: "A sophisticated tool that scrapes Reddit and LinkedIn to identify real user pain points, validates them using AI agents, and generates startup ideas with strategic 'lenses' (business models) applied.",
    tags: ["Agents", "Web Scraping", "Product Design"],
    techStack: ["Streamlit", "OpenAI GPT-4", "PRAW (Reddit)", "RapidAPI", "Pydantic"],
    features: [
      "Automated persona generation and 'Lens' application for idea variation.",
      "Real-time scraping of Reddit/LinkedIn for pain point discovery.",
      "Multi-agent architecture: Researcher, Validator, and Synthesizer agents.",
      "Comprehensive report generation in JSON/CSV/Markdown."
    ],
    challenges: [
      "Structuring unstructured forum discussions into quantifiable pain points.",
      "Managing API rate limits across multiple social platforms.",
      "Creating a flexible 'Lens' system to pivot ideas programmatically."
    ],
    results: [
      "Generates 20+ validated ideas in under 5 minutes.",
      "Provides data-backed market size and competition analysis.",
      "Fully automated research workflow replacing weeks of manual work."
    ],
    imageUrl: "/startup-ideation.png"
  },
  {
    id: "real-estate-sms",
    title: "AI Real Estate Lead Qualification",
    role: "Full Stack AI Engineer",
    shortDescription: "Django-based SMS marketing platform with AI automated responses.",
    fullDescription: "A CRM-integrated system for luxury real estate agents that automates bulk SMS campaigns. It uses Google Gemini to handle inbound conversations, qualify leads, and schedule appointments automatically.",
    tags: ["Automation", "CRM", "Chatbots"],
    techStack: ["Django", "Celery", "Google Gemini", "SignalWire", "Follow Up Boss API"],
    features: [
      "AI conversation handler with memory and context awareness.",
      "Automated CRM extraction and data entry (Follow Up Boss).",
      "Rate-limited bulk SMS sending via Celery queues.",
      "Price validation logic to filter unrealistic leads."
    ],
    challenges: [
      "Handling complex real estate negotiations via SMS.",
      "Integrating disparate systems (CRM, SMS Gateway, AI) reliably.",
      "Managing strict carrier rate limits."
    ],
    results: [
      "Automated qualification for thousands of leads.",
      "Seamless CRM integration reducing manual data entry.",
      "High-engagement conversational agent that mimics human realtors."
    ],
    imageUrl: "/real-estate-sms.png"
  }
];
