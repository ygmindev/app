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
    messages: list[AIMessage] = Field(default_factory=list)
    delta: str | None = Field(default=None)
