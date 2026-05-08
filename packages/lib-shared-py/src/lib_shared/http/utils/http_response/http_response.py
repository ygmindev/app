from typing import Optional

from lib_shared.core.utils.dataclass.dataclass import Dataclass
from lib_shared.http.utils.http_response.constants import HTTP_STATUS_CODE
from lib_shared.http.utils.http_response.http_response_models import (
    HttpResponseModel,
    TType,
)


@Dataclass()
class HttpResponse(HttpResponseModel[TType]):
    status_code: HTTP_STATUS_CODE
    body: Optional[TType]
