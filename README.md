# AetherWatch

**Predictive AI Model & Agent Reliability Platform**

AetherWatch is a centralized platform that monitors AI models and agents deployed across multiple client companies. It provides model registry, drift detection, predictive degradation forecasting, alert generation, and agent observability through an enterprise dashboard.

---

## Technology Stack

| Layer    | Technology                                      |
| -------- | ----------------------------------------------- |
| Frontend | React, TypeScript, Vite, Fluent UI, Recharts    |
| Backend  | Python, FastAPI, Pydantic, SQLAlchemy            |
| Database | PostgreSQL                                       |

---

## Prerequisites

- **Node.js** ≥ 20
- **Python** ≥ 3.11
- **PostgreSQL** 16 (or use Docker)

---

## Environment Configuration

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Edit `.env` and set your database credentials and any other overrides.

| Variable       | Description                          | Default                                                    |
| -------------- | ------------------------------------ | ---------------------------------------------------------- |
| `DATABASE_URL` | PostgreSQL connection string         | `postgresql://aetherwatch:aetherwatch@localhost:5432/aetherwatch` |
| `APP_ENV`      | Environment name                     | `development`                                              |
| `APP_NAME`     | Application name                     | `AetherWatch`                                              |
| `APP_VERSION`  | Application version                  | `1.0.0`                                                    |
| `API_PREFIX`   | API route prefix                     | `/api/v1`                                                  |

---

## Database Setup

Start PostgreSQL via Docker:

```bash
docker-compose up -d
```

Or use an existing PostgreSQL instance and update `DATABASE_URL` in `.env`.

---

## Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Run the Backend

```bash
cd backend
source venv/bin/activate
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`.

Interactive documentation: `http://localhost:8000/docs`

### Run Backend Tests

```bash
cd backend
source venv/bin/activate
pip install pytest httpx
python -m pytest tests/ -v
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

### Run the Frontend

```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## Health Check

Once the backend is running, test the health endpoint:

```bash
curl http://localhost:8000/api/v1/health
```

Expected response:

```json
{
  "status": "healthy",
  "application": "AetherWatch",
  "version": "1.0.0"
}
```

---

## Project Structure

```
AetherWatch/
├── frontend/          # React + TypeScript + Vite
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── layouts/
│       ├── charts/
│       ├── services/
│       ├── hooks/
│       └── types/
├── backend/           # FastAPI + SQLAlchemy
│   ├── app/
│   │   ├── api/       # Route definitions
│   │   ├── core/      # Configuration
│   │   ├── database/  # DB engine & session
│   │   ├── models/    # SQLAlchemy models
│   │   ├── schemas/   # Pydantic schemas
│   │   └── ...        # Future module directories
│   └── tests/
├── data/              # Data files
├── ml_artifacts/      # ML model artifacts
├── docs/              # Documentation
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## License

Internal project – not for public distribution.
