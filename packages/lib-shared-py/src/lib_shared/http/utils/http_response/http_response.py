from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.http.utils.http_response.constants import HTTP_STATUS_CODE
from lib_shared.http.utils.http_response.http_response_models import (
    HttpResponseModel,
    TType,
)


class HttpResponse(BaseModel, HttpResponseModel[TType]):
    status_code: HTTP_STATUS_CODE = Field()
    body: TType | None = Field(default=None)
