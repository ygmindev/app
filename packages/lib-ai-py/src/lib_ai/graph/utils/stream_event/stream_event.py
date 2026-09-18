# template version: 1.0.0

import json
from typing import Any

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from .constants import StreamEventType


class StreamEvent(BaseModel):
    type: StreamEventType = Field(default=StreamEventType.STATUS)
    node: str | None = Field(default=None)
    message: str | None = Field(default=None)
    progress: float | None = Field(default=None)
    data: dict[str, Any] | None = Field(default=None)

    def to_sse(self) -> str:
        return f"event: {self.type}\ndata: {json.dumps(self.model_dump())}\n\n"

    @classmethod
    def from_chunk(cls, data: Any) -> "StreamEvent | None":
        if isinstance(data, cls):
            return data
        if not isinstance(data, dict):
            return None
        event_type = data.get("type")
        if event_type not in StreamEventType:
            return None
        try:
            return cls.model_validate(data)
        except Exception:
            return None


def done_sse() -> str:
    return "event: done\ndata: {}\n\n"
