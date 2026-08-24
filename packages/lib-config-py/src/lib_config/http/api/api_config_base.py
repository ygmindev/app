from lib_shared.http.utils.constants import PING, HttpMethod
from lib_shared.http.utils.http_request.http_request import HttpRequest
from lib_shared.http.utils.http_response.constants import HttpStatusCode
from lib_shared.http.utils.http_response.http_response import HttpResponse

from lib_config.http.api.api_config import ApiConfig, ApiEndpoint


async def ping_handler(request: HttpRequest) -> HttpResponse:
    return HttpResponse(
        status_code=HttpStatusCode.OK,
        body="success",
    )


api_config_base = ApiConfig(
    prefix="api",
    routes=[
        ApiEndpoint(
            pathname=PING,
            method=HttpMethod.GET,
            handler=ping_handler,
        ),
    ],
)
