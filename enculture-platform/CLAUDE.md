# Enculture — Project Context

> This file is read by Claude Code automatically. It provides full context about Enculture so every AI-assisted session starts with deep understanding of the business, products, and technical direction.

## Company Overview

**Enculture** is an AI-powered HR technology platform built for the future of work. We help organizations understand, measure, and shape their culture, competencies, and leadership through data-driven intelligence.

- **Domain:** HR Tech / L&D / Organizational Development
- **Current Users:** ~3,000
- **Growth Target:** 500,000 users within 1–2 years
- **Team Size:** ~20 people
- **Headquarters:** India
- **Expansion:** Entering the US market (acquiring a Coach Certification company)

## Leadership

- **Aditya** — Business Head. 20+ years in HR/L&D/coaching/OD (first decade in BFSI as a Certified Financial Planner). Leads the full product and business strategy. Also leads Marketing for the parent group and spearheads US business expansion.
- **Technical Director** — Leads engineering and infrastructure decisions
- **Product Head** — Owns product roadmaps and feature prioritization
- **Marketing Head** — Drives go-to-market and growth strategy

## The Three Products

### 1. Culture Intelligence Application
- **What it does:** Uses AI to assess, analyze, and provide actionable insights about an organization's culture
- **Key value:** Moves culture from a subjective "feeling" to a measurable, data-backed intelligence system
- **Target users:** CHROs, OD heads, leadership teams, culture consultants

### 2. Competency Assessment
- **What it does:** AI-powered competency evaluation that maps employee capabilities against role requirements and organizational needs
- **Key value:** Replaces generic assessments with contextual, AI-driven competency mapping that adapts to each organization's framework
- **Target users:** HR teams, L&D professionals, talent management leaders

### 3. Multi-Rater (360-Degree Feedback)
- **What it does:** Comprehensive 360-degree feedback platform where employees receive structured feedback from managers, peers, direct reports, and stakeholders
- **Key value:** AI-enhanced analysis of feedback patterns, sentiment, and development areas — not just data collection but genuine insight generation
- **Target users:** HR teams, managers, coaches, individual employees

## Tech Stack

- **Frontend:** React, Next.js
- **Backend:** Node.js
- **Language:** TypeScript (preferred for all new code)
- **Styling:** Tailwind CSS (preferred)
- **Database:** (To be confirmed with tech team)
- **Deployment:** (To be confirmed with tech team)
- **Package Manager:** npm

## Architecture Principles

1. **Component-Based:** Build reusable UI components shared across all three products
2. **API-First:** Design backend APIs before building UIs — every feature starts as an API spec
3. **Shared Core:** Common functionality (auth, user management, analytics, AI engine) lives in a shared package
4. **Product Separation:** Each product is its own package with clear boundaries
5. **AI-Native:** AI is not a bolt-on — it is woven into the core of every feature
6. **Scale-Ready:** Every decision must consider the path from 3,000 → 500,000 users
7. **Mobile-Responsive:** All interfaces must work seamlessly on mobile devices

## Coding Standards

- **TypeScript** for all new code — strict mode enabled
- **Functional components** with React Hooks (no class components)
- **Named exports** preferred over default exports
- **Descriptive naming:** `calculateCompetencyScore()` not `calcScore()`
- **File naming:** kebab-case for files (`culture-dashboard.tsx`), PascalCase for components (`CultureDashboard`)
- **API routes:** RESTful, versioned (`/api/v1/assessments`)
- **Error handling:** Always use try-catch with meaningful error messages
- **Comments:** Explain "why", not "what" — code should be self-documenting
- **Testing:** Write tests for business logic and API endpoints

## Project Structure

```
enculture-platform/
├── CLAUDE.md                          # THIS FILE — AI context
├── README.md                          # Project overview for the team
├── package.json                       # Root package config
├── .gitignore                         # Git ignore rules
├── .vscode/                           # VS Code workspace settings
│   ├── settings.json
│   └── extensions.json
├── docs/                              # Documentation
│   ├── architecture/                  # System architecture docs
│   │   └── overview.md
│   ├── product-specs/                 # Product specifications
│   │   ├── culture-intelligence.md
│   │   ├── competency-assessment.md
│   │   └── multi-rater-360.md
│   └── decisions/                     # Architecture Decision Records
│       └── template.md
├── prototypes/                        # Quick experiments & prototypes
├── packages/                          # Product packages
│   ├── culture-intelligence/          # Culture Intelligence App
│   ├── competency-assessment/         # Competency Assessment
│   ├── multi-rater-360/               # Multi-Rater 360 Feedback
│   └── shared/                        # Shared components & utilities
└── scripts/                           # Build & utility scripts
```

## Workflow

This workspace follows a **business-led, AI-assisted development** model:

1. **Ideate** — Aditya describes features, user stories, or business problems in Claude Code
2. **Spec** — Claude Code generates product specs, architecture docs, and API designs in `/docs`
3. **Prototype** — Quick prototypes are built in `/prototypes` to validate ideas
4. **Build** — Production code goes into the appropriate `/packages` directory
5. **Review** — Code is pushed to GitHub for the tech team to review, refine, and deploy
6. **Iterate** — Feedback from the team and users drives the next cycle

## Key Business Context for AI

When generating code, specs, or architecture for Enculture, always consider:

- **HR domain expertise matters:** Use correct HR/L&D terminology (competency frameworks, 360 feedback, culture dimensions, psychometric principles)
- **Data sensitivity:** Employee assessment data is highly sensitive — always consider privacy, GDPR, and data protection
- **Multi-tenant:** The platform serves multiple organizations — every feature must be tenant-aware
- **Scalability:** Design for 500K users, not 3K — think about caching, pagination, async processing
- **AI integration:** Every product relies on AI — consider where LLMs, NLP, or ML models add value vs. where simpler logic suffices
- **India + US markets:** Support for multiple locales, time zones, and compliance frameworks
- **Enterprise readiness:** Large organizations need SSO, role-based access, audit trails, and admin controls
