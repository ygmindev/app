from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.ai_message.ai_message import AIMessage


class AgentStateModel(BaseModel):
    messages: list[AIMessage] = Field(default_value=list)
    delta: str | None = Field(default=None)
