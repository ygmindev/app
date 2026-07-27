from lib_model.user.user.user import User

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.http.utils.http_request.http_request_models import (
    HttpRequestModel,
    TType,
)


class HttpRequest(BaseModel, HttpRequestModel[TType]):
    body: TType | None = Field(default=None)
    headers: dict | None = Field(default=None)
    user: User | None = Field(default=None)
