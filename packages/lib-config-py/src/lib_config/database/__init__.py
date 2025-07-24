from lib_shared.core.utils.get_env import get_env

from lib_config.database.database_models import DatabaseConfigModel

database_config = DatabaseConfigModel(
    database=get_env("SERVER_DB_MONGO_NAME"),
    entities=[],
    host=get_env("SERVER_DB_MONGO_URL"),
    password=get_env("SERVER_DB_MONGO_USERNAME"),
    username=get_env("SERVER_DB_MONGO_PASSWORD"),
)
