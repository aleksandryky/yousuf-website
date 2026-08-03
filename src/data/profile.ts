export const profile = {
  name: "Md Yousuf Ali",
  shortName: "Yousuf Ali",
  title: "Principal Software Engineer",
  roles: ["Solution Architect", "AI & Cloud Systems"],
  location: "Dhaka, Bangladesh",
  email: "yousuf.gdls@gmail.com",
  linkedin: "https://linkedin.com/in/yousufcse06",
  linkedinLabel: "linkedin.com/in/yousufcse06",
  github: "https://github.com/aleksandryky",
  cvPath: "/cv/Md_Yousuf_Ali_CV_2026-08.pdf",
  bookingUrl: "https://calendly.com/yousuf-gdls/30min",
  bookingLabel: "Schedule an Architecture Consultation",
  photo: "/images/yousuf.webp",
  headline:
    "Architecting resilient cloud infrastructure, enterprise distributed systems, and AI-driven automation workflows.",
  summary:
    "Principal Software Engineer and Solution Architect with 15+ years designing high-performance software systems, AI-driven products, and enterprise cloud infrastructure. Known for technical leadership, distributed systems, and mentoring engineering teams to ship reliable software.",
  focus:
    "Deep focus on cloud architecture, distributed systems, and AI automation — with supporting depth across data platforms, DevOps, and specialized product ecosystems.",
  quote:
    "Passionate about building scalable, secure and intelligent systems that drive real-world impact.",
  aboutLead:
    "Principal Software Engineer and Solution Architect with 15+ years of experience designing and delivering high-performance software systems and digital platforms. I combine deep technical expertise with strategic thinking to build scalable, secure, and future-ready solutions.",
  aboutFocus:
    "My flagship work centers on resilient AWS architecture, enterprise distributed systems, and AI-driven automation — supported by end-to-end delivery with Docker, Kubernetes, and modern full-stack platforms.",
} as const;

export const aboutPillars = [
  {
    title: "Engineering Excellence",
    detail:
      "Clean architecture, modern technologies, and best practices that ensure quality and performance.",
    icon: "code",
  },
  {
    title: "Cloud & DevOps Expertise",
    detail:
      "AWS architecture, infrastructure automation, CI/CD pipelines, and observability for reliable and scalable systems.",
    icon: "cloud",
  },
  {
    title: "AI & Web3 Innovation",
    detail:
      "Building intelligent applications, blockchain platforms, and automation solutions that drive business value.",
    icon: "ai",
  },
  {
    title: "Leadership & Mentorship",
    detail:
      "Leading distributed teams, mentoring engineers, and fostering a culture of ownership and continuous growth.",
    icon: "team",
  },
  {
    title: "End-to-End Delivery",
    detail:
      "From ideation to deployment — delivering robust, secure, and user-focused solutions that make an impact.",
    icon: "shield",
  },
] as const;

export const aboutStats = [
  { value: "15+ Years", label: "Professional Experience", icon: "calendar" },
  { value: "20+ Projects", label: "Delivered Successfully", icon: "layers" },
  { value: "30+ Developers", label: "Led & Mentored", icon: "users" },
  { value: "Global Clients", label: "Across Multiple Industries", icon: "globe" },
] as const;

export const heroHighlights = [
  {
    title: "Cloud Infrastructure",
    detail: "Resilient AWS platforms with high availability and clear operational ownership.",
    icon: "cloud",
  },
  {
    title: "Distributed Systems",
    detail: "Event-driven services, bounded contexts, and architectures that scale under load.",
    icon: "code",
  },
  {
    title: "AI Automation",
    detail: "Production OpenAI workflows that remove manual effort and accelerate delivery.",
    icon: "ai",
  },
] as const;

export const trustedTech = [
  { name: "AWS", mark: "aws" },
  { name: "React", mark: "react" },
  { name: "Node.js", mark: "node" },
  { name: "Laravel", mark: "laravel" },
  { name: "TypeScript", mark: "ts" },
  { name: "Docker", mark: "docker" },
] as const;

