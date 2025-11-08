
#  TeamOps: Incident & Risk Management System

> A full-stack enterprise-grade platform for managing incidents, risk (ERM) tickets, and suspicious activity across engineering teams.  
> Built to simulate real-world DevOps, SecOps, and ITSM workflows — with a focus on reliability, accountability, and security.

---

## 🚀 Overview

**TeamOps** helps teams **detect, report, and resolve incidents**, while tracking associated **enterprise risk and mitigation plans**.  
It combines the best ideas from **PagerDuty**, **Jira Service Management**, and **internal DevSecOps dashboards** into one cohesive system.

### Core Features
-  **User & Role Management**
  - Admin, Engineer, Security Analyst, and Auditor roles
  - JWT-based authentication & role-based access control (RBAC)

-  **Project & Incident Tracking**
  - Create and manage incidents per project
  - Assign responders, track status, and post-incident actions

-  **ERM (Enterprise Risk Management) Tickets**
  - Log and assess risks (likelihood × impact)
  - Attach risks to related incidents for visibility

-  **Suspicious Activity Detection**
  - Logs API access, failed logins, and anomalies
  - Auto-triggers incidents when patterns exceed thresholds

- **Audit Logging & Reporting**
  - Full audit trail of user actions and system events
  - Exportable post-incident reports (JSON/CSV/PDF)

-  **Firewall & Rule Engine**
  - Simple rule-based system to block suspicious IPs or endpoints

---

## 🏗️ Tech Stack

### **Frontend**
- React (Vite or Next.js)
- TypeScript
- TailwindCSS + ShadCN UI
- React Query (for data fetching)
- Zustand / Redux Toolkit (for state)
- Chart.js or Recharts (for analytics dashboard)

### **Backend**
- Node.js + **NestJS**
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Express middleware (for firewall + logging)
- Winston / Pino for logging

### **DevOps & Extras**
- Docker (optional, for local dev)
- Swagger / OpenAPI for API docs
- Postman collection for testing endpoints
- GitHub Actions (optional CI)

---

## 🗃️ System Architecture

```mermaid
flowchart LR
    subgraph Client
        UI[React Frontend]
    end

    subgraph Server
        API[NestJS API Gateway]
        Auth[Auth Service]
        Incident[Incident Service]
        Risk[ERM Ticket Service]
        Suspicious[Security Monitor]
        Logs[Audit Logger]
    end

    subgraph Database
        DB[(PostgreSQL)]
    end

    UI -->|REST / GraphQL| API
    API --> Auth
    API --> Incident
    API --> Risk
    API --> Suspicious
    API --> Logs
    API --> DB
