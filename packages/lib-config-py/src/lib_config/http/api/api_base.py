from lib_config.http.api.api_models import ApiConfigModel
from lib_config.http.models import ApiEndpointModel
from lib_shared.http.utils.constants import HTTP_METHOD, HTTP_STATUS_CODE, PING
from lib_shared.http.utils.models import HttpRequestModel, HttpResponseModel


async def ping_handler(request: HttpRequestModel) -> HttpResponseModel:
    return HttpResponseModel(
        status_code=HTTP_STATUS_CODE.OK,
        body="success",
    )


api_config = ApiConfigModel(
    prefix="api",
    routes=[
        ApiEndpointModel(
            pathname=PING,
            method=HTTP_METHOD.GET,
            handler=ping_handler,
        ),
    ],
)
