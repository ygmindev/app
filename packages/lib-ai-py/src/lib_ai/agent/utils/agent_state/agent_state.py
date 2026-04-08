from lib_shared.core.utils.base_model import BaseModel

from lib_ai.agent.utils.llm_message import LlmMessage

from .agent_state_models import AgentStateModel


class AgentState(BaseModel, AgentStateModel):
    messages: list[LlmMessage] = []
