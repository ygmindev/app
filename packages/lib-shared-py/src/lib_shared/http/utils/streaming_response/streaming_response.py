from typing import AsyncIterable

from lib_shared.core.utils.dataclass.dataclass import Dataclass
from lib_shared.http.utils.streaming_response.streaming_response_models import (
    StreamingResponseModel,
    TType,
)


class StreamingResponse(Dataclass, StreamingResponseModel[TType]):
    body: AsyncIterable[TType]
    # media_type = ("text/event-stream",)
    # headers = (
    #     {
    #         "Cache-Control": "no-cache",
    #         "X-Accel-Buffering": "no",
    #         "Connection": "keep-alive",
    #     },
    # )
