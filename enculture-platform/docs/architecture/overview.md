# Enculture Platform — Architecture Overview

> This document captures the high-level system architecture. It is a living document — update as decisions are made.

## System Overview

Enculture is a multi-tenant, AI-native SaaS platform serving three products through a shared infrastructure layer.

```
┌─────────────────────────────────────────────────────────┐
│                    Client Applications                   │
│  Culture Intelligence │ Competency Assessment │ 360      │
├─────────────────────────────────────────────────────────┤
│                    Shared UI Components                  │
│  Design System │ Auth UI │ Dashboards │ Report Builder   │
├─────────────────────────────────────────────────────────┤
│                       API Gateway                        │
├─────────────────────────────────────────────────────────┤
│                    Backend Services                       │
│  Auth │ User Mgmt │ Org Mgmt │ AI Engine │ Analytics     │
├─────────────────────────────────────────────────────────┤
│                     Data Layer                           │
│  Primary DB │ Cache │ File Storage │ AI Model Store       │
└─────────────────────────────────────────────────────────┘
```

## Key Architectural Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Frontend Framework | Next.js (React) | SSR for performance, API routes, great DX |
| Backend Runtime | Node.js | Same language across stack, strong async support |
| Language | TypeScript | Type safety across the full stack |
| Styling | Tailwind CSS | Rapid UI development, consistent design |
| Architecture Pattern | Monorepo with shared packages | Code reuse across 3 products |
| Multi-tenancy | Tenant ID on every record | Simpler than DB-per-tenant at current scale |

## What Needs to Be Decided

- [ ] Primary database (PostgreSQL? MongoDB? PlanetScale?)
- [ ] Hosting / deployment (Vercel? AWS? Azure?)
- [ ] AI/LLM provider and integration pattern
- [ ] Authentication provider (NextAuth? Auth0? Clerk?)
- [ ] Real-time features approach (WebSockets? SSE? Polling?)
- [ ] File storage (S3? Cloudflare R2?)
- [ ] CI/CD pipeline

## Scale Considerations

Current: ~3,000 users → Target: 500,000 users

This 150x growth means:
- Database queries must be optimized with proper indexing
- API responses should be paginated by default
- Heavy computations (AI analysis, report generation) should be async/queue-based
- Static assets should be CDN-served
- Consider read replicas for database at scale
