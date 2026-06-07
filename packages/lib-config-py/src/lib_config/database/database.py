from datetime import datetime

from lib_model.core.utils.database_entity.database_entity import DatabaseEntity
from lib_shared.core.utils.get_env import get_env
from pydantic import Field

from .database_models import DatabaseConfigModel


class ChatMessage(
    DatabaseEntity,
    name="chat_message",
):
    message: str
    timestamp: datetime = Field(
        default_factory=datetime.now,
    )


database_config = DatabaseConfigModel(
    database=get_env("SERVER_DB_MONGO_NAME") or "",
    resources=[ChatMessage],
    host=get_env("SERVER_DB_MONGO_URL") or "",
    password=get_env("SERVER_DB_MONGO_PASSWORD") or "",
    username=get_env("SERVER_DB_MONGO_USERNAME") or "",
    max_pool=10,
    min_pool=5,
    timeout=30_000,
)
