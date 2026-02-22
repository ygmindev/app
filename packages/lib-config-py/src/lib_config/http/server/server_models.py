from typing import Optional

from lib_shared.core.utils.base_model import BaseModel

from lib_config.http.api.api_models import ApiConfigModel


class ServerConfigModel(BaseModel):
    api: ApiConfigModel
    host: Optional[str] = "127.0.0.1"
    port: Optional[int | str] = 5000
