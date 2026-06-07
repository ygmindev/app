from lib_shared.core.utils.get_env import get_env

from .redis_models import RedisConfigModel

redis_config = RedisConfigModel(
    url=get_env("SERVER_DB_REDIS_URL") or "",
    max_pool=10,
)
