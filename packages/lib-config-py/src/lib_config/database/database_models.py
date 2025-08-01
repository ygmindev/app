from dataclasses import dataclass
from typing import Any, Optional


@dataclass
class DatabaseConfigModel:
    database: Optional[str]
    resources: list[Any]
    host: Optional[str]
    password: Optional[str]
    username: Optional[str]
