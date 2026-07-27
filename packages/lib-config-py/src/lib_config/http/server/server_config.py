from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_config.http.api.api_config import ApiConfig


class ServerConfig(BaseModel):
    api: ApiConfig
    host: str | None = "127.0.0.1"
    port: int | str | None = 5000
    ca_filename: str | None = None
    certificate_dir: str | None = None
    private_key_filename: str | None = None
    public_key_filename: str | None = None
