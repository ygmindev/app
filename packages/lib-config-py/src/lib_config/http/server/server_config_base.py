from lib_shared.core.utils.get_env import get_env

# from lib_shared.path.utils.from_static import from_static
from lib_config.http.api.api_config_base import api_config_base
from lib_config.http.server.server_config import ServerConfig

server_config_base = ServerConfig(
    api=api_config_base,
    host=get_env("SERVER_APP_PYTHON_HOST"),
    port=get_env("SERVER_APP_PYTHON_PORT"),
    # ca_filename=get_env("SERVER_SSL_CA_FILENAME"),
    # certificate_dir=from_static("certificates"),
    # private_key_filename=get_env("SERVER_SSL_PRIVATE_KEY"),
    # public_key_filename=get_env("SERVER_SSL_PUBLIC_KEY"),
)
