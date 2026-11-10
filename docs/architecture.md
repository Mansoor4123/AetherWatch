# AetherWatch Architecture

## Overview

AetherWatch uses a three-layer architecture:

```
┌─────────────────────────────┐
│       React Frontend        │
│  (Vite + TypeScript + Fluent UI) │
└──────────────┬──────────────┘
               │ HTTP / REST
               ▼
┌─────────────────────────────┐
│       FastAPI Backend       │
│  (Pydantic + SQLAlchemy)    │
└──────────────┬──────────────┘
               │ SQL
               ▼
┌─────────────────────────────┐
│     PostgreSQL Database     │
└─────────────────────────────┘
```

## Layer Responsibilities

### Frontend (React + TypeScript)

- User interface and interaction
- Data visualization with Recharts
- Component library: Microsoft Fluent UI
- Communicates with backend via REST API
- Runs on port 5173 during development

### Backend (FastAPI + Python)

- REST API endpoints
- Business logic and data processing
- Request validation with Pydantic
- Database access via SQLAlchemy ORM
- Environment-based configuration
- Runs on port 8000

### Database (PostgreSQL)

- Persistent data storage
- Relational schema for clients, models, metrics, and alerts
- Managed via SQLAlchemy migrations (to be added in future modules)

## Communication Flow

1. The **frontend** sends HTTP requests to the **backend** API.
2. The **backend** processes requests, applies business logic, and queries the **database**.
3. The **backend** returns JSON responses to the **frontend**.
4. The **frontend** renders the data in the UI.

## Key Design Decisions

- **Separation of concerns**: Each layer has a single responsibility.
- **Environment-based configuration**: No hardcoded credentials; all secrets via `.env`.
- **API versioning**: All endpoints are prefixed with `/api/v1`.
- **CORS**: Configured to allow frontend-backend communication during development.
- **Modular backend structure**: Each domain (registry, monitoring, alerts, etc.) has its own directory for future expansion.
