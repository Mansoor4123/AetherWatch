# AetherWatch API Documentation

> **Version:** 1.0.0  
> **Base URL:** `http://localhost:8000/api/v1`

## Endpoints

### Health Check

```
GET /api/v1/health
```

Returns the application health status.

**Response** `200 OK`

```json
{
  "status": "healthy",
  "application": "AetherWatch",
  "version": "1.0.0"
}
```

### API Root

```
GET /api/v1/
```

Returns a welcome message with API information.

**Response** `200 OK`

```json
{
  "message": "Welcome to AetherWatch API",
  "version": "1.0.0",
  "docs": "/docs"
}
```

---

## Interactive Documentation

- **Swagger UI:** `http://localhost:8000/docs`
- **ReDoc:** `http://localhost:8000/redoc`

---

*Additional endpoints will be documented as modules are implemented.*
