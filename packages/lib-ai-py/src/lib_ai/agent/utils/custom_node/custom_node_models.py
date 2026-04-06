# template version: 1.0.0


from lib_ai.agent.utils.agent_node.agent_node_models import AgentNodeModel, TState
from lib_ai.agent.utils.llm_message import LlmMessage


class CustomNodeModel(AgentNodeModel[TState]):
    async def handler(
        self,
        state: TState,
    ) -> list[LlmMessage]: ...
