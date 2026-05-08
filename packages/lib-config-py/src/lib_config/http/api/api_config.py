from typing import Awaitable, Callable, Optional

from lib_shared.core.utils.dataclass.dataclass import Dataclass
from lib_shared.http.utils.constants import HTTP_METHOD
from lib_shared.http.utils.http_request.http_request import HttpRequest
from lib_shared.http.utils.http_response.http_response import HttpResponse

ApiHandlerModel = Callable[[HttpRequest], Awaitable[HttpResponse]]


@Dataclass()
class ApiEndpoint:
    method: HTTP_METHOD | list[HTTP_METHOD]
    pathname: str
    handler: ApiHandlerModel


@Dataclass()
class ApiConfig:
    routes: list[ApiEndpoint]
    prefix: Optional[str] = None
