from lib_shared.core.utils.get_env import get_env

from lib_config.http.api.api_config_ai import api_config_ai
from lib_config.http.server.server_config import ServerConfig
from lib_config.http.server.server_config_base import server_config_base

server_config_ai = server_config_base.update(
    ServerConfig(
        api=api_config_ai,
        host=get_env("SERVER_APP_PYTHON_HOST"),
        port=get_env("SERVER_APP_PYTHON_PORT"),
    )
)
