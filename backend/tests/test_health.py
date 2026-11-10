from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_check() -> None:
    """Test the health check endpoint."""
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert data["application"] == "AetherWatch"
    assert data["version"] == "1.0.0"


def test_root() -> None:
    """Test the root API endpoint."""
    response = client.get("/api/v1/")
    assert response.status_code == 200
    data = response.json()
    assert "message" in data
    assert "AetherWatch" in data["message"]
