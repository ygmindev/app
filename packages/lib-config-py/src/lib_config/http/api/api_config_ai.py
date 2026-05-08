from lib_shared.http.utils.constants import HTTP_METHOD
from lib_shared.http.utils.http_request.http_request import HttpRequest
from lib_shared.http.utils.http_response.constants import HTTP_STATUS_CODE
from lib_shared.http.utils.http_response.http_response import HttpResponse

from lib_config.http.api.api_config import ApiConfig, ApiEndpoint
from lib_config.http.api.api_config_base import api_config_base


async def ai_handler(request: HttpRequest) -> HttpResponse:
    return HttpResponse(
        status_code=HTTP_STATUS_CODE.OK,
        body="ai",
    )


api_config_ai = api_config_base.update(
    ApiConfig(
        prefix="api",
        routes=[
            ApiEndpoint(
                pathname="ai",
                method=HTTP_METHOD.GET,
                handler=ai_handler,
            ),
        ],
    )
)