export const expertise = [
  {
    id: "architecture",
    title: "Architecture",
    summary:
      "Solution design for systems that stay reliable under growth — from service boundaries to delivery governance.",
    items: [
      {
        name: "Microservices",
        detail: "Bounded contexts, service ownership, and independent deployability.",
      },
      {
        name: "Event-Driven Systems",
        detail: "Async communication patterns for scalable, loosely coupled workflows.",
      },
      {
        name: "Distributed Systems",
        detail: "High-throughput, low-latency designs targeting strong availability.",
      },
      {
        name: "API Design",
        detail: "Consistent interfaces that support product teams and external partners.",
      },
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    summary:
      "Production AI systems and workflow automation — agents, retrieval pipelines, model APIs, and orchestration that remove manual effort.",
    items: [
      {
        name: "AI Agents",
        detail: "Tool-using agents that plan, act, and escalate across business and product workflows.",
      },
      {
        name: "MCP",
        detail: "Model Context Protocol integrations that connect assistants to real tools and data sources.",
      },
      {
        name: "OpenAI API",
        detail: "Prompted production integrations, structured outputs, and reliable model orchestration.",
      },
      {
        name: "RAG",
        detail: "Retrieval-augmented generation grounded in private knowledge bases and operational documents.",
      },
      {
        name: "LangChain",
        detail: "Composable chains, agents, and memory patterns for maintainable AI application layers.",
      },
      {
        name: "n8n",
        detail: "Cross-app automation with retries, observability, and ownership across business systems.",
      },
      {
        name: "Vector DB",
        detail: "Embedding stores and similarity search powering RAG and semantic product features.",
      },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    summary:
      "AWS infrastructure, container platforms, and CI/CD practices for secure, observable delivery.",
    items: [
      {
        name: "AWS (EC2, Lambda, RDS, S3)",
        detail: "Compute, storage, and managed data services for production workloads.",
      },
      {
        name: "Route 53 / CloudWatch",
        detail: "DNS, monitoring, alerting, and operational visibility.",
      },
      {
        name: "Docker / Kubernetes",
        detail: "Containerized deployments and orchestrated service environments.",
      },
      {
        name: "CI/CD",
        detail: "Automated build, test, and release pipelines for faster, safer shipping.",
      },
    ],
  },
  {
    id: "data",
    title: "Data",
    summary:
      "Reliable persistence and caching strategies that keep applications fast and analytics ready.",
    items: [
      {
        name: "MySQL / SQL Server",
        detail: "Schema design, query optimization, and RDS-backed production databases.",
      },
      {
        name: "Redis",
        detail: "Caching layers and session/data performance improvements.",
      },
      {
        name: "Data Modeling",
        detail: "Structures that support reporting, integrity, and multi-platform sync.",
      },
      {
        name: "Analytics",
        detail: "Operational dashboards and data products for decision support.",
      },
    ],
  },
] as const;

export const experience = [
  {
    role: "Principal Software Engineer",
    company: "Silicon Orchard Limited",
    location: "Dhaka, Bangladesh",
    period: "April 2016 – Present",
    type: "Full-time",
    highlights: [
      "Lead architecture and development of scalable enterprise applications and distributed systems.",
      "Manage multiple development teams of 10+ engineers and coordinate technical delivery.",
      "Conduct architecture reviews, code reviews, sprint planning, and engineering mentoring.",
      "Design AI-powered automation workflows using OpenAI APIs, n8n, and business automation platforms.",
      "Architect blockchain applications including cryptocurrency exchange and wallet solutions.",
      "Build full-stack applications with React, Next.js, Node.js, and Laravel on AWS infrastructure.",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Cloud IT Limited",
    location: "Dhaka, Bangladesh",
    period: "May 2013 – March 2016",
    type: "Full-time",
    highlights: [
      "Developed enterprise web applications using PHP, Laravel, CodeIgniter, and modern front-end stacks.",
      "Integrated payment gateways, third-party APIs, and external services.",
      "Built responsive applications and optimized backend performance.",
      "Supported automated testing and deployment practices.",
    ],
  },
  {
    role: "Software Developer",
    company: "Cention AB",
    location: "Dhaka, Bangladesh",
    period: "January 2011 – May 2013",
    type: "Full-time",
    highlights: [
      "Developed backend services and customer management systems.",
      "Collaborated with international teams using Agile practices across time zones.",
      "Participated in code reviews and software quality improvement initiatives.",
    ],
  },
] as const;

export const projects = [
  {
    name: "SafeLot.us — Vehicle Security & Tracking Platform",
    category: "Fintech & IoT",
    tags: ["Next.js", "WebSockets", "AWS", "IoT", "Mobile"],
    featured: true,
    diagram: "safelot",
    url: "https://safelot.us",
    challenge:
      "Needed a low-latency IoT platform to process real-time vehicle telemetry, geo-fencing events, and remote commands across thousands of connected assets.",
    decision:
      "Designed an event-driven architecture with Next.js control planes, websocket fan-out, PHP services, and AWS auto-scaling around GPS ingestion and alerting pipelines.",
    impact:
      "Delivered sub-second location updates with continuous monitoring, geo-fence enforcement, and cross-platform control for web, iOS, and Android clients.",
  },
  {
    name: "Collect Tech LLC",
    category: "Fintech & IoT",
    tags: ["PHP", "ASP.NET", "Next.js", "SQL Server", "AWS"],
    featured: false,
    url: "https://www.collecttech.com/",
    challenge:
      "Property managers needed a reliable debt-recovery system that could automate outreach, payments, and account workflows without losing auditability.",
    decision:
      "Architected a dual-backend platform (PHP + ASP.NET) with Next.js operator UI, SQL Server/MySQL persistence, and AWS-hosted services for payments and reporting.",
    impact:
      "Unified collections, virtual agents, and payment operations into one recoverable workflow surface for property teams.",
  },
  {
    name: "Pelican Delivers",
    category: "Fintech & IoT",
    tags: ["Marketplace", "Catalog", "Fulfillment", "AWS"],
    featured: true,
    url: "https://pelicandelivers.com/about",
    challenge:
      "Licensed dispensaries needed a compliant marketplace that could handle catalog sync, pickup/delivery routing, and multi-market order fulfillment.",
    decision:
      "Built a marketplace and storefront architecture separating catalog, order orchestration, and fulfillment flows so each legal market could operate independently.",
    impact:
      "Enabled end-to-end consumer-to-dispensary fulfillment with patented delivery workflows across regulated regions.",
  },
  {
    name: "AI Chatbot Platform",
    category: "AI Integration",
    tags: ["OpenAI", "NLP", "Next.js", "Omnichannel"],
    featured: false,
    url: "https://sol-chat.app",
    challenge:
      "Support teams needed conversational automation that could resolve intent across web, mobile, and social channels without fragmenting context.",
    decision:
      "Designed an OpenAI-backed conversational layer with channel adapters, prompt tooling, and escalation paths into human support queues.",
    impact:
      "Reduced repetitive support load while keeping handoff quality intact across customer touchpoints.",
  },
  {
    name: "Marketing Automation & Lead Generation",
    category: "AI Integration",
    tags: ["GoHighLevel", "ActiveCampaign", "Apollo.io", "Instantly"],
    featured: false,
    challenge:
      "Growth teams were operating disconnected CRM, email, and outbound tools with inconsistent lead scoring and funnel stages.",
    decision:
      "Implemented an automation fabric across ActiveCampaign, GoHighLevel, Instantly, and Apollo.io with shared scoring and nurture logic.",
    impact:
      "Created measurable campaign operations with tighter lead qualification and fewer manual handoffs.",
  },
  {
    name: "Cryptocurrency Exchange Platform",
    category: "Fintech & IoT",
    tags: ["Blockchain", "Wallets", "KYC", "Payments"],
    featured: false,
    url: "https://elibrax.com",
    challenge:
      "Required a multi-currency trading platform with wallet custody flows, KYC gates, and payment rails that could survive volatile market traffic.",
    decision:
      "Structured trading, wallet, KYC, and payment domains as separable services with strict transaction and compliance boundaries.",
    impact:
      "Shipped an exchange supporting Bitcoin, Ethereum, Litecoin, and operational monitoring for trading and onboarding journeys.",
  },
  {
    name: "LifeCrypto Web Application",
    category: "Fintech & IoT",
    tags: ["DeFi", "Web3", "Portfolio", "Trading"],
    featured: false,
    url: "https://lifedefi.co/",
    challenge:
      "Users needed a crypto management experience combining wallets, market data, portfolio tracking, and automated trading signals.",
    decision:
      "Composed wallet connectivity, market feeds, and portfolio services behind a unified Web3 application shell.",
    impact:
      "Delivered a blockchain management product with portfolio visibility and automated trading features.",
  },
  {
    name: "Round-Right Healthcare SaaS",
    category: "Cloud & Systems",
    tags: ["Next.js", "PHP", "AWS", "Redis", "MySQL"],
    featured: false,
    url: "https://round-right.com",
    challenge:
      "A healthcare SaaS needed stronger reliability and response times as concurrent clinical workflows increased.",
    decision:
      "Hardened the stack with Next.js + PHP services on AWS, Redis caching, and MySQL query/path optimization.",
    impact:
      "Improved performance, reliability, and day-to-day operator experience under production load.",
  },
  {
    name: "Workflow Automation System",
    category: "AI Integration",
    tags: ["GoHighLevel", "n8n", "Make", "Integrations"],
    featured: false,
    challenge:
      "Operations depended on manual swivel-chair work across more than ten business applications.",
    decision:
      "Designed integration workflows in GoHighLevel, Make, and n8n with explicit triggers, retries, and ownership boundaries.",
    impact:
      "Cut manual operational effort by roughly 60% while keeping cross-app processes observable.",
  },
] as const;

export const education = {
  degree: "Bachelor of Science in Computer Science & Engineering",
  school: "Khulna University of Engineering and Technology (KUET)",
  url: "https://kuet.ac.bd/",
  location: "Bangladesh",
  year: "2011",
} as const;

export const certifications = [
  {
    title: "Agile Development",
    detail: "Certified Professional",
    period: "2016 – Present",
  },
  {
    title: "Software Architect",
    detail: "Certified Professional",
    period: "2016 – Present",
  },
  {
    title: "Test Driven Development (TDD)",
    detail: "Training Certification",
    period: "2016 – Present",
  },
  {
    title: "Red Hat Linux System Administration",
    detail: "Certification",
    period: "2016 – Present",
  },
  {
    title: "Code Warriors Challenges Participant",
    detail: "2014 & 2015",
    period: "2014 – 2015",
  },
] as const;

export const strengths = [
  {
    text: "15+ years of software engineering and architecture experience",
    icon: "briefcase",
  },
  {
    text: "Technical leadership and distributed team management",
    icon: "users",
  },
  {
    text: "Solution architecture and enterprise application design",
    icon: "layers",
  },
  {
    text: "Cloud operations, monitoring, security, and troubleshooting",
    icon: "cloud",
  },
  {
    text: "Agile / Scrum / Kanban delivery management",
    icon: "cycle",
  },
  {
    text: "Engineering mentorship and team development",
    icon: "mentor",
  },
  {
    text: "AI, blockchain, Web3, and automation solution delivery",
    icon: "network",
  },
] as const;

export const toolDomains = [
  {
    id: "primary",
    title: "Primary Stack / Daily Architecture",
    summary:
      "The systems I design and review every week — cloud foundations, application platforms, and delivery infrastructure.",
    items: ["AWS", "Node.js", "Next.js", "Laravel", "Docker", "Kubernetes"],
  },
  {
    id: "integrations",
    title: "Integrations & Data Systems",
    summary:
      "Data planes and integration patterns that keep products fast, consistent, and automation-ready.",
    items: ["Redis", "MySQL", "OpenAI APIs", "n8n", "Event-Driven Architecture", "Vector DB"],
  },
  {
    id: "specialized",
    title: "Specialized Ecosystems",
    summary:
      "Focused platforms for agentic AI, retrieval systems, and production automation depth.",
    items: ["AI Agents", "MCP", "RAG / LangChain", "OpenAI APIs", "n8n"],
  },
] as const;

export const testimonials = [
  {
    quote:
      "Yousuf is an exceptional Principal Software Engineer who combines deep technical expertise with strong leadership and a clear understanding of business objectives. He has a remarkable ability to design scalable solutions, solve complex engineering challenges, and guide teams toward delivering high-quality products. His ownership, architectural thinking, and commitment to excellence make him someone you can confidently rely on for critical projects",
    name: "David N Baker",
    context: "Land Value Alpha Fund LLC",
  },
  {
    quote:
      "Yousuf is a highly skilled and dependable Senior Software Developer with a strong ability to transform complex requirements into clean, scalable, and reliable software solutions. His hands-on expertise, attention to detail, and problem-solving mindset consistently helped us deliver challenging projects successfully. He is also a great team player who takes ownership and always strives to maintain high engineering standards.",
    name: "Anowar Hossain",
    context: "Cloud It Limited",
  },
  {
    quote:
      "Yousuf is a highly capable Software Engineer who combines solid technical expertise with a strong problem-solving mindset. He consistently delivers clean, reliable solutions, adapts quickly to new technologies, and takes genuine ownership of his work. His professionalism and commitment to quality make him a valuable member of any engineering team.",
    name: "Mujibor Rahman",
    context: "Cention AB",
  },
] as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
] as const;
