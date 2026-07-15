export const profile = {
  name: "Md Yousuf Ali",
  shortName: "Yousuf Ali",
  title: "Principal Software Engineer",
  roles: ["Solution Architect", "AI & Cloud Systems"],
  location: "Dhaka, Bangladesh",
  email: "yousuf.gdls@gmail.com",
  linkedin: "https://linkedin.com/in/yousufcse06",
  linkedinLabel: "linkedin.com/in/yousufcse06",
  cvPath: "/cv/Md_Yousuf_Ali_CV.pdf",
  photo: "/images/yousuf.jpg",
  headline: "Architecting systems that scale — from AI workflows to cloud platforms.",
  summary:
    "Principal Software Engineer and Solution Architect with 15+ years designing high-performance software systems, AI-driven products, blockchain platforms, and enterprise cloud infrastructure. Known for technical leadership, distributed systems, and mentoring engineering teams to ship reliable software.",
  focus:
    "AI chatbots and OpenAI integrations, Web3 and crypto platforms, marketing automation, AWS architecture, and end-to-end delivery with Docker and Kubernetes.",
  quote:
    "Passionate about building scalable, secure and intelligent systems that drive real-world impact.",
  aboutLead:
    "Principal Software Engineer and Solution Architect with 15+ years of experience designing and delivering high-performance software systems and digital platforms. I combine deep technical expertise with strategic thinking to build scalable, secure, and future-ready solutions.",
  aboutFocus:
    "I specialize in AI-powered applications, Web3 and blockchain ecosystems, marketing automation, cloud architecture on AWS, and end-to-end delivery using Docker and Kubernetes.",
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
  { value: "50+ Projects", label: "Delivered Successfully", icon: "layers" },
  { value: "40+ Developers", label: "Led & Mentored", icon: "users" },
  { value: "Global Clients", label: "Across Multiple Industries", icon: "globe" },
] as const;

