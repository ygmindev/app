import os
from typing import Any, Optional

from dotenv import load_dotenv

from lib_shared.core.utils.get_env.get_env_models import CastTypeModel, GetEnvModel
from lib_shared.path.utils.from_working import from_working

NODE_ENV = os.environ.get("NODE_ENV", "development")
load_dotenv(from_working(".env"))
load_dotenv(from_working(f".env.{NODE_ENV}"))


def _get_env(
    key: str,
    *,
    default: Optional[Any] = None,
    cast: Optional[CastTypeModel] = None,
    is_required: bool = False,
) -> Any:
    value = os.getenv(key)
    if value is None:
        if is_required:
            raise EnvironmentError(f"Missing required env var: {key}")
        return default
    return cast(value) if cast else value


get_env: GetEnvModel = _get_env
