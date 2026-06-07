from lib_model.chat.chat.chat import Chat
from lib_shared.core.utils.get_env import get_env

from .database_models import DatabaseConfigModel

database_config = DatabaseConfigModel(
    database=get_env("SERVER_DB_MONGO_NAME") or "",
    resources=[Chat],
    host=get_env("SERVER_DB_MONGO_URL") or "",
    password=get_env("SERVER_DB_MONGO_PASSWORD") or "",
    username=get_env("SERVER_DB_MONGO_USERNAME") or "",
    max_pool=10,
    min_pool=5,
    timeout=30_000,
)
