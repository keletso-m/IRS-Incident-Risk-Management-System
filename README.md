<div align="center">

# TeamOps

### Enterprise-Grade Incident & Risk Management Platform

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)

**A production-ready platform for managing incidents, enterprise risk management (ERM), and security operations across engineering teams.**

[Features](#-key-features) • [Architecture](#-architecture) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Roadmap](#-roadmap)

</div>

---

## Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Security](#-security)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [License](#-license)

---

## Overview

TeamOps is a full-stack enterprise platform that unifies incident management, risk assessment, and security operations into a single cohesive system. Designed to simulate real-world DevOps, SecOps, and ITSM workflows, it combines the best practices from industry-leading tools like PagerDuty, Jira Service Management, and ServiceNow.

### Why TeamOps?

In modern engineering organizations, incidents don't exist in isolation. They're interconnected with enterprise risks, security threats, and operational patterns. TeamOps provides:

- **Unified Visibility**: See the complete picture across incidents, risks, and security events
- **Proactive Detection**: Automated suspicious activity monitoring with intelligent alerting
- **Compliance Ready**: Comprehensive audit trails and reporting for regulatory requirements
- **Team Coordination**: Role-based workflows that mirror real enterprise structures

---

## Key Features

### Identity & Access Management

- **Multi-Role Support**: Admin, Engineer, Security Analyst, and Auditor personas
- **JWT Authentication**: Secure, stateless authentication with refresh token rotation
- **RBAC (Role-Based Access Control)**: Granular permissions per resource and action
- **Session Management**: Configurable timeout and concurrent session handling

### Incident Management

- **Project-Based Organization**: Group incidents by teams, services, or products
- **Lifecycle Tracking**: From detection → investigation → resolution → post-mortem
- **Assignment & Escalation**: Intelligent routing to on-call responders
- **Post-Incident Analytics**: Root cause analysis, timeline reconstruction, and learnings

### Enterprise Risk Management (ERM)

- **Risk Assessment Matrix**: Quantitative scoring (Likelihood × Impact)
- **Risk-Incident Linking**: Connect risks to real incidents for validation
- **Mitigation Tracking**: Document controls, action plans, and residual risk
- **Compliance Mapping**: Tag risks to frameworks (SOC 2, ISO 27001, NIST)

### Suspicious Activity Detection

- **Behavioral Analytics**: Pattern detection for anomalous API usage
- **Failed Authentication Tracking**: Automated blocking after threshold breaches
- **Geo-Location Anomalies**: Flag access from unexpected regions
- **Auto-Incident Creation**: Seamless escalation from alert to incident

### Audit & Compliance

- **Immutable Audit Logs**: Complete trail of user actions and system events
- **Multi-Format Exports**: JSON, CSV, and PDF report generation
- **Retention Policies**: Configurable log archival and purging
- **Search & Filtering**: Advanced querying across all audit dimensions

### Firewall & Rule Engine

- **IP Blocklisting**: Dynamic rule management for threat mitigation
- **Endpoint Protection**: Rate limiting and pattern-based blocking
- **Custom Rules**: Define complex conditions using a declarative syntax
- **Real-Time Enforcement**: Zero-latency rule application via middleware

---

## Architecture

TeamOps follows a modern, scalable three-tier architecture optimized for maintainability and performance.

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Layer                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   React SPA  │  │  Admin Panel │  │ Mobile (PWA) │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTPS/WSS
┌────────────────────────▼────────────────────────────────────┐
│                   Application Layer                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              NestJS API Gateway                      │  │
│  │  ┌────────────┐ ┌────────────┐ ┌─────────────────┐ │  │
│  │  │    Auth    │ │  Incidents │ │  Risk Manager   │ │  │
│  │  │  Service   │ │   Service  │ │    Service      │ │  │
│  │  └────────────┘ └────────────┘ └─────────────────┘ │  │
│  │  ┌────────────┐ ┌────────────┐ ┌─────────────────┐ │  │
│  │  │  Security  │ │   Audit    │ │    Firewall     │ │  │
│  │  │  Analytics │ │   Logger   │ │     Engine      │ │  │
│  │  └────────────┘ └────────────┘ └─────────────────┘ │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │ Prisma ORM
┌────────────────────────▼────────────────────────────────────┐
│                     Data Layer                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │               PostgreSQL Database                    │  │
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐     │  │
│  │  │Users │ │ Inc. │ │ Risk │ │Audit │ │Rules │     │  │
│  │  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘     │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Design Principles

- **Separation of Concerns**: Each service owns its domain logic
- **Dependency Injection**: Loose coupling for testability
- **Event-Driven**: Async operations for scalability
- **API-First**: All functionality exposed via RESTful endpoints

---

## Tech Stack

<table>
<tr>
<td valign="top" width="50%">

### Frontend

- **Framework**: React 18+ (Vite/Next.js)
- **Language**: TypeScript 5+
- **Styling**: TailwindCSS + shadcn/ui
- **State Management**: Zustand / Redux Toolkit
- **Data Fetching**: TanStack Query (React Query)
- **Charts**: Recharts / Chart.js
- **Forms**: React Hook Form + Zod
- **Routing**: React Router / Next.js Router

</td>
<td valign="top" width="50%">

### Backend

- **Framework**: NestJS 10+
- **Language**: TypeScript 5+
- **ORM**: Prisma
- **Database**: PostgreSQL 15+
- **Authentication**: JWT + Passport
- **Validation**: class-validator + class-transformer
- **Logging**: Winston / Pino
- **API Docs**: Swagger / OpenAPI 3.0

</td>
</tr>
<tr>
<td valign="top" width="50%">

### DevOps & Testing

- **Containerization**: Docker + Docker Compose
- **Testing**: Jest + React Testing Library
- **E2E Testing**: Playwright / Cypress
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged
- **CI/CD**: GitHub Actions

</td>
<td valign="top" width="50%">

### Infrastructure (Future)

- **Deployment**: Render / Railway / Vercel
- **Monitoring**: Prometheus + Grafana
- **Caching**: Redis
- **Message Queue**: Bull / BullMQ
- **File Storage**: S3-compatible storage
- **CDN**: CloudFront / Cloudflare

</td>
</tr>
</table>

---

## Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL 15+
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/teamops.git
cd teamops
```

2. **Install dependencies**

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. **Environment Configuration**

Create `.env` files in both `backend` and `frontend` directories:

**Backend `.env`:**
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/teamops"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
JWT_EXPIRES_IN="1d"
JWT_REFRESH_SECRET="your-refresh-token-secret"
JWT_REFRESH_EXPIRES_IN="7d"

# Server
PORT=3000
NODE_ENV="development"

# CORS
CORS_ORIGIN="http://localhost:5173"

# Rate Limiting
RATE_LIMIT_TTL=60
RATE_LIMIT_MAX=100
```

**Frontend `.env`:**
```env
VITE_API_URL="http://localhost:3000/api"
VITE_WS_URL="ws://localhost:3000"
```

4. **Database Setup**

```bash
cd backend

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

5. **Start Development Servers**

```bash
# Terminal 1 - Backend
cd backend
npm run start:dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

6. **Access the Application**

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000/api`
- API Documentation: `http://localhost:3000/api/docs`

### Docker Quick Start (Alternative)

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

---

## Project Structure

```
teamops/
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/              # Authentication & authorization
│   │   │   ├── users/             # User management
│   │   │   ├── projects/          # Project/team management
│   │   │   ├── incidents/         # Incident lifecycle
│   │   │   ├── erm/               # Enterprise risk management
│   │   │   ├── security/          # Suspicious activity detection
│   │   │   ├── audit/             # Audit logging
│   │   │   └── firewall/          # Rule engine & blocking
│   │   ├── common/
│   │   │   ├── decorators/        # Custom decorators
│   │   │   ├── guards/            # Auth guards
│   │   │   ├── filters/           # Exception filters
│   │   │   ├── interceptors/      # Request/response interceptors
│   │   │   └── pipes/             # Validation pipes
│   │   ├── config/                # Configuration modules
│   │   ├── database/              # Database utilities
│   │   └── main.ts                # Application entry point
│   ├── prisma/
│   │   ├── schema.prisma          # Database schema
│   │   ├── migrations/            # Migration files
│   │   └── seed.ts                # Database seeding
│   ├── test/                      # E2E tests
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                # Reusable UI components
│   │   │   ├── layout/            # Layout components
│   │   │   └── features/          # Feature-specific components
│   │   ├── pages/
│   │   │   ├── Dashboard/
│   │   │   ├── Incidents/
│   │   │   ├── RiskManagement/
│   │   │   ├── Security/
│   │   │   └── Audit/
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── services/              # API client services
│   │   ├── stores/                # State management
│   │   ├── utils/                 # Utility functions
│   │   ├── types/                 # TypeScript types
│   │   └── App.tsx
│   └── package.json
│
├── docs/                          # Additional documentation
│   ├── API.md                     # API reference
│   ├── DEPLOYMENT.md              # Deployment guide
│   └── CONTRIBUTING.md            # Contribution guidelines
│
├── docker-compose.yml
├── .github/
│   └── workflows/                 # CI/CD workflows
└── README.md
```

---

## API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| POST | `/api/auth/refresh` | Refresh access token | Yes (Refresh) |
| POST | `/api/auth/logout` | Logout user | Yes |
| GET | `/api/auth/me` | Get current user | Yes |

### Incident Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/incidents` | List all incidents | Yes |
| POST | `/api/incidents` | Create new incident | Yes |
| GET | `/api/incidents/:id` | Get incident details | Yes |
| PATCH | `/api/incidents/:id` | Update incident | Yes |
| DELETE | `/api/incidents/:id` | Delete incident | Yes (Admin) |
| POST | `/api/incidents/:id/assign` | Assign responder | Yes |
| POST | `/api/incidents/:id/resolve` | Mark as resolved | Yes |

### Risk Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/erm/risks` | List all risks | Yes |
| POST | `/api/erm/risks` | Create risk ticket | Yes |
| GET | `/api/erm/risks/:id` | Get risk details | Yes |
| PATCH | `/api/erm/risks/:id` | Update risk | Yes |
| POST | `/api/erm/risks/:id/link-incident` | Link to incident | Yes |
| GET | `/api/erm/matrix` | Get risk matrix visualization | Yes |

### Security & Audit

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/security/activities` | List suspicious activities | Yes (Security) |
| GET | `/api/audit/logs` | Query audit logs | Yes (Auditor) |
| POST | `/api/audit/export` | Export audit report | Yes (Auditor) |
| GET | `/api/firewall/rules` | List firewall rules | Yes (Admin) |
| POST | `/api/firewall/rules` | Create blocking rule | Yes (Admin) |

**Full API documentation available at**: `/api/docs` (Swagger UI)

---

## Security

TeamOps implements security best practices at every layer:

### Authentication & Authorization

- **JWT with Refresh Tokens**: Secure, stateless authentication with automatic token rotation
- **Password Hashing**: bcrypt with configurable salt rounds
- **Role-Based Access Control**: Granular permissions per endpoint
- **Session Invalidation**: Immediate logout across all devices

### Data Protection

- **SQL Injection Prevention**: Parameterized queries via Prisma ORM
- **XSS Protection**: Content Security Policy (CSP) headers
- **CSRF Protection**: SameSite cookies + custom tokens
- **Rate Limiting**: Configurable throttling per IP/user

### Infrastructure Security

- **Environment Variables**: Sensitive config never committed
- **HTTPS Only**: TLS 1.3 enforced in production
- **Security Headers**: Helmet.js middleware
- **Dependency Scanning**: Automated vulnerability checks

### Reporting Security Issues

Please report security vulnerabilities to **security@teamops.dev** (replace with your actual email). Do not open public issues for security concerns.

---

## Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit with conventional commits (`git commit -m 'feat: add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Code Style

- Use TypeScript strict mode
- Follow ESLint and Prettier configurations
- Write meaningful test cases
- Document public APIs with JSDoc

---

## Roadmap

### Phase 1: Core Foundation (in progress)

- [x] User authentication & RBAC
- [ ] Incident lifecycle management
- [ ] Basic ERM ticket system
- [ ] Audit logging infrastructure

### Phase 2: Enhanced Security

- [ ] Suspicious activity detection
- [ ] Basic firewall rule engine
- [ ] Advanced anomaly detection using ML
- [ ] Geo-blocking and reputation scoring
- [ ] Integration with threat intelligence feeds

### Phase 3: Integrations & Automation

- [ ] **Slack/Teams Integration**: Real-time incident notifications
- [ ] **Email Notifications**: Configurable alerting workflows
- [ ] **Webhook Support**: Outbound event streaming
- [ ] **ServiceNow Sync**: Bi-directional ticket syncing
- [ ] **PagerDuty Integration**: On-call schedule management

### Phase 4: Advanced Analytics

- [ ] **Custom Dashboards**: Role-based analytics views
- [ ] **Prometheus Metrics**: System health monitoring
- [ ] **Grafana Integration**: Visual metric exploration
- [ ] **Predictive Analytics**: ML-based incident forecasting
- [ ] **Compliance Reports**: SOC 2, ISO 27001 templates

### Phase 5: Enterprise Features

- [ ] **Multi-Tenancy**: Organization isolation
- [ ] **SSO Integration**: SAML/OAuth2 providers
- [ ] **Advanced RBAC**: Custom role builder
- [ ] **Data Residency**: Regional data storage
- [ ] **High Availability**: Multi-region deployment

### Phase 6: Developer Experience

- [ ] **Public API**: GraphQL endpoint
- [ ] **CLI Tool**: Command-line incident management
- [ ] **SDK Libraries**: JavaScript, Python, Go clients
- [ ] **Terraform Provider**: Infrastructure as code
- [ ] **GitHub Actions**: CI/CD integration

### Community Requested Features

- [ ] Mobile app (React Native)
- [ ] Dark mode support
- [ ] Export to Confluence/Notion
- [ ] Incident response playbooks
- [ ] Automated remediation workflows

**Want to influence the roadmap?** Open a discussion or vote on existing feature requests!

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Inspired by industry-leading tools: PagerDuty, Jira Service Management, ServiceNow
- UI components powered by [shadcn/ui](https://ui.shadcn.com/)
- Icon system from [Lucide](https://lucide.dev/)
- Community contributors and testers

---

## Support & Contact

- **Documentation**: [docs.teamops.dev](https://docs.teamops.dev) (replace with your actual URL)
- **Issue Tracker**: [GitHub Issues](https://github.com/yourusername/teamops/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/teamops/discussions)
- **Email**: support@teamops.dev (replace with your actual email)
- **Twitter**: [@TeamOpsHQ](https://twitter.com/teamopshq) (replace with your actual handle)

---

<div align="center">

**Built with ❤️ by the Keletso monyamane**

⭐ Star us on GitHub — it would be much apprecated!


</div>
