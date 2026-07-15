// Images
import service1 from "../assets/images/hero/hero.jpg";
import service2 from "../assets/images/hero/IT-staffing.jpg";
import service3 from "../assets/images/hero/discuss.jpg";

import { 
  ShieldCheck, 
  Users, 
  UserCheck, 
  Zap, 
  Scale, 
  Clock, 
  Code, 
  Database, 
  LineChart, 
  Settings, 
  Award,
  Search,
  BookOpen,
  FileCheck,
  Globe,
  Building2,
  Lock
} from "lucide-react";

export const servicesData = {
  "core-recruitment": {
    title: "Executive Search & Core Recruitment",
    tagline: "Sourcing permanent leadership and high-impact specialists.",
    image: service1,
    desc: "Securing permanent talent is a critical investment in your organization's long-term competitive advantage. NexMoveTalent employs exhaustive search protocols, industry-specific vetting, and rigorous behavioral alignment audits to place elite professionals into your core business roles across the USA and Canada.",
    stats: [
      { label: "Talent Pool Size", value: "45K+" },
      { label: "Placement Retention", value: "96%" },
      { label: "Avg. Hiring Time", value: "24 Days" }
    ],
    overview: {
      heading: "Strategic Permanent Placement Solutions",
      paragraph1: "In today's fast-moving business landscapes, identifying leaders who possess both the technical aptitude and cultural maturity to drive growth is a major challenge. Our Core Recruitment division acts as an extension of your human resources department, managing the entire search lifecycle from candidate mapping to contract signing.",
      paragraph2: "We specialize in headhunting passive candidates—industry professionals who are not actively searching job boards but are open to strategic career moves. By leveraging deep local networks in major tech and financial hubs (such as San Francisco, New York, Toronto, and Vancouver), we deliver shortlists containing only high-match contenders."
    },
    capabilities: [
      {
        icon: Search,
        title: "Retained Executive Search",
        description: "A tailored, confidential search protocol for director, VP, and C-level roles. We conduct extensive market mapping, detailed credential audits, and multi-round competency interviews before client submissions."
      },
      {
        icon: UserCheck,
        title: "Permanent Contingent Hiring",
        description: "Rapid sourcing for critical mid-to-senior technical and administrative positions. We cross-reference candidate profiles against our vetted passive pools to submit pre-screened talent within days."
      },
      {
        icon: ShieldCheck,
        title: "Cultural & Leadership Vetting",
        description: "We utilize behavioral assessment frameworks to map candidate leadership styles, communication habits, and work environments against your company's core values, assuring long-term retention."
      }
    ],
    process: [
      {
        step: "01",
        title: "Position Definition & Intake",
        desc: "We align on role parameters, technical credentials, soft skills, compensation structures, and long-term KPIs."
      },
      {
        step: "02",
        title: "Market Mapping & Sourcing",
        desc: "Our research teams map active and passive candidates across target companies and competitive markets."
      },
      {
        step: "03",
        title: "Screening & Vetting",
        desc: "We screen portfolios, run technical coding/role checks, verify work history, and assess cultural alignment."
      },
      {
        step: "04",
        title: "Shortlist & Interviews",
        desc: "We present a refined dossier of candidates, manage client interview scheduling, and capture structured feedback."
      },
      {
        step: "05",
        title: "Offer & Onboarding",
        desc: "Our consultants manage references, background checks, salary negotiations, and early-stage integration support."
      }
    ],
    compliance: {
      heading: "Legal & Regulatory Compliance Assurance",
      text: "Every permanent placement is subject to strict credential verifications and compliance checks. We confirm academic credentials, professional licenses, and carry out direct reference checks. For cross-border placements, we work with immigration counsel to verify work authorizations and visa requirements, ensuring fully compliant direct-hire placements."
    },
    roles: [
      "Chief Technology Officer (CTO) & VPs of Engineering",
      "Directors of Product Management & Product Leads",
      "Executive Directors & Clinical Staff for Healthcare",
      "Financial Directors, Controllers & Senior Analysts"
    ],
    sectors: ["Technology & Software", "Healthcare & Medical", "Financial & Banking Services", "Engineering & Operations"]
  },
  "staffing": {
    title: "IT & Non-IT Contract Staffing",
    tagline: "Flexible staffing solutions to scale your operations rapidly.",
    image: service2,
    desc: "Scale your engineering and operations teams dynamically to align with project cycles and market shifts. NexMoveTalent provides compliant contract staffing, temporary placements, and contract-to-hire solutions that mitigate administrative overhead.",
    stats: [
      { label: "Active Contractors", value: "650+" },
      { label: "Placement Window", value: "48-72h" },
      { label: "Compliance Audits", value: "100%" }
    ],
    overview: {
      heading: "Scalable Contingent Workforce Solutions",
      paragraph1: "Modern enterprises require operational agility. Our Contract Staffing division enables companies to deploy highly specialized contractors to meet short-term deadlines, execute project milestones, or cover seasonal peaks without inflating permanent headcount.",
      paragraph2: "We maintain active pipelines of pre-vetted contractors across multiple disciplines, from software engineering and cloud infrastructure to administrative operations and specialized medical billing. This allows us to deliver high-quality support within 48 to 72 hours of receiving a request."
    },
    capabilities: [
      {
        icon: Zap,
        title: "Temporary & Contract Staffing",
        description: "On-demand placement of technical or operational contractors for periods ranging from three months to multi-year contracts, backed by digital timesheet management."
      },
      {
        icon: Clock,
        title: "Contract-to-Hire Pathways",
        description: "Evaluate a contractor's on-the-job deliverables, technical skills, and team integration on a trial basis before making a permanent full-time offer."
      },
      {
        icon: FileCheck,
        title: "Employer of Record (EOR) & Payroll",
        description: "We assume complete employer liability, handling payroll processing, benefits management, statutory filings, and labor relations so you can focus strictly on project goals."
      }
    ],
    process: [
      {
        step: "01",
        title: "Scope & Timeline intake",
        desc: "Define contracting requirements, contract length, technical requirements, and target start dates."
      },
      {
        step: "02",
        title: "Fast-Track Sourcing",
        desc: "Query our specialized, immediately available contractor pools in the USA and Canada."
      },
      {
        step: "03",
        title: "Compliance & Vetting Check",
        desc: "Execute background checks, confirm work authorizations, and audit compliance metrics."
      },
      {
        step: "04",
        title: "Onboarding & Tooling Integration",
        desc: "Coordinate contractor start dates and integrate them into your project tracking systems."
      },
      {
        step: "05",
        title: "Ongoing Administration",
        desc: "Manage weekly timesheet approvals, compliance tracking, and contract extensions or hire transitions."
      }
    ],
    compliance: {
      heading: "W2/T4 Compliance & General Liability Coverage",
      text: "NexMoveTalent operates in full compliance with local tax and labor laws in every state and province we serve. All contractors are processed as W-2 employees (USA) or T4 employees (Canada) unless explicitly contracted as vetted business entities. We maintain comprehensive General Liability, Errors & Omissions (E&O), and Workers' Compensation policies to protect your business from employment audit liabilities."
    },
    roles: [
      "Contract Software Developers & QA Testers",
      "Network Engineers & Cloud Administrators (AWS/Azure)",
      "Medical Billing Clerks & Certified Coders",
      "Administrative Staff & Project Coordinators"
    ],
    sectors: ["Software Development & IT Support", "Healthcare Billing & Admin", "Logistics & Warehousing", "Customer Service & Sales"]
  },
  "software-development": {
    title: "Custom Software Development & Tech Outsourcing",
    tagline: "End-to-end digital product design, web & mobile engineering.",
    image: service3,
    desc: "Build state-of-the-art web systems, mobile applications, and cloud-native solutions. Our Software Development division provides dedicated agile engineering teams and full-cycle development services to bring your roadmap to market.",
    stats: [
      { label: "Software Launches", value: "40+" },
      { label: "Engineers & PMs", value: "110+" },
      { label: "On-Time Delivery", value: "98.2%" }
    ],
    overview: {
      heading: "Enterprise Product Engineering Services",
      paragraph1: "Building modern digital products requires a blend of user-centric design, robust architecture, and rapid deployment cycles. Our Software Development division functions as a dedicated engineering partner, translating complex business requirements into elegant, secure software.",
      paragraph2: "We specialize in full-stack web architectures, mobile application development, and cloud systems. Operating under agile methodologies, we run sprint cycles, coordinate automated QA testing, and manage continuous deployments to deliver clean, scalable codebases."
    },
    capabilities: [
      {
        icon: Code,
        title: "Dedicated Product Engineering Teams",
        description: "Assemble a dedicated squad of developers, UX designers, product managers, and QA specialists working exclusively on your product backlog under agile models."
      },
      {
        icon: Database,
        title: "Full-Stack Web & Mobile Applications",
        description: "Custom software engineering using modern technical stacks (React, Node.js, Python, Kotlin, Swift, AWS/GCP, and PostgreSQL) designed for scale and responsiveness."
      },
      {
        icon: Lock,
        title: "Tech Auditing & Architecture Design",
        description: "Re-architect legacy databases, secure data endpoints, integrate APIs, and audit system vulnerabilities to optimize overall product performance."
      }
    ],
    process: [
      {
        step: "01",
        title: "Architecture & User Flows",
        desc: "Design user journeys, database schemas, system architecture diagrams, and prototype designs."
      },
      {
        step: "02",
        title: "Sprint Planning",
        desc: "Establish backlogs, plan bi-weekly sprints, assign dev resources, and define criteria for success."
      },
      {
        step: "03",
        title: "Incremental Engineering",
        desc: "Manage coding tasks, execute daily check-ins, run continuous integrations, and schedule regular code reviews."
      },
      {
        step: "04",
        title: "Quality Assurance & Auditing",
        desc: "Execute unit testing, API integrations, compliance audits, and security vulnerability scans."
      },
      {
        step: "05",
        title: "Production Launch & SLA Support",
        desc: "Deploy systems to AWS/GCP and support with ongoing SLA-backed maintenance and optimization."
      }
    ],
    compliance: {
      heading: "Data Privacy & Software Security Compliance",
      text: "We build secure systems. Our software engineers follow OWASP security guidelines, integrate secure data encryption protocols (AES-256), and design databases to align with data privacy frameworks. We have experience building products that adhere to HIPAA standards for healthcare portals and general data compliance regulations."
    },
    roles: [
      "Dedicated Full-Stack React & Node.js Developer Squads",
      "Mobile iOS & Android Engineer Squads",
      "Database Architects & DevOps Engineers",
      "UI/UX Product Designers & Scrum Masters"
    ],
    sectors: ["SaaS & Cloud Platforms", "Healthcare Portals & HIPAA Apps", "Financial & Transaction Tools", "B2B Dashboards & ERP Systems"]
  }
};
