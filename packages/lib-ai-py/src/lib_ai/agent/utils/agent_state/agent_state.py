from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.ai_message.ai_message import AIMessage

from .agent_state_models import AgentStateModel


class AgentState(
    BaseModel,
    AgentStateModel,
):
    messages: list[AIMessage] = Field(default_value=list)
