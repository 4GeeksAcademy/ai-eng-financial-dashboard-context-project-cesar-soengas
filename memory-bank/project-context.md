# Project Context

> Quick reference for agents working on this project.

## One-liner

Financial metrics dashboard with React + TypeScript frontend and FastAPI backend, displaying KPIs and charts for business analytics.

## Key files to read first

| File | Why |
|---|---|
| `AGENTS.md` | Agent entry point — tells you where to find rules |
| `.agents/rules/coding-conventions.md` | Naming, imports, exports, styles |
| `.agents/rules/risk-guardrails.md` | 15 things that WILL break the project |
| `memory-bank/product-description.md` | What the product does |
| `memory-bank/tech-stack.md` | Technologies and versions |
| `memory-bank/current-status.md` | What's done and what's not |

## Architecture in 30 seconds

```
Frontend (React 19 + Vite 8)
  │  fetch("/api/metrics")
  ▼
Vite Proxy (/api → backend:8000)
  │
  ▼
Backend (Python 3.13 + FastAPI)
  │  generate_mock_movements(seed=42)
  ▼
Frontend receives raw FinancialMovement[]
  │  computeKPIs() → KPIMetrics
  │  computeMonthlyData() → MonthlyDataPoint[]
  ▼
Dashboard renders KPIs + Charts
```

## Critical rules (TL;DR)

1. **Never delete `mock-data.ts`** — it's reference data, not dead code
2. **Never edit `components/ui/`** — they're shadcn/ui generated
3. **Never change `generate_mock_movements()`** without updating tests (expects 360 items)
4. **Always use `@/` alias** for frontend imports
5. **Always use named exports** (except App.tsx)
6. **Always include `response_model`** in backend endpoints
7. **Keep types in sync** — `FinancialMovement` exists in both Python and TypeScript

## Common tasks

### Add a new KPI card
1. Add type to `frontend/src/lib/financial-types.ts`
2. Add computation to `frontend/src/lib/financial-utils.ts`
3. Add test to `frontend/src/lib/financial-utils.test.ts`
4. Add card to `frontend/src/components/dashboard/kpi-row.tsx`

### Add a new API endpoint
1. Add model to `backend/app/routes.py` (above endpoints)
2. Add helper function (above endpoints)
3. Add endpoint with `@router.get(...)` and `response_model`
4. Add test to `backend/tests/test_routes.py`

### Add a new chart
1. Create `frontend/src/components/dashboard/<chart-name>.tsx`
2. Use Recharts components (LineChart, Line, etc.)
3. Follow pattern from `income-outcome-chart.tsx`
4. Add to `frontend/src/App.tsx`

## Testing commands

```bash
# Backend
cd backend && pytest

# Frontend
cd frontend && npm run test

# Both (via Docker)
docker compose up --build
```

## Get help

- See `memory-bank/` for detailed documentation
- See `.agents/rules/` for coding conventions
- See `README.md` for project overview
