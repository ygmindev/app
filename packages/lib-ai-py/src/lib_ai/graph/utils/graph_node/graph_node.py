# template version: 1.0.0


from typing import Any

from langgraph.config import get_stream_writer
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.streamable.streamable import Streamable
from lib_ai.graph.utils.stream_event.constants import StreamEventType
from lib_ai.graph.utils.stream_event.stream_event import StreamEvent


class GraphNode[TState: BaseModel](Streamable[BaseModel]):
    name: str = Field()
    descriptions: list[str] = Field(default_factory=list)

    def edges(self) -> tuple[str, str]:
        return (
            self.name,
            self.name,
        )

    def markup(self) -> str:
        return f'{self.name} ["{self.name}"]'

    def messages(self, state: TState) -> list[str] | None:
        return None

    def should_retry(self, state: TState) -> bool:
        return False

    def emit(
        self,
        *,
        type: StreamEventType = "status",
        message: str | None = None,
        progress: float | None = None,
        data: dict[str, Any] | None = None,
    ) -> None:
        try:
            writer = get_stream_writer()
        except RuntimeError:
            return
        writer(
            StreamEvent(
                type=type,
                node=self.name,
                message=message,
                progress=progress,
                data=data,
            )
        )
