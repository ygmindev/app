from typing import Optional

from lib_shared.core.utils.dataclass.dataclass import Dataclass
from lib_shared.http.utils.http_request.http_request_models import (
    HttpRequestModel,
    TType,
)


class HttpRequest(Dataclass, HttpRequestModel[TType]):
    body: Optional[TType] = None
    headers: Optional[dict] = None
