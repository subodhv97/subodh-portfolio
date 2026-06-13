import { WorkExperience, Project, SkillCategory, Education, Certification } from './types';

export const NAME = "Subodh Verma";

export const TITLE = "Engineer II | Java Backend Engineer";

export const SUMMARY =
  "Backend Engineer with 4+ years of experience building scalable enterprise applications using Java, Spring Boot, Microservices, Kafka, PostgreSQL, and Google Cloud Platform (GCP). Currently working at EY for American Express, developing a centralized platform for onboarding and managing analytics and AI/ML models. Experienced in cloud-native development, CI/CD automation, observability, and distributed systems.";

export const CONTACT = {
  email: "vermasubodh6@gmail.com",
  phone: "+919521752080",
  location: "Gurgaon, Haryana, India",
  linkedin: "https://www.linkedin.com/in/subodhvermaa",
  github: "https://github.com/subodhv97"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "SQL", "JavaScript", "C++"]
  },
  {
    name: "Backend & Frameworks",
    skills: [
      "Spring Boot",
      "Spring Data JPA",
      "Microservices",
      "REST APIs",
      "Hibernate"
    ]
  },
  {
    name: "Messaging & Event Streaming",
    skills: ["Apache Kafka"]
  },
  {
    name: "Cloud & Platform",
    skills: [
      "Google Cloud Platform (GCP)",
      "Cloud SQL",
      "Hybrid Infrastructure",
      "Platform Engineering"
    ]
  },
  {
    name: "DevOps & CI/CD",
    skills: [
      "GitHub Actions",
      "Docker",
      "Jenkins",
      "Maven",
      "CI/CD"
    ]
  },
  {
    name: "Databases",
    skills: [
      "PostgreSQL",
      "Cloud SQL",
      "MS SQL Server",
      "InfluxDB"
    ]
  },
  {
    name: "Monitoring & Observability",
    skills: [
      "OpenTelemetry",
      "Grafana",
      "Prometheus",
      "Logging"
    ]
  },
  {
    name: "Core Concepts",
    skills: [
      "System Design",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Agile/Scrum"
    ]
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: "Engineer II",
    company: "EY",
    period: "January 2026 - Present",
    location: "Gurgaon, India",
    description: [
      "Working with American Express on a centralized platform for onboarding and managing analytics and AI/ML models.",
      "Developing scalable backend services using Java and Spring Boot.",
      "Building integrations with Cloud SQL and hybrid GCP/on-prem infrastructure.",
      "Implementing CI/CD pipelines using GitHub Actions.",
      "Enhancing platform observability using OpenTelemetry logging and monitoring.",
      "Collaborating with data scientists, platform engineers, and business stakeholders."
    ],
    skills: [
      "Java",
      "Spring Boot",
      "GCP",
      "Cloud SQL",
      "GitHub Actions",
      "OpenTelemetry"
    ]
  },
  {
    role: "Software Engineer",
    company: "Infinite Computer Solutions",
    period: "August 2022 - January 2026",
    location: "Noida, India",
    description: [
      "Developed Spring Boot microservices for telecom and public safety solutions.",
      "Built REST APIs supporting mission-critical applications and real-time tracking systems.",
      "Reduced release cycles through CI/CD automation using GitHub Actions.",
      "Optimized API performance and database operations.",
      "Provided production support, root cause analysis, and stability improvements."
    ],
    skills: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "GitHub Actions"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "Model Onboarding Platform",
    description: [
      "Enterprise platform for onboarding and managing analytics and AI/ML models.",
      "Built for American Express marketing analytics teams.",
      "Supports governance, onboarding workflows, and centralized model management.",
      "Integrated observability, CI/CD automation, and cloud-native services."
    ],
    skills: [
      "Java",
      "Spring Boot",
      "GCP",
      "Cloud SQL",
      "GitHub Actions",
      "OpenTelemetry"
    ]
  },
  {
    name: "Smart Campus IoT Platform",
    description: [
      "Developed backend services for real-time monitoring and management of IoT devices.",
      "Designed REST APIs and database integrations.",
      "Handled time-series data using InfluxDB."
    ],
    skills: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "InfluxDB",
      "IoT"
    ]
  },
  {
    name: "Public Safety Answering Point (PSAP) Management Service",
    description: [
      "Developed Spring Boot microservices for PSAP configuration and routing management.",
      "Implemented secure REST APIs and role-based access control.",
      "Automated deployment through GitHub Actions."
    ],
    skills: [
      "Spring Boot",
      "Microservices",
      "Security",
      "GitHub Actions"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Technology",
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    field: "Computer Science",
    period: "2018 - 2022"
  },
  {
    degree: "Intermediate",
    institution: "Central Academy",
    field: "PCM",
    period: "2018"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "CodeChef",
    issuer: "1600+ Rating"
  },
  {
    name: "GeeksForGeeks",
    issuer: "300+ Coding Score"
  },
  {
    name: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.ai"
  },
  {
    name: "Cyber Security",
    issuer: "IIT Kanpur"
  },
  {
    name: "Java Stack",
    issuer: "Infinite Computer Solutions"
  },
  {
    name: "Research Paper",
    issuer: "Accident Alert System using GSM and AI"
  }
];
