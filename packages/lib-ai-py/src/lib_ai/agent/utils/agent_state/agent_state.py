from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.llm_message import LlmMessage

from .agent_state_models import AgentStateModel


class AgentState(BaseModel, AgentStateModel):
    session_id: str = ""
    messages: list[LlmMessage] = Field(default_value=list)