export const heroHighlights = [
  {
    title: "AI & Automation",
    detail: "Designing intelligent systems and workflows.",
    icon: "ai",
  },
  {
    title: "Cloud Architecture",
    detail: "Scalable, secure and high availability systems.",
    icon: "cloud",
  },
  {
    title: "Full Stack Expertise",
    detail: "Modern technologies for robust solutions.",
    icon: "code",
  },
  {
    title: "Leadership",
    detail: "Leading teams and delivering impact.",
    icon: "team",
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
    id: "programming",
    title: "Programming",
    summary:
      "Full-stack delivery across PHP frameworks and modern JavaScript stacks, with API-first design for maintainable products.",
    items: [
      {
        name: "PHP / Laravel / CodeIgniter",
        detail: "Enterprise backends, modular services, and long-lived application evolution.",
      },
      {
        name: "React.js / Next.js",
        detail: "Performant UI systems, App Router patterns, and production-ready frontends.",
      },
      {
        name: "Node.js",
        detail: "API services, real-time workflows, and integration layers between products.",
      },
      {
        name: "REST APIs",
        detail: "Clear contracts, versioning discipline, and third-party service orchestration.",
      },
    ],
  },
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
    id: "ai-ml",
    title: "AI & ML",
    summary:
      "Practical AI delivery focused on conversational systems, OpenAI integrations, and automation outcomes.",
    items: [
      {
        name: "OpenAI / ChatGPT APIs",
        detail: "Prompted workflows, tool use, and production integration patterns.",
      },
      {
        name: "Conversational AI",
        detail: "Customer-support chatbots across web, mobile, and social channels.",
      },
      {
        name: "NLP Systems",
        detail: "Intent handling and dialogue flows for support and operations teams.",
      },
      {
        name: "ML-assisted automation",
        detail: "AI-powered workflows that reduce manual effort in business processes.",
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
  {
    id: "blockchain",
    title: "Blockchain",
    summary:
      "Web3 product engineering spanning wallets, exchanges, DeFi flows, and secure transaction journeys.",
    items: [
      {
        name: "Web3 / Smart Contracts",
        detail: "On-chain integrations and contract-backed product features.",
      },
      {
        name: "Crypto Wallets",
        detail: "Secure wallet connectivity for management and trading experiences.",
      },
      {
        name: "Exchange Platforms",
        detail: "Multi-currency trading, KYC, payments, and monitoring controls.",
      },
      {
        name: "DeFi",
        detail: "Decentralized finance applications including Elibrax and LifeDeFi work.",
      },
    ],
  },
  {
    id: "automation",
    title: "Automation",
    summary:
      "Marketing and operations automation that connects CRM, outreach, and internal tools end to end.",
    items: [
      {
        name: "ActiveCampaign / GoHighLevel",
        detail: "Campaign orchestration, CRM workflows, and lead nurturing.",
      },
      {
        name: "Instantly / Apollo.io",
        detail: "Outbound sequencing and lead-generation pipelines.",
      },
      {
        name: "n8n / Make",
        detail: "Cross-app automation connecting 10+ business systems.",
      },
      {
        name: "Sales funnel automation",
        detail: "Lead scoring, funnel stages, and measurable campaign operations.",
      },
    ],
  },
] as const;

export const experience = [
  {
    role: "Principal Software Engineer",
    company: "Silicon Orchard Limited",
    location: "Dhaka, Bangladesh",
    period: "April 2016 — Present",
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
    period: "May 2013 — March 2016",
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
    period: "January 2011 — May 2013",
    highlights: [
      "Developed backend services and customer management systems.",
      "Collaborated with international teams using Agile practices across time zones.",
      "Participated in code reviews and software quality improvement initiatives.",
    ],
  },
] as const;

export const projects = [
  {
    name: "AI Chatbot Platform",
    description:
      "Intelligent conversational AI for customer support automation using NLP and OpenAI/ChatGPT APIs across web, mobile, and social channels.",
  },
  {
    name: "Marketing Automation & Lead Generation",
    description:
      "Automation systems with ActiveCampaign, GoHighLevel, Instantly, and Apollo.io — email campaigns, lead scoring, CRM workflows, and sales funnels.",
  },
  {
    name: "Cryptocurrency Exchange Platform",
    description:
      "Multi-currency exchange supporting Bitcoin, Ethereum, Litecoin, wallet integration, trading workflows, KYC, and payment gateway integrations.",
  },
  {
    name: "LifeCrypto Web Application",
    description:
      "Blockchain-based crypto management with wallet integration, market data feeds, portfolio tracking, and automated trading features.",
  },
  {
    name: "Somee.blog",
    description:
      "Scalable blockchain-integrated social platform using microservices and event-driven architecture for high-traffic, low-latency interactions.",
  },
  {
    name: "Round-Right Healthcare SaaS",
    description:
      "Full-stack platform with Next.js, PHP, AWS, Redis, and optimized MySQL — improving performance, reliability, and user experience.",
  },
  {
    name: "Workflow Automation System",
    description:
      "Connected 10+ business applications using GHL, Make, and n8n — cutting manual operational effort by roughly 60%.",
  },
  {
    name: "CDR Monitoring Panel",
    description:
      "Real-time telecom analytics for IGW/ICX processing 1M+ call records daily with advanced reporting and visualization.",
  },
] as const;

export const education = {
  degree: "Bachelor of Science in Computer Science & Engineering",
  school: "Khulna University of Engineering and Technology (KUET)",
  location: "Bangladesh",
  year: "2011",
} as const;

export const certifications = [
  { title: "Agile Development", detail: "Certified Professional" },
  { title: "Software Architect", detail: "Certified Professional" },
  { title: "Test Driven Development (TDD)", detail: "Training Certification" },
  { title: "Red Hat Linux System Administration", detail: "Certification" },
  { title: "Code Warriors Challenges Participant", detail: "2014 & 2015" },
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

export const toolCategories = [
  { id: "all", label: "All" },
  { id: "frameworks", label: "Frameworks" },
  { id: "cloud", label: "Cloud" },
  { id: "ai", label: "AI" },
  { id: "devops", label: "DevOps" },
  { id: "automation", label: "Automation" },
] as const;

export const tools = [
  {
    id: "laravel",
    name: "Laravel",
    mark: "Lv",
    level: 95,
    category: "frameworks",
  },
  {
    id: "nextjs",
    name: "Next.js",
    mark: "N",
    level: 90,
    category: "frameworks",
  },
  {
    id: "react",
    name: "React",
    mark: "Re",
    level: 90,
    category: "frameworks",
  },
  {
    id: "nodejs",
    name: "Node.js",
    mark: "No",
    level: 85,
    category: "frameworks",
  },
  {
    id: "aws",
    name: "AWS",
    mark: "AWS",
    level: 92,
    category: "cloud",
  },
  {
    id: "mysql",
    name: "MySQL",
    mark: "SQL",
    level: 90,
    category: "cloud",
  },
  {
    id: "redis",
    name: "Redis",
    mark: "Rd",
    level: 85,
    category: "cloud",
  },
  {
    id: "openai",
    name: "OpenAI",
    mark: "AI",
    level: 88,
    category: "ai",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    mark: "GPT",
    level: 88,
    category: "ai",
  },
  {
    id: "docker",
    name: "Docker",
    mark: "Dk",
    level: 90,
    category: "devops",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    mark: "K8",
    level: 82,
    category: "devops",
  },
  {
    id: "n8n",
    name: "n8n",
    mark: "n8n",
    level: 85,
    category: "automation",
  },
  {
    id: "gohighlevel",
    name: "GoHighLevel",
    mark: "GHL",
    level: 85,
    category: "automation",
  },
  {
    id: "activecampaign",
    name: "ActiveCampaign",
    mark: "AC",
    level: 80,
    category: "automation",
  },
  {
    id: "make",
    name: "Make",
    mark: "Mk",
    level: 80,
    category: "automation",
  },
  {
    id: "web3",
    name: "Web3",
    mark: "W3",
    level: 82,
    category: "ai",
  },
] as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;
