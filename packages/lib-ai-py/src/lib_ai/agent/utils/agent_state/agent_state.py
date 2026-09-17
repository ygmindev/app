from typing import Annotated, Any
from uuid import uuid4

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.ai_message.ai_message import AIMessage


def append_messages(
    prev: list[AIMessage] | None,
    new: list[AIMessage] | AIMessage | None,
) -> list[AIMessage]:
    left = list(prev or [])
    if new is None:
        return left
    right = new if isinstance(new, list) else [new]
    if not right:
        return left
    return left + right


class AgentState(BaseModel):
    messages: Annotated[list[AIMessage], append_messages] = Field(default_factory=list)
    delta: str | None = Field(default=None)
    thread_id: str = Field(default_factory=lambda: str(uuid4()))
    tool_round: int = Field(default=0)

    def event(
        self,
        *,
        delta: str | None = None,
        messages: list[AIMessage] | None = None,
        **kwargs: Any,
    ) -> "AgentState":
        updates: dict[str, Any] = {**kwargs}
        if delta is not None:
            updates["delta"] = delta
            updates.setdefault("messages", [])
        if messages is not None:
            updates["messages"] = messages
            updates.setdefault("delta", None)
        return self.clone(**updates)
