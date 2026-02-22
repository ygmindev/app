from typing import Optional
from lib_config.http.models import ApiEndpointModel
from lib_shared.core.utils.base_model import BaseModel


class ApiConfigModel(BaseModel):
    routes: list[ApiEndpointModel]
    prefix: Optional[str] = None
