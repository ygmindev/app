from typing import Optional

from lib_shared.core.utils.dataclass.dataclass import Dataclass

from lib_config.http.api.api_config import ApiConfig


class ServerConfig(Dataclass):
    api: ApiConfig
    host: Optional[str] = "127.0.0.1"
    port: Optional[int | str] = 5000
    ca_filename: Optional[str] = None
    certificate_dir: Optional[str] = None
    private_key_filename: Optional[str] = None
    public_key_filename: Optional[str] = None
