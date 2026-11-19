import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_TITLE = "Software Engineer";

export const HERO_CONTENT = `I'm a software engineer working on observability platforms. I handle the complete telemetry data flow and alerting on Docker and Kubernetes, built on Kafka, Vector, the OpenTelemetry Collector, ClickHouse, Prometheus and Alertmanager. Most of my work is on the architecture side: taking requirements, designing the solution, then deploying and standardizing the stack, including on-site in bank environments.`;

export const ABOUT_TEXT = `I started out aiming to be a full-stack developer, and that background still shapes how I work. Today most of my time goes into the platform behind the product: the architecture of the project, its requirements and solutions, and getting the stack deployed and standardized on Docker and Kubernetes.

I have handled deployments in bank environments and worked on-site at SBI and UBI to build on-demand solutions inside their infrastructure. I have set up replication for Kafka and ClickHouse and scaling on Kubernetes to keep the data flow resilient, and I have had to find the best solution for constrained environments.

The full-stack side is still there. I have designed UIs for many backend implementations, so that backend configuration is developer-friendly and done through a UI.`;

export const HIGHLIGHTS = [
  {
    title: "End-to-end telemetry data flow",
    description:
      "Handle the complete telemetry data flow for an observability platform, built on the OpenTelemetry Collector, Vector, Kafka and ClickHouse, with alerting through Prometheus and Alertmanager.",
    technologies: ["OpenTelemetry Collector", "Vector", "Kafka", "ClickHouse"],
  },
  {
    title: "Architecture and solution design",
    description:
      "Work mainly on the architecture of the project: taking requirements, evaluating technologies and designing the solution, then standardizing the stacks and closing SCD points.",
    technologies: ["Architecture", "Requirements", "Standardization"],
  },
  {
    title: "Deployments in bank environments",
    description:
      "Handle deployments on Docker and Kubernetes, including inside bank environments. Worked on-site at SBI and UBI to build on-demand solutions within their infrastructure.",
    technologies: ["Docker", "Kubernetes", "Helm", "On-site delivery"],
  },
  {
    title: "Replication and scalability",
    description:
      "Set up replication for Kafka and ClickHouse and scaling on Kubernetes for a resilient data flow, and worked out the best solution for constrained environments.",
    technologies: ["Kafka replication", "ClickHouse replication", "Kubernetes scaling"],
  },
  {
    title: "Alerts and tools automation",
    description:
      "Build alerting on Prometheus and Alertmanager and automate the tooling around the stack, including Python-based agents for automation and system integrations.",
    technologies: ["Prometheus", "Alertmanager", "Python"],
  },
  {
    title: "UIs for backend configuration",
    description:
      "Designed UIs for many backend implementations, so that backend configuration is developer-friendly and done through a UI.",
    technologies: ["UI design", "Backend configuration"],
  },
  {
    title: "OAuth and HRMS integrations",
    description:
      "Worked on OAuth while integrating with other HRMS systems.",
    technologies: ["OAuth", "HRMS", "Integrations"],
  },
  {
    title: "IoT connectors",
    description:
      "Built IoT connectors for integrating device data.",
    technologies: ["IoT", "Connectors"],
  },
  {
    title: "Agentic queries on ClickHouse",
    description:
      "Worked on agentic queries to ClickHouse.",
    technologies: ["ClickHouse", "Agentic queries"],
  },
];

export const EXPERIENCES = [
  {
    year: "Apr 2026 - Present",
    role: "Software Engineer - entry",
    company: "Maiora IT Services and Consulting Pvt. Ltd.",
    description: `Promoted to Software Engineer, taking on increased technical ownership in backend engineering and full-stack observability. Working as a Backend Tech Lead, driving observability solutions on Azure Kubernetes Service (AKS). Actively involved in architectural decisions, implementation planning, technology evaluation, and solution validation. Also developing Python-based agents to support automation and system integrations.`,
    technologies: ["AKS", "Helm", "Full-stack observability", "Kubernetes", "Docker", "kafka-tools", "Vector", "ClickHouse", "Problem Solving"],
  },
  {
    year: "Sep 2025 - Mar 2026",
    role: "Associate Software Engineer",
    company: "Maiora IT Services and Consulting Pvt. Ltd.",
    description: `Contributed to distributed observability and monitoring solutions, focusing on log aggregation, data ingestion, and monitoring pipelines. Worked on integrating and troubleshooting observability components, supporting infrastructure monitoring, improving system visibility, and ensuring reliable data flow across distributed environments.`,
    technologies: ["Kubernetes", "Docker", "kafka-tools", "Vector", "ClickHouse", "Prometheus", "Alert manager"],
  },
  {
    year: "Feb 2025 - Aug 2025",
    role: "Product Intern",
    company: "Maiora IT Services and Consulting Pvt. Ltd.",
    description: `Completed an on-site internship in Product Development & Integration. Worked with industrial connectivity and geospatial tools, including OPC UA, MQTT, CoAP, and Quantum GIS.`,
    technologies: ["OPC Unified Architecture (OPC UA)", "Message Queuing Telemetry Transport", "CoAP", "Quantum GIS"],
  },
  {
    year: "2023 - 2024",
    role: "Intern",
    company: "Rooman Technologies",
    description: `Rooman Technologies is a software training company, where I interned through 2024. My responsibilities included learning and applying software development practices in real-world scenarios, collaborating on small projects to build my understanding of full-stack development, and strengthening my programming and problem-solving skills with a focus on Java and web technologies.`,
    technologies: ["Kubernetes", "Docker", "React"],
  },
  {
    year: "2022 - 2023",
    role: "Intern",
    company: "TechByHeart",
    description: `During my internship at TechbyHeart, I gained valuable experience working with a range of Amazon Web Services (AWS) tools and Kali Linux. I developed hands-on knowledge in deploying and managing cloud infrastructure using 'Amazon EC2', which allowed me to set up and scale virtual servers in the cloud. I also worked extensively with 'Amazon S3' for secure storage and retrieval of data, and I became proficient in managing user access and permissions through 'AWS IAM'. Additionally, I explored Kali Linux, a powerful tool for penetration testing and cybersecurity, gaining insights into ethical hacking practices and security assessments.`,
    technologies: ["Amazon EC2 ", "Amazon S3", "AWS IAM", "Kali Linux"],
  }
];

export const PROJECTS = [
  {
    title: "EduMentor",
    image: project1,
    description:
      "An appplication that connects students with mentors for personalized guidance and career advice. The project includes features like live chats, scheduling, and progress tracking to facilitate effective learning and mentorship.",
    technologies: ["HTML", "CSS", "React.js"],
  },
  {
    title: "Railway Reservation System",
    image: project2,
    description:
      "An application that allows users to book, cancel, and manage train tickets online. The system includes features like seat availability, real-time updates, and secure payment options for a seamless travel experience.",
    technologies: ["HTML", "CSS", "React.js", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer"],
  },
];

export const CONTACT = {
  address: "Maiora IT Services and Consulting, Katriguppe, Banashankari, Bengaluru, Karnataka - 560085.",
  phoneNo: "+91 7795966562 ",
  email: "ajaykumarak1761@gmail.com",
};
