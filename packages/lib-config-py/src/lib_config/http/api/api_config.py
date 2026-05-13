from typing import AsyncIterable, Awaitable, Callable, Optional

from lib_shared.core.utils.dataclass.dataclass import Dataclass
from lib_shared.http.utils.constants import HTTP_METHOD
from lib_shared.http.utils.http_request.http_request import HttpRequest
from lib_shared.http.utils.http_response.http_response import HttpResponse
from lib_shared.http.utils.streaming_response.streaming_response import (
    StreamingResponse,
)

ApiResponseModel = HttpResponse | AsyncIterable[str]

ApiHandlerModel = Callable[[HttpRequest], Awaitable[ApiResponseModel]]


class ApiEndpoint(Dataclass):
    method: HTTP_METHOD | list[HTTP_METHOD]
    pathname: str
    handler: ApiHandlerModel


class ApiConfig(Dataclass):
    routes: list[ApiEndpoint]
    prefix: Optional[str] = None
