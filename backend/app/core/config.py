from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""

    APP_NAME: str = "AetherWatch"
    APP_VERSION: str = "1.0.0"
    APP_ENV: str = "development"
    API_PREFIX: str = "/api/v1"
    DATABASE_URL: str = "postgresql://aetherwatch:aetherwatch@localhost:5432/aetherwatch"
    DEBUG: bool = True

    model_config = {
        "env_file": ".env",
        "case_sensitive": True,
    }


settings = Settings()
