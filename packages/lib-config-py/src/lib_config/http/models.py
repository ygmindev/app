from typing import Any, Awaitable, Callable
from lib_shared.core.utils.base_model import BaseModel
from lib_shared.http.utils.constants import HTTP_METHOD
from lib_shared.http.utils.models import HttpRequestModel, HttpResponseModel


ApiHandlerModel = Callable[[HttpRequestModel[Any]], Awaitable[HttpResponseModel[Any]]]


class ApiEndpointModel(BaseModel):
    method: HTTP_METHOD | list[HTTP_METHOD]
    pathname: str
    handler: ApiHandlerModel
