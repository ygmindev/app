from typing import Any, AsyncIterable

from lib_shared.chat.utils.chat_service.chat_service import chat_service
from lib_shared.core.utils.get_item import get_item
from lib_shared.http.utils.constants import HTTP_METHOD
from lib_shared.http.utils.http_request.http_request import HttpRequest

from lib_config.http.api.api_config import ApiConfig, ApiEndpoint
from lib_config.http.api.api_config_base import api_config_base


async def ai_handler(req: HttpRequest) -> AsyncIterable[Any]:
    text = get_item(req.body, "text", default="") or ""
    chat_id = get_item(req.body, "chat._id", default="") or ""
    async for x in chat_service.stream(
        text,
        chat_id,
        user=req.user,
    ):
        yield x


api_config_ai = api_config_base.update(
    ApiConfig(
        prefix="api",
        routes=[
            ApiEndpoint(
                pathname="ai",
                method=HTTP_METHOD.POST,
                handler=ai_handler,
                is_protected=True,
            ),
        ],
    )
)
