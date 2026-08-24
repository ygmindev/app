from typing import Any, AsyncIterable, Awaitable, Callable

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.http.utils.constants import HttpMethod
from lib_shared.http.utils.http_request.http_request import HttpRequest
from lib_shared.http.utils.http_response.http_response import HttpResponse

ApiHandlerModel = Callable[[HttpRequest], Awaitable[HttpResponse] | AsyncIterable[Any]]


class ApiEndpoint(BaseModel):
    method: HttpMethod | list[HttpMethod]
    pathname: str
    handler: ApiHandlerModel
    is_protected: bool = False


class ApiConfig(BaseModel):
    routes: list[ApiEndpoint]
    prefix: str | None = None
