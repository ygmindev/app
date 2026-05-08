from typing import Optional

from lib_shared.core.utils.dataclass.dataclass import Dataclass

from lib_config.http.api.api_config import ApiConfig


@Dataclass()
class ServerConfig:
    api: ApiConfig
    host: Optional[str] = "127.0.0.1"
    port: Optional[int | str] = 5000
