from lib_shared.core.utils.get_env import get_env

from lib_config.http.api.api_base import api_config
from lib_config.http.server.server_models import ServerConfigModel

server_config = ServerConfigModel(
    api=api_config,
    host=get_env("SERVER_APP_PYTHON_HOST"),
    port=get_env("SERVER_APP_PYTHON_PORT"),
)
