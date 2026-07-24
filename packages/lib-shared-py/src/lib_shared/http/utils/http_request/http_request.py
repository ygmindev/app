from typing import Optional

from lib_model.user.user.user import User

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.http.utils.http_request.http_request_models import (
    HttpRequestModel,
    TType,
)


class HttpRequest(BaseModel, HttpRequestModel[TType]):
    body: Optional[TType] = Field(default=None)
    headers: Optional[dict] = Field(default=None)
    user: Optional[User] = Field(default=None)
