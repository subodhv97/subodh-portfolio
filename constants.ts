import { WorkExperience, Project, SkillCategory, Education, Certification } from './types';

export const NAME = "Subodh Verma";
export const TITLE = "Software Engineer";
export const SUMMARY = "Java Backend Developer with 3+ years of experience in building scalable enterprise applications in IoT and Telecom. Skilled in Java, Spring Boot, Microservices, RESTful APIs, CI/CD automation, and System Design concepts. Proven ability to reduce release cycles, improve system performance, and ensure high availability in production systems.";

export const CONTACT = {
  email: "vermasubodh6@gmail.com",
  phone: "+919521752080",
  location: "Lucknow, UP, IN",
  linkedin: "https://www.linkedin.com/in/subodhvermaa",
  github: "https://github.com/subodhv97" // Placeholder, assuming GitHub presence
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  { name: "Languages", skills: ["Java", "SQL", "JavaScript", "C++"] },
  { name: "Backend & Frameworks", skills: ["Spring Boot", "Spring Data JPA", "Microservices", "RESTful API's", "SOAP"] },
  { name: "Tools & DevOps", skills: ["Docker", "GitHub Actions", "Jenkins", "Maven", "Postman", "Swagger", "IntelliJ IDEA", "PuTTY"] },
  { name: "Databases & Monitoring", skills: ["PostgreSQL", "MS SQL Server", "InfluxDB", "Grafana", "Prometheus"] },
  { name: "Cloud & Deployment", skills: ["GCP", "CI/CD Pipelines"] },
  { name: "Other", skills: ["OOP", "Data Structures & Algorithms", "Agile/Scrum"] },
  { name: "Soft Skills", skills: ["Problem-Solving", "Collaboration", "Communication"] }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: "Software Engineer",
    company: "Infinite Computer Solutions",
    period: "August 2022 - Present",
    location: "Noida, UP",
    description: [
      "Developed Spring Boot REST APIs for drone automation, media streaming, and real-time tracking, supporting 1000+ concurrent sessions with minimal latency.",
      "Reduced release cycle by 50% by automating CI/CD pipelines using GitHub Actions and YAML.",
      "Optimized database performance by creating custom Spring Data JPA queries, reducing API response time by 35%.",
      "Achieved 90%+ unit test coverage with JUnit & Mockito, reducing production defects by 40%.",
      "Maintained 99.9% uptime through proactive monitoring with Grafana & Prometheus.",
      "Conducted root cause analysis (RCA) and led production issue resolution, minimizing downtime.",
      "Provided L3 production support, resolved critical issues, and improved system stability."
    ],
    skills: ["Java", "Spring Boot", "REST API", "CI/CD", "GitHub Actions", "JUnit", "Mockito", "Grafana", "Prometheus"]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "Public Safety Answering Point (PSAP) Management Service",
    description: [
      "Designed and developed Spring Boot microservices to manage PSAP configurations, selective router mappings, and user access control.",
      "Built secure REST APIs with proper authentication and role-based access control tied to auth context.",
      "Wrote JUnit 4 & Mockito unit tests achieving >80% code coverage, ensuring code reliability.",
      "Automated CI/CD pipelines using GitHub Actions to streamline deployment process."
    ],
    skills: ["Spring Boot", "Microservices", "REST API", "JUnit", "Mockito", "GitHub Actions", "Security"]
  },
  {
    name: "Drone Command Centre",
    description: [
      "Developed and enhanced services for a drone surveillance system with live streaming and mission tracking.",
      "Debugged real-time issues, reducing critical bugs and improving overall software stability.",
      "Provided production support and root-cause analysis for incidents."
    ],
    skills: ["Java", "Spring Boot", "Live Streaming", "Debugging", "System Stability"]
  }
];

export const EDUCATION: Education[] = [
    {
        degree: "Bachelor of Technology",
        institution: "DR. A.P.J Kalam Technical University",
        field: "Computer Science",
        period: "2018 - 2022"
    },
    {
        degree: "Intermediate",
        institution: "Central Academy",
        field: "PCM",
        period: "May 2018"
    }
];

export const CERTIFICATIONS: Certification[] = [
    { name: "CODECHEF", issuer: "1600 Rating" },
    { name: "GFG", issuer: "300+ Coding Score" },
    { name: "Research Paper", issuer: "Accident Alert System using GSM and AI" },
    { name: "Java Stack - IIHT", issuer: "Infinite Computer Solutions" },
    { name: "Neural Network and Deep Learning", issuer: "DeepLearning.ai" },
    { name: "Cyber Security", issuer: "IIT Kanpur" }
];