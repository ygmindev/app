from typing import Optional

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.http.utils.http_request.http_request_models import (
    HttpRequestModel,
    TType,
)


class HttpRequest(BaseModel, HttpRequestModel[TType]):
    body: Optional[TType] = None
    headers: Optional[dict] = None
